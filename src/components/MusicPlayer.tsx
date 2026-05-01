import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const TRACK_SRC = "/sasha.mp3";
const TRACK_TITLE = "Ambient by Sasha";
const DEFAULT_VOLUME = 0.1;
const STORAGE_KEY = "sn:music:state";

interface PersistedState {
  playing: boolean;
  /** True once the user has explicitly paused via the widget. After that,
   *  the "click anywhere to start" behavior is permanently disabled and the
   *  widget button is the only way to start the track again. */
  userDisabled: boolean;
}

const DEFAULT_STATE: PersistedState = { playing: false, userDisabled: false };

function loadState(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(state: PersistedState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

/**
 * Floating ambient-music widget. Lives outside the router so the track keeps
 * playing across page navigations.
 *
 * UX (cribbed from perfectworld.com):
 *   1. First visit: any click on the page starts the track (one-shot
 *      gesture-bound autoplay that satisfies browser autoplay policy).
 *   2. After the user pauses via the widget: auto-on-click is disabled
 *      forever — only the widget button can restart the track.
 *   3. Across reloads: tries to resume the previous play state. If the
 *      browser blocks autoplay, falls back to (1) or (2) accordingly.
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const userDisabledRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = DEFAULT_VOLUME;
    audio.loop = true;

    const state = loadState();
    userDisabledRef.current = state.userDisabled;

    // Single AbortController unwinds every listener on cleanup.
    const ac = new AbortController();
    const { signal } = ac;

    audio.addEventListener("play", () => {
      setIsPlaying(true);
      saveState({ playing: true, userDisabled: userDisabledRef.current });
    }, { signal });

    audio.addEventListener("pause", () => {
      setIsPlaying(false);
      saveState({ playing: false, userDisabled: userDisabledRef.current });
    }, { signal });

    // Try immediate resume if previously playing. Most browsers will block
    // this without a fresh user gesture; the click handler below picks up
    // the next interaction and retries.
    if (state.playing && !state.userDisabled) {
      audio.play().catch(() => { /* will retry on first click */ });
    }

    // First-click-anywhere autoplay trigger.
    if (!state.userDisabled) {
      const onFirstClick = (e: PointerEvent) => {
        // Ignore clicks on the widget itself — `toggle` handles those.
        if (widgetRef.current && e.target instanceof Node && widgetRef.current.contains(e.target)) {
          return;
        }
        audio.play().catch(() => { /* still blocked, give up silently */ });
        document.removeEventListener("pointerdown", onFirstClick);
      };
      document.addEventListener("pointerdown", onFirstClick, { signal });
    }

    return () => ac.abort();
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => { /* user gesture, should not fail */ });
    } else {
      // Explicit user pause — disable auto-on-click for all future visits.
      userDisabledRef.current = true;
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={TRACK_SRC} preload="metadata" />

      <motion.div
        ref={widgetRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 right-6 z-[60]"
      >
        <button
          type="button"
          onClick={toggle}
          aria-label={isPlaying ? "Pause ambient music" : "Play ambient music"}
          aria-pressed={isPlaying}
          title={TRACK_TITLE}
          className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_30px_rgba(0,126,255,0.2),_inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_12px_40px_rgba(0,126,255,0.35),_inset_0_1px_0_rgba(255,255,255,1)] transition-shadow text-primary"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
          {isPlaying && <PlayingRing />}
        </button>
      </motion.div>
    </>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path d="M3 1.5v11l10-5.5L3 1.5z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" aria-hidden>
      <rect x="0" y="1" width="4" height="12" rx="1" />
      <rect x="8" y="1" width="4" height="12" rx="1" />
    </svg>
  );
}

/** Pulsing ring around the button while audio is playing. */
function PlayingRing() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-full"
      style={{
        boxShadow: "0 0 0 0 rgba(0, 126, 255, 0.4)",
        animation: "music-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }}
    />
  );
}
