export interface ProjectSection {
  title: string;
  content: string[];
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  company: string;
  period: string;
  platform: string;
  role: string;
  category: string;
  coverImage?: string;
  description: string;
  context: string[];
  sections: ProjectSection[];
  reflection: string[];
  results: string[];
}

export const projects: ProjectData[] = [
  {
    id: "01",
    slug: "war-robots",
    title: "War Robots — Social Systems, Monetization & Design Infrastructure",
    shortTitle: "War Robots",
    company: "MY.GAMES",
    period: "2022 — Present",
    platform: "iOS, Android, Steam",
    role: "Senior Product Designer",
    category: "Game Design & Systems",
    coverImage: "/2.webp",
    description: "Designed UX across most parts of the game's meta layer: social systems, monetization features, leaderboards and seasonal competition, progression, live events, and the team's design infrastructure for a AAA mobile mech shooter with 300M+ registered players.",
    context: [
      "War Robots is a AAA mobile mech shooter — one of the longest-running mobile games on the market. 300M+ registered players, $1B+ in lifetime revenue.",
      "Over 4 years on the project, I designed UX across most parts of the game's meta layer. Across the project, I owned 500+ design tasks — features ranging from large multi-month epics (Clans 2.0, the new Bank, the black market rework) down to dozens of smaller fixes, polish iterations, and live-ops support.",
      "I worked closely with game designers who defined mechanics, with the UI implementer building screens in Unity, and with the broader design team on shared systems."
    ],
    sections: [
      {
        title: "Scope of work",
        content: [
          "**Social systems** — Clans 2.0, the in-game friends system, friends in squads, clan leaderboards, clan quests, the recruitment flow.",
          "**Monetization** — the new Bank with refreshed wallet and purchase flows, black market rework, an audit and redesign of offer popups across the game, the Wheel of Fortune with super-game mechanic, special-edition gift offer styling.",
          "**Leaderboards and competition** — the multi-tier League leaderboard system, clan leaderboards, the returning-player hub, seasonal score popups.",
          "**Progression** — the new upgrade system, MK3 progression states, multi-slot equipment screens.",
          "**Live events and seasonal content** — Event 9.9.9, Event 8.8, Event 9.3, Anniversary events, mode rotation, mini-events, Tactical Shift mechanics, status effects.",
          "**Combat-adjacent meta UI** — 'any hangar' mode, in-match meta switching during matchmaking, post-combat screens, audio settings.",
          "**Team and content** — communication inbox rework, daily quest system migration, push notifications, ad button timer, pilot UX patterns, content icon production for new robots, weapons, drones, ships, titans, and pilots."
        ]
      },
      {
        title: "Featured project: Clans 2.0",
        content: [
          "Of all the work, Clans 2.0 was the largest single epic. The clan system had existed in the game for years, but it stopped giving players a sense of shared progress. Clans had become little more than a chat with a tag — there was no real collaborative depth.",
          "The team set a clear goal: reduce churn among clan players and give them meaningful daily shared objectives. I owned the full UX of the feature — from navigation architecture to every screen in the release.",
          "**Key design decisions:**",
          "The central structural question was navigation. The team was initially moving toward a tabbar with 6+ sections. I proposed a hybrid approach: 5 persistent tabs for daily navigation, plus contextual actions anchored to the Base screen. This freed up the tabbar and gave the Base a role as a hub — not just one more tab in a row.",
          "The Thorium economy needed a UX that made daily participation feel rewarding rather than obligatory. I designed the flows around earning the currency, contributing to the clan treasury, and collectively building and upgrading buildings. The goal was to make abandoning a clan feel costly: a player who quits leaves behind shared base progress that belonged to the whole team.",
          "Three building types — generators, stat buildings, and unlocks — needed distinct visual language and interaction patterns to communicate their different roles. I designed each type's screens to make the underlying logic legible at a glance, without forcing players to read explanatory text.",
          "The feature went through a full cycle: GDD → design → 150+ tasks in the epic → release in version 10.1."
        ]
      },
      {
        title: "Design system and infrastructure",
        content: [
          "In parallel with feature work, I rebuilt the team's design infrastructure. Over years of product growth, design files had expanded into 50+ disconnected documents with no consistent structure. UI consistency between features depended on institutional memory rather than documented standards.",
          "I audited the full architecture and over a few weeks consolidated 50+ files into 25 ordered, versioned modules with clear categorization: Meta UI, Battle UI, and a core Design System. I introduced a versioning and branching system, and wrote a file-handling checklist covering naming conventions, folder structure, and update rules for the whole team.",
          "In parallel, I built and systematized a library of 700+ icons and presented it to the game design team. The result: onboarding new designers became faster, and UI consistency between features stopped depending on who happened to remember what."
        ]
      }
    ],
    results: [
      "Based on community data and internal team discussions, clan players show significantly higher retention than solo players — the rework strengthened that social layer."
    ],
    reflection: [
      "Working long-term on a live product with a player base of this scale taught me that monetization isn't a separate layer on top of the product — it's embedded in every design decision. Small details — how onboarding is structured, how legible the economy is, how empty states feel — can meaningfully move retention and revenue.",
      "Working alongside game designers also taught me something specific: the boundary between UX and GD is thin, and knowing how to hold that line without conflict is a skill in itself."
    ]
  },
  {
    id: "02",
    slug: "noomeera",
    title: "Noomeera — Messenger & Privacy Systems",
    shortTitle: "Noomeera",
    company: "Noomeera",
    period: "2020–2022",
    platform: "iOS & Android (native)",
    role: "Product Designer",
    category: "Geo-social Network",
    coverImage: "/5.webp",
    description: "Designed the full communication layer, granular privacy matrix, and iterative feed improvements for a geo-social network, improving App Store rating from 3.6 to 4.5.",
    context: [
      "Noomeera is a geo-social network for iOS and Android — a platform where users are visible on a map and can interact with people nearby.",
      "When I joined, the app had a 3.6 rating in the App Store. Users complained about an underdeveloped messenger, weak privacy controls, and a feed that didn't feel engaging.",
      "For a geo-social network — where people are visible on a map by default — privacy wasn't a settings screen. It was a foundational trust condition. Without it, users simply wouldn't engage with the product.",
      "I ran CustDev sessions and analyzed App Store reviews to prioritize what to work on first. The signal was clear: privacy and messaging were the two biggest blockers to trust."
    ],
    sections: [
      {
        title: "Messenger",
        content: [
          "I designed the full communication layer: one-on-one chats, large group chats, and anonymous chats with no message history — a mode designed for users who wanted to interact without leaving a trace.",
          "**Complex interaction scenarios:**",
          "Chat requests from strangers — images are automatically blurred until the recipient explicitly chooses to view them, protecting users from unsolicited content.",
          "Reply mechanics — tapping a quoted message scrolls the chat to the original, which is then highlighted with a timed animation so the user instantly locates what they're looking at.",
          "Forwarding — supports multi-recipient selection in a single action. A text caption added to a forwarded message sends as a separate bubble, keeping the forwarded content visually distinct.",
          "Voice messages with speech-to-text transcription, GIPHY integration with empty state handling, and a smart input bar capped at 5 images with a horizontal preview carousel.",
          "For every flow, I specified platform-specific behavior — iOS and Android differ in context menus, swipe actions, and animation patterns, and each needed its own documented approach."
        ]
      },
      {
        title: "Privacy System",
        content: [
          "For a geo-social network, the privacy model had to be genuinely granular — not a single toggle, but a real system users could trust. I designed a three-level access matrix:",
          "Global settings covering calls, messages, map visibility, and presence status, with options for 'Everyone', 'Friends only', and 'No one'.",
          "Per-user exceptions via whitelist and blacklist, so users could always allow or always block specific people regardless of their global setting.",
          "Contextual error states — instead of generic send failures, the interface surfaces specific, human-readable messages: 'This user has restricted who can message them', 'You've blocked this user' with a quick unblock option. The goal was to make restrictions legible, not invisible."
        ]
      },
      {
        title: "Feed",
        content: [
          "I iteratively introduced new features into the feed rather than doing a full redesign. I replaced the like/dislike mechanic with emoji reactions, added content and user filters to search, and progressively improved the feed layout based on user feedback.",
          "The full interface was localized into 7 languages, with specific attention to German string length and Russian grammatical declensions — both require structural layout considerations beyond simple text swaps."
        ]
      }
    ],
    results: [
      "The App Store rating grew from 3.6 to 4.5.",
      "Resolved fundamental trust issues blocking user engagement in a geo-social context."
    ],
    reflection: [
      "Small improvements to everyday scenarios — a slightly more intuitive chat, a privacy setting that actually makes sense — can meaningfully change the experience for every single user.",
      "You don't always need a major feature to make a product noticeably better."
    ]
  },
  {
    id: "03",
    slug: "meera-messenger",
    title: "Meera Messenger — 0→1",
    shortTitle: "Meera Messenger",
    company: "Meera Messenger",
    period: "2021–2022",
    platform: "iOS & Android (native)",
    role: "Lead Product Designer",
    category: "Communication App",
    coverImage: "/4.webp",
    description: "Designed a full-featured messenger from scratch over a year, creating 50+ features and 500+ screens while optimizing complex components for scalable development.",
    context: [
      "Meera was a full-featured messenger for iOS and Android, designed entirely from scratch. The product was entering a competitive market alongside Telegram, WhatsApp, and Signal — which meant every feature had to work at industry standard from day one. There was no room for a rough first version.",
      "I was the sole designer on the project, working with a product owner/manager and a business analyst. Every design decision — from onboarding to edge cases in secret chats — was mine to make and own.",
      "Over the course of a year, I designed the complete product: 50+ features, 500+ screens."
    ],
    sections: [
      {
        title: "What was designed",
        content: [
          "**Registration and onboarding** — phone-based sign-in, code verification, profile setup, and contact import from the phone book.",
          "**Core communication layer** — one-on-one chats, group chats with full admin controls, and channels supporting all content types available in direct messages.",
          "**Message types** — text, photo, video, video messages with front/back camera switching, voice messages with hands-free recording lock, files and documents, geolocation with POI cards, GIFs, stickers, polls.",
          "**Advanced mechanics** — message replies with scroll-to-original, forwarding with multi-recipient selection, message pinning, @mentions, timed send (scheduled messages), timed delete (auto-expiring messages), secret chats with no history.",
          "**Organization and search** — chat folders, chat archiving, filtering, marking all as read, global search across contacts and channels, full-text search within conversations with content-type filtering.",
          "**Calls** — audio and video calls, group calls, missed calls screen.",
          "**Privacy** — full privacy settings, visibility controls, group and channel settings.",
          "Every feature included platform-specific documentation for iOS and Android behavior differences across menus, swipe gestures, and animations."
        ]
      },
      {
        title: "Chat bubble: 50 states → 10",
        content: [
          "One of the most significant design problems I solved during the project was the chat bubble component. The base component required 50+ unique states to cover every combination of message type, direction, delivery status, and metadata display.",
          "Every new feature requirement added more combinations exponentially. The system was becoming unmanageable before the product had even launched.",
          "I analyzed actual user behavior patterns and found that the vast majority of precise timestamp checks happen in professional or business contexts — not in everyday casual conversation.",
          "This insight led me to rethink the metadata paradigm entirely:",
          "Individual timestamps were replaced with group time separators — a single label for a cluster of messages sent within a short window.",
          "Delivery status indicators were reduced to the last message in a thread only, rather than appearing on every bubble.",
          "Full message details were moved behind a swipe gesture — available on demand, invisible by default."
        ]
      }
    ],
    results: [
      "Approximately 10 component states instead of 50+.",
      "Development time for new chat features dropped by 30–50%.",
      "The pattern was adopted as the standard across all communication products in the company.",
      "The full design was brought to production-ready state and handed off to development."
    ],
    reflection: [
      "Designing a large product solo from zero is a serious challenge. When you're the only designer, there's no one to course-correct you — every decision is yours to own.",
      "That responsibility forced me to think in systems from the very beginning, not just screen by screen. The chat bubble optimization taught me that the best design solutions often come from questioning the problem, not just solving it as stated."
    ]
  },
  {
    id: "04",
    slug: "annnigm",
    title: "AnnNigm — Non-invasive Health Monitoring",
    shortTitle: "AnnNigm",
    company: "AnnNigm",
    period: "2023",
    platform: "iOS & Android (native)",
    role: "Lead Product Designer",
    category: "HealthTech IoT",
    coverImage: "/3.webp",
    description: "Created a visual language for biochemical trend data that has no numerical values, using shapes, colors, and motion to clearly communicate actionable health insights.",
    context: [
      "AnnNigm is an application for non-invasive biochemical trend monitoring. A Bluetooth clip-on device tracks changes without finger pricks — unlike traditional glucometers or systems like FreeStyle Libre. The device costs approximately 10 times less than comparable alternatives.",
      "The core idea of the product: not absolute values, but trends. The device detects the direction and rate of change — rising, stable, falling — and visualizes this in a way that lets users understand in seconds whether everything is fine or they need to act.",
      "The target audience — people already familiar with FreeStyle Libre — are used to reading trend graphs and understand the significance of direction. The interface needed to feel legible to them immediately, while being honest about what the device actually measures. Simulating precision that doesn't exist would have been a fundamental trust problem."
    ],
    sections: [
      {
        title: "First-launch flow & Data Validation",
        content: [
          "I designed a clear onboarding flow covering every connection state: splash screen → device not connected → device found and paired → 30-minute warm-up period with explicit messaging that data isn't being collected yet → active session. Each state has a clear status label and a single obvious next action.",
          "Before a session begins, the app runs a data quality validation. Two outcomes: quality confirmed → proceed to main screen; quality too low → instruction to remove the clip, reattach, and run the check again. This flow prevents sessions with unreliable data from starting silently."
        ]
      },
      {
        title: "Trend visualization",
        content: [
          "The main screen is a scrollable trend ribbon plotted on a grid field. Every 10 minutes, a new segment appears representing one of three states: rising, stable, or falling. Each state has a distinct color and angle: orange upward arrow for elevation, grey horizontal bar for stability, red downward arrow for decline.",
          "A large status indicator in the top corner duplicates the current trend for fast reading without needing to interpret the graph. The two-level system — big indicator for quick glance, detailed graph for deeper analysis — mirrors how users actually interact with monitoring apps in practice.",
          "The grid background helps users visually assess angle and quantity without numerical axes, giving the graph enough structure to be readable without implying false precision."
        ]
      },
      {
        title: "Key design decisions",
        content: [
          "Stability was originally represented in black. Black reads as negative or alarming — but stability is neutral. I replaced it with grey. Black was then repurposed for a specific edge state: low data quality, when the signal couldn't be interpreted at all. A full-width black bar with the label 'Low data quality' makes this state unambiguous.",
          "The note system was added to support contextual interpretation. Users can attach an event marker to any 10-minute segment — Food, Activity, or Other — with an optional text comment. The icons appear directly on the trend ribbon, making it possible to correlate life events with observed trends after the session ends.",
          "The Bluetooth indicator was designed with three distinct states — unpaired, paired but not connected, and actively connected with a pulsing animation — so users always know the current device relationship without having to navigate away from the main screen."
        ]
      }
    ],
    results: [
      "Successfully established a novel visual language for non-numerical health tracking.",
      "Delivered a complete, trust-building user flow from device pairing to session export."
    ],
    reflection: [
      "Visualizing data without numbers is a genuinely hard design problem. When there's no absolute value to anchor the user, every element of the interface — shape, color, angle, motion — has to carry the full communicative weight.",
      "It pushed me to think about visual language at a level of specificity I hadn't needed before, and the constraint turned out to be clarifying rather than limiting."
    ]
  },
  {
    id: "05",
    slug: "techno-quiz",
    title: "Techno Quiz — Gamified Knowledge Mini-App for Yandex",
    shortTitle: "Techno Quiz",
    company: "Yandex ТЕХНО",
    period: "2024",
    platform: "Telegram Mini-App",
    role: "Lead Product Designer",
    category: "Gamification & EdTech",
    coverImage: "/1.webp",
    description: "Designed a 23-day seasonal gamified competition with narrative storytelling, daily tasks, varied quiz mechanics, and competitive leaderboards within a Telegram mini-app.",
    context: [
      "Techno Quiz is a gamified knowledge competition built as a Telegram mini-app for ТЕХНО — Yandex's technology media channel. The product ran as a 23-day seasonal event, combining daily quizzes, a narrative adventure world, a competitive leaderboard, and a tiered prize structure for top players.",
      "The goal was to build a product that would drive daily active engagement with the ТЕХНО Telegram channel over 23 consecutive days — not just a one-time quiz, but a system that made users want to come back every day, compete with others, and complete missions to improve their standing.",
      "The constraints were significant: Telegram mini-apps run inside the messenger with limited UI surface, the product had to work on mobile only, and the entire experience needed to feel like a game — not a form."
    ],
    sections: [
      {
        title: "Narrative world",
        content: [
          "The user becomes a 'Datamagician' — a hero summoned to save Technolese, a magical-technological realm. A neurostorm caused by misinformation is scattering data crystals across the world. The user must collect them by answering questions correctly. The companion character Stella guides the player through the experience.",
          "My job was to make this narrative work as a product. I designed the onboarding sequence, the mid-game story beats, the super game intro, the waiting period messaging, and the results reveal — each as a story slide sequence with skip affordance.",
          "I also worked closely with content editors to define where narrative copy needed to live in the interface — every result screen, error state, and system message had a character voice, which meant the UI had to leave space for that voice without sacrificing clarity."
        ]
      },
      {
        title: "Quiz mechanics",
        content: [
          "29 quizzes open over 15 days, followed by an 8-day window for players who fell behind. Each of the 29 quizzes contains 5 questions. The final super game contains 15 questions. Questions are randomized from a pool of 1,500 questions across three topic categories.",
          "I designed three distinct question interaction mechanics: Single choice (1 of 4), Binary choice (1 of 2), and Connection and ordering (drag-to-match pairs and chronological ordering).",
          "Each question has a 20-second countdown timer. If the timer expires, the question locks and the user can only proceed."
        ]
      },
      {
        title: "Progression and retry system",
        content: [
          "A key UX challenge was balancing competitive pressure with accessibility. The product team defined the retry economy — players receive replay tokens daily and can earn more through tasks. My job was to make this system feel fair and legible.",
          "The map screen visualizes progression: completed quizzes appear as unlocked islands, locked future quizzes show their scheduled unlock day, and quizzes requiring a prerequisite display a locked state with a contextual explanation.",
          "To support daily return without relying only on new quiz unlocks, the product team designed a parallel task system running across all 23 days. I designed all task states: available, in progress, completed, expired, and the empty state when all tasks for the day have been finished."
        ]
      },
      {
        title: "Leaderboard and profile",
        content: [
          "The leaderboard ranks players by crystal count, with a tiebreaker based on who completed a given quiz earlier. I made the player's own position the most prominent element on the leaderboard screen, with the full ranked list below as secondary information.",
          "A randomly selected position outside the top 100 also receives a prize — and surfacing this clearly on the screen was part of keeping the broader audience engaged through the full season.",
          "Given the 23-day live operation format, the product needed to handle a wide range of edge states clearly: Quiz exit warnings, out of replays states, desktop lockouts, and horizontal orientation lockouts."
        ]
      }
    ],
    results: [
      "Successfully launched a complex 23-day live event driving daily engagement.",
      "Handled extreme edge cases like mobile-only lockouts, screen recording prevention, and deep Yandex ID integrations seamlessly."
    ],
    reflection: [
      "Designing a live event product is fundamentally different from a static app. Every screen needs to account for time: what does this look like on day 1 vs. day 15 vs. day 23? What happens if the user runs out of tokens on day 3?",
      "The constraint of a 23-day season forced me to think in states and timelines rather than just flows — and that produced a more robust and interesting information architecture than I would have arrived at otherwise."
    ]
  }
];
