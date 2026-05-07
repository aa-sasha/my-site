/**
 * Mobile-only top mask. Solid bg covering Dynamic Island, status bar, and the
 * Safari URL bar zone — content scrolling under it gets fully clipped.
 *
 * `max(env(...), 60px)` gives a sane fallback for browsers that don't honor
 * viewport-fit=cover (e.g. Telegram's in-app webview).
 */
export function TopMask() {
  return (
    <div
      aria-hidden
      className="sm:hidden pointer-events-none fixed inset-x-0 top-0 z-50"
      style={{
        height: "calc(max(env(safe-area-inset-top), 60px) + 80px)",
        backgroundColor: "var(--color-bg)",
      }}
    />
  );
}
