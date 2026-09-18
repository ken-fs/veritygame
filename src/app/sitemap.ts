import type { MetadataRoute } from 'next';
import { getGameConfig } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const base = config.seo.baseUrl;
  const now = new Date();

  return config.routes.map((r) => ({
    // 尾斜杠必须与 canonical 一致（非斜杠 URL 会 307 跳转，浪费抓取预算）
    url: `${base}${r.path === '/' ? '' : `${r.path}/`}`,
    lastModified: now,
    changeFrequency: r.path === '/codes' ? 'daily' : 'weekly',
    priority: Number(r.priority),
  }));
}
