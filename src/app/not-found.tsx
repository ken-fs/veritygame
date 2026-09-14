import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-4">🟡</div>
      <h1 className="text-3xl font-black mb-2">404 — Verity knows everything...</h1>
      <p className="text-gray-500 mb-6">...except where this page went.</p>
      <Link href="/" className="px-5 py-2.5 rounded-lg bg-gray-950 hover:bg-gray-700 dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:text-gray-950 text-white font-bold transition-colors">
        Back to Safety
      </Link>
    </div>
  );
}
