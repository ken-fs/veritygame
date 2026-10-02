import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios passed 16.4M visits and got its first update since Sept 26 (Oct 1, still zero badges) while Area 51 reclaims #2 with a second [SOON] tease. Steal A Verity! holds #1 past 620K favorites. A field of cash boxes, incredibly rare finds, and a smiley sphere watching. Tracked daily.",
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
        "Verity's Game is a box-hunting collection game by Slime Time Studios (released September 4, 2026). A big field of boxes generates cash, some boxes are 'incredibly extremely rare', and the official description jokingly warns you to leave them alone. It passed 16.4 million visits in 28 days and received its first update since Sept 26 on Oct 1 (still zero badges); concurrent players peaked above 9,200 on Sept 19 and cooled to ~1,900 as of Oct 2 (#5) — Steal A Verity! (11.2K online, 624K favorites) remains the most-played Verity game on Roblox, while Survive Verity in Area 51 reclaimed #2 (~3,000) with a second [SOON] tease update, ahead of Is It Verity? (~2,700)."
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
          <div><span className="text-gray-500">Status:</span> <strong className="text-green-600">#5 Verity game — 1.9K online, 16.4M visits, 56.6K favorites (Steal A Verity! #1 at 11.2K/624K favs; Area 51 reclaims #2 at 3.0K with a second [⏰SOON] tease)</strong></div>
          <div><span className="text-gray-500">Genre:</span> <strong>Box-hunting / collection (horror-comedy wink)</strong></div>
          <div><span className="text-gray-500">Released:</span> <strong>September 4, 2026 (updated Oct 1 — first since Sept 26)</strong></div>
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
          The numbers are real: released September 4, 2026, it passed <strong>16.4 million visits</strong> in 28 days;
          concurrent players peaked above <strong>9,200</strong> on Sept 19 and cooled to ~1,900 as of Oct 2 (Roblox
          public API snapshot) — on tiny 5-player servers. Steal A Verity! keeps pulling away: ~11,200 online after
          its back-to-back [BOSS] updates, crossing <strong>624K favorites on 16.9M visits — overtaking Verity&apos;s
          Game on total visits too</strong> — while Build Base&apos;s late-September updates faded fast (~2,400 online;
          its Oct 1 evening update added one new code, UPDATE67SPECIAL). And the one to watch:{' '}
          <strong>Survive Verity in Area 51</strong> — 59.7M visits and 2.25M favorites, the most-visited and
          most-favorited Verity game on Roblox — reclaimed the #2 spot at ~3,000 concurrent, updating a second time
          on Oct 2 (02:34 UTC) with its [⏰SOON]🚪…🔦 teaser still up: whatever is behind that door is getting close.
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
          <li><strong>Escape Verity</strong> — Mind Blowing Productions — escape-format spinoff; Chapter 3 released August 2026 (full Ch1–3 walkthroughs already on YouTube). A &quot;Beat Chapter 4&quot; badge appeared on the Roblox badge API on Sept 19 — still zero awards as of Oct 1 — and the game updated again Sept 30: Chapter 4 itself is not confirmed live.</li>
          <li><strong>Build Base to Survive VERITY</strong> — base-defense spinoff where Verity attacks at night; the only Verity-universe game with <a href="/codes">working codes</a>.</li>
          <li><strong>Verity Companion [AI]</strong> — buzzword games — chat-focused spinoff; its Update 1 raised the message cap to 40 and added a new ending, and the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update (official description + live badge API, Sept 2026).</li>
          <li><strong>Verity Part 2</strong> — Umek0 Games — fan-made story continuation; its Part 2 update landed August 2026 with full walkthroughs already on YouTube. Not an official sequel — The ROBO Studio! has announced no Chapter 2 for the original.</li>
        </ul>
        <h2>How Verity&apos;s Game Compares (Live Roblox Data)</h2>
        <p className="not-prose text-sm text-gray-500">
          All ten Verity-named Roblox games, ranked by concurrent players. Snapshot from the Roblox games API, Oct 2 2026 (Verity [REALISTIC] has gone private and shows no players) —{' '}
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
                { name: 'Steal A Verity!', creator: 'Steal A Verity!', playing: '11,236', visits: '16.9M', favs: '624.1K' },
                { name: 'Survive Verity in Area 51', creator: 'Mochi Productions!', playing: '2,996', visits: '59.7M', favs: '2.25M' },
                { name: 'Is It Verity?', creator: 'Prince Creations', playing: '2,675', visits: '3.6M', favs: '11.3K' },
                { name: 'Build Base to Survive VERITY', creator: "Danvd's Larpductions", playing: '2,431', visits: '29.2M', favs: '55.9K' },
                { name: "Verity's Game", creator: 'Slime Time Studios', playing: '1,927', visits: '16.4M', favs: '56.6K' },
                { name: 'Verity Companion [AI]', creator: 'buzzword games', playing: '429', visits: '33.2M', favs: '104.4K' },
                { name: 'Verity [HORROR]', creator: 'Specter Development', playing: '306', visits: '20.4M', favs: '49.9K' },
                { name: 'Verity RP', creator: 'RP', playing: '297', visits: '14.1M', favs: '156.3K' },
                { name: 'Verity™ (the original)', creator: 'The ROBO Studio!', playing: '31', visits: '28.6M', favs: '78.1K' },
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
          The striking takeaway: the original <strong>Verity™</strong> has cooled to ~30 concurrent players
          while <strong>Steal A Verity!</strong> holds #1 at ~11.2K players and blew past 624K favorites on 16.9M
          visits — now ahead of Verity&apos;s Game on total visits too. But the real story is{' '}
          <strong>Survive Verity in Area 51</strong>: 59.7M visits and 2.25M favorites make it the most-visited and
          most-favorited game in the ecosystem — double the original on visits — yet it has zero badges and zero
          guide coverage, and every &quot;Verity games&quot; list (ours included) missed it until now; after its Oct 1
          [⏰SOON]🚪 rename it updated a second time on Oct 2, teasing whatever is behind the door.{' '}
          <strong>Build Base to Survive VERITY</strong>&apos;s late-September updates faded within a day each (~2,400),
          and newcomer <strong>Is It Verity?</strong> (1v1 pattern duel, launched Sept 13) cooled from its 3.1K spike
          to ~2,700 — swapping places with Area 51 for #2/#3 and keeping Verity&apos;s Game at #5. The churn is
          exactly why this page tracks the whole ecosystem, not just the original.
        </p>

        <h2>What We&apos;re Tracking</h2>
        <p>
          No guide, wiki or video coverage of Verity&apos;s Game mechanics exists anywhere yet (source-checked Oct 2).
          These are the open questions — <strong>unverified, we publish nothing until confirmed</strong>:
        </p>
        <ul>
          <li><strong>Box tiers &amp; odds</strong> — tier names beyond normal vs &ldquo;incredibly extremely rare&rdquo;, cash amounts, rarity rates</li>
          <li><strong>The smiley sphere</strong> — what the giant yellow face in the artwork actually does in gameplay</li>
          <li><strong>Stealing</strong> — whether other players can take your boxes, &ldquo;Steal An Egg&rdquo; style</li>
          <li><strong>Codes</strong> — none confirmed for either game; checked daily (see <a href="/codes">codes status</a>)</li>
          <li><strong>Updates</strong> — last game update Oct 1, 2026 at 15:53 UTC, the first since Sept 26: no description change, still zero badges (live badge API, Oct 2) and no official changelog — contents still undocumented; new content drops land here first</li>
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
