import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios sits at 19.3M visits (~875 concurrent, still zero badges, no codes) while Steal A Verity! passes 44M visits under its [4X] title, and Area 51's Part 2 update landed Oct 17 with its [⏰SOON] tease back. Tracked daily.",
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
        "Verity's Game is a box-hunting collection game by Slime Time Studios (released September 4, 2026). A big field of boxes generates cash, some boxes are 'incredibly extremely rare', and the official description jokingly warns you to leave them alone. It passed 19 million visits; its Oct 10 update — the fifth since Sept 26 — changed nothing visible (still zero badges, no codes), and concurrent players sit around ~875 as of Oct 17. Steal A Verity! (~12,300 online, 1.20M favorites on 44.4M visits, title now [4X]) is the most-played Verity game on Roblox, ahead of Survive Verity in Area 51 (~3,100 — its Part 2 update landed Oct 17 and the title flipped back to a [⏰SOON] door tease), Build Base to Survive VERITY (~1,300), Is It Verity? (~900) and Verity Battles (~770)."
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
          <div><span className="text-gray-500">Status:</span> <strong className="text-green-600">#5 Verity game — ~875 online, 19.3M visits, 63.7K favorites (Steal A Verity! #1 at 12.3K/1.20M favs with its [4X] update; Area 51 #2 at 3.1K — Part 2 update landed Oct 17)</strong></div>
          <div><span className="text-gray-500">Genre:</span> <strong>Box-hunting / collection (horror-comedy wink)</strong></div>
          <div><span className="text-gray-500">Released:</span> <strong>September 4, 2026 (latest update Oct 10 — fifth since Sept 26)</strong></div>
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
          The numbers are real: released September 4, 2026, it passed <strong>19 million visits</strong> in 41 days;
          concurrent players peaked above <strong>9,200</strong> on Sept 19, bottomed near 755 and sit around{' '}
          <strong>~875</strong> as of Oct 17 (Roblox public API snapshot) — on tiny 5-player servers. Its last update landed{' '}
          <strong>Oct 10 (23:10 UTC)</strong>, the fifth since Sept 26 — still zero badges, no codes, no
          description change, no changelog. Steal A Verity! keeps accelerating: visits exploding from 18.9M to{' '}
          <strong>44.4M in under three weeks, with favorites at 1.20M</strong> — its Oct 14 update re-titled
          the game <strong>[4X]</strong> (a luck multiplier event), and it is up to ~12,300 online. And the
          one to watch:{' '}
          <strong>Survive Verity in Area 51</strong> — 65.2M visits and 2.36M favorites, the most-visited and
          most-favorited Verity game on Roblox — has launched its Halloween event: after a week of{' '}
          [⏰SOON]/[🎃SOON] door teases the title flipped to <strong>[🎃HALLOWITY]</strong> with the Oct 10 update —
          Halloween map, candy currency from pumpkin Verities, an event shop and the game&apos;s first-ever code
          (<a href="/codes">Halloween2026</a>). Part two landed <strong>today, Oct 17 (03:35 UTC)</strong> — and in the
          same tease pattern that preceded the event launch, the title flipped back to <strong>[⏰SOON]🚪</strong> while
          concurrent players doubled to <strong>~3,100</strong>; the description is unchanged, so boss names Hollow
          Witty and Witchy remain creator-reported until footage confirms them. It holds the ecosystem #2.
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
          <li><strong>Escape Verity</strong> — Mind Blowing Productions — escape-format spinoff; <strong>Chapter 4 is the finale</strong>: the game renamed to &quot;[C4] ESCAPE VERITY 🔑&quot; with its Oct 3 update (12:31 UTC), and full Chapter 1–4 walkthroughs hit YouTube within days (Dragonsubmann, Oct 2; El Mishi Triste, Oct 6 — ending included). Odd detail: the &quot;Beat Chapter 4&quot; badge (on the badge API since Sept 19) still shows <strong>zero awards</strong> as of Oct 15 despite finished walkthroughs — the badge looks unwired, and the &quot;Total Chaos Ending&quot; badge has never been awarded either. 12.5M visits, 190K favorites.</li>
          <li><strong>Build Base to Survive VERITY</strong> — base-defense spinoff where Verity attacks at night; seven <a href="/codes">working codes</a> tracked daily.</li>
          <li><strong>Verity Battles</strong> — SMOOF Games — catch-and-battle spinoff launched Sept 17 (67 Verities, 6 zones, Meadow to Cosmic Rift; ~765 online, 1.49M visits, 74.7K favorites, updated Oct 17). One of two Verity games with a permanent code system — its official description prints <a href="/codes">CODES: RELEASE, VERITY</a> and also lists training at a gaming PC plus a &quot;Verity Blocks&quot; bonus-XP minigame.</li>
          <li><strong>Verity Companion [AI]</strong> — buzzword games — chat-focused spinoff; its Update 1 raised the message cap to 40 and added a new ending, and the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update. Its Oct 2 update then added three more badges — BACKUP COMPLETE, Out of Mind, Out of Sight and ESCAPE SUBJECT (now being earned — ~1,220–1,600 awards each by Oct 15, consistent with a new escape-flavored ending path) — taking the list to 13 — and its Oct 6 update added a 14th, TEST SUBJECT, which went live within days (572 awards by Oct 15; live badge API).</li>
          <li><strong>Verity Part 2</strong> — Umek0 Games — fan-made story continuation; its Part 2 update landed August 2026 with full walkthroughs already on YouTube. Not an official sequel — The ROBO Studio! has announced no Chapter 2 for the original.</li>
          <li><strong>Verity&apos;s Story</strong> — elxyr — fan-made story horror inspired by Thatmob&apos;s original concept with a backrooms, liminal feel; six badge-tracked levels (115K+ have finished LEVEL 6) plus a secret badge. 6.7M visits since its June 22 launch, but dormant: no update since Aug 1 and effectively zero concurrent players (Oct 15).</li>
        </ul>
        <h2>How Verity&apos;s Game Compares (Live Roblox Data)</h2>
        <p className="not-prose text-sm text-gray-500">
          All thirteen Verity-named Roblox games we track, ranked by concurrent players. Snapshot from the Roblox games API, Oct 17 2026 (Verity [REALISTIC] has gone private and shows no players) —{' '}
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
                { name: 'Steal A Verity!', creator: 'Steal A Verity!', playing: '12,310', visits: '44.4M', favs: '1.20M' },
                { name: 'Survive Verity in Area 51', creator: 'Mochi Productions!', playing: '3,136', visits: '65.2M', favs: '2.36M' },
                { name: 'Build Base to Survive VERITY', creator: "Danvd's Larpductions", playing: '1,327', visits: '32.4M', favs: '62.0K' },
                { name: 'Is It Verity?', creator: 'Prince Creations', playing: '907', visits: '10.9M', favs: '35.0K' },
                { name: "Verity's Game", creator: 'Slime Time Studios', playing: '875', visits: '19.3M', favs: '63.7K' },
                { name: 'Verity Battles', creator: 'SMOOF Games', playing: '765', visits: '1.49M', favs: '74.7K' },
                { name: 'Verity Companion [AI]', creator: 'buzzword games', playing: '500', visits: '35.2M', favs: '111.6K' },
                { name: 'Verity [HORROR]', creator: 'Specter Development', playing: '380', visits: '21.6M', favs: '53.0K' },
                { name: 'Verity RP', creator: 'RP', playing: '252', visits: '15.1M', favs: '163.4K' },
                { name: 'Escape Verity', creator: 'Mind Blowing Productions', playing: '71', visits: '12.5M', favs: '189.7K' },
                { name: 'Verity™ (the original)', creator: 'The ROBO Studio!', playing: '31', visits: '28.7M', favs: '78.3K' },
                { name: "Verity's Story", creator: 'elxyr', playing: '4', visits: '6.7M', favs: '12.2K' },
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
          The striking takeaway: the original <strong>Verity™</strong> sits at ~31 concurrent players
          while <strong>Steal A Verity!</strong> holds #1 at ~12,300 — visits at <strong>44.4M</strong> (more than
          double Verity&apos;s Game) and favorites past <strong>1.20M</strong>, re-titled <strong>[4X]</strong> with its
          Oct 14 update. Today&apos;s story is{' '}
          <strong>Survive Verity in Area 51</strong> — still the most-visited and most-favorited game in the
          ecosystem at 65.2M / 2.36M — whose Halloween event <strong>HALLOWITY</strong> went live Oct 10:
          candy currency, an event shop, weapon-skin crates and the game&apos;s first code; part two
          landed Oct 17 (03:35 UTC) with the title back to a [⏰SOON] tease and players doubled to ~3,100.
          <strong>Verity Battles</strong> kept climbing too:
          1.49M visits and 74.7K favorites, with its own update landing Oct 17.
          <strong>Verity&apos;s Game</strong> sits
          around ~875 after its fifth update (Oct 10) — still zero badges and no codes.
          <strong>Escape Verity</strong>&apos;s Chapter 4 badge still shows zero awards — unwired.
          This page tracks the whole ecosystem, not just the original.
        </p>

        <h2>What We&apos;re Tracking</h2>
        <p>
          No guide, wiki or video coverage of Verity&apos;s Game mechanics exists anywhere yet (source-checked Oct 17).
          These are the open questions — <strong>unverified, we publish nothing until confirmed</strong>:
        </p>
        <ul>
          <li><strong>Box tiers &amp; odds</strong> — tier names beyond normal vs &ldquo;incredibly extremely rare&rdquo;, cash amounts, rarity rates</li>
          <li><strong>The smiley sphere</strong> — what the giant yellow face in the artwork actually does in gameplay</li>
          <li><strong>Stealing</strong> — whether other players can take your boxes, &ldquo;Steal An Egg&rdquo; style</li>
          <li><strong>Codes</strong> — none confirmed for either game; checked daily (see <a href="/codes">codes status</a>)</li>
          <li><strong>Updates</strong> — last game update Oct 10, 2026 (23:10 UTC), the fifth since Sept 26: no description change, still zero badges (live badge API, Oct 17) and no official changelog — contents still undocumented; new content drops land here first</li>
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
