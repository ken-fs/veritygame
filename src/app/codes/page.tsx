import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Codes (${getCurrentDateString()}) — Do Codes Exist?`,
  description:
    "Are there Verity codes on Roblox? Current code status for Verity and Verity's Game, checked daily — plus the real working codes for Build Base to Survive VERITY and Verity Battles.",
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
        "No. Neither Verity (The ROBO Studio!) nor Verity's Game (Slime Time Studios) has a code redemption system as of October 2026. Sites listing 'working Verity codes' are covering different games — Build Base to Survive VERITY and the newer Verity Battles (SMOOF Games), whose two codes are confirmed in its official description. Both real code lists are below. This page is checked daily.",
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
        "Verity's Game does not have codes either as of October 2026. We monitor both games daily and will update this page the moment any code system appears.",
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
          at night. Its Sept 28 update (the 💪 tag in the title) shipped a fresh batch of codes, two days after the
          Sept 26 update doubled concurrent players to ~7,300; a further Sept 29 update added no new codes, and the
          Oct 1 evening update (19:33 UTC) shipped one more: <code>UPDATE67SPECIAL</code>. Its active codes, cross-verified against RobloxDen
          (re-checked Oct 2) and TechWiser (its page has not re-checked since Sept 15 — treated as stale):
        </p>
        <ul>
          <li><code>UPDATE67SPECIAL</code> — 50 Reinforced Obsidian Blocks <strong>(newest — added by RobloxDen&apos;s Oct 2 check after the Oct 1 update; single source, not yet confirmed in-game)</strong></li>
          <li><code>Lord</code> — 67 Reinforced Diamond <strong>(&quot;New Code&quot; at RobloxDen; single source, not yet confirmed in-game)</strong></li>
          <li><code>MOGGITY</code> — 10 Barrier <strong>(&quot;New Code&quot; at RobloxDen; single source)</strong></li>
          <li><code>DUDU</code> — 100 Dudu Obsidian <strong>(&quot;New Code&quot; at RobloxDen; single source)</strong></li>
          <li><code>UPDATE67</code> — 67 Bedrocks <strong>(&quot;New Code&quot; at RobloxDen; single source, not yet confirmed in-game)</strong></li>
          <li><code>TOP1DUDU</code> — 10 DuDu <strong>(RobloxDen active, now flagged &quot;New Code&quot;; still unlisted on TechWiser, checked Sept 30)</strong></li>
          <li><code>CODES</code> — $500 cash</li>
        </ul>
        <p>
          RobloxDen&apos;s latest pass demoted <code>WMEMBER67</code> (3 Mystery Boxes) and <code>DAILYQUESTS</code>{" "}
          (1 Verity Turret per RobloxDen — TechWiser says Forcefield, sources differ) to &quot;check&quot;, while{" "}
          <code>Update3</code> (10 Bedrock) and <code>Obesity</code> (10 Barrier) are back on the list at &quot;check&quot;
          after being dropped a day earlier. <code>UPDATE4</code> (50 Crying Obsidian) stays at &quot;check&quot;, and{" "}
          <code>GODITY</code> and <code>UPDATE2</code> have slipped to expired. Still conflicting:{" "}
          <code>OGplayer67</code> — TechWiser&apos;s stale list keeps it active, but RobloxDen has removed it entirely
          (it was capped at the first 5,000 players, so it is most likely exhausted). <code>ROBLOXDOWN</code> stays
          confirmed expired, and <code>10000PLAYERS</code> is back on the expired list there. RobloxDen&apos;s Oct 1 pass added:{" "}
          <code>SORRY4NOCODES</code> (10 God Verity Bedrocks) at &quot;check&quot; — the name reads as the dev
          apologizing for the quiet spell since the Sept 28 code wave — and its Oct 2 check kept it at
          &quot;check&quot;: still single source, not yet confirmed in-game.
          The rest of the &quot;check&quot; list: VOIDITY, MANIPULITY, WEEKLY, THXFOR1M and CURIOSITYUPD — worst case the game
          says invalid. To redeem:
          Store button (left of the screen) → scroll to the FREE STUFF section → code box → Enter.
        </p>
        <h2>Verity Battles Codes (Confirmed by the Game Itself)</h2>
        <p>
          The newest spin-off, <strong>Verity Battles</strong> by SMOOF Games (launched Sept 17 — catch and battle 67
          Verities across 6 zones from the Meadow to the Cosmic Rift), prints its codes directly in the official game
          description, so these two are confirmed real rather than aggregator-sourced:
        </p>
        <ul>
          <li><code>RELEASE</code> — free Random Verity <strong>(confirmed in the official description, re-checked Oct 9)</strong></li>
          <li><code>VERITY</code> — free rewards <strong>(confirmed in the official description, re-checked Oct 9)</strong></li>
        </ul>
        <p>
          The description also lists two code-free bonuses: joining the SMOOF Games group gives +10% cash and a free
          Random Verity, and inviting a friend gives you both one. Verity Battles is the second Verity-universe game
          with a real code system, after Build Base to Survive VERITY — the original Verity and Verity&apos;s Game
          still have none.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
