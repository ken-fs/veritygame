import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios passed 15.8M visits in 26 days — trading #2 with Survive Verity in Area 51 while Steal A Verity! holds #1 past 500K favorites. A field of cash boxes, incredibly rare finds, and a smiley sphere watching. Tracked daily.",
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
        "Verity's Game is a box-hunting collection game by Slime Time Studios (released September 4, 2026). A big field of boxes generates cash, some boxes are 'incredibly extremely rare', and the official description jokingly warns you to leave them alone. It passed 15.8 million visits in 26 days; concurrent players peaked above 9,200 on Sept 19 and sit around 2,600 as of Sept 30 — Steal A Verity! (8.3K online, 535K favorites after back-to-back [BOSS] updates) remains the most-played Verity game on Roblox, with Survive Verity in Area 51 (~2,700 online, 58.9M visits) the surprise #2.",
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
          <div><span className="text-gray-500">Status:</span> <strong className="text-green-600">#3 Verity game — 2.6K online, 15.8M visits, 55.0K favorites (Steal A Verity! #1 at 8.3K/535K favs; Area 51 edges #2 at 2.7K)</strong></div>
          <div><span className="text-gray-500">Genre:</span> <strong>Box-hunting / collection (horror-comedy wink)</strong></div>
          <div><span className="text-gray-500">Released:</span> <strong>September 4, 2026 (updated Sept 26)</strong></div>
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
          The numbers are real: released September 4, 2026, it passed <strong>15.8 million visits</strong> in 26 days;
          concurrent players peaked above <strong>9,200</strong> on Sept 19 and sit at ~2,600 as of Sept 30 (Roblox
          public API snapshot) — on tiny 5-player servers. Steal A Verity! answered with back-to-back [BOSS] updates
          on Sept 24 and 27 and pulled away to ~8,300 online, crossing 500K favorites (535K on 13.5M visits), while
          Build Base&apos;s Sept 28/29 updates faded fast (~2,300 online). And the discovery of the week:{' '}
          <strong>Survive Verity in Area 51</strong> — 58.9M visits and 2.23M favorites, the most-visited and
          most-favorited Verity game on Roblox — was sitting in plain sight at ~2,700 concurrent, edging
          Verity&apos;s Game out of #2.
          Slime Time Studios is a verified group with 4.5M+ members; the game links{' '}
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
          <li><strong>Escape Verity</strong> — Mind Blowing Productions — escape-format spinoff; Chapter 3 released August 2026 (full Ch1–3 walkthroughs already on YouTube). A &quot;Beat Chapter 4&quot; badge appeared on the Roblox badge API on Sept 19 with zero awards so far, and the game updated Sept 29 — Chapter 4 itself is not confirmed live.</li>
          <li><strong>Build Base to Survive VERITY</strong> — base-defense spinoff where Verity attacks at night; the only Verity-universe game with <a href="/codes">working codes</a>.</li>
          <li><strong>Verity Companion [AI]</strong> — buzzword games — chat-focused spinoff; its Update 1 raised the message cap to 40 and added a new ending, and the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update (official description + live badge API, Sept 2026).</li>
          <li><strong>Verity Part 2</strong> — Umek0 Games — fan-made story continuation; its Part 2 update landed August 2026 with full walkthroughs already on YouTube. Not an official sequel — The ROBO Studio! has announced no Chapter 2 for the original.</li>
        </ul>
        <h2>How Verity&apos;s Game Compares (Live Roblox Data)</h2>
        <p className="not-prose text-sm text-gray-500">
          All ten Verity-named Roblox games, ranked by concurrent players. Snapshot from the Roblox games API, Sept 30 2026 (Verity [REALISTIC] has gone private and shows no players) —{' '}
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
                { name: 'Steal A Verity!', creator: 'Steal A Verity!', playing: '8,342', visits: '13.5M', favs: '535.0K' },
                { name: 'Survive Verity in Area 51', creator: 'Mochi Productions!', playing: '2,661', visits: '58.9M', favs: '2.23M' },
                { name: "Verity's Game", creator: 'Slime Time Studios', playing: '2,566', visits: '15.8M', favs: '55.0K' },
                { name: 'Build Base to Survive VERITY', creator: "Danvd's Larpductions", playing: '2,261', visits: '28.7M', favs: '54.8K' },
                { name: 'Is It Verity?', creator: 'Prince Creations', playing: '1,664', visits: '2.5M', favs: '7.7K' },
                { name: 'Verity Companion [AI]', creator: 'buzzword games', playing: '364', visits: '33.0M', favs: '103.6K' },
                { name: 'Verity [HORROR]', creator: 'Specter Development', playing: '264', visits: '20.3M', favs: '49.6K' },
                { name: 'Verity RP', creator: 'RP', playing: '243', visits: '14.0M', favs: '155.2K' },
                { name: 'Verity™ (the original)', creator: 'The ROBO Studio!', playing: '23', visits: '28.6M', favs: '78.0K' },
                { name: 'Verity [REALISTIC]', creator: 'Fredbear Holds Neighbors', playing: 'private', visits: '28.5M', favs: '63.7K' },
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
          The striking takeaway: the original <strong>Verity™</strong> has cooled to under 30 concurrent players
          while <strong>Steal A Verity!</strong> — after back-to-back [BOSS] updates on Sept 24 and 27 — holds #1 at
          ~8.3K players and blew past 500K favorites (535K and climbing on 13.5M visits). But the real story is{' '}
          <strong>Survive Verity in Area 51</strong>: 58.9M visits and 2.23M favorites make it the most-visited and
          most-favorited game in the ecosystem — double the original on visits — yet it has zero badges and zero
          guide coverage, and every &quot;Verity games&quot; list (ours included) missed it until now.{' '}
          <strong>Build Base to Survive VERITY</strong>&apos;s Sept 28/29 updates faded within a day each (~2,300),
          and newcomer <strong>Is It Verity?</strong> (1v1 pattern duel, launched Sept 13) is already at ~1,700
          concurrent. Verity&apos;s Game still adds visits faster than any spinoff
          (15.8M in 26 days) — which is why this page tracks the whole ecosystem, not just the original.
        </p>

        <h2>What We&apos;re Tracking</h2>
        <p>
          No guide, wiki or video coverage of Verity&apos;s Game mechanics exists anywhere yet (source-checked Sept 30).
          These are the open questions — <strong>unverified, we publish nothing until confirmed</strong>:
        </p>
        <ul>
          <li><strong>Box tiers &amp; odds</strong> — tier names beyond normal vs &ldquo;incredibly extremely rare&rdquo;, cash amounts, rarity rates</li>
          <li><strong>The smiley sphere</strong> — what the giant yellow face in the artwork actually does in gameplay</li>
          <li><strong>Stealing</strong> — whether other players can take your boxes, &ldquo;Steal An Egg&rdquo; style</li>
          <li><strong>Codes</strong> — none confirmed for either game; checked daily (see <a href="/codes">codes status</a>)</li>
          <li><strong>Updates</strong> — last game update Sept 26, 2026 (the third in a week, after Sept 21 and 24): no description change, still zero badges (live badge API, Sept 30) and no official changelog — contents still undocumented; new content drops land here first</li>
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
