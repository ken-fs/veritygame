import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios is the trending new Roblox entry in the Verity horror universe (3,000+ concurrent players). What it is, how it connects to Verity, and guides as they develop.",
  keywords: ["verity's game", "verity's game roblox", "veritys game", "verity game roblox", "new verity game"],
  path: '/veritys-game',
});

export default function VeritysGamePage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: "Verity's Game", url: '/veritys-game' },
  ]);
  const faq = generateFAQSchema([
    {
      question: "What is Verity's Game on Roblox?",
      answer:
        "Verity's Game is a new Roblox horror game by Slime Time Studios, riding the wave of the viral Verity IP (The ROBO Studio!'s original passed 28M visits). It is currently trending with 3,000+ concurrent players.",
    },
    {
      question: "Is Verity's Game the same as Verity?",
      answer:
        "No. The original Verity is by The ROBO Studio!. Verity's Game is a separate title by Slime Time Studios set in the same sphere-horror universe. The original's badge and ending guides are on this site.",
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity&apos;s Game</h1>
      <p className="text-gray-500 mb-8">The trending new entry in the Verity universe — tracked {getCurrentDateString()}.</p>

      <div className="p-5 rounded-xl border border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20 mb-8">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-500">Developer:</span> <strong>Slime Time Studios</strong></div>
          <div><span className="text-gray-500">Status:</span> <strong className="text-green-600">Trending — 3,000+ online</strong></div>
          <div><span className="text-gray-500">Genre:</span> <strong>Horror</strong></div>
          <div><span className="text-gray-500">Universe:</span> <strong>Verity (sphere AI)</strong></div>
        </div>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>What We Know</h2>
        <p>
          Verity&apos;s Game launched into the Verity hype wave and is pulling thousands of concurrent players.
          The original <strong>Verity™</strong> (The ROBO Studio!) built the formula — a companion sphere, 3 days of prep,
          branching endings — and this new entry extends the universe.
        </p>
        <p>
          This page is tracked daily. As the community maps out Verity&apos;s Game — endings, secrets, mechanics —
          guides land here first. Playing the original first? Start with the{' '}
          <a href="/walkthrough">full walkthrough</a> and the <a href="/badges">badge guide</a>.
        </p>
        <h2>The Verity Universe</h2>
        <ul>
          <li><strong>Verity™</strong> — The ROBO Studio! — the original (28M+ visits). <a href="/badges">Badges</a> · <a href="/good-ending">Good Ending</a></li>
          <li><strong>Verity&apos;s Game</strong> — Slime Time Studios — the trending new entry (this page).</li>
          <li><strong>Escape Verity</strong> — Mind Blowing Productions — escape-format spinoff with Chapter 1 &amp; 2.</li>
          <li><strong>Verity Companion [AI]</strong> — chat-focused spinoff.</li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
