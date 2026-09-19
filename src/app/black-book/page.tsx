import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Black Book Location (${getCurrentDateString()}) — The 6th Book Everyone Misses`,
  description:
    'Where is the black book in Verity (Roblox)? The 6th book is hidden right by your house — no arrow marker, dark on dark. Exact location, why it decides your ending, and all 6 books checklist.',
  keywords: ['verity black book', 'verity black book location', 'verity 6th book', 'verity last book', 'verity book locations', 'verity books'],
  path: '/black-book',
});

export default function BlackBookPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Black Book Location', url: '/black-book' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Where is the black book in Verity?',
      answer:
        'Right by your house (your base). It is the 6th and final book — check the house perimeter carefully. It is dark against a dark background and is the only book with no arrow marker, which is why almost everyone misses it.',
    },
    {
      question: 'Why does the black book matter in Verity?',
      answer:
        'It decides your ending. Entering the house on the final night with all 6 books — including the black book — triggers the Good Ending. Enter with 5 or fewer and you get the Bad Ending, permanently for that run.',
    },
    {
      question: 'Does the black book have an arrow marker in Verity?',
      answer:
        'No. Books 1–5 get arrow markers during the book hunt on the final night. The black book near the house has none — this is the reason so many players finish with 5 books and get the Bad Ending by accident.',
    },
    {
      question: 'I found 5 books and can\'t find the last one. Why?',
      answer:
        'The book you are missing is almost certainly the black book near your house. Arrow markers led you to the other five; the sixth relies on you searching the house perimeter yourself. See the checklist below for all six locations.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity Black Book Location</h1>
      <p className="text-gray-500 mb-8">
        The 6th book. The one with no arrow. The one that decides your ending. Updated {getCurrentDateString()}.
      </p>

      <div className="p-5 rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/30 mb-8">
        <p className="font-bold mb-1">📍 Quick answer</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          The black book is hidden <strong>right by your house</strong> — walk the perimeter of your base and check
          carefully. It&apos;s <strong>dark against a dark background</strong> and, unlike the other five books, has{' '}
          <strong>no arrow marker</strong>. You&apos;ve walked past it every single day without knowing.
        </p>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Why Everyone Misses It</h2>
        <ol>
          <li><strong>No arrow marker.</strong> During the final-night book hunt, arrows point you to books 1–5. The black book gets nothing.</li>
          <li><strong>Bad contrast.</strong> It&apos;s a black book sitting against a dark background.</li>
          <li><strong>Familiarity blindness.</strong> It sits next to the house you spawn at every day — you stop looking at that area after day 1.</li>
          <li><strong>The game never tells you the count.</strong> Players finish the marked hunt, assume 5 = all, and enter the house. Bad Ending.</li>
        </ol>

        <h2>All 6 Books Checklist</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Book</th>
                <th className="py-2 pr-3">Location</th>
                <th className="py-2">Arrow marker?</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">1–3</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Scattered across the open map</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">✅ Yes</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">4</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Inside the tall building</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">✅ Yes</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">5</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">By the tree</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">✅ Yes</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold whitespace-nowrap">6 — black</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400"><strong>Hidden near your house</strong></td>
                <td className="py-2 text-gray-600 dark:text-gray-400">❌ No — find it yourself</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>After You Get It</h2>
        <ol>
          <li>Confirm you hold all <strong>6 books</strong>.</li>
          <li>Put <strong>Verity on the couch</strong>, then sleep (freeze-bug workaround).</li>
          <li>Follow him to the <strong>lab</strong> → <strong>room 3</strong> → pickaxe the wall → destroy the <strong>anchor</strong>.</li>
          <li>🏅 <strong>Good Ending</strong> unlocked.</li>
        </ol>
        <p>
          Full sequence: <Link href="/good-ending">Good Ending guide</Link> · Ending comparison: <Link href="/endings">all endings</Link> · Day-by-day route: <Link href="/walkthrough">walkthrough</Link>.
        </p>

        <h2>Search Tips</h2>
        <ul>
          <li>Do a slow full circle around the house, camera angled down — the book blends into the ground.</li>
          <li>Search <em>before</em> entering the house. Once you step inside with 5, the run is locked to the Bad Ending.</li>
          <li>You don&apos;t have to wait for the final night — learn where it sits on days 1–2 so the hunt is trivial.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">FAQ</h2>
        <div className="space-y-3">
          <details className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <summary className="font-semibold cursor-pointer">Where is the black book in Verity?</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Right by your house. Walk the perimeter of your base carefully — dark book, dark background, no arrow marker.</p>
          </details>
          <details className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <summary className="font-semibold cursor-pointer">I have 5 books. Where&apos;s the last one?</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Almost certainly the black book near the house. The arrows led you to the other five; the sixth is unmarked.</p>
          </details>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
