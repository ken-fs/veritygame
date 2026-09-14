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
      <section className="relative rounded-2xl overflow-hidden mb-10 border border-gray-200 dark:border-gray-800 hero-bg hero-grain">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/85 via-purple-950/90 to-gray-950/95" />
        <img src="/hero-bg.jpg" alt="Verity Roblox gameplay" fetchPriority="high" loading="eager" className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="relative px-6 py-14 md:py-20 text-white">
          <p className="text-yellow-300 text-sm font-semibold mb-2 tracking-wide uppercase">The AI companion horror game</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Verity Guide &amp; Walkthrough</h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-6">
            A mysterious box. A yellow sphere that knows EVERYTHING. Three days to prepare.
            Complete badge guide, all endings explained, and every book location — updated {getCurrentDateString()}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/good-ending" className="btn-press px-5 py-2.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold">
              Good Ending Guide →
            </Link>
            <Link href="/badges" className="btn-press px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-semibold">
              All 6 Badges
            </Link>
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
            <div className="text-2xl font-black text-violet-600 dark:text-violet-400">{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Guides grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-black mb-4">Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUIDES.map((t, i) => (
            <Link key={t.href} href={t.href} className={`p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-violet-500 dark:hover:border-violet-600 hover:shadow-lg hover:shadow-violet-950/10 dark:hover:shadow-violet-500/5 transition-all group ${i === 0 ? 'md:col-span-2 bg-gradient-to-br from-violet-50/80 to-transparent dark:from-violet-950/30 dark:to-transparent' : ''}`}>
              <div className="text-2xl mb-2">{t.emoji}</div>
              <h3 className="font-bold mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{t.title}</h3>
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
