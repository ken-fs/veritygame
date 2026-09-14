import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Verity Codes (${getCurrentDateString()}) — Do Codes Exist?`,
  description:
    "Are there Verity codes on Roblox? Current code status for Verity and Verity's Game, checked daily. Plus how to get free rewards without codes.",
  keywords: ['verity codes', 'verity roblox codes', "verity's game codes", 'verity codes 2026'],
  path: '/codes',
});

export default function CodesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Codes', url: '/codes' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Are there any Verity codes?',
      answer:
        "No. Neither Verity (The ROBO Studio!) nor Verity's Game (Slime Time Studios) has a code redemption system as of September 2026. Any site listing 'working Verity codes' is inventing them. This page is checked daily.",
    },
    {
      question: 'How do I get free stuff in Verity without codes?',
      answer:
        'Verity is a story horror game — the unlockables are its 6 badges and 2 endings. See our badge guide for the fastest 100% route.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Verity Codes</h1>
      <p className="text-gray-500 mb-8">Last checked {getCurrentDateString()} — checked daily.</p>

      <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 mb-8">
        <p className="font-semibold mb-1">⚠️ No codes exist yet</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Neither the original <strong>Verity</strong> nor the trending <strong>Verity&apos;s Game</strong> has a code system.
          Verity is a story game — its &quot;rewards&quot; are the <a href="/badges" className="underline">6 badges</a> and{' '}
          <a href="/good-ending" className="underline">two endings</a>. If a code system is ever added, it will appear here within hours.
        </p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
