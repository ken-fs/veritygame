import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity FAQ (${getCurrentDateString()}) — Every Common Question Answered`,
  description:
    'Verity (Roblox) FAQ: how many badges, both endings, the black book, the freeze bug, how long a run takes, whether codes exist, and which of the Verity games you are playing.',
  keywords: ['verity faq', 'verity roblox questions', 'verity how long', 'verity how many badges', 'verity guide questions'],
  path: '/faq',
});

const SECTIONS = [
  {
    title: 'Game Basics',
    items: [
      {
        q: 'What is Verity on Roblox?',
        a: 'Verity is a viral Roblox horror-survival game by The ROBO Studio! (28M+ visits). A mysterious box appears at your doorstep containing Verity, a yellow AI sphere who claims to know everything and warns that something bad will happen in three days.',
      },
      {
        q: 'How long does a Verity run take?',
        a: 'A first blind playthrough takes about 45–60 minutes. With a guide you can finish in under 30 minutes, and a Bad Ending speedrun is much faster because you skip the entire book hunt.',
      },
      {
        q: 'Is Verity multiplayer?',
        a: 'No — Verity is a single-player story experience. The servers hold 40 players but each player plays their own run.',
      },
      {
        q: 'Does Verity have jumpscares?',
        a: 'The horror is mostly atmospheric — creeping dread, Verity watching you, and the final night chase. There are sudden moments (Verity appearing faceless, Barity screaming) but the game leans on tension rather than gore.',
      },
    ],
  },
  {
    title: 'Badges & Endings',
    items: [
      {
        q: 'How many badges are in Verity?',
        a: 'Six: I\'m Verity!, Lovity, Bority, I\'m Falsity!, Good Ending and Bad Ending. Only the Bad Ending requires a second run — collecting all six books locks you out of it.',
      },
      {
        q: 'How do you get the Good Ending in Verity?',
        a: 'Collect all 6 books — including the hidden black book near the house — before entering the house on the final night. Then follow Verity to the lab, pick room 3, break the rock wall with your pickaxe and destroy the anchor.',
      },
      {
        q: 'Where is the hidden black book in Verity?',
        a: 'It is hidden near your house (your base) and is the most commonly missed of the six books. Check the house perimeter carefully — it decides your ending.',
      },
      {
        q: 'Can you get both endings in one playthrough?',
        a: 'No. Entering the house with all 6 books triggers the Good Ending and locks out the Bad Ending for that run. Getting both badges takes two runs — do the Good Ending first, then rush a second run skipping at least one book.',
      },
      {
        q: 'What is the rarest badge in Verity?',
        a: 'Bority — the AFK badge. Roblox award counts put it at roughly 39,000 awards versus about 9.65 million for I\'m Verity!, making it by far the least-earned badge in the game.',
      },
      {
        q: 'Why does the Verity Good Ending keep freezing?',
        a: 'It is a known bug: after sleeping on the final night the cutscene sometimes never triggers. Confirmed workaround: put Verity on the couch before sleeping, and if nothing happens rejoin and redo the final night. It can take several attempts.',
      },
    ],
  },
  {
    title: 'Characters & Story',
    items: [
      {
        q: 'Who is Falsity in Verity?',
        a: 'A blue orb found inside the third tower from your house. He introduces himself as another AI model that "knows everything" and openly says Verity is another model. Talking to him earns the I\'m Falsity! badge.',
      },
      {
        q: 'Who is Barity?',
        a: 'A hostile variant that appears in endings content, announcing himself at maximum volume: "HELLO, I\'M BARITY, YOUR PERSONAL HELPER FRIEND." Same helper pitch as Verity, very different delivery.',
      },
      {
        q: 'What is the anchor in Verity?',
        a: 'The object you destroy in the Good Ending. Verity explains that every world he inhabits has one, and that it anchors him to the instance — destroying it is what frees the world.',
      },
    ],
  },
  {
    title: 'Codes & Other Verity Games',
    items: [
      {
        q: 'Are there any Verity codes?',
        a: 'No. Neither Verity nor Verity\'s Game has a code redemption system. Every "Verity codes" page on the internet is actually listing codes for Build Base to Survive VERITY — a different game. Our codes page separates the two.',
      },
      {
        q: 'Is Verity\'s Game the same as Verity?',
        a: 'No. Verity\'s Game is a box-hunting collection game by Slime Time Studios, not a horror game. Different developer, different gameplay, same name.',
      },
      {
        q: 'How many different Verity games are there?',
        a: 'At least eight Roblox games use the Verity name, including Verity™ (the original), Verity\'s Game, Build Base to Survive VERITY, Verity Companion [AI], Verity [HORROR], Verity [REALISTIC], Steal A Verity! and Verity RP. Our which-Verity page compares all of them with live player counts.',
      },
    ],
  },
];

export default function FaqPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]);
  const all = SECTIONS.flatMap((s) => s.items);
  const faq = generateFAQSchema(all.map((i) => ({ question: i.q, answer: i.a })));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity FAQ</h1>
      <p className="text-gray-500 mb-8">
        {all.length} questions answered from verified gameplay and Roblox data. Checked {getCurrentDateString()}.
      </p>

      {SECTIONS.map((s) => (
        <section key={s.title} className="mb-10">
          <h2 className="text-xl font-black mb-3">{s.title}</h2>
          <div className="space-y-3">
            {s.items.map((i) => (
              <details key={i.q} className="group p-4 rounded-xl border border-gray-200 dark:border-gray-800 open:border-yellow-400 dark:open:border-yellow-700">
                <summary className="font-semibold text-sm cursor-pointer list-none flex items-start justify-between gap-3">
                  <span>{i.q}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform shrink-0">▾</span>
                </summary>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{i.a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Still Stuck?</h2>
        <ul>
          <li><Link href="/walkthrough">Full 3-day walkthrough</Link> — day-by-day, including resource counts.</li>
          <li><Link href="/good-ending">Good Ending guide</Link> — all 6 book locations and the lab sequence.</li>
          <li><Link href="/badges">All 6 badges</Link> — with live Roblox award counts.</li>
          <li><Link href="/which-verity">Which Verity game?</Link> — if you are not sure which game you are playing.</li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
