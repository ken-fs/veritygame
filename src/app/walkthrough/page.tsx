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
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
