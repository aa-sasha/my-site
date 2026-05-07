/**
 * Mobile-only top mask. Solid bg covering Dynamic Island, status bar, and the
 * Safari URL bar zone — content scrolling under it gets fully clipped.
 *
 * Fixed height (no env() math) so it works the same in Safari, Telegram's
 * in-app webview, and any other browser that may not honor viewport-fit=cover.
 * 110px covers status bar (47-59px) + URL bar collapsed/partial (~50px).
 */
export function TopMask() {
  return (
    <div
      aria-hidden
      className="sm:hidden pointer-events-none fixed inset-x-0 top-0 z-50 h-[110px]"
      style={{ backgroundColor: "var(--color-bg)" }}
    />
  );
}
