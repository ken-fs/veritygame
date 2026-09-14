import type { Metadata } from 'next';
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
                <div className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase tracking-wide">{c.role}</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-500">
        More spheres keep appearing as the IP expands (Chapter 2, Verity&apos;s Game, Escape Verity). We add them as they&apos;re confirmed.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  );
}
