"""Deploy site_v3 to the VPS.

Reads SSH credentials from Credentials.env (gitignored). Builds the Vite
project, uploads `dist/` to the remote path, and reloads Nginx.

Required env vars (Credentials.env or process env):
    SSH_HOST           remote host (e.g. 163.245.215.82)
    SSH_USER           ssh user (e.g. root)

Auth — pick ONE:
    SSH_KEY_PATH       path to private key (preferred)
    SSH_PASSWORD       password fallback (avoid)

Optional:
    REMOTE_PATH        remote dir, default /var/www/sasha-nikitin
    SSH_PORT           ssh port, default 22
"""

import os
import subprocess
import sys
from pathlib import Path

import paramiko


SCRIPT_DIR = Path(__file__).resolve().parent
DIST_DIR = SCRIPT_DIR / "dist"
CREDENTIALS_FILE = SCRIPT_DIR / "Credentials.env"


def load_env_file(path: Path) -> None:
    if not path.exists():
        return
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def require_env(name: str) -> str:
    value = os.environ.get(name)
    if not value:
        sys.exit(f"Missing required env var: {name} (set it in {CREDENTIALS_FILE.name})")
    return value


def run_build() -> None:
    print("Building project (npm run build)...")
    npm = "npm.cmd" if os.name == "nt" else "npm"
    result = subprocess.run([npm, "run", "build"], cwd=SCRIPT_DIR)
    if result.returncode != 0:
        sys.exit(f"Build failed (exit {result.returncode})")
    if not DIST_DIR.exists():
        sys.exit(f"Build finished but {DIST_DIR} is missing")


def open_ssh() -> paramiko.SSHClient:
    host = require_env("SSH_HOST")
    user = require_env("SSH_USER")
    port = int(os.environ.get("SSH_PORT", "22"))
    key_path = os.environ.get("SSH_KEY_PATH")
    password = os.environ.get("SSH_PASSWORD")

    if not key_path and not password:
        sys.exit("Provide SSH_KEY_PATH or SSH_PASSWORD")

    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    if key_path:
        ssh.connect(host, port=port, username=user, key_filename=key_path)
    else:
        ssh.connect(host, port=port, username=user, password=password)
    return ssh


def run_remote(ssh: paramiko.SSHClient, command: str) -> None:
    stdin, stdout, stderr = ssh.exec_command(command)
    exit_code = stdout.channel.recv_exit_status()
    err = stderr.read().decode("utf-8", errors="replace").strip()
    out = stdout.read().decode("utf-8", errors="replace").strip()
    if exit_code != 0:
        if out:
            print(out)
        sys.exit(f"Remote command failed (exit {exit_code}): {command}\n{err}")
    if err:
        print(f"[stderr] {err}")


def upload_dir(sftp: paramiko.SFTPClient, local_dir: Path, remote_dir: str) -> None:
    for entry in local_dir.iterdir():
        remote_item = f"{remote_dir}/{entry.name}"
        if entry.is_file():
            sftp.put(str(entry), remote_item)
        else:
            try:
                sftp.mkdir(remote_item)
            except IOError:
                pass
            upload_dir(sftp, entry, remote_item)


NGINX_CONF = """server {
    listen 80 default_server;
    server_name sasha-nikitin.su www.sasha-nikitin.su;
    root /var/www/sasha-nikitin;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
"""


def upload_nginx_conf(ssh: paramiko.SSHClient, sftp: paramiko.SFTPClient) -> None:
    print("Uploading nginx config...")
    tmp_path = "/tmp/sasha-nikitin.su.conf"
    with sftp.open(tmp_path, "w") as fh:
        fh.write(NGINX_CONF)
    run_remote(ssh, f"mv {tmp_path} /etc/nginx/sites-available/sasha-nikitin.su")
    run_remote(ssh, "nginx -t")
    run_remote(ssh, "systemctl reload nginx")


def deploy() -> None:
    load_env_file(CREDENTIALS_FILE)
    remote_path = os.environ.get("REMOTE_PATH", "/var/www/sasha-nikitin")

    run_build()

    ssh = open_ssh()
    try:
        print(f"Preparing remote {remote_path}...")
        run_remote(
            ssh,
            f"mkdir -p {remote_path} && find {remote_path} -mindepth 1 -maxdepth 1 -exec rm -rf {{}} +",
        )

        sftp = ssh.open_sftp()
        try:
            print(f"Uploading {DIST_DIR} -> {remote_path}...")
            upload_dir(sftp, DIST_DIR, remote_path)
            upload_nginx_conf(ssh, sftp)
        finally:
            sftp.close()
    finally:
        ssh.close()

    print("Deployment complete.")


if __name__ == "__main__":
    deploy()
