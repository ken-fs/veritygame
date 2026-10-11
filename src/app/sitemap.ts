import type { MetadataRoute } from 'next';
import { getGameConfig } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const base = config.seo.baseUrl;
  const now = new Date();

  return config.routes.map((r) => ({
    // 尾斜杠必须与 canonical 一致（非斜杠 URL 会 307 跳转，浪费抓取预算）。
    // 2026-10-11：首页曾输出裸域（无尾斜杠）——site-hygiene 的 sitemap 检查
    // 会把它算成「指向错误域名」，且与 canonical 不一致。统一补斜杠。
    url: `${base}${r.path === '/' ? '/' : `${r.path}/`}`,
    lastModified: now,
    changeFrequency: r.path === '/codes' ? 'daily' : 'weekly',
    priority: Number(r.priority),
  }));
}
