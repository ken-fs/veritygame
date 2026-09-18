'use client';

import { useEffect, useMemo, useState } from 'react';

interface Badge {
  slug: string;
  name: string;
  difficulty: string;
  awarded?: number;
  howTo: string;
}

const STORAGE_KEY = 'verity-badge-checklist-v1';

export default function BadgeChecklist({ badges }: { badges: Badge[] }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      // ignore malformed storage
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      // storage unavailable — checklist still works for this session
    }
  }, [done, loaded]);

  const earned = useMemo(() => badges.filter((b) => done[b.slug]).length, [badges, done]);
  const pct = Math.round((earned / badges.length) * 100);
  const next = badges.find((b) => !done[b.slug]);

  function toggle(slug: string) {
    setDone((prev) => ({ ...prev, [slug]: !prev[slug] }));
  }

  function reset() {
    setDone({});
  }

  return (
    <div className="p-5 rounded-xl border border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
      <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
        <h3 className="font-black">🏅 Badge Checklist</h3>
        <span className="text-sm font-mono tabular text-yellow-800 dark:text-yellow-300">
          {earned} / {badges.length} earned
        </span>
      </div>

      <div className="h-2 rounded-full bg-white dark:bg-gray-900 border border-yellow-300 dark:border-yellow-800 overflow-hidden mb-4">
        <div
          className="h-full bg-yellow-400 transition-all duration-300"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <ul className="space-y-2 mb-4">
        {badges.map((b) => (
          <li key={b.slug}>
            <label className="flex items-start gap-3 cursor-pointer text-sm group">
              <input
                type="checkbox"
                checked={!!done[b.slug]}
                onChange={() => toggle(b.slug)}
                className="mt-0.5 w-4 h-4 accent-yellow-500 shrink-0"
              />
              <span className={done[b.slug] ? 'line-through text-gray-400' : 'text-gray-700 dark:text-gray-300'}>
                <strong>{b.name}</strong>
                {typeof b.awarded === 'number' && (
                  <span className="ml-2 text-xs text-gray-400 font-mono">{b.awarded.toLocaleString()} awarded</span>
                )}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {earned === badges.length ? (
        <p className="text-sm font-semibold text-green-700 dark:text-green-400">
          🎉 All six badges earned — you have 100% Verity. Nothing left but the speedrun.
        </p>
      ) : (
        next && (
          <p className="text-xs text-gray-600 dark:text-gray-400">
            <strong>Next up: {next.name}</strong> — {next.howTo}
          </p>
        )
      )}

      {earned > 0 && (
        <button
          type="button"
          onClick={reset}
          className="mt-4 text-xs text-gray-500 underline hover:text-gray-700 dark:hover:text-gray-300"
        >
          Reset checklist
        </button>
      )}
      <p className="mt-3 text-[11px] text-gray-500">
        Saved in your browser only — no account, no tracking.
      </p>
    </div>
  );
}
