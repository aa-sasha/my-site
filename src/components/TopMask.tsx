/**
 * Mobile-only mask covering the Dynamic Island / status bar area.
 * Requires `viewport-fit=cover` in viewport meta so env(safe-area-inset-top)
 * resolves to the physical top inset.
 *
 * Solid at the very top (covers DI / status bar) → fades to transparent at the
 * bottom edge so there's no hard line cutting the page.
 */
export function TopMask() {
  return (
    <div
      aria-hidden
      className="sm:hidden pointer-events-none fixed inset-x-0 top-0 z-50"
      style={{
        // safe-area-inset-top covers the DI / status bar; +16px gives a soft
        // fade band beneath it.
        height: "calc(env(safe-area-inset-top) + 16px)",
        background:
          "linear-gradient(to bottom, var(--color-bg) 0%, var(--color-bg) calc(100% - 16px), rgba(248,250,252,0) 100%)",
      }}
    />
  );
}
