/**
 * data.ts — Verity 数据访问层
 * 数据来源：thespike.gg 徽章表 + 全流程视频字幕挖掘，禁止编造。
 */
import badgesData from '@/data/badges.json';
import configData from '@/data/game.config.json';

export interface Badge {
  slug: string;
  name: string;
  difficulty: string;
  awarded?: number;
  howTo: string;
  missable: boolean;
  warning?: string;
}

export interface GameConfig {
  game: {
    name: string;
    robloxId: string;
    developer: string;
    genre: string;
    currentVersion: string;
    lastUpdated: string;
    platforms: string[];
  };
  stats: {
    visits: string;
    favorites: string;
    onlineNow: string;
    serverSize: number;
    active: boolean;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    defaultOgImage: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
  };
  routes: { path: string; title: string; priority: string }[];
}

const config: GameConfig = configData as GameConfig;

export function getGameConfig(): GameConfig {
  return config;
}

export function getBadges(): Badge[] {
  return (badgesData as { badges: Badge[] }).badges;
}
