import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center font-mono">
      <p className="text-sm text-primary font-bold tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="text-4xl md:text-6xl font-black text-ink uppercase tracking-tighter font-sans mb-6">
        Page not found
      </h1>
      <p className="text-ink/70 max-w-md mb-10">
        The link is broken or the page has moved.
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-primary hover:text-ink transition-colors"
      >
        <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1">
          ←
        </span>
        Back home
      </Link>
    </div>
  );
}
