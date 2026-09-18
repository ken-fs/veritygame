import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Characters (${getCurrentDateString()}) — Verity, Falsity, Barity, Lovity & Bority`,
  description:
    'Every sphere in Verity (Roblox) explained: Verity the AI companion, Falsity the other model, Barity, and the Lovity/Bority badge variants. Lore and how to find each.',
  keywords: ['verity characters', 'falsity roblox', 'barity verity', 'lovity bority', 'verity lore'],
  path: '/characters',
});

const CHARACTERS = [
  {
    name: 'Verity',
    emoji: '🟡',
    role: 'The AI Companion',
    desc: 'The yellow sphere from the box. "Ask me anything, I know EVERYTHING." He helps you prepare for 3 days — then something goes very wrong on the final night. His face disappears, he hunts you, and the lab reveals he is anchored to this world. Every world he inhabits has an anchor.',
  },
  {
    name: 'Falsity',
    emoji: '🔵',
    role: 'The Other Model',
    desc: 'A blue orb found in the third tower from your house. "Hey, my name is Falsity. I know everything. Trust me." He openly admits Verity is "another model" and claims he was created to assist players. Talking to him earns the I\'m Falsity! badge. Whether he\'s actually trustworthy is... unclear.',
  },
  {
    name: 'Barity',
    emoji: '🔴',
    role: 'The Screamer',
    desc: 'A hostile variant encountered in endings content — "HELLO, I\'M BARITY, YOUR PERSONAL HELPER FRIEND." delivered at maximum volume. Same helper pitch, very different energy.',
  },
  {
    name: 'Lovity',
    emoji: '💛',
    role: 'Badge Variant',
    desc: 'Unlocked by throwing Verity onto the bed (repeatedly — it takes a few tries to register). A badge, a vibe, and proof that Verity tolerates you.',
  },
  {
    name: 'Bority',
    emoji: '😴',
    role: 'Badge Variant',
    desc: 'The patience test: after building the tower and being told to sleep, stand next to Verity and stay AFK for ~10 minutes. The most boring badge in Roblox history — hence the name.',
  },
];

export default function CharactersPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Characters', url: '/characters' },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity Characters</h1>
      <p className="text-gray-500 mb-8">Every sphere in the Verity universe — updated {getCurrentDateString()}.</p>

      <div className="space-y-4">
        {CHARACTERS.map((c) => (
          <div key={c.name} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{c.emoji}</span>
              <div>
                <h2 className="text-lg font-black">{c.name}</h2>
                <div className="text-xs text-yellow-700 dark:text-yellow-400 font-semibold uppercase tracking-wide">{c.role}</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-500">
        More spheres keep appearing as the IP expands (Chapter 2, Verity&apos;s Game, Escape Verity). We add them as they&apos;re confirmed.
      </p>

      <section className="prose prose-gray dark:prose-invert max-w-none mt-10">
        <h2>Who Is Actually Who</h2>
        <p>
          The Verity cast is confusing because three of the five names are badges rather than characters. Here is the
          breakdown:
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Name</th>
                <th className="py-2 pr-3">A character?</th>
                <th className="py-2">What it actually is</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Verity</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">✅ Yes</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">The yellow sphere — the main character and the antagonist</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Falsity</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">✅ Yes</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">The blue orb in the third tower — a second AI model</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Barity</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">✅ Yes</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">A hostile variant that only appears in endings content</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Lovity</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">❌ No</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">A badge — the reward for throwing Verity onto the bed</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Bority</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">❌ No</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">A badge — the reward for standing still for ten minutes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The Story in Order</h2>
        <ol>
          <li><strong>Day 1 — the box.</strong> A package is waiting at your door. Inside is Verity, who introduces himself as your personal helper friend and claims to know everything. He warns you that something bad will happen in three days.</li>
          <li><strong>Days 1–2 — the preparation.</strong> You chop, mine and build. Verity is helpful, chatty, and increasingly present. Nothing is obviously wrong yet — this is the part that makes the ending land.</li>
          <li><strong>Day 2 — Falsity.</strong> In the third tower from your house there is a blue orb. He introduces himself as Falsity, says he knows everything, and tells you to trust him. He also confirms Verity is &quot;another model&quot; — implying there are more of them.</li>
          <li><strong>Day 3 — the turn.</strong> Verity appears faceless and hostile. He chases you, cannot climb stairs, and the tower becomes your refuge. The book hunt begins.</li>
          <li><strong>The lab.</strong> With all six books you follow Verity down into the second building&apos;s basement. Room 3, a breakable rock wall, and a black room containing the <strong>anchor</strong> — the object that binds him to this world.</li>
        </ol>

        <h2>What Falsity&apos;s Existence Implies</h2>
        <p>
          Falsity is the most important piece of lore in the game, and he is entirely optional. His introduction —
          &quot;I know everything, trust me&quot; — is a word-for-word echo of Verity&apos;s opening line. That parallel is
          deliberate: the game is telling you that these spheres are a <em>type</em> of thing, not a single character.
        </p>
        <p>
          Combined with the anchor reveal — &quot;every world where I inhabit has one&quot; — the implication is that Verity
          has done this before, in other instances, with other players. Falsity is either the same kind of entity on a
          different assignment, or a competing one. The game does not answer it, which is exactly why the ending hits.
        </p>
        <p className="text-sm text-gray-500">
          Note: the original Verity has <strong>no announced Chapter 2</strong>. Other games in the ecosystem —{' '}
          <Link href="/veritys-game">Verity&apos;s Game</Link>, Escape Verity, Build Base to Survive VERITY — are
          separate titles. See <Link href="/which-verity">which Verity game</Link> if you are not sure which one you
          are playing.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  );
}
