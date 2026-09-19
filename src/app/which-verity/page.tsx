import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Which Verity Game? (${getCurrentDateString()}) — All Verity Roblox Games Compared`,
  description:
    'There are eight different Roblox games called Verity. This page tells you which is which — original, horror, box-hunting, base defense, AI chat — with live player counts and links.',
  keywords: ['which verity game', 'verity games roblox', 'verity roblox games list', 'different verity games', 'verity vs verity horror'],
  path: '/which-verity',
});

const GAMES = [
  {
    name: 'Verity™',
    place: '117401848527669',
    creator: 'The ROBO Studio!',
    playing: '74',
    visits: '28.4M',
    favs: '77.7K',
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
    playing: '9,264',
    visits: '7.9M',
    favs: '28.7K',
    maxPlayers: '5',
    type: 'Spinoff · box-hunting collection',
    what: 'Not horror at all — a big field of cash-generating boxes, some "incredibly extremely rare", with a smiley sphere watching. Community summary: "Steal An Egg but Verity". Currently the busiest Verity game in the ecosystem.',
    guide: { href: '/veritys-game', label: "Verity's Game guide" },
    featured: true,
  },
  {
    name: 'Build Base to Survive VERITY',
    place: '116070952245255',
    creator: "Danvd's Larpductions",
    playing: '6,593',
    visits: '23.2M',
    favs: '45.0K',
    maxPlayers: '6',
    type: 'Spinoff · base defense',
    what: 'Build a base with friends, place turrets and guns, and survive Verity when he attacks at night. The only Verity-universe game with a working code system — codes are tracked on our codes page.',
    guide: { href: '/codes', label: 'Working codes' },
    featured: true,
  },
  {
    name: 'Verity Companion [AI]',
    place: '74542317333958',
    creator: 'buzzword games',
    playing: '1,232',
    visits: '30.9M',
    favs: '96.7K',
    maxPlayers: '8',
    type: 'Spinoff · AI chat',
    what: 'A chat-focused companion game: ask Verity anything and it remembers what you tell it. Update 1 raised the message cap to 40 and added a new ending. Highest visit count of any Verity game.',
    guide: null,
  },
  {
    name: 'Verity [HORROR]',
    place: '129839966867899',
    creator: 'Specter Development',
    playing: '727',
    visits: '19.1M',
    favs: '46.8K',
    maxPlayers: '35',
    type: 'Separate game · house horror',
    what: 'A different developer\'s take: you play as Ethan, home alone, protecting a suburban house over three days. Eight badges, including You escaped and YOU ARE MINE!!!!!. Do not confuse its badge list with the original\'s six badges.',
    guide: null,
  },
  {
    name: 'Verity [REALISTIC]',
    place: '120944686522212',
    creator: 'Fredbear Holds Neighbors',
    playing: '772',
    visits: '27.7M',
    favs: '62.5K',
    maxPlayers: '20',
    type: 'Separate game · block-building horror',
    what: 'A "realistic Verity mod in Roblox" — Minecraft-style block breaking and placing (M1 to break, M2 to place) with Verity hunting you. Different game, different controls, same name.',
    guide: null,
  },
  {
    name: 'Steal A Verity!',
    place: '107164765081465',
    creator: 'Steal A Verity!',
    playing: '4,934',
    visits: '2.6M',
    favs: '152.1K',
    maxPlayers: '7',
    type: 'Spinoff · steal-and-collect',
    what: 'Steal-and-collect format with Verity spheres as the loot. Fast, casual and one of the highest like-ratios in the ecosystem despite low visits — the newest arrival on the scene.',
    guide: null,
  },
  {
    name: 'Verity RP',
    place: '90695400874679',
    creator: 'RP',
    playing: '605',
    visits: '12.9M',
    favs: '147.0K',
    maxPlayers: '30',
    type: 'Spinoff · roleplay',
    what: 'Roleplay sandbox where you live out Verity scenarios with other players. The most-favorited Verity game by raw favorite count.',
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
        'At least eight distinct games use the Verity name on Roblox: the original Verity™ by The ROBO Studio!, Verity\'s Game, Build Base to Survive VERITY, Verity Companion [AI], Verity [HORROR], Verity [REALISTIC], Steal A Verity! and Verity RP. They are made by different developers with different gameplay.',
    },
    {
      question: 'Which Verity game is the original?',
      answer:
        'Verity™ by The ROBO Studio! (place 117401848527669) is the original. It is the 3-day survival horror game where a yellow sphere arrives in a box at your door and warns you something bad happens in three days. It has 6 badges and 2 endings.',
    },
    {
      question: 'Is Verity [HORROR] the same as Verity?',
      answer:
        'No. Verity [HORROR] by Specter Development is a separate game where you play as Ethan defending a house. It has 8 badges with completely different names, including You escaped and Night 0 Complete. Guides for one game do not work in the other.',
    },
    {
      question: 'Which Verity game has codes?',
      answer:
        'Only Build Base to Survive VERITY has a working code system. The original Verity, Verity\'s Game, Verity [HORROR] and the others do not have codes — any site listing "Verity codes" for them is publishing Build Base codes under the wrong name.',
    },
    {
      question: 'Which Verity game has the most players?',
      answer:
        'Verity\'s Game is currently the busiest at 9,000+ concurrent players, followed by Build Base to Survive VERITY at 6,000+ and Steal A Verity! close behind near 5,000. The original Verity™ has cooled to under 100 concurrent players since its viral peak, while Verity Companion [AI] has the highest total visits at 30M+.',
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
        Eight Roblox games use the name Verity. Here is every one of them, with live player counts — checked {getCurrentDateString()}.
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
        </ul>

        <h2>Why This Matters for Guides</h2>
        <p>
          Badge lists and walkthroughs are <em>not</em> interchangeable. The original has six badges
          (I&apos;m Verity!, Lovity, Bority, I&apos;m Falsity!, Good Ending, Bad Ending). Verity [HORROR] has eight
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
