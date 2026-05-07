/**
 * Mobile-only fade-mask along the top of the viewport.
 * Solid at the very top → fades to transparent.
 * Hides content under Dynamic Island / status bar at scroll time.
 */
export function TopMask() {
  return (
    <div
      aria-hidden
      className="sm:hidden pointer-events-none fixed inset-x-0 top-0 z-50 h-20"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg) 0%, var(--color-bg) 60%, rgba(248,250,252,0) 100%)",
      }}
    />
  );
}
