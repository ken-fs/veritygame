import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity All Endings (${getCurrentDateString()}) — Good, Bad & How to Get Both`,
  description:
    'Every ending in Verity (Roblox) explained: the Good Ending (6 books + lab + anchor), the Bad Ending (default), why you need two runs for both badges, and the freeze bug workaround.',
  keywords: ['verity all endings', 'verity endings', 'verity bad ending', 'verity good ending', 'verity ending explained', 'verity roblox endings'],
  path: '/endings',
});

export default function EndingsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'All Endings', url: '/endings' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'How many endings does Verity have?',
      answer:
        'Two story endings: the Good Ending (enter the house with all 6 books, then complete the lab sequence and destroy the anchor) and the Bad Ending (enter with 5 or fewer books — the default most players get by accident).',
    },
    {
      question: 'Can you get both endings in one Verity run?',
      answer:
        'No. Entering the house with all 6 books locks in the Good Ending for that run. Getting both badges requires two separate playthroughs — do the Good Ending first, then speedrun a second run skipping at least one book.',
    },
    {
      question: 'What decides which ending you get in Verity?',
      answer:
        'One thing only: the number of books you hold when you enter the house on the final night. 6 books → Good Ending. 5 or fewer → Bad Ending. The 6th book — a black book hidden near your house with no arrow marker — is the one most players miss.',
    },
    {
      question: 'Why won\'t the Verity Good Ending trigger?',
      answer:
        'Known bug: after sleeping on the final night, the cutscene sometimes never fires. Confirmed workaround — put Verity on the couch before sleeping, and if nothing happens, rejoin and redo the final night. Your collected books persist.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity: All Endings</h1>
      <p className="text-gray-500 mb-8">
        Two endings, one decision point, one hidden black book. Updated {getCurrentDateString()}.
      </p>

      <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 mb-8">
        <p className="font-bold mb-1">⚡ TL;DR</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Verity has <strong>2 endings</strong>. Everything is decided the moment you step into the house on the final
          night: <strong>6 books → Good Ending</strong>, <strong>5 or fewer → Bad Ending</strong>. You need two runs
          for both badges.
        </p>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>The Two Endings Compared</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">🟡 Good Ending</th>
                <th className="py-2">⬛ Bad Ending</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-semibold whitespace-nowrap">Requirement</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Enter the house with all 6 books</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Enter with 5 or fewer books (default outcome)</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-semibold whitespace-nowrap">What happens</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Lab sequence: follow Verity downstairs, room 3, pickaxe the rock wall, destroy the anchor in the black room</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Immediate ending — no lab, no anchor</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-semibold whitespace-nowrap">Difficulty</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Hard — book hunt plus a known freeze bug</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Easy — it happens automatically if you miss a book</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-semibold whitespace-nowrap">Rarity</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Much rarer — most first runs end Bad</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">The most-awarded ending badge in the game</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How to Get the Good Ending</h2>
        <ol>
          <li>Collect <strong>all 6 books</strong> before entering the house — including the <Link href="/black-book"><strong>black book near the house</strong></Link>, which has no arrow marker.</li>
          <li>Put <strong>Verity on the couch</strong>, then go to sleep (freeze-bug workaround).</li>
          <li>Follow Verity to the <strong>second building</strong> and down into the <strong>lab</strong>.</li>
          <li>Choose <strong>room 3</strong>, break the rock wall with your <strong>pickaxe</strong> to reveal the black room.</li>
          <li>Destroy the <strong>anchor</strong>. Good Ending unlocked. 🏅</li>
        </ol>
        <p>
          Full step-by-step with every book location: <Link href="/good-ending">Good Ending guide</Link>.
        </p>

        <h2>How to Get the Bad Ending</h2>
        <p>
          Step into the house on the final night holding <strong>5 books or fewer</strong>. That&apos;s it — no lab, no
          anchor, the badge pops immediately. If your first run went Bad by accident, you&apos;ve already met the most
          common outcome in the game.
        </p>

        <h2>The Two-Run Strategy (for 100% completion)</h2>
        <ol>
          <li><strong>Run 1 — Good Ending.</strong> Take your time, learn the map on days 1–2, grab all missable badges on the way (<Link href="/badges">Lovity, Bority, I&apos;m Falsity!</Link>), then finish with all 6 books.</li>
          <li><strong>Run 2 — Bad Ending.</strong> Rush the story and deliberately skip at least one book. A Bad Ending speedrun is fast since you skip the entire book hunt.</li>
        </ol>
        <p>
          Full day-by-day route: <Link href="/walkthrough">complete walkthrough</Link>.
        </p>

        <h2>What the Ending Means (Lore)</h2>
        <p>
          The Good Ending&apos;s black room contains the <strong>anchor</strong> — Verity&apos;s words: every world he
          inhabits has one, and it ties him to the instance. Destroying it reframes the whole story: the three-day
          warning, the advice, the books. More on what that implies about the other spheres — Falsity and Barity — on
          the <Link href="/characters">characters page</Link>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">FAQ</h2>
        <div className="space-y-3">
          <details className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <summary className="font-semibold cursor-pointer">How many endings does Verity have?</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Two: the Good Ending (6 books) and the Bad Ending (5 or fewer). Badge variants like Lovity and Bority are badges, not endings.</p>
          </details>
          <details className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <summary className="font-semibold cursor-pointer">Can you get both endings in one run?</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">No. The 6-book entry locks in the Good Ending for that run. Two playthroughs are required for both badges.</p>
          </details>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
