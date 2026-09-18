import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Full Walkthrough (${getCurrentDateString()}) — 3-Day Survival Guide`,
  description:
    'Complete Verity walkthrough for Roblox: Day 1 house building, Day 2 mining and walls, the observation tower, surviving the final night, and every missable moment explained.',
  keywords: ['verity walkthrough', 'verity roblox walkthrough', 'verity full walkthrough', 'verity how to beat', 'verity day 3'],
  path: '/walkthrough',
});

export default function WalkthroughPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Walkthrough', url: '/walkthrough' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'How many days is Verity on Roblox?',
      answer:
        'Three in-game days. Day 1: build your house (wood). Day 2: mine rocks, build walls and the observation tower. Day 3: the final night — book hunt and your chosen ending.',
    },
    {
      question: 'What do you do on the final night in Verity?',
      answer:
        'Verity appears hostile — move slowly and watch for his twitch; getting too close makes him chase you (he cannot climb stairs — the tower is safe). Then collect the 6 books and enter the house with all 6 for the Good Ending, or fewer for the Bad Ending.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity Full Walkthrough</h1>
      <p className="text-gray-500 mb-8">Three days to prepare. One night that decides everything. Updated {getCurrentDateString()}.</p>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Day 1 — The Box &amp; Your House</h2>
        <ol>
          <li><strong>Open the box</strong> at your doorstep → meet Verity → 🏅 <em>I&apos;m Verity!</em> badge.</li>
          <li>Talk to Verity — he warns that <strong>something bad happens in 3 days</strong>.</li>
          <li>Grab the <strong>axe</strong> and chop trees: you need <strong>9 wood</strong> to build the house.</li>
          <li>Build the house, then go to sleep.</li>
          <li>💡 Easy badge: pick Verity up and <strong>throw him onto the bed</strong> a few times → 🏅 <em>Lovity</em>.</li>
        </ol>

        <h2>Day 2 — Pickaxe, Walls &amp; the Tower</h2>
        <ol>
          <li>You get a <strong>pickaxe</strong> — mine rocks behind the spawn area (<strong>10 rocks</strong> first).</li>
          <li>Build the <strong>walls</strong> (<strong>25 wood + 25 rock</strong>). There&apos;s a good rock deposit behind your house.</li>
          <li>Build the <strong>observation tower</strong> (another ~25 wood + 25 rock).</li>
          <li>💡 When told to go to bed, <strong>stay inside near Verity and AFK ~10 minutes</strong> → 🏅 <em>Bority</em>.</li>
          <li>💡 Explore: the <strong>third tower</strong> from your house has a blue orb inside → 🏅 <em>I&apos;m Falsity!</em> (<Link href="/characters">who is Falsity?</Link>)</li>
        </ol>

        <h2>Day 3 — The Final Night</h2>
        <ol>
          <li>Go up the tower stairs and try to sleep — <strong>Verity appears</strong>, faceless.</li>
          <li><strong>Move slowly and watch for his twitch.</strong> Get too close and he chases you. He <strong>cannot climb stairs</strong> — the tower is your safe spot.</li>
          <li>Run (or jump) home and start the <strong>book hunt</strong> — arrows mark most locations.</li>
          <li>Collect <strong>all 6 books</strong> — including the <strong>black book near the house</strong> — <em>before</em> entering the house. See the <Link href="/good-ending">Good Ending guide</Link> for all locations.</li>
          <li>Enter the house: 6 books → <strong>Good Ending</strong> path (lab → room 3 → pickaxe the wall → destroy the anchor). 5 or fewer → <strong>Bad Ending</strong>.</li>
        </ol>

        <h2>Speedrun / Second Run Tips</h2>
        <ul>
          <li>The game is short — a full run is well under an hour once you know the resource counts.</li>
          <li>Pre-farm wood and rock piles before each build prompt to skip waiting.</li>
          <li>For the Bad Ending run, skip books entirely and beeline the story.</li>
          <li>If the Good Ending cutscene won&apos;t trigger after sleeping: rejoin and put Verity on the couch first — it&apos;s a known bug.</li>
        </ul>

        <h2>Resource Checklist</h2>
        <p>
          Verity does not tell you how much you need until the build prompt appears. These are the confirmed counts —
          pre-farming them is the difference between a 25-minute run and an hour-long one:
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Build</th>
                <th className="py-2 pr-3">Wood</th>
                <th className="py-2 pr-3">Rock</th>
                <th className="py-2">Day</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">House</td>
                <td className="py-2 pr-3 font-mono tabular">9</td>
                <td className="py-2 pr-3 font-mono tabular">—</td>
                <td className="py-2">Day 1</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Walls</td>
                <td className="py-2 pr-3 font-mono tabular">25</td>
                <td className="py-2 pr-3 font-mono tabular">25</td>
                <td className="py-2">Day 2</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Observation tower</td>
                <td className="py-2 pr-3 font-mono tabular">~25</td>
                <td className="py-2 pr-3 font-mono tabular">~25</td>
                <td className="py-2">Day 2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          The first rock requirement is 10 rocks, and there is a strong deposit behind your house — the fastest mining
          spot on the map.
        </p>

        <h2>Missable Windows (Don&apos;t Skip These)</h2>
        <p>
          Three of the six badges are tied to specific moments that only exist once per run. Missing the window does
          not fail the game — it just means a second playthrough:
        </p>
        <ul>
          <li><strong>Day 1, at the box:</strong> open it to meet Verity → <em>I&apos;m Verity!</em>. Impossible to miss.</li>
          <li><strong>Day 1, in the house:</strong> pick Verity up and throw him onto the bed a few times → <em>Lovity</em>. This window closes once the story moves on.</li>
          <li><strong>Day 2, after the tower:</strong> when the game tells you to sleep, stay next to Verity and AFK ~10 minutes instead → <em>Bority</em>. This is the one people lose.</li>
          <li><strong>Day 2, third tower:</strong> the blue orb inside → <em>I&apos;m Falsity!</em>. Easy to walk past if you beeline the objective.</li>
          <li><strong>Day 3, before entering the house:</strong> all 6 books → <em>Good Ending</em>. Entering with 5 or fewer locks you into the Bad Ending permanently for that run.</li>
        </ul>

        <h2>Where Runs Actually Fail</h2>
        <ul>
          <li><strong>Getting too close to Verity on the final night.</strong> He chases you — and he cannot climb stairs, so the tower is your reset button. Run to it, wait for him to lose interest, then continue the book hunt.</li>
          <li><strong>Entering the house early.</strong> The book hunt has arrow markers, but the black book near the house has none. Players finish the hunt, assume they have six, and enter with five.</li>
          <li><strong>Sleeping without putting Verity on the couch.</strong> The Good Ending cutscene is known to freeze. The couch step is the confirmed workaround, and it costs you nothing.</li>
          <li><strong>Trying to get both endings in one run.</strong> You cannot. The Good Ending locks out the Bad Ending the moment you enter the house with all six books.</li>
        </ul>

        <h2>The Fastest 100% Route</h2>
        <p>
          If you want every badge with the minimum number of runs, do it in this order. It gets you five of the six in
          one playthrough and leaves the Bad Ending as a short second pass:
        </p>
        <ol>
          <li><strong>Day 1:</strong> open the box (<em>I&apos;m Verity!</em>), build the house, throw Verity on the bed (<em>Lovity</em>).</li>
          <li><strong>Day 2:</strong> mine, build walls and the tower, then AFK next to Verity for ~10 minutes when told to sleep (<em>Bority</em>). Detour to the third tower for the blue orb (<em>I&apos;m Falsity!</em>).</li>
          <li><strong>Day 3:</strong> collect all 6 books — including the black one by the house — put Verity on the couch, sleep, follow him to the lab, choose room 3, break the rock wall, destroy the anchor (<em>Good Ending</em>).</li>
          <li><strong>Second run:</strong> skip every book, rush the story, enter the house on the final night (<em>Bad Ending</em>). This run is fast — no gathering required beyond the scripted builds.</li>
        </ol>
        <p>
          Track your progress with the <Link href="/badges">badge checklist</Link>, which saves locally in your browser.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
