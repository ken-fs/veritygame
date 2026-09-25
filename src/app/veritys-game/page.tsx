import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios passed 13M visits in three weeks — the #2 Verity game, rebounding after its Sept 24 update while Steal A Verity! holds #1. A field of cash boxes, incredibly rare finds, and a smiley sphere watching. Tracked daily.",
  keywords: ["verity's game", "verity's game roblox", "veritys game", "verity game roblox", "new verity game", "verity's game boxes", "verity's game gameplay"],
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
        "Verity's Game is a box-hunting collection game by Slime Time Studios (released September 4, 2026). A big field of boxes generates cash, some boxes are 'incredibly extremely rare', and the official description jokingly warns you to leave them alone. It passed 13 million visits in three weeks; concurrent players peaked above 9,200 on Sept 19, cooled to around 3,600, then rebounded to ~4,900 after a Sept 24 update on 5-player servers — Steal A Verity! (6.0K online after its own Sept 24 [BOSS] update) remains the most-played Verity game on Roblox.",
    },
    {
      question: "Is Verity's Game the same as Verity?",
      answer:
        "No. The original Verity is a 3-day survival horror game by The ROBO Studio!. Verity's Game is a separate box-hunting title by Slime Time Studios riding the same hype — different gameplay, different developer. The original's badge and ending guides are on this site.",
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity&apos;s Game</h1>
      <p className="text-gray-500 mb-8">The trending new entry in the Verity universe — tracked {getCurrentDateString()}.</p>

      <div className="p-5 rounded-xl border border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20 mb-8">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><span className="text-gray-500">Developer:</span> <strong>Slime Time Studios (verified group, 4.5M+ members)</strong></div>
          <div><span className="text-gray-500">Status:</span> <strong className="text-green-600">#2 Verity game — 4.9K online, 13.2M+ visits, 47.6K favorites (Steal A Verity! holds #1 after its Sept 24 [BOSS] update)</strong></div>
          <div><span className="text-gray-500">Genre:</span> <strong>Box-hunting / collection (horror-comedy wink)</strong></div>
          <div><span className="text-gray-500">Released:</span> <strong>September 4, 2026 (updated Sept 24)</strong></div>
          <div><span className="text-gray-500">Servers:</span> <strong>5 players</strong></div>
          <div><span className="text-gray-500">Codes:</span> <strong>None confirmed (checked daily)</strong></div>
        </div>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>What We Know</h2>
        <p>
          Despite the name, Verity&apos;s Game is <strong>not a horror game like the original</strong> — it&apos;s a
          box-hunting collection game riding the Verity hype wave. The entire official description reads:
        </p>
        <blockquote>
          &ldquo;Welcome to my game where nothing bad will happen and there&apos;s a big field full of boxes that are all
          mine so leave them alone even though they make you cash and even though some of them are incredibly
          extremely rare just leave them alone. 🙂&rdquo;
        </blockquote>
        <p>
          Reading between the 🙂: the map is a <strong>big field of boxes</strong> that generate cash, some boxes are
          <strong> incredibly extremely rare</strong>, and you&apos;re officially told to leave them alone — the community
          sums it up as <em>&ldquo;Steal An Egg but Verity&rdquo;</em>. The official artwork shows a giant yellow
          smiley-face sphere looming over a tiny player, watching its boxes.
        </p>
        <p>
          The numbers are real: released September 4, 2026, it passed <strong>13 million visits</strong> in three
          weeks; concurrent players peaked above <strong>9,200</strong> on Sept 19, cooled to ~3,600, then rebounded
          to ~4,900 after a second update in a week landed on Sept 24 (Roblox public API snapshot, Sept 25) — on
          tiny 5-player servers. Steal A Verity! answered with a [BOSS] update of its own the same day and holds
          the #1 spot at ~6,000 online — Verity&apos;s Game remains #2. Slime Time Studios is a verified group with
          4.5M+ members; the game links{' '}
          <strong>no official Discord, Trello or social channels</strong> yet.
        </p>
        <p>
          Playing the original horror game instead? Start with the <a href="/walkthrough">full walkthrough</a> and the{' '}
          <a href="/badges">badge guide</a>.
        </p>
        <h2>The Verity Universe</h2>
        <ul>
          <li><strong>Verity™</strong> — The ROBO Studio! — the original (28M+ visits). <a href="/badges">Badges</a> · <a href="/good-ending">Good Ending</a></li>
          <li><strong>Verity&apos;s Game</strong> — Slime Time Studios — the trending new entry (this page).</li>
          <li><strong>Escape Verity</strong> — Mind Blowing Productions — escape-format spinoff; Chapter 3 released August 2026 (full Ch1–3 walkthroughs already on YouTube).</li>
          <li><strong>Build Base to Survive VERITY</strong> — base-defense spinoff where Verity attacks at night; the only Verity-universe game with <a href="/codes">working codes</a>.</li>
          <li><strong>Verity Companion [AI]</strong> — buzzword games — chat-focused spinoff; its Update 1 raised the message cap to 40 and added a new ending (official game description, Sept 2026).</li>
          <li><strong>Verity Part 2</strong> — Umek0 Games — fan-made story continuation; its Part 2 update landed August 2026 with full walkthroughs already on YouTube. Not an official sequel — The ROBO Studio! has announced no Chapter 2 for the original.</li>
        </ul>
        <h2>How Verity&apos;s Game Compares (Live Roblox Data)</h2>
        <p className="not-prose text-sm text-gray-500">
          All eight Verity-named Roblox games, ranked by concurrent players. Snapshot from the Roblox games API, Sept 25 2026 —{' '}
          <a href="/which-verity" className="underline">full comparison with what each game is</a>.
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Game</th>
                <th className="py-2 pr-3">Creator</th>
                <th className="py-2 pr-3">Playing</th>
                <th className="py-2 pr-3">Visits</th>
                <th className="py-2">Favorites</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Steal A Verity!', creator: 'Steal A Verity!', playing: '6,018', visits: '6.5M', favs: '318K' },
                { name: "Verity's Game", creator: 'Slime Time Studios', playing: '4,870', visits: '13.2M', favs: '47.6K' },
                { name: 'Build Base to Survive VERITY', creator: "Danvd's Larpductions", playing: '3,192', visits: '26.2M', favs: '50.3K' },
                { name: 'Verity Companion [AI]', creator: 'buzzword games', playing: '531', visits: '32.1M', favs: '100.6K' },
                { name: 'Verity [REALISTIC]', creator: 'Fredbear Holds Neighbors', playing: '474', visits: '28.5M', favs: '63.7K' },
                { name: 'Verity RP', creator: 'RP', playing: '347', visits: '13.5M', favs: '151.8K' },
                { name: 'Verity [HORROR]', creator: 'Specter Development', playing: '289', visits: '19.7M', favs: '48.4K' },
                { name: 'Verity™ (the original)', creator: 'The ROBO Studio!', playing: '31', visits: '28.5M', favs: '77.9K' },
              ].map((g) => (
                <tr key={g.name} className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="py-2 pr-3 font-bold whitespace-nowrap">{g.name}</td>
                  <td className="py-2 pr-3 text-gray-500 whitespace-nowrap">{g.creator}</td>
                  <td className="py-2 pr-3 font-mono tabular">{g.playing}</td>
                  <td className="py-2 pr-3 font-mono tabular">{g.visits}</td>
                  <td className="py-2 font-mono tabular">{g.favs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          The striking takeaway: the original <strong>Verity™</strong> has cooled to under 100 concurrent players
          while <strong>Steal A Verity!</strong> — freshly updated with a [BOSS] patch on Sept 24 — surged to 6.0K
          players and 318K favorites (the most-favorited game in the ecosystem), keeping the #1 spot it took from{' '}
          <strong>Verity&apos;s Game</strong> on Sept 23. Verity&apos;s Game rebounded from ~3,600 to ~4,900 after its
          own Sept 24 update and still adds visits faster than any spinoff (13.2M in three weeks) — which is why
          this page tracks the whole ecosystem, not just the original.
        </p>

        <h2>What We&apos;re Tracking</h2>
        <p>
          No guide, wiki or video coverage of Verity&apos;s Game mechanics exists anywhere yet (source-checked Sept 25).
          These are the open questions — <strong>unverified, we publish nothing until confirmed</strong>:
        </p>
        <ul>
          <li><strong>Box tiers &amp; odds</strong> — tier names beyond normal vs &ldquo;incredibly extremely rare&rdquo;, cash amounts, rarity rates</li>
          <li><strong>The smiley sphere</strong> — what the giant yellow face in the artwork actually does in gameplay</li>
          <li><strong>Stealing</strong> — whether other players can take your boxes, &ldquo;Steal An Egg&rdquo; style</li>
          <li><strong>Codes</strong> — none confirmed for either game; checked daily (see <a href="/codes">codes status</a>)</li>
          <li><strong>Updates</strong> — last game update Sept 24, 2026 (the second in a week, after Sept 21): again no description change, no badges and no official changelog — contents still undocumented, but concurrent players rebounded ~35% the same day; new content drops land here first</li>
        </ul>
        <p>
          New to the sphere universe? The original&apos;s <a href="/walkthrough">3-day walkthrough</a> is the fastest
          way to understand the IP — same rules apply: don&apos;t trust a ball that knows everything.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
