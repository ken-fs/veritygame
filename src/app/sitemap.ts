import type { MetadataRoute } from 'next';
import { getGameConfig } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const base = config.seo.baseUrl;
  const now = new Date();

  return config.routes.map((r) => ({
    url: `${base}${r.path === '/' ? '' : r.path}`,
    lastModified: now,
    changeFrequency: r.path === '/codes' ? 'daily' : 'weekly',
    priority: Number(r.priority),
  }));
}
