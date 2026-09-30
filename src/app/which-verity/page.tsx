import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Which Verity Game? (${getCurrentDateString()}) — All Verity Roblox Games Compared`,
  description:
    'There are ten different Roblox games called Verity. This page tells you which is which — original, horror, box-hunting, base defense, Area 51 survival, AI chat — with live player counts and links.',
  keywords: ['which verity game', 'verity games roblox', 'verity roblox games list', 'different verity games', 'verity vs verity horror'],
  path: '/which-verity',
});

const GAMES = [
  {
    name: 'Verity™',
    place: '117401848527669',
    creator: 'The ROBO Studio!',
    playing: '23',
    visits: '28.6M',
    favs: '78.0K',
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
    playing: '2,566',
    visits: '15.8M',
    favs: '55.0K',
    maxPlayers: '5',
    type: 'Spinoff · box-hunting collection',
    what: 'Not horror at all — a big field of cash-generating boxes, some "incredibly extremely rare", with a smiley sphere watching. Community summary: "Steal An Egg but Verity". Trading #2/#3 with Survive Verity in Area 51 (~2.6K concurrent each), and still the ecosystem\'s fastest-growing by visits (15.8M in 26 days).',
    guide: { href: '/veritys-game', label: "Verity's Game guide" },
    featured: true,
  },
  {
    name: 'Build Base to Survive VERITY',
    place: '116070952245255',
    creator: "Danvd's Larpductions",
    playing: '2,261',
    visits: '28.7M',
    favs: '54.8K',
    maxPlayers: '6',
    type: 'Spinoff · base defense',
    what: 'Build a base with friends, place turrets and guns, and survive Verity when he attacks at night. The late-September 💪 updates keep shipping codes (the Sept 28 wave added Lord, MOGGITY and DUDU) but each bump fades within a day — now ~2.3K concurrent. The only Verity-universe game with a working code system — codes are tracked on our codes page.',
    guide: { href: '/codes', label: 'Working codes' },
    featured: true,
  },
  {
    name: 'Survive Verity in Area 51',
    place: '74716719697996',
    creator: 'Mochi Productions!',
    playing: '2,661',
    visits: '58.9M',
    favs: '2.23M',
    maxPlayers: '12',
    type: 'Spinoff · facility survival',
    what: 'Explore Area 51 and the backrooms, fight Verity with weapons and scavenge items to survive, solo or with friends (official description). The quiet giant of the ecosystem: 58.9M visits and 2.23M favorites make it the most-visited and most-favorited Verity game on Roblox — double the original on visits — yet it has zero badges and no guide coverage anywhere. Its [⚫ECLIPSITY] event update landed Sept 30.',
    guide: null,
  },
  {
    name: 'Verity Companion [AI]',
    place: '74542317333958',
    creator: 'buzzword games',
    playing: '364',
    visits: '33.0M',
    favs: '103.6K',
    maxPlayers: '8',
    type: 'Spinoff · AI chat',
    what: 'A chat-focused companion game: ask Verity anything and it remembers what you tell it. Update 1 raised the message cap to 40 and added a new ending; the badge list grew to 10 on Sept 23 (THE LAST GAME, HOUSE RULES?) ahead of a Sept 26 update. Second-highest visit count in the ecosystem, behind Survive Verity in Area 51.',
    guide: null,
  },
  {
    name: 'Verity [HORROR]',
    place: '129839966867899',
    creator: 'Specter Development',
    playing: '264',
    visits: '20.3M',
    favs: '49.6K',
    maxPlayers: '35',
    type: 'Separate game · house horror',
    what: 'A different developer\'s take: you play as Ethan, home alone, protecting a suburban house over three days. Six badges on the live badge API (Sept 30), including Bad Ending: Car Escape and Good Ending: End of Verity — two older badges are no longer listed. Do not confuse its badge list with the original\'s six badges.',
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
    what: 'A "realistic Verity mod in Roblox" — Minecraft-style block breaking and placing (M1 to break, M2 to place) with Verity hunting you. Different game, different controls, same name. As of Sept 30 the game is set to private (its page returns Title Unavailable) — it is unknown whether it will return.',
    guide: null,
  },
  {
    name: 'Steal A Verity!',
    place: '107164765081465',
    creator: 'Steal A Verity!',
    playing: '8,342',
    visits: '13.5M',
    favs: '535.0K',
    maxPlayers: '7',
    type: 'Spinoff · steal-and-collect',
    what: 'Steal-and-collect format with Verity spheres as the loot. Fast, casual and still the most-played Verity game (8.3K concurrent): back-to-back [BOSS] updates on Sept 24 and 27 pushed it past 500K favorites (535K and climbing) and 13.5M visits.',
    guide: null,
  },
  {
    name: 'Verity RP',
    place: '90695400874679',
    creator: 'RP',
    playing: '243',
    visits: '14.0M',
    favs: '155.2K',
    maxPlayers: '30',
    type: 'Spinoff · roleplay',
    what: 'Roleplay sandbox where you live out Verity scenarios with other players. A long-running favorite of the ecosystem with 150K+ favorites.',
    guide: null,
  },
  {
    name: 'Is It Verity?',
    place: '135439033252889',
    creator: 'Prince Creations',
    playing: '1,664',
    visits: '2.5M',
    favs: '7.7K',
    maxPlayers: '22',
    type: 'Spinoff · 1v1 deduction duel',
    what: 'Mastermind with Verity spheres: place your Verity, check the result, and crack the hidden pattern before your opponent does in 1v1 matches (official description). Launched Sept 13 and already at 2.5M visits with ~1.7K concurrent players — the ecosystem\'s fastest-rising new entry after Verity\'s Game.',
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
        'At least ten distinct games use the Verity name on Roblox: the original Verity™ by The ROBO Studio!, Verity\'s Game, Build Base to Survive VERITY, Survive Verity in Area 51, Verity Companion [AI], Verity [HORROR], Verity [REALISTIC] (currently private), Steal A Verity!, Verity RP and Is It Verity?. They are made by different developers with different gameplay.',
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
        'Only Build Base to Survive VERITY has a working code system. The original Verity, Verity\'s Game, Verity [HORROR] and the others do not have codes — any site listing "Verity codes" for them is publishing Build Base codes under the wrong name.',
    },
    {
      question: 'Which Verity game has the most players?',
      answer:
        'Steal A Verity! is currently the busiest at ~8,300 concurrent players after back-to-back [BOSS] updates. The surprise #2 is Survive Verity in Area 51 (~2,700) — with 58.9M visits and 2.23M favorites it is the most-visited and most-favorited Verity game on Roblox. Verity\'s Game (~2,600) and Build Base to Survive VERITY (~2,300) trade the next spots, newcomer Is It Verity? is already at ~1,700, and the original Verity™ has cooled to under 30 concurrent players since its viral peak.',
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
        Ten Roblox games use the name Verity. Here is every one of them, with live player counts — checked {getCurrentDateString()}.
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
          <li><strong>Are you Ethan, in a suburban house, without crafting?</strong> That is Verity [HORROR] — a different game.</li>
          <li><strong>Are you breaking and placing blocks like Minecraft?</strong> That is Verity [REALISTIC].</li>
          <li><strong>Are you chatting with an AI?</strong> That is Verity Companion [AI].</li>
          <li><strong>Are you exploring Area 51 and the backrooms with weapons?</strong> That is Survive Verity in Area 51.</li>
          <li><strong>Are you guessing a hidden pattern against another player?</strong> That is Is It Verity?.</li>
        </ul>

        <h2>Why This Matters for Guides</h2>
        <p>
          Badge lists and walkthroughs are <em>not</em> interchangeable. The original has six badges
          (I&apos;m Verity!, Lovity, Bority, I&apos;m Falsity!, Good Ending, Bad Ending). Verity [HORROR] has six
          completely different ones. If you follow the wrong guide you will spend a whole run chasing a badge that
          does not exist in the game you are playing.
        </p>
        <p>
          The same applies to codes: only <strong>Build Base to Survive VERITY</strong> has them, which is why every
          &quot;Verity codes&quot; page on the internet is really a Build Base codes page. Ours says so explicitly on the{' '}
          <Link href="/codes">codes page</Link>.
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
