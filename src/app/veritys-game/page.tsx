import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity's Game (Roblox) — ${getCurrentDateString()} Guide & What We Know`,
  description:
    "Verity's Game by Slime Time Studios sits at 19.6M visits (~297 concurrent, still zero badges, no codes) while Steal A Verity! passes 50M visits under its [UPD] tag, and Area 51's Halloween Part 2 badge, The Last Harvest, has passed 129K awards. Tracked daily.",
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
        "Verity's Game is a box-hunting collection game by Slime Time Studios (released September 4, 2026). A big field of boxes generates cash, some boxes are 'incredibly extremely rare', and the official description jokingly warns you to leave them alone. It passed 19 million visits; its Oct 10 update — the fifth since Sept 26 — changed nothing visible (still zero badges, no codes), and concurrent players sit around ~297 as of Oct 21. Steal A Verity! (~5,100 online, 1.28M favorites on 50.1M visits, updated Oct 19 under its [UPD] tag) is the most-played Verity game on Roblox, ahead of Survive Verity in Area 51 (~1,044 — its Halloween Part 2 badge The Last Harvest has passed 129K awards and the title now reads [🎃HALLOWITY & WITCH]), Build Base to Survive VERITY (~444), Is It Verity? (~345) and Verity Companion [AI] (~208). First gameplay footage (Oct 2026) shows a strength stat you build to grab bigger boxes and a giant Verity guard that chases box thieves."
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
          <div><span className="text-gray-500">Status:</span> <strong className="text-green-600">#5 Verity game — ~297 online, 19.6M visits, 64.5K favorites (Steal A Verity! #1 at 5.1K online / 50.1M visits — past 50M; Area 51 #2 at 1,044 — patched again Oct 21)</strong></div>
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
          <strong>~297</strong> as of Oct 21 (Roblox public API snapshot) — on tiny 5-player servers. Its last update landed{' '}
          <strong>Oct 10 (23:10 UTC)</strong>, the fifth since Sept 26 — still zero badges, no codes, no
          description change, no changelog. Steal A Verity! keeps accelerating: visits exploding from 18.9M to{' '}
          <strong>50.1M in under four weeks — past the 50-million mark — with favorites at 1.28M</strong>: after the Oct 14 [4X] event, its
          Oct 19 update kept the <strong>[UPD]</strong> title (advertising 44X-speed days), and it holds ~12,400 online (Oct 25 weekend). And the
          one to watch:{' '}
          <strong>Survive Verity in Area 51</strong> — 66.3M visits and 2.38M favorites, the most-visited and
          most-favorited Verity game on Roblox — has launched its Halloween event: after a week of{' '}
          [⏰SOON]/[🎃SOON] door teases the title flipped to <strong>[🎃HALLOWITY]</strong> with the Oct 10 update —
          Halloween map, candy currency from pumpkin Verities, an event shop and the game&apos;s first-ever code
          (<a href="/codes">Halloween2026</a>). Part two landed <strong>Oct 17 (03:35 UTC)</strong> — and this time it is confirmed:
          the game&apos;s <strong>first-ever badge, The Last Harvest</strong>, appeared on the badge API the same day
          (129K+ awards by Oct 21), and on Oct 18 the title re-flipped to <strong>[🎃HALLOWITY &amp; WITCH]🚪</strong> with
          a x2-coins weekend line in the description; the official wiki names the Part 2 boss <strong>Witchity</strong>,
          a broom-riding spell caster unlocked by defeating 100 regular Hallowitys. A further patch landed Oct 21 (03:21 UTC)
          with no title or description change. It holds the ecosystem #3 (Oct 25), behind Bunker vs Verity and Steal A Verity!.
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
          <li><strong>Escape Verity</strong> — The MMystery Games (the developer group renamed from Mind Blowing Productions; same group, verified) — escape-format spinoff; <strong>Chapter 4 is the finale</strong>: the game renamed to &quot;[C4] ESCAPE VERITY 🔑&quot; with its Oct 3 update (12:31 UTC), and full Chapter 1–4 walkthroughs hit YouTube within days (Dragonsubmann, Oct 2; El Mishi Triste, Oct 6 — ending included). Its Oct 17 update (08:52 UTC) dropped the chapter tag, and an Oct 29 update (17:52 UTC) added the Halloween label — the title now reads &quot;[🎃 HALLOWEEN] ESCAPE VERITY [HORROR]&quot;. The official description and six-badge list are unchanged, so no specific Halloween mechanics are confirmed yet. Odd detail: the &quot;Beat Chapter 4&quot; badge (on the badge API since Sept 19) still shows <strong>zero awards</strong> as of Oct 30 — 41 days in — despite finished walkthroughs, and the &quot;Total Chaos Ending&quot; badge has never been awarded either. 12.6M visits, 190K favorites.</li>
          <li><strong>Survive VERITY</strong> — Slime Time Studios — yes, the same studio: a second Verity game created Sept 10, six days after Verity&apos;s Game (confirmed on the group&apos;s official game list). Closer to the IP&apos;s horror roots: the entire official description is &quot;Find a hiding spot, SURVIVE THE NIGHT, Unlock powers, Become Verity&quot;. 1.8M visits but cooling — ~110 concurrent (Oct 21), zero badges, no update since Sept 30.</li>
          <li><strong>Build Base to Survive VERITY</strong> — base-defense spinoff where Verity attacks at night; <a href="/codes">code status</a> tracked daily (three codes currently marked Active by RobloxDen, with other reports unconfirmed).</li>
          <li><strong>Bunker vs Verity</strong> — Beyondd Games — bunker wave-defense spinoff launched Sept 22: build and fortify an underground bunker, place and control turrets, and fight off endless waves of Verities that scale the longer you survive (official description). It is currently the most-played Verity game on Roblox — ~17.9K concurrent and 22.6M visits in a month (Oct 25, Roblox games API), with an update landing today — plus five playtime/wave badges and a permanent code redemption box that has no codes yet (<a href="/codes">code status</a>).</li>
          <li><strong>Verity Battles</strong> — SMOOF Games — catch-and-battle spinoff launched Sept 17 (67 Verities, 6 zones, Meadow to Cosmic Rift; ~294 online, 1.62M visits, 78.5K favorites, updated Oct 17). One of two Verity games with a permanent code system — its official description prints <a href="/codes">CODES: RELEASE, VERITY</a> and also lists training at a gaming PC plus a &quot;Verity Blocks&quot; bonus-XP minigame.</li>
          <li><strong>Verity Companion [AI]</strong> — buzzword games — chat-focused spinoff; its Update 1 raised the message cap to 40 and added a new ending, and the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update. Its Oct 2 update then added three more badges — BACKUP COMPLETE, Out of Mind, Out of Sight and ESCAPE SUBJECT (now being earned — ~1,470–1,880 awards each by Oct 19, consistent with a new escape-flavored ending path) — taking the list to 13 — and its Oct 6 update added a 14th, TEST SUBJECT, which went live within days (799 awards by Oct 19; live badge API).</li>
          <li><strong>Verity Part 2</strong> — Umek0 Games — fan-made story continuation; its Part 2 update landed August 2026 with full walkthroughs already on YouTube. Not an official sequel — The ROBO Studio! has announced no Chapter 2 for the original.</li>
          <li><strong>Verity&apos;s Story</strong> — elxyr — fan-made story horror inspired by Thatmob&apos;s original concept with a backrooms, liminal feel; six badge-tracked levels (115K+ have finished LEVEL 6) plus a secret badge. 6.7M visits since its June 22 launch, but dormant: no update since Aug 1 and effectively zero concurrent players (Oct 19).</li>
        </ul>
        <h2>How Verity&apos;s Game Compares (Live Roblox Data)</h2>
        <p className="not-prose text-sm text-gray-500">
          All fifteen Verity-named Roblox games we track, ranked by concurrent players. Snapshot from the Roblox games API, Oct 25 2026 (Verity [REALISTIC] has gone private and shows no players) —{' '}
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
                { name: 'Bunker vs Verity', creator: 'Beyondd Games', playing: '17,918', visits: '22.6M', favs: '43.2K' },
                { name: 'Steal A Verity!', creator: 'Steal A Verity!', playing: '12,375', visits: '55.4M', favs: '1.36M' },
                { name: 'Survive Verity in Area 51', creator: 'Mochi Productions!', playing: '1,732', visits: '67.0M', favs: '2.39M' },
                { name: 'Build Base to Survive VERITY', creator: "Danvd's Larpductions", playing: '791', visits: '33.1M', favs: '63.1K' },
                { name: 'Is It Verity?', creator: 'Prince Creations', playing: '770', visits: '11.8M', favs: '37.2K' },
                { name: 'Verity Companion [AI]', creator: 'buzzword games', playing: '543', visits: '36.1M', favs: '114.3K' },
                { name: 'Verity [HORROR]', creator: 'Specter Development', playing: '464', visits: '22.3M', favs: '54.3K' },
                { name: "Verity's Game", creator: 'Slime Time Studios', playing: '422', visits: '19.8M', favs: '64.9K' },
                { name: 'Verity Battles', creator: 'SMOOF Games', playing: '337', visits: '1.77M', favs: '82.6K' },
                { name: 'Verity RP', creator: 'RP', playing: '262', visits: '15.5M', favs: '166.5K' },
                { name: 'Survive VERITY', creator: 'Slime Time Studios', playing: '198', visits: '1.9M', favs: '4.0K' },
                { name: 'Escape Verity', creator: 'The MMystery Games', playing: '53', visits: '12.6M', favs: '189.9K' },
                { name: 'Verity™ (the original)', creator: 'The ROBO Studio!', playing: '47', visits: '28.8M', favs: '78.4K' },
                { name: "Verity's Story", creator: 'elxyr', playing: '3', visits: '6.7M', favs: '12.3K' },
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
          while <strong>Steal A Verity!</strong> holds #1 at ~5,100 — visits past <strong>50.1M</strong> (more than
          double Verity&apos;s Game) and favorites at <strong>1.28M</strong>, still under its <strong>[UPD]</strong> title after the
          Oct 19 update. <strong>Survive Verity in Area 51</strong> — still the most-visited and most-favorited game in the
          ecosystem at 66.3M / 2.38M — was patched again Oct 21 (03:21 UTC) with no visible change: the title reads
          [🎃HALLOWITY &amp; WITCH] and its first-ever badge <strong>The Last Harvest</strong> has passed 129K awards.
          <strong>Verity Battles</strong> kept climbing too:
          1.67M visits and favorites crossing 80K, with its own update landing Oct 21 (codes unchanged).
          <strong>Verity&apos;s Game</strong> sits
          around ~297 with no update since Oct 10 — still zero badges and no codes — and its studio&apos;s other Verity title,
          <strong>Survive VERITY</strong> (1.8M visits), cools at ~110.
          <strong>Escape Verity</strong>&apos;s Chapter 4 badge still shows zero awards 32 days in — unwired — as its developer group
          renamed to The MMystery Games.
          This page tracks the whole ecosystem, not just the original.
        </p>

        <h2>First Gameplay Footage: How It Actually Plays</h2>
        <p>
          Creator footage now answers the core progression questions. The main source is{' '}
          <a href="https://www.youtube.com/watch?v=lTsyBEy6KgI" target="_blank" rel="noopener noreferrer nofollow">amvtci&apos;s Oct 4 video, &ldquo;Stealing Boxes Made Verity Angry!&rdquo;</a>{' '}
          — 12 minutes of in-game footage, not official patch notes; transcript re-checked Oct 27:
        </p>
        <ul>
          <li><strong>The giant smiley Verity is a guard.</strong> It watches the box field, and the moment you steal a box it &ldquo;takes that personally&rdquo; — it turns angry, chases you, and gets faster as its anger builds.</li>
          <li><strong>Strength comes from an upgradeable treadmill.</strong> The treadmill includes a built-in minigame that helps build strength; stronger players can pick up heavier and more valuable boxes. Grabbing is strength-gated — a Sept 14 video by UIA also shows an &ldquo;OP bug&rdquo; that lets you grab anything even at low strength.</li>
          <li><strong>Boxes unlock Verities that earn over time.</strong> The video opens boxes into Falsity and other Verities, then leaves the collection generating cash. Unwanted inventory can be sold. Larger boxes have higher strength requirements and opening timers — one shown in the run takes three minutes.</li>
          <li><strong>Rebirth resets power for better cash income.</strong> The first rebirth prompt in this run appears at 5,000 and resets the treadmill and strength. After rebirthing, the creator&apos;s displayed income rises from $1,000 to $1,500 per second; the next requirement shown is 21,000. These are observations from one run, not an official progression table.</li>
          <li><strong>Feeding Verity can calm him down.</strong> Successful thefts make the giant angrier, but the creator discovers that feeding other Verities to him reduces that anger. Another player can also draw the guard away, creating a window to grab a heavy box.</li>
          <li><strong>More variants have names.</strong> Alongside Oldity, the creator calls out Falsity, Curiosity, Cruelty, Fragility, Obscurity and Vanity, plus a Gold Falsity. These are names heard in the footage rather than an official roster, so spelling and the full variant list remain provisional.</li>
        </ul>
        <h2>Verity Phone Chats &amp; the 100% Anger Event</h2>
        <p>
          A second source —{' '}
          <a href="https://www.youtube.com/watch?v=hRgEtxWjF9I" target="_blank" rel="noopener noreferrer nofollow">LuckyContestant&apos;s Oct 25 gameplay</a>{' '}
          (20 minutes; transcript and footage checked Oct 28) — shows a phone interaction and anger sequence not covered by the first run:
        </p>
        <ul>
          <li><strong>Verity chats through a phone UI.</strong> He presents moral dilemmas and the player picks a response. In one example, a kid offers $50 for the player&apos;s old bike; after the player chooses <em>Keep the bike</em>, Verity narrates the consequence — the little brother later crashes it into a parked car.</li>
          <li><strong>100% Anger leads into a visible attack phase.</strong> The meter reaches 100%, the map turns red and <strong>SOMETHING IS HERE</strong> appears before an entity attacks at the creator&apos;s base. Feeding later brings the meter back down in the same run. The video shows no separate ending or reward, so we are treating this as an event, not an ending.</li>
          <li><strong>The collection has an Index and offline income.</strong> An Index button is visible, and an in-game notice explicitly says the player&apos;s Verities earn offline. Exact offline rates and the phone-chat trigger remain unverified.</li>
        </ul>
        <h2>Oct 28 Multiplayer Footage: Trading, Fusion &amp; Slots</h2>
        <p>
          A third source —{' '}
          <a href="https://www.youtube.com/watch?v=bEzLuDE7rA4" target="_blank" rel="noopener noreferrer nofollow">Aphmau Shuki&apos;s Oct 28 video, &ldquo;Getting EVERY VERITY in Roblox!&rdquo;</a>{' '}
          (19 minutes; auto-generated English transcript checked Oct 29) — is a multiplayer run through the same official place.
          It adds these observed mechanics; none are official patch notes:
        </p>
        <ul>
          <li><strong>Secured boxes cannot be stolen from a friend&apos;s base.</strong> One player tries and is told &ldquo;no, you cannot&rdquo;. Unsecured boxes are different: the run shows that they can reset if not brought back within a short window, although no exact timer is shown.</li>
          <li><strong>Player trading is built in.</strong> Trade requests appear throughout the run, and the UI rejects one offer as &ldquo;too unfair&rdquo; when the offered values differ. The video does not establish a complete value table.</li>
          <li><strong>A fuse machine accepts gold Verities.</strong> In-run testing leads the players to say that only gold variants qualify and three are required; no full recipe or result table is shown.</li>
          <li><strong>Base slots can be upgraded.</strong> Only a limited number of Verities can be placed, so the players equip their best ones. A sign next to the base provides the slot upgrade.</li>
          <li><strong>The Index has claimable box rewards.</strong> The top-left Index shows claim actions and free boxes during the run; the exact unlock requirements are not established.</li>
          <li><strong>Chat and phone activities extend beyond the giant&apos;s dilemmas.</strong> A player opens a conversation with a collected Verity and receives responses. Others play phone minigames or read stories while training on the treadmill.</li>
        </ul>
        <h2>What We&apos;re Tracking</h2>
        <p>
          Remaining open questions — <strong>unverified, we publish nothing until confirmed</strong>:
        </p>
        <ul>
          <li><strong>Box tiers &amp; odds</strong> — the official rarity tiers, exact cash table and drop rates are still unpublished</li>
          <li><strong>Exact progression numbers</strong> — treadmill upgrade costs and the full rebirth requirement/multiplier curve beyond the single run above</li>
          <li><strong>Codes</strong> — none confirmed for either game; checked daily (see <a href="/codes">codes status</a>)</li>
          <li><strong>Updates</strong> — last game update Oct 10, 2026 (23:10 UTC), the fifth since Sept 26: no description change, still zero badges (Roblox games and badge APIs, re-checked Oct 27) and no official changelog; new content drops land here first</li>
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
