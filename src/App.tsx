import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";
import { MusicPlayer } from "./components/MusicPlayer";

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
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
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" }
);

/** Scrolls the fixed background up with the page for the first 140px,
 * then locks it in place. Reads window.scrollY in rAF to avoid jank.
 * The body::before pseudo-element reads --bg-offset and applies translateY. */
function useScrollingBackground() {
  useEffect(() => {
    const LOCK = 140;
    let raf = 0;
    const update = () => {
      const offset = Math.min(window.scrollY, LOCK);
      document.documentElement.style.setProperty("--bg-offset", `-${offset}px`);
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
