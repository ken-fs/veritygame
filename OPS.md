# Verity 站运营日志

> 最后更新：2026-09-14 · 状态：✅ 已上线运营中

## 站点信息

| 项 | 值 |
|----|-----|
| 域名 | https://veritysgame.xyz |
| 仓库 | https://github.com/ken-fs/veritygame |
| 部署 | Cloudflare Workers 静态资产，Git 集成（push → 自动构建部署）|
| GA4 | G-2RKS649CNY |
| 本地项目 | ~/Desktop/david/Ship/veritygame |
| 覆盖游戏 | Verity™（The ROBO Studio!，28.3M visits）+ Verity's Game（Slime Time Studios，趋势中 3,254 在线）+ 衍生作 |

## 当前规模

- **13 页全静态**：`/badges`（6徽章）`/good-ending`（6书+黑书+实验室）`/walkthrough`（3天流程）`/characters` `/veritys-game`（趋势词占位）`/codes`（无码监控）+ 法律页
- 数据源：thespike.gg 徽章验证表 + 全流程视频字幕挖掘（含好结局 freeze bug 及解法）
- 设计：亮色编辑风（白底+油墨黑+Verity黄），已去掉深色 AI 渐变
- SEO：Schema 全套（VideoGame/WebSite/Breadcrumb/FAQ 5-6问）、llms.txt、安全头
- SEO Health Score：84（2026-09-14 审计）

## 自动化

- **每日关键词管道**：cron 每天 11:35 跑 `scripts/daily-keywords.sh`
  - 日志：`/tmp/veritygame-daily.log`
  - 重点监控：Verity's Game 攻略内容浮现（扩写占位页）、Chapter 2/续作、codes 系统

## 运营日志

- 2026-09-17：发现 fan-made「Verity Part 2」（Umek0 Games，8月 Part 2 更新，YouTube 全流程攻略已出）→ 已加入 /veritys-game 宇宙清单并做非官方消歧。Verity's Game 攻略内容仍为 0，codes 仍无。

## 收录状态

- ✅ IndexNow（Bing/Yandex）：2026-09-14 已提交 10 URL
- ☐ Google Search Console：等用户拿 HTML 验证标记

## 待办（按优先级）

1. ☐ GSC 验证 + sitemap 提交（等用户提供 HTML 标记，两站一起）
2. ☐ `/veritys-game` 内容加深（等游戏攻略内容浮现，管道在盯）
3. ☐ 观察 7 天流量

## 姊妹站

- holefishing.xyz（OPS.md 在同仓库，每日管道 11:00）
- 观察清单：Anomaly Detected（CCU 破 10K 再启动）
