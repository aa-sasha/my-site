import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import { MotionConfig } from "motion/react";
import { Suspense, lazy, useEffect } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { MusicPlayer } from "./components/MusicPlayer";

// Lazy: CaseStudy is only needed when a project tile is clicked.
// Keeps the home-page initial bundle smaller.
const CaseStudy = lazy(() =>
  import("./pages/CaseStudy").then((m) => ({ default: m.CaseStudy }))
);

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/case/:slug", element: <CaseStudy /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" }
);

/** Mobile only: scrolls the fixed background up with the page for the first
 * 140px, then locks it in place. The offset is sticky — once it reaches a
 * value it doesn't go back unless the user scrolls all the way to the top.
 * That way scrolling up mid-page doesn't reset the bg position. */
function useScrollingBackground() {
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    if (!mq.matches) return;
    // Respect reduced-motion preference — scroll-driven bg shifts can be
    // disorienting for users sensitive to motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const LOCK = 140;
    let currentOffset = 0;
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      if (y <= 0) {
        // back at the top — release the bg so it returns to its origin
        currentOffset = 0;
      } else {
        // ratchet up only: never decrease until y hits 0
        currentOffset = Math.max(currentOffset, Math.min(y, LOCK));
      }
      document.documentElement.style.setProperty("--bg-offset", `-${currentOffset}px`);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.style.removeProperty("--bg-offset");
    };
  }, []);
}

export default function App() {
  useScrollingBackground();
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
      {/* Music player lives outside the router so the track survives navigation */}
      <MusicPlayer />
    </MotionConfig>
  );
}
