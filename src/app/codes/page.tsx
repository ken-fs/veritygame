import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Codes (${getCurrentDateString()}) — Do Codes Exist?`,
  description:
    "Are there Verity codes on Roblox? Current code status for Verity and Verity's Game, checked daily — plus the real working codes for Build Base to Survive VERITY.",
  keywords: ['verity codes', 'verity roblox codes', "verity's game codes", 'verity codes 2026'],
  path: '/codes',
});

export default function CodesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Codes', url: '/codes' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Are there any Verity codes?',
      answer:
        "No. Neither Verity (The ROBO Studio!) nor Verity's Game (Slime Time Studios) has a code redemption system as of September 2026. Sites listing 'working Verity codes' are covering Build Base to Survive VERITY, a different game — its real codes are listed below. This page is checked daily.",
    },
    {
      question: 'How do I get free stuff in Verity without codes?',
      answer:
        'Verity is a story horror game — the unlockables are its 6 badges and 2 endings. See our badge guide for the fastest 100% route.',
    },
    {
      question: 'Did Verity ever have codes?',
      answer:
        'No — the game has never had a code redemption system since launch. The closest thing to free rewards is the badge set, which is earned entirely in-game.',
    },
    {
      question: "What about codes for Verity's Game (Slime Time Studios)?",
      answer:
        "Verity's Game does not have codes either as of September 2026. We monitor both games daily and will update this page the moment any code system appears.",
    },
    {
      question: 'Where would Verity codes appear if they were added?',
      answer:
        'Most Roblox horror games put code redemption in the settings menu or a dedicated codes button on the main screen. If Verity adds one, we will publish exact redemption steps here.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity Codes</h1>
      <p className="text-gray-500 mb-8">Last checked {getCurrentDateString()} — checked daily.</p>

      <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 mb-8">
        <p className="font-semibold mb-1">⚠️ No codes exist yet</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Neither the original <strong>Verity</strong> nor the trending <strong>Verity&apos;s Game</strong> has a code system.
          Verity is a story game — its &quot;rewards&quot; are the <a href="/badges" className="underline">6 badges</a> and{' '}
          <a href="/good-ending" className="underline">two endings</a>. If a code system is ever added, it will appear here within hours.
        </p>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-8">
        <h2>Why Verity Doesn&apos;t Have Codes</h2>
        <p>
          Verity is a story-driven horror game, not a grinding simulator — there&apos;s no currency, no shop economy,
          and nothing for a code to unlock. Its entire progression is the 3-day survival loop, and its collectibles
          are the <a href="/badges">six badges</a>: I&apos;m Verity!, Lovity, Bority, I&apos;m Falsity!, and the two endings.
        </p>
        <p>
          Codes usually appear in Roblox games that have repeatable economies (simulators, tycoons, fighters).
          If the Verity universe grows in that direction — the trending{' '}
          <a href="/veritys-game">Verity&apos;s Game</a> by Slime Time Studios is the most likely candidate — a code
          system becomes plausible. We check both games daily.
        </p>
        <h2>What to Unlock Instead</h2>
        <ul>
          <li>🏅 <a href="/badges">All 6 badges</a> — including the AFK-only Bority badge</li>
          <li>📖 <a href="/good-ending">Good Ending</a> — collect all 6 books (the hidden black book near the house is the one everyone misses)</li>
          <li>🔵 <a href="/characters">I&apos;m Falsity!</a> — find the blue orb in the third tower</li>
        </ul>
        <h2>&quot;Verity Codes&quot; You Found Elsewhere = Build Base to Survive VERITY</h2>
        <p>
          Sites like GameRant, Dexerto and RobloxDen list &quot;Verity codes&quot; — they all belong to{" "}
          <strong>Build Base to Survive VERITY</strong>, a separate base-defense spinoff where Verity attacks your base
          at night. Its active codes, cross-verified against RobloxDen and TechWiser (both checked Sept 23 —
          the game pushed a &quot;[LORD]&quot; update today, and new codes typically land with updates):
        </p>
        <ul>
          <li><code>TOP1DUDU</code> — 10 DuDu <strong>(new — RobloxDen only so far, Sept 23)</strong></li>
          <li><code>WMEMBER67</code> — building materials (3 Mystery Boxes per RobloxDen)</li>
          <li><code>VOIDITY</code> — 10 Barrier Blocks <strong>(the reported Sept 19 expiry never happened — still active on RobloxDen and TechWiser, Sept 23)</strong></li>
          <li><code>UPDATE4</code> — 50 Crying Obsidian</li>
          <li><code>DAILYQUESTS</code> — Forcefield (RobloxDen says 1 Verity Turret — sources disagree on the reward)</li>
          <li><code>OGplayer67</code> — free rewards (limited to the first 5,000 players)</li>
          <li><code>CODES</code> — $500 cash</li>
          <li><code>UPDATE3</code> — 10 Bedrock</li>
          <li><code>OBESITY</code> — 10 Barrier Blocks</li>
        </ul>
        <p>
          Fading codes: GODITY, UPDATE2, MANIPULITY, ROBLOXDOWN and WEEKLY — TechWiser still lists the first four
          as active, but RobloxDen moved all five to &quot;check&quot; (unverified) on Sept 23 — try them
          in-game, worst case it says invalid. Expired everywhere: THXFOR1M, CURIOSITYUPD, 10000PLAYERS. To redeem:
          Store button (left of the screen) → scroll to the FREE STUFF section → code box → Enter.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
