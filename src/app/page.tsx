import Link from 'next/link';
import { getGameConfig, getBadges } from '@/lib/data';
import { generateVideoGameSchema, getCurrentDateString } from '@/lib/seo';

const config = getGameConfig();

const GUIDES = [
  { href: '/badges', emoji: '🏅', title: 'All 6 Badges', desc: 'I\'m Verity!, Lovity, Bority, I\'m Falsity!, both endings — every unlock step.' },
  { href: '/good-ending', emoji: '📖', title: 'Good Ending Guide', desc: 'All 6 book locations including the hidden black book near the house.' },
  { href: '/walkthrough', emoji: '🗺️', title: 'Full 3-Day Walkthrough', desc: 'Day-by-day: chop, mine, build, survive the final night.' },
  { href: '/characters', emoji: '🟡', title: 'Characters', desc: 'Verity, Falsity, Barity, Lovity, Bority — every sphere explained.' },
  { href: '/veritys-game', emoji: '🎮', title: "Verity's Game", desc: 'The trending new Verity game by Slime Time Studios — what we know.' },
  { href: '/codes', emoji: '🎁', title: 'Codes', desc: 'Any Verity codes? Status checked daily.' },
];

export default function HomePage() {
  const badges = getBadges();
  const schema = generateVideoGameSchema();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="mb-12">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-8 items-center">
          <div>
            <p className="inline-block text-xs font-bold tracking-widest uppercase bg-yellow-300 text-gray-950 px-2.5 py-1 rounded mb-5">
              The AI companion horror game
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-950 dark:text-gray-50 leading-[1.02] mb-5">
              The sphere knows <span className="bg-yellow-300 dark:bg-yellow-400 px-1.5 rounded-sm box-decoration-clone">everything</span>.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-7 leading-relaxed">
              A mysterious box. Three days to prepare. Every Verity badge, both endings,
              and all 6 book locations — updated {getCurrentDateString()}.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/good-ending" className="btn-press px-5 py-2.5 rounded-lg bg-gray-950 dark:bg-yellow-400 text-white dark:text-gray-950 font-bold hover:bg-gray-800 dark:hover:bg-yellow-300">
                Good Ending Guide →
              </Link>
              <Link href="/badges" className="font-semibold text-gray-700 dark:text-gray-300 underline decoration-yellow-400 decoration-2 underline-offset-4 hover:decoration-yellow-500">
                All 6 Badges
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-yellow-300 dark:bg-yellow-400/80 rounded-2xl rotate-2" aria-hidden="true" />
            <img
              src="/hero-bg.jpg"
              alt="Verity Roblox gameplay — the yellow sphere and the monster"
              fetchPriority="high"
              loading="eager"
              className="relative rounded-2xl w-full aspect-video object-cover border-2 border-gray-950 dark:border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { label: 'Badges', value: String(badges.length) },
          { label: 'Endings', value: '2' },
          { label: 'Books to Find', value: '6' },
          { label: 'Days to Prepare', value: '3' },
        ].map((s) => (
          <div key={s.label} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-2xl font-black text-gray-950 dark:text-yellow-400 tabular">{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Guides grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-black mb-4">Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDES.map((t, i) => (
            <Link key={t.href} href={t.href} className={`p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-yellow-500 dark:hover:border-yellow-500 hover:shadow-lg hover:shadow-yellow-900/5 dark:hover:shadow-yellow-500/5 transition-all group ${i === 0 ? 'md:col-span-2 bg-gradient-to-br from-yellow-50 to-transparent dark:from-yellow-950/20 dark:to-transparent' : ''}`}>
              <div className="text-2xl mb-2">{t.emoji}</div>
              <h3 className="font-bold mb-1 group-hover:text-yellow-700 dark:group-hover:text-yellow-400 transition-colors">{t.title}</h3>
              <p className="text-sm text-gray-500">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About the game */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-black">What is Verity?</h2>
        <p>
          Verity is a viral Roblox horror game by <strong>The ROBO Studio!</strong> (28M+ visits). A mysterious box
          appears at your doorstep containing <strong>Verity</strong> — a yellow AI sphere who &quot;knows everything&quot;
          and seems to care about you so much. But he warns you: <em>something bad will happen in 3 days</em>.
        </p>
        <p>
          Chop wood, mine rock, build your house and an observation tower — and pay attention to the details.
          Six hidden <Link href="/good-ending">books</Link> decide your fate, and the game hides two endings plus a
          full set of <Link href="/badges">six badges</Link> including the AFK-only Bority badge. Watch out for the
          moment Verity&apos;s face disappears — and don&apos;t trust every sphere you meet:{' '}
          <Link href="/characters">Falsity</Link> is not your friend. Probably.
        </p>
      </section>
    </div>
  );
}
