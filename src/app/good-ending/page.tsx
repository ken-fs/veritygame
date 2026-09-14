import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Good Ending (${getCurrentDateString()}) — All 6 Book Locations & Final Night Guide`,
  description:
    'How to get the Good Ending in Verity (Roblox): all 6 book locations including the hidden black book near the house, the lab sequence, and the freeze bug workaround.',
  keywords: ['verity good ending', 'verity good ending roblox', 'verity book locations', 'verity black book', 'verity 6 books', 'verity ending guide'],
  path: '/good-ending',
});

export default function GoodEndingPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Good Ending', url: '/good-ending' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'How do you get the Good Ending in Verity?',
      answer:
        'Collect all 6 books — including the hidden black book near the house — BEFORE entering the house on the final night. Then sleep, follow Verity to the lab (second building, go downstairs), pick room 3, break the rock wall with your pickaxe, enter the black room and destroy the anchor.',
    },
    {
      question: 'Where is the hidden black book in Verity?',
      answer:
        'The 6th book — a black book — is hidden near the house (your base). It is the most commonly missed book. Books 1-3 are scattered around the map, book 4 is inside the tall building, book 5 is by the tree, and book 6 (black) is by the house.',
    },
    {
      question: 'Why does the Verity Good Ending keep freezing?',
      answer:
        'The Good Ending has a known bug: after going to sleep on the final night, the cutscene sometimes never triggers. Workaround confirmed by players: put Verity on the couch before sleeping, and if nothing happens, rejoin and redo the final night. It may take several attempts.',
    },
    {
      question: 'Can you get both endings in one Verity playthrough?',
      answer:
        'No. Entering the house with all 6 books triggers the Good Ending and locks out the Bad Ending for that run. Getting both badges requires two runs — do the Good Ending first, then rush a second run skipping at least one book.',
    },
    {
      question: 'How long does it take to beat Verity?',
      answer:
        'A first blind playthrough takes about 45–60 minutes. With a guide you can finish in under 30 minutes, and a Bad Ending speedrun is much faster since you skip all book hunting.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity Good Ending Guide</h1>
      <p className="text-gray-500 mb-8">6 books. One hidden black book. Zero room for error. Updated {getCurrentDateString()}.</p>

      <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 mb-8">
        <p className="font-bold mb-1">⚠️ The one rule that matters</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Entering the house on the final night with 5 or fewer books triggers the <strong>Bad Ending</strong> — permanently for that run.
          Find all <strong>6 books</strong> first. The black book near the house is the one everyone misses.
        </p>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>All 6 Book Locations</h2>
        <ol>
          <li><strong>Books 1–3</strong> — scattered around the open map; follow the arrow markers once book hunting begins on the final night.</li>
          <li><strong>Book 4</strong> — inside the tall building (the skyscraper-like structure, taller than your observation tower).</li>
          <li><strong>Book 5</strong> — by the tree.</li>
          <li><strong>Book 6 (the black book)</strong> — hidden right by your house. Check the house perimeter carefully. This is the one that decides your ending.</li>
        </ol>
        <p>
          Tip: don&apos;t wait for the final night — <strong>explore and learn the map on days 1–2</strong> while you gather wood and stone.
          When the book hunt starts, you&apos;ll already know every landmark.
        </p>

        <h2>Final Night: The Good Ending Sequence</h2>
        <ol>
          <li>Collect all 6 books. Double-check the count.</li>
          <li>Put <strong>Verity on the couch</strong> (this seems to help with the freeze bug).</li>
          <li>Go to sleep. If the cutscene doesn&apos;t trigger — <strong>rejoin and retry</strong> (known bug, see FAQ).</li>
          <li>Verity tells you he found something → follow him to the <strong>second (middle) building</strong> and head <strong>down into the lab</strong>.</li>
          <li>In the lab, choose <strong>room number 3</strong> (you have no real choice — it&apos;s the only one that matters).</li>
          <li>Use your <strong>pickaxe</strong> to break the rock wall, revealing the hidden <strong>black room</strong>.</li>
          <li>Inside you&apos;ll find the <strong>anchor</strong> — &quot;every world where I inhabit has one; it anchors me to the instance.&quot; Destroy it.</li>
          <li>Good Ending unlocked. 🏅</li>
        </ol>

        <h2>Bad Ending (for completionists)</h2>
        <p>
          Want both badges? Do a fast second run: rush the story, deliberately skip at least one book, then enter the house
          on the final night. The Bad Ending badge unlocks immediately.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
