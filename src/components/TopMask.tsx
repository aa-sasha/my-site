/**
 * Mobile-only top mask. Covers Dynamic Island, status bar AND Safari URL bar.
 * Uses backdrop-blur (like iOS native nav bars) so content scrolling beneath it
 * dissolves into a blur instead of a hard solid block.
 *
 * Requires viewport-fit=cover so env(safe-area-inset-top) gives the physical
 * top inset (DI / status bar). Add ~80px on top to cover the Safari URL bar.
 */
export function TopMask() {
  // Soft fade at the bottom so the mask doesn't end with a hard line.
  const fade = "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)";
  return (
    <div
      aria-hidden
      className="sm:hidden pointer-events-none fixed inset-x-0 top-0 z-50"
      style={{
        height: "calc(env(safe-area-inset-top) + 80px)",
        backdropFilter: "blur(20px) saturate(140%)",
        WebkitBackdropFilter: "blur(20px) saturate(140%)",
        backgroundColor: "rgba(248, 250, 252, 0.55)",
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    />
  );
}
