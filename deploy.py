import paramiko
import os

def deploy():
    host = '163.245.215.82'
    user = 'root'
    pwd = 'K7#5cP!S'
    remote_path = '/var/www/sasha-nikitin/beta'

    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, username=user, password=pwd)

    ssh.exec_command(f'rm -rf {remote_path}')
    ssh.exec_command(f'mkdir -p {remote_path}')

    sftp = ssh.open_sftp()
    
    def put_dir(local_dir, remote_dir):
        for item in os.listdir(local_dir):
            local_path = os.path.join(local_dir, item)
            remote_item_path = remote_dir + '/' + item
            if os.path.isfile(local_path):
                sftp.put(local_path, remote_item_path)
            elif os.path.isdir(local_path):
                try:
                    sftp.mkdir(remote_item_path)
                except IOError:
                    pass
                put_dir(local_path, remote_item_path)

    print("Uploading files...")
    put_dir('D:\\_AI\\sasha_vpn\\SITE\\dist', remote_path)

    print("Updating Nginx...")
    nginx_conf = """server {
    listen 80 default_server;
    server_name sasha-nikitin.su www.sasha-nikitin.su;
    root /var/www/sasha-nikitin;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ^~ /beta {
        alias /var/www/sasha-nikitin/beta;
        try_files $uri $uri/ /beta/index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}"""
    
    stdin, stdout, stderr = ssh.exec_command('cat > /etc/nginx/sites-available/sasha-nikitin.su << "EOF"\n' + nginx_conf + '\nEOF')
    stdout.read()
    
    ssh.exec_command('systemctl reload nginx')
    
    sftp.close()
    ssh.close()
    print("Deployment complete.")

if __name__ == '__main__':
    deploy()
