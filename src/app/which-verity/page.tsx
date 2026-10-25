import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Which Verity Game? (${getCurrentDateString()}) — All Verity Roblox Games Compared`,
  description:
    'There are fifteen different Roblox games called Verity. This page tells you which is which — original, horror, box-hunting, base defense, bunker wave defense, Area 51 survival, AI chat, escape, creature battler — with live player counts and links.',
  keywords: ['which verity game', 'verity games roblox', 'verity roblox games list', 'different verity games', 'verity vs verity horror'],
  path: '/which-verity',
});

const GAMES = [
  {
    name: 'Verity™',
    place: '117401848527669',
    creator: 'The ROBO Studio!',
    playing: '47',
    visits: '28.8M',
    favs: '78.4K',
    maxPlayers: '40',
    type: 'Original · 3-day survival horror',
    what: 'The original Verity that started the trend: a box arrives, a yellow sphere named Verity "knows everything", and you have three in-game days to chop wood, mine rock and prepare for the final night. Six badges, two endings, six hidden books.',
    guide: { href: '/walkthrough', label: 'Full walkthrough' },
    featured: true,
  },
  {
    name: "Verity's Game",
    place: '104526416639079',
    creator: 'Slime Time Studios',
    playing: '422',
    visits: '19.8M',
    favs: '64.9K',
    maxPlayers: '5',
    type: 'Spinoff · box-hunting collection',
    what: 'Not horror at all — a big field of cash-generating boxes, some "incredibly extremely rare", with a smiley sphere watching. Community summary: "Steal An Egg but Verity". The slide continues: from its 9.2K peak down to ~297 concurrent (#5) as of Oct 21, with no update since the fifth one landed Oct 10 (23:10 UTC) — still zero badges, no codes, no description change and no changelog. 19.6M visits in 47 days; Steal A Verity! has more than doubled it on total visits. Same studio, different game: Slime Time Studios also runs Survive VERITY (below).',
    guide: { href: '/veritys-game', label: "Verity's Game guide" },
    featured: true,
  },
  {
    name: 'Build Base to Survive VERITY',
    place: '116070952245255',
    creator: "Danvd's Larpductions",
    playing: '791',
    visits: '33.1M',
    favs: '63.1K',
    maxPlayers: '6',
    type: 'Spinoff · base defense',
    what: 'Build a base with friends, place turrets and guns, and survive Verity when he attacks at night. The late-September 💪 updates keep shipping codes (the Sept 28 wave added Lord, MOGGITY and DUDU; the Oct 1 evening update added UPDATE67SPECIAL) but each bump fades within a day — now ~444 concurrent (Oct 21) after its Oct 17 patch (17:07 UTC; title tag [🤖]), which shipped no new codes (RobloxDen, re-checked Oct 12: the active seven are unchanged). One of two Verity-universe games with a permanent code system (the other is Verity Battles) — codes are tracked on our codes page.',
    guide: { href: '/codes', label: 'Working codes' },
    featured: true,
  },
  {
    name: 'Bunker vs Verity',
    place: '94094795358582',
    creator: 'Beyondd Games',
    playing: '17,918',
    visits: '22.6M',
    favs: '43.2K',
    maxPlayers: '6',
    type: 'Spinoff · bunker wave defense',
    what: 'Build, fortify, survive: construct an underground bunker with tons of different blocks, place and control powerful turrets, and fight off endless waves of Verities — earning coins from kills to upgrade your defenses, and hiding underground when things get crazy; the longer you survive, the harder the waves get (official description). Launched Sept 22 and currently the most-played Verity game on Roblox: ~17.9K concurrent and 22.6M visits in a month (Oct 25 snapshot, Roblox games API), with its latest update landing today (Oct 25, 00:27 UTC). Five badges track playtime and wave milestones (Welcome!, 10 Minutes!, 30 Minutes!, 10 waves, 25 Waves — 8.6M hold the welcome badge). It already has a permanent code redemption box (Settings → scroll down → REDEEM) but zero codes released so far — RobloxDen, re-checked Oct 25.',
    guide: { href: '/codes', label: 'Code status' },
    featured: true,
  },
  {
    name: 'Survive Verity in Area 51',
    place: '74716719697996',
    creator: 'Mochi Productions!',
    playing: '1,732',
    visits: '67.0M',
    favs: '2.39M',
    maxPlayers: '12',
    type: 'Spinoff · facility survival',
    what: 'Explore Area 51 and the backrooms, fight Verity with weapons and scavenge items to survive, solo or with friends (official description). The quiet giant of the ecosystem: 66.3M visits and 2.38M favorites make it the most-visited and most-favorited Verity game on Roblox — and its Halloween event is now live. After a week of "[⏰SOON]"/"[🎃SOON]" door teases the title flipped to "[🎃HALLOWITY]" (Oct 10 update, re-titled again Oct 13, 00:23 UTC): creator footage shows a Halloween-themed map, pumpkin Verities that drop a candy currency, and an event shop selling potions, exclusive titles (Nightstalker, Soul Reaper, Hollow\'s Master) and Halloween keys (150 candy each, five for 700) for weapon-skin crates — plus new craftable melee weapons from Calamity/Cruelty part drops and a Calamity rework. It also shipped the game\'s first code, Halloween2026 (single source — see our codes page). A further patch landed Oct 14 (11:20 UTC) with no title or description change; Part 2 then landed Oct 17 (03:35 UTC) — and this time the content is confirmed: the game\'s first-ever badge, "The Last Harvest", appeared on the badge API the same day and has passed 129K awards (Oct 21), and on Oct 18 (14:09 UTC) the title re-flipped to "[🎃HALLOWITY & WITCH]🚪" with a "💰 x2 COINS WEEKEND" line added to the description. A further patch landed Oct 21 (03:21 UTC) with no title or description change. The official wiki confirms the Part 2 boss as Witchity — a broom-riding spell caster that spawns in the boss area once the server defeats 100 regular Hallowitys (250 candy per kill) — alongside a Hallowity Big Boss; creator footage had pre-announced the pair as Hollow Witty and Witchy. Concurrent settled back to ~1,044 (Oct 21).',
    guide: null,
  },
  {
    name: 'Verity Companion [AI]',
    place: '74542317333958',
    creator: 'buzzword games',
    playing: '543',
    visits: '36.1M',
    favs: '114.3K',
    maxPlayers: '8',
    type: 'Spinoff · AI chat',
    what: 'A chat-focused companion game: ask Verity anything and it remembers what you tell it. Update 1 raised the message cap to 40 and added a new ending; the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update. Its Oct 2 update (17:09 UTC) then added three more badges — BACKUP COMPLETE, Out of Mind, Out of Sight and ESCAPE SUBJECT (now being earned, ~1,515–1,940 awards each by Oct 21) — and its Oct 6 update added a 14th, TEST SUBJECT, which went live within days (843 awards by Oct 21). The escape-flavored badge names keep pointing at a new ending path.',
    guide: null,
  },
  {
    name: 'Verity [HORROR]',
    place: '129839966867899',
    creator: 'Specter Development',
    playing: '464',
    visits: '22.3M',
    favs: '54.3K',
    maxPlayers: '35',
    type: 'Separate game · house horror',
    what: 'A different developer\'s take: you play as Ethan, home alone, protecting a suburban house over three days. Six badges on the live badge API (Oct 21), including Bad Ending: Car Escape and Good Ending: End of Verity — two older badges are no longer listed. The game updated again on Oct 12 (17:13 UTC), days after its Oct 8 update. Do not confuse its badge list with the original\'s six badges.',
    guide: null,
  },
  {
    name: 'Verity [REALISTIC]',
    place: '120944686522212',
    creator: 'Fredbear Holds Neighbors',
    playing: 'private',
    visits: '28.5M',
    favs: '63.7K',
    maxPlayers: '20',
    type: 'Separate game · block-building horror',
    what: 'A "realistic Verity mod in Roblox" — Minecraft-style block breaking and placing (M1 to break, M2 to place) with Verity hunting you. Different game, different controls, same name. As of Oct 1 the game is set to private (its page returns Title Unavailable) — it is unknown whether it will return.',
    guide: null,
  },
  {
    name: 'Steal A Verity!',
    place: '107164765081465',
    creator: 'Steal A Verity!',
    playing: '12,375',
    visits: '55.4M',
    favs: '1.36M',
    maxPlayers: '7',
    type: 'Spinoff · steal-and-collect',
    what: 'Steal-and-collect format with Verity spheres as the loot. Fast, casual and — since Bunker vs Verity\'s rise — the ecosystem\'s #2: concurrent swings with the US week (16.3K weekend peak; ~5,100 on a Tuesday night, Oct 21; ~12,400 this Sunday, Oct 25) while the updates keep compounding — after the Oct 14 [4X] luck-multiplier event and the Oct 19 [UPD] update, the latest landed today (Oct 25, 00:41 UTC) with the title flipped to [7X]: 55.4M visits — more than double Verity\'s Game — and favorites at 1.36M. The fastest growth in the ecosystem.',
    guide: null,
  },
  {
    name: 'Verity RP',
    place: '90695400874679',
    creator: 'RP',
    playing: '262',
    visits: '15.5M',
    favs: '166.5K',
    maxPlayers: '30',
    type: 'Spinoff · roleplay',
    what: 'Roleplay sandbox where you live out Verity scenarios with other players. A long-running favorite of the ecosystem with 150K+ favorites.',
    guide: null,
  },
  {
    name: 'Is It Verity?',
    place: '135439033252889',
    creator: 'Prince Creations',
    playing: '770',
    visits: '11.8M',
    favs: '37.2K',
    maxPlayers: '22',
    type: 'Spinoff · 1v1 deduction duel',
    what: 'Mastermind with Verity spheres: place your Verity, check the result, and crack the hidden pattern before your opponent does in 1v1 matches (official description). Launched Sept 13; concurrent swings between ~350 off-peak and ~1,400 in US prime time (Oct 13–21 checks) after its latest update (Oct 20, 18:14 UTC), with visits past 11.4M — up from 4.3M three weeks ago — holding the ecosystem\'s #5 (Oct 25), behind Bunker vs Verity, Steal A Verity!, Area 51 and Build Base.',
    guide: null,
  },
  {
    name: 'Escape Verity',
    place: '124107554735431',
    creator: 'The MMystery Games',
    playing: '53',
    visits: '12.6M',
    favs: '189.9K',
    maxPlayers: '12',
    type: 'Spinoff · escape horror',
    what: 'Escape-format horror: collect keys, unlock doors and navigate the halls to find the exit while Verity hunts. Chapter 4 is the finale — the game renamed to "[C4] ESCAPE VERITY 🔑" with its Oct 3 update (12:31 UTC) and full Chapter 1–4 walkthroughs hit YouTube within days (Dragonsubmann; El Mishi Triste, Oct 6 — ending included). Its Oct 17 update (08:52 UTC) then dropped the chapter tag, retitling it "ESCAPE VERITY 🔑 [HORROR]", and the developer group renamed from Mind Blowing Productions to The MMystery Games (same group, verified). Oddity: the "Beat Chapter 4" badge still shows zero awards as of Oct 21 — 32 days after it appeared on the badge API (Sept 19) and despite finished walkthroughs, so it looks unwired — and "Total Chaos Ending" has never been awarded either.',
    guide: null,
  },
  {
    name: 'Verity Battles',
    place: '90352701897301',
    creator: 'SMOOF Games',
    playing: '337',
    visits: '1.77M',
    favs: '82.6K',
    maxPlayers: '5',
    type: 'Spinoff · catch-and-battle',
    what: 'Pokémon-style Verity collector launched Sept 17: catch 67 Verities across 6 zones from the Meadow to the Cosmic Rift, beat Guardians to open new zones, hunt Gold/BIG/Rainbow variants, duel players and rebirth (official description). One of two Verity-universe games with a permanent code system — the official description prints "CODES: RELEASE, VERITY" (re-checked Oct 21) and also lists training your team at a gaming PC plus a "Verity Blocks" bonus-XP minigame — plus group (+10% cash) and friend-invite rewards. Updated again Oct 21 (02:57 UTC) with no description or code change: visits hit 1.67M (from 602K on Oct 9) and favorites crossed 80K, with concurrent at ~199 (Oct 21).',
  },
  {
    name: 'Survive VERITY',
    place: '135082303866732',
    creator: 'Slime Time Studios',
    playing: '198',
    visits: '1.9M',
    favs: '4.0K',
    maxPlayers: '24',
    type: 'Spinoff · night survival',
    what: "Slime Time Studios' second Verity game, made six days after Verity's Game (created Sept 10; same verified group, confirmed via the group's official game list) — and a much more faithful use of the IP: find a hiding spot, survive the night, unlock powers and ultimately become Verity (official description, in full). 1.8M visits but momentum has cooled — ~110 concurrent (Oct 21), no badges yet and no update since Sept 30.",
    guide: { href: '/codes', label: 'Verity Battles codes' },
  },
  {
    name: "Verity's Story",
    place: '95629887914156',
    creator: 'elxyr',
    playing: '3',
    visits: '6.7M',
    favs: '12.3K',
    maxPlayers: '20',
    type: 'Fan game · story horror',
    what: 'A story-driven horror fan game inspired by the original Verity concept (credited to Thatmob) with a backrooms, liminal feel: you find a strange yellow creature named Verity who seems friendly at first, explore strange places, uncover the story and — whatever happens — keep Verity happy (official description). Six levels deep: its badge list tracks Completed LEVEL 1 through LEVEL 6 (115K+ have finished LEVEL 6) plus a "S E C R E T B A D G E" and a rare "ForbiddenKey" (1.6K awards), and the title now reads "[LEVEL 6]". Launched June 22 and past 6.7M visits, but quiet since its Aug 1 update — effectively zero concurrent players as of Oct 21, though the description still promises new levels, secrets and updates are coming soon.',
    guide: null,
  },
];

export default function WhichVerityPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Which Verity Game?', url: '/which-verity' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'How many Roblox games are called Verity?',
      answer:
        'At least fifteen distinct games use the Verity name on Roblox: the original Verity™ by The ROBO Studio!, Verity\'s Game, Build Base to Survive VERITY, Bunker vs Verity, Survive Verity in Area 51, Verity Companion [AI], Verity [HORROR], Verity [REALISTIC] (currently private), Steal A Verity!, Verity RP, Is It Verity?, Escape Verity, Verity Battles, Survive VERITY and Verity\'s Story. They are made by different developers with different gameplay — Slime Time Studios alone has two (Verity\'s Game and Survive VERITY).',
    },
    {
      question: 'Which Verity game is the original?',
      answer:
        'Verity™ by The ROBO Studio! (place 117401848527669) is the original. It is the 3-day survival horror game where a yellow sphere arrives in a box at your door and warns you something bad happens in three days. It has 6 badges and 2 endings.',
    },
    {
      question: 'Is Verity [HORROR] the same as Verity?',
      answer:
        'No. Verity [HORROR] by Specter Development is a separate game where you play as Ethan defending a house. It has 6 badges with completely different names, including Bad Ending: Car Escape and Good Ending: End of Verity. Guides for one game do not work in the other.',
    },
    {
      question: 'Which Verity game has codes?',
      answer:
        'Two of them have permanent code systems: Build Base to Survive VERITY (seven active codes) and Verity Battles, whose official description prints "CODES: RELEASE, VERITY". A third got its first-ever code with its Halloween event: Survive Verity in Area 51 — creator footage of the HALLOWITY update shows the code Halloween2026 redeeming 500 candy in the event shop (single source, not yet confirmed in-game). The biggest new entry, Bunker vs Verity, already has a permanent redemption box (Settings → REDEEM) but has released no codes yet (RobloxDen, re-checked Oct 25). The original Verity, Verity\'s Game, Verity [HORROR] and the others do not have codes — any site listing "Verity codes" for them is publishing Build Base codes under the wrong name.',
    },
    {
      question: 'Which Verity game has the most players?',
      answer:
        'Bunker vs Verity is currently the busiest at ~17,900 concurrent players (Oct 25 — it launched Sept 22 and updated today), ahead of Steal A Verity! at ~12,400 (also updated today, title now [7X]; 55.4M visits, 1.36M favorites). Survive Verity in Area 51 (~1,700 — its Halloween Part 2 is live, with its first badge The Last Harvest being earned), Build Base to Survive VERITY (~790), Is It Verity? (~770), Verity Companion [AI] (~540), Verity [HORROR] (~460), Verity\'s Game (~420) and Verity Battles (~340) take the next spots — with 67.0M visits and 2.39M favorites, Area 51 is the most-visited and most-favorited Verity game on Roblox. The original Verity™ sits around ~47 concurrent players.',
    },
    {
      question: 'Why do all these games use the Verity name?',
      answer:
        'The original Verity went viral in mid-2026 and the name became a trend. Roblox developers launch their own games using the same title to catch search traffic, which is why the ecosystem now spans horror, box-collecting, base defense, roleplay and AI chat — all called Verity.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Which Verity Game Are You Looking For?</h1>
      <p className="text-gray-500 mb-8">
        Fifteen Roblox games use the name Verity. Here is every one of them, with live player counts — checked {getCurrentDateString()}.
      </p>

      <div className="p-5 rounded-xl border border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20 mb-10">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>The short version:</strong> the <em>original</em> is <strong>Verity™ by The ROBO Studio!</strong> — the
          3-day survival horror game with <Link href="/badges" className="underline">6 badges</Link> and{' '}
          <Link href="/good-ending" className="underline">two endings</Link>. Everything else on this page is a
          different developer&apos;s game borrowing the name. Guides do not transfer between them.
        </p>
      </div>

      <div className="space-y-4 mb-10">
        {GAMES.map((g) => (
          <div
            key={g.place}
            className={`p-5 rounded-xl border ${g.featured ? 'border-yellow-400 dark:border-yellow-700' : 'border-gray-200 dark:border-gray-800'}`}
          >
            <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
              <div>
                <h2 className="text-lg font-black">
                  {g.featured && '⭐ '}
                  {g.name}
                </h2>
                <p className="text-xs text-gray-500">by {g.creator}</p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 font-semibold">
                {g.type}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center my-3">
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="text-sm font-black tabular">{g.playing}</div>
                <div className="text-[10px] text-gray-500 uppercase">Playing</div>
              </div>
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="text-sm font-black tabular">{g.visits}</div>
                <div className="text-[10px] text-gray-500 uppercase">Visits</div>
              </div>
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="text-sm font-black tabular">{g.favs}</div>
                <div className="text-[10px] text-gray-500 uppercase">Favorites</div>
              </div>
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900">
                <div className="text-sm font-black tabular">{g.maxPlayers}</div>
                <div className="text-[10px] text-gray-500 uppercase">Max Players</div>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{g.what}</p>

            <div className="flex items-center gap-4 text-sm flex-wrap">
              {g.guide && (
                <Link href={g.guide.href} className="text-yellow-700 dark:text-yellow-400 font-semibold hover:underline">
                  {g.guide.label} →
                </Link>
              )}
              <a
                href={`https://www.roblox.com/games/${g.place}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-gray-500 hover:underline"
              >
                Play on Roblox ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>How to Tell Them Apart in Ten Seconds</h2>
        <ul>
          <li><strong>Is there a house, three days, and wood/rock gathering?</strong> That is the original Verity™.</li>
          <li><strong>Is there a field of boxes and a smiley sphere?</strong> That is Verity&apos;s Game.</li>
          <li><strong>Are there turrets, guns and a night attack?</strong> That is Build Base to Survive VERITY.</li>
          <li><strong>Are you fortifying an underground bunker against endless waves of Verities?</strong> That is Bunker vs Verity.</li>
          <li><strong>Are you Ethan, in a suburban house, without crafting?</strong> That is Verity [HORROR] — a different game.</li>
          <li><strong>Are you breaking and placing blocks like Minecraft?</strong> That is Verity [REALISTIC].</li>
          <li><strong>Are you chatting with an AI?</strong> That is Verity Companion [AI].</li>
          <li><strong>Are you exploring Area 51 and the backrooms with weapons?</strong> That is Survive Verity in Area 51.</li>
          <li><strong>Are you guessing a hidden pattern against another player?</strong> That is Is It Verity?.</li>
          <li><strong>Are you collecting keys and escaping halls while it hunts you?</strong> That is Escape Verity.</li>
          <li><strong>Are you catching Verities and battling Guardians across zones?</strong> That is Verity Battles.</li>
          <li><strong>Are you hiding from Verity through the night, unlocking powers to become him?</strong> That is Survive VERITY — also by Slime Time Studios.</li>
          <li><strong>Are you exploring strange places across six levels, keeping a yellow creature happy?</strong> That is Verity&apos;s Story.</li>
        </ul>

        <h2>Why This Matters for Guides</h2>
        <p>
          Badge lists and walkthroughs are <em>not</em> interchangeable. The original has six badges
          (I&apos;m Verity!, Lovity, Bority, I&apos;m Falsity!, Good Ending, Bad Ending). Verity [HORROR] has six
          completely different ones. If you follow the wrong guide you will spend a whole run chasing a badge that
          does not exist in the game you are playing.
        </p>
        <p>
          The same applies to codes: only <strong>Build Base to Survive VERITY</strong> and <strong>Verity Battles</strong> have
          them, which is why most &quot;Verity codes&quot; pages on the internet are really Build Base codes pages. Ours says so
          explicitly on the <Link href="/codes">codes page</Link>.
        </p>
        <p className="text-sm text-gray-500">
          Player counts, visits and favorites on this page are live Roblox figures pulled from the Roblox games API.
          They move daily — treat them as a snapshot, not a permanent ranking.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
