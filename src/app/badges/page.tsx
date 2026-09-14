import type { Metadata } from 'next';
import Link from 'next/link';
import { getBadges } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Badges (${getCurrentDateString()}) — How to Get All 6 Badges`,
  description:
    'All 6 Verity badges on Roblox: I\'m Verity!, Lovity, Bority, I\'m Falsity!, Good Ending and Bad Ending — exact unlock steps for each, including the AFK Bority trick.',
  keywords: ['verity badges', 'verity all badges', 'verity bority badge', 'verity lovity', 'verity im falsity', 'verity roblox badges'],
  path: '/badges',
});

const DIFF_STYLE: Record<string, string> = {
  Easy: 'bg-green-500/15 text-green-600 border-green-500/40',
  'Easy (boring)': 'bg-green-500/15 text-green-600 border-green-500/40',
  Medium: 'bg-amber-500/15 text-amber-600 border-amber-500/40',
  Default: 'bg-gray-500/15 text-gray-500 border-gray-500/40',
  Hard: 'bg-red-500/15 text-red-500 border-red-500/40',
};

export default function BadgesPage() {
  const badges = getBadges();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'All Badges', url: '/badges' },
  ]);
  const faq = generateFAQSchema(badges.map((b) => ({
    question: `How do you get the ${b.name} badge in Verity?`,
    answer: b.howTo,
  })));

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity — All 6 Badges</h1>
      <p className="text-gray-500 mb-8">Every badge and how to unlock it. Verified {getCurrentDateString()}.</p>

      <div className="space-y-4 mb-10">
        {badges.map((b, i) => (
          <div key={b.slug} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
              <h2 className="text-lg font-black">
                <span className="text-gray-400 font-mono mr-2">{i + 1}.</span>🏅 {b.name}
              </h2>
              <span className={`text-xs px-2 py-0.5 rounded border font-bold ${DIFF_STYLE[b.difficulty] ?? DIFF_STYLE.Default}`}>
                {b.difficulty}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{b.howTo}</p>
            {b.warning && (
              <p className="mt-2 text-xs p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400">
                ⚠️ {b.warning}
              </p>
            )}
            {(b.slug === 'good-ending' || b.slug === 'bad-ending') && (
              <Link href="/good-ending" className="inline-block mt-2 text-sm text-violet-600 dark:text-violet-400 hover:underline">
                Full ending walkthrough →
              </Link>
            )}
          </div>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Badge Order Recommendation</h2>
        <p>
          You can 100% Verity in a single playthrough if you plan ahead: grab <strong>I&apos;m Verity!</strong> at spawn,
          knock out <strong>Lovity</strong> on day 1, AFK for <strong>Bority</strong> after the tower is built, detour to the
          third tower for <strong>I&apos;m Falsity!</strong>, then collect all 6 books for the <strong>Good Ending</strong>.
          The only badge that requires a second run is the <strong>Bad Ending</strong> — since collecting all books locks you
          out of it, do a fast second run and enter the house with missing books.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
