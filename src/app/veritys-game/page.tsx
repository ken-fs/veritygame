import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios passed 17.9M visits and updated a fourth time Oct 9 (still zero badges) while Escape Verity's Chapter 4 badge stays unwired, Verity Battles doubles past 423K visits, and Area 51 pushes a second straight Halloween-tease update. A field of cash boxes, incredibly rare finds, and a smiley sphere watching. Tracked daily.",
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
        "Verity's Game is a box-hunting collection game by Slime Time Studios (released September 4, 2026). A big field of boxes generates cash, some boxes are 'incredibly extremely rare', and the official description jokingly warns you to leave them alone. It passed 17.9 million visits and updated again on Oct 9 — its fourth update since Sept 26 (still zero badges, no codes); concurrent players peaked above 9,200 on Sept 19, cooled to ~810 mid-week and bounced back to ~1,200 after the update (#6). Steal A Verity! (~9,900 online, 937K favorites on 30.6M visits) is the most-played Verity game on Roblox, ahead of Survive Verity in Area 51 (~2,100, second straight Halloween-tease update), Is It Verity? (~2,000), Build Base to Survive VERITY (~1,600) and Verity Battles (~1,350)."
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
          <div><span className="text-gray-500">Status:</span> <strong className="text-green-600">#6 Verity game — 1,198 online, 18.0M visits, 60.4K favorites (Steal A Verity! #1 at 9.9K/937K favs; Area 51 #2 at 2.1K with a second straight [🎃SOON] update)</strong></div>
          <div><span className="text-gray-500">Genre:</span> <strong>Box-hunting / collection (horror-comedy wink)</strong></div>
          <div><span className="text-gray-500">Released:</span> <strong>September 4, 2026 (latest update Oct 9 — fourth since Sept 26)</strong></div>
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
          The numbers are real: released September 4, 2026, it passed <strong>18.0 million visits</strong> in 35 days;
          concurrent players peaked above <strong>9,200</strong> on Sept 19, cooled to ~810 mid-week and bounced back to
          ~1,200 as of Oct 9 (Roblox public API snapshot) — on tiny 5-player servers. It updated again on{' '}
          <strong>Oct 9 (00:11 UTC)</strong>, the fourth update since Sept 26 — still zero badges, no codes, no
          description change, no changelog. Steal A Verity! rebounded too: back up to ~9,900 online (from a 7.3K
          mid-week low) with visits exploding from 18.9M to <strong>30.6M in six days, 937K favorites</strong>. And the
          one to watch:{' '}
          <strong>Survive Verity in Area 51</strong> — 62.5M visits and 2.31M favorites, the most-visited and
          most-favorited Verity game on Roblox — swapped its [⏰SOON]🚪 tag for <strong>[🎃SOON]</strong> and has now
          updated two days running (Oct 8 and Oct 9, 03:17 UTC): whatever is behind that door is a Halloween event,
          and it has climbed back to the ecosystem&apos;s #2 at ~2,100 online.
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
          <li><strong>Escape Verity</strong> — Mind Blowing Productions — escape-format spinoff; <strong>Chapter 4 is now live</strong>: the game renamed to &quot;[C4] ESCAPE VERITY 🔑&quot; with its Oct 3 update (12:31 UTC), and full Chapter 1–4 walkthroughs hit YouTube within days (Dragonsubmann, Oct 2; El Mishi Triste, Oct 6 — ending included). Odd detail: the &quot;Beat Chapter 4&quot; badge (on the badge API since Sept 19) still shows <strong>zero awards</strong> as of Oct 9 despite finished walkthroughs — the badge looks unwired, and the &quot;Total Chaos Ending&quot; badge has never been awarded either. 12.4M visits, 189K favorites.</li>
          <li><strong>Build Base to Survive VERITY</strong> — base-defense spinoff where Verity attacks at night; seven <a href="/codes">working codes</a> tracked daily.</li>
          <li><strong>Verity Battles</strong> — SMOOF Games — catch-and-battle spinoff launched Sept 17 (67 Verities, 6 zones, Meadow to Cosmic Rift; ~1,350 online — more than doubled in a week — 423K visits, 26.8K favorites, updated Oct 8). The second Verity game with a real code system — its official description prints <a href="/codes">CODES: RELEASE, VERITY</a>.</li>
          <li><strong>Verity Companion [AI]</strong> — buzzword games — chat-focused spinoff; its Update 1 raised the message cap to 40 and added a new ending, and the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update. Its Oct 2 update then added three more badges — BACKUP COMPLETE, Out of Mind, Out of Sight and ESCAPE SUBJECT (now being earned — ~800–1,100 awards each by Oct 9, consistent with a new escape-flavored ending path) — taking the list to 13 — and its Oct 6 update added a 14th, TEST SUBJECT, which went live within days (79 awards by Oct 9; live badge API).</li>
          <li><strong>Verity Part 2</strong> — Umek0 Games — fan-made story continuation; its Part 2 update landed August 2026 with full walkthroughs already on YouTube. Not an official sequel — The ROBO Studio! has announced no Chapter 2 for the original.</li>
        </ul>
        <h2>How Verity&apos;s Game Compares (Live Roblox Data)</h2>
        <p className="not-prose text-sm text-gray-500">
          All twelve Verity-named Roblox games we track, ranked by concurrent players. Snapshot from the Roblox games API, Oct 9 2026 (Verity [REALISTIC] has gone private and shows no players) —{' '}
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
                { name: 'Steal A Verity!', creator: 'Steal A Verity!', playing: '9,946', visits: '30.6M', favs: '937.6K' },
                { name: 'Survive Verity in Area 51', creator: 'Mochi Productions!', playing: '2,114', visits: '62.5M', favs: '2.31M' },
                { name: 'Is It Verity?', creator: 'Prince Creations', playing: '1,995', visits: '7.9M', favs: '25.9K' },
                { name: 'Build Base to Survive VERITY', creator: "Danvd's Larpductions", playing: '1,561', visits: '31.1M', favs: '59.5K' },
                { name: 'Verity Battles', creator: 'SMOOF Games', playing: '1,346', visits: '423K', favs: '26.8K' },
                { name: "Verity's Game", creator: 'Slime Time Studios', playing: '1,198', visits: '18.0M', favs: '60.4K' },
                { name: 'Verity Companion [AI]', creator: 'buzzword games', playing: '394', visits: '34.1M', favs: '107.6K' },
                { name: 'Verity [HORROR]', creator: 'Specter Development', playing: '247', visits: '21.0M', favs: '51.5K' },
                { name: 'Verity RP', creator: 'RP', playing: '223', visits: '14.6M', favs: '160.0K' },
                { name: 'Escape Verity', creator: 'Mind Blowing Productions', playing: '60', visits: '12.4M', favs: '189.4K' },
                { name: 'Verity™ (the original)', creator: 'The ROBO Studio!', playing: '19', visits: '28.6M', favs: '78.2K' },
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
          The striking takeaway: the original <strong>Verity™</strong> sits at ~20 concurrent players
          while <strong>Steal A Verity!</strong> holds #1 at ~9,900 — rebounding from its mid-week 7.3K low, with visits
          exploding from 18.9M to <strong>30.6M in six days</strong> and 937K favorites. The mid-week cool-down has
          reversed across the board: <strong>Verity&apos;s Game</strong> bounced +47% to ~1,200 right after its fourth
          update (Oct 9), and <strong>Verity Battles</strong> (SMOOF Games) more than doubled in a week to ~1,350 online
          and 423K visits — the ecosystem&apos;s #5. <strong>Survive Verity in Area 51</strong> — still the
          most-visited and most-favorited game in the ecosystem at 62.5M / 2.31M — is back at #2 with{' '}
          <strong>two straight daily updates</strong> behind its [🎃SOON] tag: a Halloween event looks imminent.
          <strong>Escape Verity</strong>&apos;s Chapter 4 is a week old and its badge still shows zero awards — unwired.
          This page tracks the whole ecosystem, not just the original.
        </p>

        <h2>What We&apos;re Tracking</h2>
        <p>
          No guide, wiki or video coverage of Verity&apos;s Game mechanics exists anywhere yet (source-checked Oct 9).
          These are the open questions — <strong>unverified, we publish nothing until confirmed</strong>:
        </p>
        <ul>
          <li><strong>Box tiers &amp; odds</strong> — tier names beyond normal vs &ldquo;incredibly extremely rare&rdquo;, cash amounts, rarity rates</li>
          <li><strong>The smiley sphere</strong> — what the giant yellow face in the artwork actually does in gameplay</li>
          <li><strong>Stealing</strong> — whether other players can take your boxes, &ldquo;Steal An Egg&rdquo; style</li>
          <li><strong>Codes</strong> — none confirmed for either game; checked daily (see <a href="/codes">codes status</a>)</li>
          <li><strong>Updates</strong> — last game update Oct 9, 2026 (00:11 UTC), the fourth since Sept 26: no description change, still zero badges (live badge API, Oct 9) and no official changelog — contents still undocumented; new content drops land here first</li>
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
