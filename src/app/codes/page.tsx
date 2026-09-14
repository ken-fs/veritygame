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
    {
      question: 'Did Verity ever have codes?',
      answer:
        'No — the game has never had a code redemption system since launch. The closest thing to free rewards is the badge set, which is earned entirely in-game.',
    },
    {
      question: "What about codes for Verity's Game (Slime Time Studios)?",
      answer:
        "Verity's Game does not have codes either as of September 2026. We monitor both games daily and will update this page the moment any code system appears.",
    },
    {
      question: 'Where would Verity codes appear if they were added?',
      answer:
        'Most Roblox horror games put code redemption in the settings menu or a dedicated codes button on the main screen. If Verity adds one, we will publish exact redemption steps here.',
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
