import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios sits at 19.5M visits (~433 concurrent, still zero badges, no codes) while Steal A Verity! passes 48M visits under its new [UPD] tag, and Area 51's Halloween Part 2 is live — its first-ever badge, The Last Harvest, is being earned. Tracked daily.",
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
        "Verity's Game is a box-hunting collection game by Slime Time Studios (released September 4, 2026). A big field of boxes generates cash, some boxes are 'incredibly extremely rare', and the official description jokingly warns you to leave them alone. It passed 19 million visits; its Oct 10 update — the fifth since Sept 26 — changed nothing visible (still zero badges, no codes), and concurrent players sit around ~433 as of Oct 19. Steal A Verity! (~7,800 online, 1.25M favorites on 48.1M visits, re-titled [UPD] on Oct 18) is the most-played Verity game on Roblox, ahead of Survive Verity in Area 51 (~1,800 — its Halloween Part 2 is live: first-ever badge The Last Harvest is being earned and the title now reads [🎃HALLOWITY & WITCH]), Build Base to Survive VERITY (~620), Is It Verity? (~590) and Verity Battles (~290). First gameplay footage (Oct 2026) shows a strength stat you build to grab bigger boxes and a giant Verity guard that chases box thieves."
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
          concurrent players peaked above <strong>9,200</strong> on Sept 19, bottomed near 755 and slid to{' '}
          <strong>~433</strong> as of Oct 19 (Roblox public API snapshot) — on tiny 5-player servers. Its last update landed{' '}
          <strong>Oct 10 (23:10 UTC)</strong>, the fifth since Sept 26 — still zero badges, no codes, no
          description change, no changelog. Steal A Verity! keeps accelerating: visits exploding from 18.9M to{' '}
          <strong>48.1M in under four weeks, with favorites at 1.25M</strong> — after the Oct 14 [4X] event, its
          Oct 18 update re-titled the game <strong>[UPD]</strong> (advertising 44X-speed days), and it holds ~7,800 online. And the
          one to watch:{' '}
          <strong>Survive Verity in Area 51</strong> — 66.0M visits and 2.37M favorites, the most-visited and
          most-favorited Verity game on Roblox — has launched its Halloween event: after a week of{' '}
          [⏰SOON]/[🎃SOON] door teases the title flipped to <strong>[🎃HALLOWITY]</strong> with the Oct 10 update —
          Halloween map, candy currency from pumpkin Verities, an event shop and the game&apos;s first-ever code
          (<a href="/codes">Halloween2026</a>). Part two landed <strong>Oct 17 (03:35 UTC)</strong> — and this time it is confirmed:
          the game&apos;s <strong>first-ever badge, The Last Harvest</strong>, appeared on the badge API the same day
          (97K+ awards within two days), and on Oct 18 the title re-flipped to <strong>[🎃HALLOWITY &amp; WITCH]🚪</strong> with
          a x2-coins weekend line in the description; the official wiki names the Part 2 boss <strong>Witchity</strong>,
          a broom-riding spell caster unlocked by defeating 100 regular Hallowitys. It holds the ecosystem #2.
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
          <li><strong>Escape Verity</strong> — Mind Blowing Productions — escape-format spinoff; <strong>Chapter 4 is the finale</strong>: the game renamed to &quot;[C4] ESCAPE VERITY 🔑&quot; with its Oct 3 update (12:31 UTC), and full Chapter 1–4 walkthroughs hit YouTube within days (Dragonsubmann, Oct 2; El Mishi Triste, Oct 6 — ending included). Odd detail: the &quot;Beat Chapter 4&quot; badge (on the badge API since Sept 19) still shows <strong>zero awards</strong> as of Oct 19 — a full month in — despite finished walkthroughs, and the &quot;Total Chaos Ending&quot; badge has never been awarded either. 12.6M visits, 190K favorites.</li>
          <li><strong>Build Base to Survive VERITY</strong> — base-defense spinoff where Verity attacks at night; seven <a href="/codes">working codes</a> tracked daily.</li>
          <li><strong>Verity Battles</strong> — SMOOF Games — catch-and-battle spinoff launched Sept 17 (67 Verities, 6 zones, Meadow to Cosmic Rift; ~294 online, 1.62M visits, 78.5K favorites, updated Oct 17). One of two Verity games with a permanent code system — its official description prints <a href="/codes">CODES: RELEASE, VERITY</a> and also lists training at a gaming PC plus a &quot;Verity Blocks&quot; bonus-XP minigame.</li>
          <li><strong>Verity Companion [AI]</strong> — buzzword games — chat-focused spinoff; its Update 1 raised the message cap to 40 and added a new ending, and the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update. Its Oct 2 update then added three more badges — BACKUP COMPLETE, Out of Mind, Out of Sight and ESCAPE SUBJECT (now being earned — ~1,470–1,880 awards each by Oct 19, consistent with a new escape-flavored ending path) — taking the list to 13 — and its Oct 6 update added a 14th, TEST SUBJECT, which went live within days (799 awards by Oct 19; live badge API).</li>
          <li><strong>Verity Part 2</strong> — Umek0 Games — fan-made story continuation; its Part 2 update landed August 2026 with full walkthroughs already on YouTube. Not an official sequel — The ROBO Studio! has announced no Chapter 2 for the original.</li>
          <li><strong>Verity&apos;s Story</strong> — elxyr — fan-made story horror inspired by Thatmob&apos;s original concept with a backrooms, liminal feel; six badge-tracked levels (115K+ have finished LEVEL 6) plus a secret badge. 6.7M visits since its June 22 launch, but dormant: no update since Aug 1 and effectively zero concurrent players (Oct 19).</li>
        </ul>
        <h2>How Verity&apos;s Game Compares (Live Roblox Data)</h2>
        <p className="not-prose text-sm text-gray-500">
          All thirteen Verity-named Roblox games we track, ranked by concurrent players. Snapshot from the Roblox games API, Oct 19 2026 (Verity [REALISTIC] has gone private and shows no players) —{' '}
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
                { name: 'Steal A Verity!', creator: 'Steal A Verity!', playing: '7,813', visits: '48.1M', favs: '1.25M' },
                { name: 'Survive Verity in Area 51', creator: 'Mochi Productions!', playing: '1,827', visits: '66.0M', favs: '2.37M' },
                { name: 'Build Base to Survive VERITY', creator: "Danvd's Larpductions", playing: '622', visits: '32.7M', favs: '62.5K' },
                { name: 'Is It Verity?', creator: 'Prince Creations', playing: '590', visits: '11.3M', favs: '35.8K' },
                { name: "Verity's Game", creator: 'Slime Time Studios', playing: '433', visits: '19.5M', favs: '64.2K' },
                { name: 'Verity Battles', creator: 'SMOOF Games', playing: '294', visits: '1.62M', favs: '78.5K' },
                { name: 'Verity Companion [AI]', creator: 'buzzword games', playing: '276', visits: '35.5M', favs: '112.6K' },
                { name: 'Verity [HORROR]', creator: 'Specter Development', playing: '220', visits: '21.8M', favs: '53.4K' },
                { name: 'Verity RP', creator: 'RP', playing: '167', visits: '15.2M', favs: '164.4K' },
                { name: 'Escape Verity', creator: 'Mind Blowing Productions', playing: '22', visits: '12.6M', favs: '189.8K' },
                { name: 'Verity™ (the original)', creator: 'The ROBO Studio!', playing: '12', visits: '28.7M', favs: '78.3K' },
                { name: "Verity's Story", creator: 'elxyr', playing: '1', visits: '6.7M', favs: '12.2K' },
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
          The striking takeaway: the original <strong>Verity™</strong> sits at ~12 concurrent players
          while <strong>Steal A Verity!</strong> holds #1 at ~7,800 — visits at <strong>48.1M</strong> (more than
          double Verity&apos;s Game) and favorites at <strong>1.25M</strong>, re-titled <strong>[UPD]</strong> with its
          Oct 18 update. Today&apos;s story is{' '}
          <strong>Survive Verity in Area 51</strong> — still the most-visited and most-favorited game in the
          ecosystem at 66.0M / 2.37M — whose Halloween <strong>Part 2 is now live</strong>: the title reads
          [🎃HALLOWITY &amp; WITCH] (Oct 18), its first-ever badge <strong>The Last Harvest</strong> passed 97K awards
          in two days, and the official wiki documents the new boss Witchity.
          <strong>Verity Battles</strong> kept climbing too:
          1.62M visits and 78.5K favorites, with its own update landing Oct 17.
          <strong>Verity&apos;s Game</strong> sits
          around ~433 after its fifth update (Oct 10) — still zero badges and no codes.
          <strong>Escape Verity</strong>&apos;s Chapter 4 badge still shows zero awards a month in — unwired.
          This page tracks the whole ecosystem, not just the original.
        </p>

        <h2>First Gameplay Footage: How It Actually Plays</h2>
        <p>
          The first real gameplay videos are finally out, and they answer two of our long-open questions
          (creator footage, not official patch notes — source-checked Oct 18):
        </p>
        <ul>
          <li><strong>The giant smiley Verity is a guard.</strong> It watches the box field, and the moment you steal a box it &ldquo;takes that personally&rdquo; — it turns angry, chases you, and keeps getting angrier the more you grab (amvtci, &ldquo;Stealing Boxes Made Verity Angry!&rdquo;, Oct 4 — 12 minutes of in-game footage).</li>
          <li><strong>Strength is the progression stat.</strong> You build strength to grab bigger and better boxes without letting the giant guard stop you (same video). Grabbing is strength-gated — a Sept 14 video by UIA shows an &ldquo;OP bug&rdquo; that lets you grab anything even at low strength.</li>
          <li><strong>Verity variants roam the map.</strong> The same footage runs into &ldquo;Oldity and some other wild Verity variants&rdquo; — the IP&apos;s -ity naming pattern (Verity / Falsity / <a href="/characters">Barity</a>) made it into the game. Variant names beyond Oldity are unconfirmed.</li>
        </ul>
        <h2>What We&apos;re Tracking</h2>
        <p>
          Remaining open questions — <strong>unverified, we publish nothing until confirmed</strong>:
        </p>
        <ul>
          <li><strong>Box tiers &amp; odds</strong> — tier names beyond normal vs &ldquo;incredibly extremely rare&rdquo;, cash amounts, rarity rates</li>
          <li><strong>How strength is built</strong> — training method, upgrades and what cash is spent on</li>
          <li><strong>Player-vs-player stealing</strong> — guard-vs-thief is confirmed; whether other players can take your boxes, &ldquo;Steal An Egg&rdquo; style, is not seen yet</li>
          <li><strong>Codes</strong> — none confirmed for either game; checked daily (see <a href="/codes">codes status</a>)</li>
          <li><strong>Updates</strong> — last game update Oct 10, 2026 (23:10 UTC), the fifth since Sept 26: no description change, still zero badges (live badge API, Oct 19) and no official changelog; new content drops land here first</li>
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
