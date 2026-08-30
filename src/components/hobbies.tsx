'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom SVG Icons for the Hobbies widget
function MusicIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function PenIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function BookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
    </svg>
  );
}

function ActivityIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function PlayIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function PauseIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function DiscIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

type TabType = 'music' | 'poems' | 'reading' | 'fitness';

const POEMS = [
  {
    id: 'code-cadence',
    title: 'Code & Cadence',
    date: 'Aug 24, 2026 · Accra',
    stanzas: [
      'In the quiet hours between compiling,\nwhere logic meets the rhythm of breath,\nwe build worlds out of syntax and silence,\nleaving footprints in digital clay.',
      'A function runs like a heartbeat;\na promise resolves in the dark.\nWe architect not just for machines,\nbut for the human on the other side.',
    ],
  },
  {
    id: 'silence-accra',
    title: 'Echoes of the Coast',
    date: 'Jul 19, 2026 · Labadi',
    stanzas: [
      'The Atlantic rolls in unbroken cadence,\nwarm salt air against the evening breeze.\nThoughts unravel from the terminal’s glare,\nfinding clarity in the rhythm of the tide.',
      'To build is to listen before speaking;\nto simplify is to master the craft.',
    ],
  },
  {
    id: 'architecture-dawn',
    title: 'Architecture at Dawn',
    date: 'Jun 12, 2026 · Studio',
    stanzas: [
      'Before the noise of the daylight awakens,\nthe draft is clean, the canvas unmarred.\nA clean design is a form of respect:\nevery line intentional, every state at peace.',
    ],
  },
];

export function Hobbies() {
  const [activeTab, setActiveTab] = useState<TabType>('music');
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedPoemIndex, setSelectedPoemIndex] = useState(0);

  const currentPoem = POEMS[selectedPoemIndex];

  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-4xl py-4 font-sans text-foreground"
    >
      {/* Header section */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            After Hours &amp; Hobbies
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            What fuels my creativity outside of production code and architecture.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex max-w-full items-center gap-1.5 overflow-x-auto rounded-full border border-border bg-secondary/50 p-1 backdrop-blur-md no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('music')}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all ${activeTab === 'music'
                ? 'bg-foreground text-background shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <MusicIcon className="h-3.5 w-3.5" />
            <span>Music</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('poems')}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all ${activeTab === 'poems'
                ? 'bg-foreground text-background shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <PenIcon className="h-3.5 w-3.5" />
            <span>Poetry</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('reading')}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all ${activeTab === 'reading'
                ? 'bg-foreground text-background shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <BookIcon className="h-3.5 w-3.5" />
            <span>Reading</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('fitness')}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 sm:px-3.5 py-1.5 text-xs font-medium transition-all ${activeTab === 'fitness'
                ? 'bg-foreground text-background shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <ActivityIcon className="h-3.5 w-3.5" />
            <span>Lifestyle</span>
          </button>
        </div>
      </div>

      {/* Main interactive cards container */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
        <AnimatePresence mode="wait">
          {/* 1. MUSIC TAB (Spotify Inspired) */}
          {activeTab === 'music' && (
            <motion.div
              key="music"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
                {/* Left Vinyl Artwork Card */}
                <div className="flex flex-col items-center justify-center md:col-span-5">
                  <div className="relative flex aspect-square w-48 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 p-4 shadow-2xl ring-1 ring-white/10 sm:w-56">
                    {/* Glowing subtle green ambient backdrop */}
                    <div className="absolute -inset-1 rounded-2xl bg-[#1DB954]/20 blur-xl" />

                    {/* Rotating Vinyl Record */}
                    <motion.div
                      animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                      className="relative flex h-36 w-36 items-center justify-center rounded-full bg-neutral-900 ring-2 ring-neutral-700 shadow-inner sm:h-44 sm:w-44"
                    >
                      {/* Vinyl grooves */}
                      <div className="absolute inset-2 rounded-full border border-neutral-800" />
                      <div className="absolute inset-5 rounded-full border border-neutral-800" />
                      <div className="absolute inset-8 rounded-full border border-neutral-800" />

                      {/* Record Label Center */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1DB954] text-neutral-950 shadow-md">
                        <DiscIcon className="h-6 w-6" />
                      </div>
                    </motion.div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#1DB954] px-3 py-0.5 text-[11px] font-semibold text-black shadow-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
                      Daily Rotation
                    </div>
                  </div>
                </div>

                {/* Right Spotify Details and Controls */}
                <div className="flex flex-col justify-between space-y-6 md:col-span-7">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-[#1DB954]">
                        Spotify Vibe
                      </span>
                      <span className="text-xs text-muted-foreground">• Deep Work &amp; Focus</span>
                    </div>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                      Late Night Syntax &amp; Afro-Fusion
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Curated playlist by Owusu Kenneth for flow-state coding and thoughtful thinking.
                    </p>
                  </div>

                  {/* Equalizer Waveform Animation & Scrubber */}
                  <div className="space-y-3 rounded-2xl bg-secondary/40 p-4 ring-1 ring-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {/* 5 Equalizer bars */}
                        {[0.6, 0.9, 0.4, 0.8, 0.5].map((scale, i) => (
                          <motion.span
                            key={i}
                            animate={
                              isPlaying
                                ? {
                                  scaleY: [scale, 1, 0.2, scale],
                                }
                                : { scaleY: 0.3 }
                            }
                            transition={{
                              repeat: Infinity,
                              duration: 0.8 + i * 0.15,
                              ease: 'easeInOut',
                            }}
                            className="h-5 w-1 origin-bottom rounded-full bg-[#1DB954]"
                          />
                        ))}
                        <span className="ml-2 text-xs font-medium text-muted-foreground">
                          {isPlaying ? 'Playing on loop' : 'Paused'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DB954] text-black shadow-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4 translate-x-0.5" />}
                      </button>
                    </div>

                    {/* Progress bar */}
                    <div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <motion.div
                          animate={isPlaying ? { width: ['35%', '85%', '35%'] } : { width: '35%' }}
                          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                          className="h-full rounded-full bg-[#1DB954]"
                        />
                      </div>
                      <div className="mt-1 flex justify-between text-[11px] text-muted-foreground font-mono">
                        <span>01:42</span>
                        <span>03:30</span>
                      </div>
                    </div>
                  </div>

                  {/* Favorite Genres & Artists */}
                  <div className="space-y-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      Genres in heavy rotation:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Afrobeats', 'Highlife', 'Lo-Fi Hip Hop', 'Ambient Electronic', 'Acoustic Soul'].map((genre) => (
                        <span
                          key={genre}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground border border-border"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. POEMS TAB (iOS Notes Inspired) */}
          {activeTab === 'poems' && (
            <motion.div
              key="poems"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-6 md:p-8"
            >
              {/* iOS Note Container */}
              <div className="rounded-2xl border border-[#E5C158]/30 bg-[#FAF7F0] p-6 shadow-sm dark:border-neutral-800 dark:bg-[#1C1C1E] md:p-8">
                {/* Note Header */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/5 pb-4 dark:border-white/10">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#C59B27] dark:text-[#E5C158]">
                    <PenIcon className="h-3.5 w-3.5" />
                    <span>Personal Notes · Poetry</span>
                  </div>

                  {/* Poem Selector pills */}
                  <div className="flex items-center gap-1.5">
                    {POEMS.map((poem, index) => (
                      <button
                        key={poem.id}
                        type="button"
                        onClick={() => setSelectedPoemIndex(index)}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${selectedPoemIndex === index
                            ? 'bg-[#E5C158] text-neutral-950 font-semibold'
                            : 'text-neutral-600 hover:bg-black/5 dark:text-neutral-400 dark:hover:bg-white/5'
                          }`}
                      >
                        Note {index + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Poem Meta and Title */}
                <div className="space-y-1">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    {currentPoem.date}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-serif">
                    {currentPoem.title}
                  </h3>
                </div>

                {/* Poem Stanzas with iOS Note typography */}
                <div className="mt-6 space-y-4 font-serif text-base leading-relaxed text-neutral-800 dark:text-neutral-300 md:text-lg">
                  {currentPoem.stanzas.map((stanza, idx) => (
                    <p key={idx} className="whitespace-pre-line italic">
                      {stanza}
                    </p>
                  ))}
                </div>

                {/* Note footer */}
                <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-4 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400">
                  <span>— Owusu Kenneth</span>
                  <span className="font-mono">Draft #{selectedPoemIndex + 1}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. READING TAB */}
          {activeTab === 'reading' && (
            <motion.div
              key="reading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-6 md:p-8"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Book 1 */}
                  <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-500">
                        Currently Reading
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">84% completed</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      Designing Data-Intensive Applications
                    </h4>
                    <p className="text-xs text-muted-foreground">by Martin Kleppmann</p>
                    <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                      <div className="h-full w-[84%] bg-blue-500 rounded-full" />
                    </div>
                    <p className="text-xs text-muted-foreground italic leading-relaxed pt-1">
                      &quot;Reliability, scalability, and maintainability are not abstract ideals—they are engineering habits.&quot;
                    </p>
                  </div>

                  {/* Book 2 */}
                  <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-500">
                        Favorite Reflection
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">Completed</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">
                      The Creative Act: A Way of Being
                    </h4>
                    <p className="text-xs text-muted-foreground">by Rick Rubin</p>
                    <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                      <div className="h-full w-full bg-amber-500 rounded-full" />
                    </div>
                    <p className="text-xs text-muted-foreground italic leading-relaxed pt-1">
                      &quot;The ability to look deeply is the root of creativity. To see past the ordinary and find what matters.&quot;
                    </p>
                  </div>
                </div>

                {/* Topics shelf */}
                <div className="rounded-2xl border border-border bg-secondary/20 p-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    Areas of continuous study &amp; inquiry:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      'Distributed Systems',
                      'Multi-Agent Architectures',
                      'Philosophy of Technology',
                      'User Experience Craft',
                      'Cognitive Psychology',
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-background px-3 py-1 text-xs text-foreground border border-border shadow-2xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. FITNESS & LIFE TAB */}
          {activeTab === 'fitness' && (
            <motion.div
              key="fitness"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-2">
                  <div className="text-2xl">⚽</div>
                  <h4 className="text-base font-semibold text-foreground">Weekend Football</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Playing amateur matches with friends keeps teamwork sharp and energy high.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-2">
                  <div className="text-2xl">🏃‍♂️</div>
                  <h4 className="text-base font-semibold text-foreground">Morning Runs &amp; Gym</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Consistent physical discipline clears mental fog and sharpens problem-solving.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/30 p-5 space-y-2">
                  <div className="text-2xl">♟️</div>
                  <h4 className="text-base font-semibold text-foreground">Chess &amp; Strategy</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Analyzing tactical positions and anticipating outcomes translates directly to system architecture.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-secondary/20 p-4 border border-border text-center">
                <p className="text-xs text-muted-foreground italic">
                  &quot;Balance outside the terminal creates sustainable excellence inside the codebase.&quot;
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default Hobbies;
