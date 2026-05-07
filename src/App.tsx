import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Outlet,
} from "react-router-dom";
import { MotionConfig } from "motion/react";
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

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
      {/* Music player lives outside the router so the track survives navigation */}
      <MusicPlayer />
    </MotionConfig>
  );
}
