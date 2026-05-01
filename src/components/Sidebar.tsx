import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MagneticLink } from "./MagneticLink";

const SOCIAL_LINKS: Array<{ label: string; href: string }> = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sashanikitin/" },
  { label: "Telegram", href: "https://t.me/sashanikitin" },
  { label: "Mail", href: "mailto:sashanikitindesigner@gmail.com" },
];

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Work Experience" },
  { href: "#contacts", label: "Contacts" },
];

type StatusKind = "available" | "late" | "sleeping";

const STATUS_COLORS: Record<StatusKind, string> = {
  available: "#00CC39",
  late: "#FF8200",
  sleeping: "#FF0028",
};

interface TimeData {
  time: string;
  status: string;
  kind: StatusKind;
}

function computeTimeData(now: Date = new Date()): TimeData {
  const tz = "Asia/Yerevan";
  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false,
  }).format(now);
  const hour = parseInt(
    new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", hour12: false }).format(now),
    10,
  );

  const base = `${time} in Yerevan`;
  if (hour >= 9 && hour < 19) return { time: base, status: "Available for contact", kind: "available" };
  if (hour >= 19 && hour < 23) return { time: base, status: "Might miss messages, it's late", kind: "late" };
  return { time: base, status: "I am currently sleeping", kind: "sleeping" };
}

/**
 * Decorative status glyph — abstract noisy/blurred shapes from Figma export.
 * Color is driven by `currentColor`, so consumers control it via parent text color.
 */
function StatusGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g clipPath="url(#status-clip)">
        <g filter="url(#status-noise)">
          <path
            fill="currentColor"
            d="M60.7857 -24.4908C60.463 -24.3947 60.1402 -24.2986 59.8175 -24.2025C59.9282 -23.226 58.8193 -21.8515 57.8758 -20.8448C54.3161 -17.2436 49.6554 -14.4771 44.8587 -13.4112C41.5128 -12.4994 39.5137 -14.8751 36.4539 -17.4561C33.415 -20.0408 29.1526 -21.2957 25.2457 -21.2875L25.6979 -17.8155C29.913 -18.8925 34.0963 -20.1996 37.9568 -22.787C39.8604 -24.1128 41.7472 -25.8268 42.742 -28.3985C43.7255 -30.9862 43.3742 -33.9116 41.6983 -36.3089L39.3643 -33.2877C39.4515 -33.2509 39.5882 -33.1927 39.6814 -33.1529C45.1951 -30.7617 50.8218 -28.619 56.2756 -26.2376C57.5728 -25.6384 59.178 -24.9196 59.8175 -24.2025C60.1402 -24.2986 60.463 -24.3947 60.7857 -24.4908C59.878 -26.4102 58.5624 -27.0096 57.32 -28.0227C52.2649 -31.6179 46.8378 -34.3524 41.2315 -36.7849C41.1349 -36.8262 40.9986 -36.8842 40.8996 -36.926L34.0186 -39.829L38.5656 -33.9048C40.2917 -31.4612 38.967 -28.0363 35.7561 -25.9356C32.652 -23.7602 28.758 -22.3649 24.7935 -21.2286L25.2457 -17.7566C28.6869 -17.837 31.8595 -17.0519 34.5728 -14.9985C35.9683 -14.0109 37.2608 -12.6836 39.1319 -11.623C41.0031 -10.5053 43.5273 -10.3975 45.446 -10.976C50.8506 -12.5536 55.406 -15.78 58.9236 -19.9329C59.8135 -21.1982 61.0849 -22.3745 60.7857 -24.4908ZM59.8175 -24.2025L60.7857 -24.4908L59.8175 -24.2025Z"
          />
        </g>
        <g filter="url(#status-blur)">
          <path
            fill="currentColor"
            d="M10.9128 9.79039C11.354 10.5133 11.7953 11.2362 12.2365 11.9591C11.7113 12.3084 11.6171 12.2516 11.5277 12.3429C11.4487 12.4075 11.4183 12.4761 11.3905 12.5482C11.2483 13.0184 11.1682 13.7026 10.5612 13.5124C10.407 13.3754 10.1963 13.0727 10.0873 12.6245C9.97249 12.1798 10.0101 11.6912 10.037 11.4426C10.1118 10.9347 9.92646 11.083 9.60631 11.461C8.88219 12.2553 8.47144 14.2468 8.65313 15.3373L16.8066 12.1261C16.5356 11.3663 16.2775 10.5133 14.9328 9.35968C14.2621 8.8166 13.0371 8.10101 11.3527 8.10914C10.5275 8.11242 9.6964 8.31387 9.00443 8.63752C8.65837 8.79813 8.3456 8.98336 8.05103 9.19579C7.90125 9.30405 7.75891 9.41734 7.61703 9.54216C7.53968 9.61046 7.47227 9.67265 7.38956 9.75381C7.35521 9.78748 7.30463 9.83852 7.26034 9.88517C7.23954 9.90705 7.21447 9.93365 7.1799 9.97162C7.14745 10.0078 7.12699 10.0286 7.03634 10.1362L15.7187 14.2892C15.7188 14.2901 15.7255 14.2582 15.7288 14.2423C15.8398 13.7107 15.2 12.9736 13.8106 12.1594C13.6361 12.0606 13.4507 11.9606 13.2445 11.8791C13.1407 11.8391 13.0326 11.8039 12.9057 11.7898C12.7526 11.786 12.7059 11.7736 12.2365 11.9591C11.7953 11.2362 11.354 10.5133 10.9128 9.79039C10.6393 9.89042 10.4989 9.9796 10.3814 10.0285C10.2579 10.0918 10.1775 10.1112 10.0869 10.1492C9.91983 10.2042 9.77503 10.2448 9.6371 10.2818C9.36467 10.3503 9.12088 10.4082 8.89246 10.4654C7.08683 10.9104 6.16438 11.472 6.00063 12.2388C5.99444 12.2689 5.98814 12.3003 5.97921 12.3463L14.6616 16.4993C14.5731 16.6043 14.5593 16.6175 14.5311 16.649C14.5022 16.6808 14.4821 16.7194C14.4656 16.7194C14.4305 16.7564 14.3922 16.7949 14.3667 16.8199C14.3053 16.88 14.2573 16.9241 14.2029 16.972C14.1033 17.0594 14.0061 17.1364 13.9037 17.21C13.7025 17.3543 13.4885 17.4804 13.2464 17.5917C12.7636 17.8161 12.1596 17.9615 11.5658 17.96C10.3439 17.9563 9.56578 17.4398 9.26287 17.1657C8.93581 16.8652 8.89627 16.6971 8.90558 16.6089C8.92173 16.5211 9.01011 16.5074 9.12291 16.5302L17.2763 13.319C17.2423 13.5057 17.2008 13.8081 17.0724 14.1508C16.9511 14.4892 16.7137 14.8183 16.5763 14.842C16.4298 14.8559 16.472 14.6678 16.6844 13.7789C16.7787 13.3408 16.852 12.6491 16.7175 12.0036C16.59 11.354 16.3088 10.8575 16.0588 10.5434C14.8947 9.36728 13.8901 9.29933 12.7176 9.31655C12.5365 9.32596 12.3481 9.34076 12.1066 9.37339C11.8583 9.43585 11.5849 9.35785 10.9128 9.79039ZM12.2365 11.9591L10.9128 9.79039L12.2365 11.9591Z"
          />
        </g>
      </g>
      <defs>
        <filter id="status-noise" x="-19.3467" y="-44.939" width="132.367" height="74.4492" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feTurbulence type="fractalNoise" baseFrequency="65.333335876464844 65.333335876464844" stitchTiles="stitch" numOctaves={3} result="noise" seed={3458} />
          <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
          <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
          <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
          <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
          <feMerge result="effect1_noise">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
        </filter>
        <filter id="status-blur" x="0.172349" y="2.30174" width="22.9112" height="21.4654" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.90357" result="effect1_foregroundBlur" />
        </filter>
        <clipPath id="status-clip">
          <rect width="24" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Sidebar() {
  const [timeData, setTimeData] = useState<TimeData>(() => computeTimeData());

  useEffect(() => {
    // Align next tick to the start of the next wall-clock minute, then continue
    // every 60s. Otherwise the displayed minute can drift by up to 59 seconds.
    let interval: ReturnType<typeof setInterval> | undefined;
    const msToNextMinute = 60_000 - (Date.now() % 60_000);
    const timeout = setTimeout(() => {
      setTimeData(computeTimeData());
      interval = setInterval(() => setTimeData(computeTimeData()), 60_000);
    }, msToNextMinute);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[350px] p-8 lg:p-12 flex flex-col gap-12 lg:justify-between border-r border-black/10 bg-white/40 backdrop-blur-2xl shadow-[4px_0_24px_rgba(0,126,255,0.05)] z-40"
    >
      {/* Top Status */}
      <div className="flex flex-col gap-3 font-mono text-sm tracking-wide">
        <div className="text-ink font-bold">{timeData.time}</div>
        <div className="flex items-center gap-2 text-ink/60 text-xs uppercase tracking-widest font-semibold">
          <span style={{ color: STATUS_COLORS[timeData.kind] }} className="inline-flex">
            <StatusGlyph />
          </span>
          {timeData.status}
        </div>
      </div>

      {/* Profile Info — clicking scrolls back to the top */}
      <div className="flex flex-col gap-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group block text-left -m-2 p-2 rounded-[1.25rem] hover:bg-black/5 transition-colors"
          aria-label="Scroll to top"
        >
          <p className="text-2xl font-black text-ink tracking-tight uppercase group-hover:text-primary transition-colors">Sasha Nikitin</p>
          <p className="text-primary mt-2 font-mono text-sm font-bold tracking-widest uppercase">Product Designer</p>
        </a>
      </div>

      <div className="lg:flex-1 flex flex-col lg:justify-center gap-12">
        {/* Navigation — card-styled to match project cards */}
        <nav className="flex flex-col w-full bg-white/70 backdrop-blur-md rounded-[1.25rem] border border-white shadow-[0_12px_40px_rgba(0,126,255,0.1),_inset_0_1px_0_rgba(255,255,255,1)] px-5 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-4 text-ink/70 hover:text-primary transition-colors flex justify-between items-center group font-mono text-xs uppercase tracking-widest font-semibold overflow-hidden"
            >
              <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                {link.label}
              </span>
              <span className="text-primary inline-block transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
            </a>
          ))}
        </nav>

        {/* External Links */}
        <div className="flex flex-col w-full">
          <h3 className="font-mono text-[10px] text-ink/40 font-bold uppercase tracking-widest mb-4">Network</h3>
          <div className="flex flex-col gap-3">
            {SOCIAL_LINKS.filter((l) => l.href).map((l) => {
              const external = !l.href.startsWith("mailto:");
              return (
                <a
                  key={l.label}
                  href={l.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 text-ink/70 hover:text-primary transition-colors font-mono text-xs uppercase tracking-widest font-semibold"
                >
                  {l.label}
                  <span className="text-primary inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* CV Button */}
      <div className="lg:mt-auto">
        <MagneticLink
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          strength={0.3}
          className="group flex w-full items-center justify-center gap-2 bg-primary text-white px-6 py-4 rounded-[1.25rem] font-black text-sm uppercase tracking-widest shadow-[0_8px_20px_rgba(0,126,255,0.3),_inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_25px_rgba(0,126,255,0.5),_inset_0_2px_4px_rgba(255,255,255,0.6)] transition-shadow"
        >
          Download CV
          <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-1">
            ↓
          </span>
        </MagneticLink>
      </div>
    </motion.aside>
  );
}
