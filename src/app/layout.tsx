import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import { getGameConfig } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import './globals.css';

const config = getGameConfig();

// Fonts are self-hosted (src/fonts, OFL). next/font/google downloads them during the build,
// and when that download flakes on Cloudflare's builders the whole build fails
// ("Can't resolve '@vercel/turbopack-next/internal/font/google/font'", 2026-10-06).
const display = localFont({ src: '../fonts/rubik-latin-wght-normal.woff2', weight: '300 900', variable: '--font-display' });
const body = localFont({ src: '../fonts/inter-latin-wght-normal.woff2', weight: '100 900', variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.baseUrl),
  title: {
    default: config.seo.siteTitle,
    template: `%s | ${config.game.name} Guide`,
  },
  description: config.seo.siteDescription,
  keywords: [...config.seo.primaryKeywords, ...config.seo.secondaryKeywords],
  alternates: { canonical: config.seo.baseUrl },
  openGraph: {
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    url: config.seo.baseUrl,
    siteName: `${config.game.name} Guide`,
    images: [{ url: config.seo.defaultOgImage, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    images: [config.seo.defaultOgImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2RKS649CNY" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2RKS649CNY');`}
        </Script>
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased font-body">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <AdBanner adKey="df81ebe011d5b47618d6beccbea7bc68" width={728} height={90} />
        <main id="main" className="min-h-[calc(100vh-180px)]">{children}</main>
        <AdBanner />
        <Footer />
      </body>
    </html>
  );
}
