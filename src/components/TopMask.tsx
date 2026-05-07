/**
 * Mobile-only top mask. Covers Dynamic Island, status bar AND Safari URL bar.
 * Frosted-glass: backdrop-blur + dense bg overlay so text scrolling beneath
 * is fully obscured (a translucent overlay alone wasn't enough — Safari URL
 * bar's own translucency let content show through).
 *
 * Requires viewport-fit=cover so env(safe-area-inset-top) gives the physical
 * top inset; +80px covers the URL bar area too.
 */
export function TopMask() {
  // Soft fade only at the very bottom edge — the rest must be opaque enough
  // to fully hide content underneath.
  const fade = "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)";
  return (
    <div
      aria-hidden
      className="sm:hidden pointer-events-none fixed inset-x-0 top-0 z-50"
      style={{
        height: "calc(env(safe-area-inset-top) + 80px)",
        backdropFilter: "blur(24px) saturate(140%)",
        WebkitBackdropFilter: "blur(24px) saturate(140%)",
        backgroundColor: "rgba(248, 250, 252, 0.85)",
        maskImage: fade,
        WebkitMaskImage: fade,
      }}
    />
  );
}
