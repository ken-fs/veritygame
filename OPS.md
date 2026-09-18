# Verity 站运营日志

> 最后更新：2026-09-18 · 状态：✅ 已上线运营中
>
> **09-18 竞品拆解轮**：verity 命名空间共 5 个真竞品（verity.wiki ~60页 / veritycompanion.wiki ~50页含 tools 套件 / verityhorror.wiki 8页 / veritygame.wiki 11页 / veritysgame.wiki 7页）；verity.gg / verity.wtf 空壳，veritygame.com 是国内影视站。→ ①新建 `/which-verity` + `/faq` ②徽章页接入 Roblox API 真实获奖数 ③新增**徽章清单工具**（对标 veritycompanion.wiki 的 tools/badge-checklist）④核心页扩写 313-607 → 755-985 词。13→15 页。
>
> **09-18 内容补全**：至少 8 个 Roblox 游戏共用 Verity 名字 → 新建消歧页 + FAQ；/veritys-game 新增 8 游戏生态对比表。

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

- **15 页全静态**：`/badges`（6徽章，含实时获奖数）`/good-ending`（6书+黑书+实验室）`/walkthrough`（3天流程）`/characters` `/veritys-game`（趋势词主阵地 + 生态对比表）`/which-verity`（名称消歧）`/faq`（16 问）`/codes` + 法律页
- **09-18 新增**：
  - `/which-verity` — 8 个同名游戏全对比（实时在线/访问/收藏/人数上限 + Roblox place 外链 + 十秒辨别法 + 为何 guide 不通用）
  - `/faq` — 16 问 FAQ hub（分 4 类，16 条 FAQPage schema，覆盖 badges/endings/角色/剧情/codes/同名游戏）
- **09-18 数据升级**：
  - `badges.json` 补 Roblox API 真实获奖数（Bority 39,120 最稀有 ← 对 I'm Verity! 9,651,756）；`/badges` 新增实时稀有度排行表
  - `/veritys-game` 修正 3.2K→4.2K 在线、3M→7M 访问、更新日 9/18；新增 8 游戏生态对比表
  - `game.config` 修正：原版在线 3,200→**40**（已退烧）、最后更新 7/17、服务器 1→40、访问 28.4M
- 数据源：Roblox 公开 API（游戏统计 + 徽章获奖数）+ thespike.gg 徽章验证 + 全流程视频字幕挖掘
- 设计：亮色编辑风（白底+油墨黑+Verity黄）
- SEO：Schema 全套（VideoGame/WebSite/Breadcrumb/FAQ 5-16问）、llms.txt、安全头、sitemap 12 URL
- **09-18 竞品拆解轮新增**：
  - `BadgeChecklist` 交互组件（localStorage 本地保存，进度条 + 下一个徽章提示 + 重置）→ 挂在 `/badges`
  - `/badges` 补实时稀有度排行表；`/walkthrough` 436→985 词（资源清单表 + 易漏窗口 + 失败点 + 最快 100% 路线）
  - `/good-ending` 393→795 词（逐书表 + freeze bug 完整解法 + 结局含义 + 双结局对比）
  - `/characters` 313→755 词（角色/徽章辨析表 + 剧情时间线 + Falsity 存在含义）
- SEO Health Score：84（2026-09-14 审计）

## 竞品格局（09-18 拆解）

| 竞品 | 覆盖 | 页面数 | 特点 |
|---|---|---|---|
| verity.wiki | Specter 的 Verity [HORROR]（**不同游戏**）| ~60 | 最深；含 controls/badges 单页/events |
| veritycompanion.wiki | Verity Companion [AI] | ~50 | 有 tools（badge-checklist/codes-tracker/ending-planner）|
| veritygame.wiki | 泛 verity | 11 | how-to-play/controls/story |
| verityhorror.wiki | Specter 的 Verity [HORROR] | 8 | 薄 |
| veritysgame.wiki | Verity's Game | 7 | 很薄 |

- 他们把我们这版（The ROBO Studio）叫 "wrong game" → 名称混淆是双向的，`/which-verity` 是正确应对
- 注意：verity.wiki 覆盖的是 Specter Development 的另一个同名游戏（Place 102512776849655），**内容不可混用**

## 自动化

- **每日关键词管道**：cron 每天 11:35 跑 `scripts/daily-keywords.sh`
  - 日志：`/tmp/veritygame-daily.log`
  - 重点监控：Verity's Game 攻略内容浮现（扩写占位页）、Chapter 2/续作、codes 系统

## 运营日志

- 2026-09-18（内容补全轮）：新建 `/which-verity` + `/faq`；badges.json 接入 Roblox API 真实获奖数；/veritys-game 加 8 游戏生态对比表并刷新统计；首页/ footer / llms.txt / sitemap 接入；IndexNow 提交。**关键情报**：原版 Verity™ 在线仅 40（已退烧），但 IP 生态更热——Build Base to Survive VERITY 4.5K / Verity's Game 4.2K / Steal A Verity! 3.4K；Verity Companion [AI] 30.8M 访问为生态第一。
- 2026-09-18：Build Base to Survive VERITY codes 轮换 → 重写 /codes 列表：新码 VOIDITY（报 9/19 过期）/UPDATE4/DAILYQUESTS/OGplayer67 经 TechWiser+ProGameGuides+TryHardGuides 三源交叉；GODITY/UPDATE2/MANIPULITY/ROBLOXDOWN 状态分歧已标注。Verity Companion 官方描述 Update 1（新结局+消息上限 40）→ /veritys-game 宇宙行补注。Verity's Game 攻略内容仍为 0（aprasi 科普文仅官方描述派生，无实据），监控日期更新至 9/18。
- 2026-09-17：发现 fan-made「Verity Part 2」（Umek0 Games，8月 Part 2 更新，YouTube 全流程攻略已出）→ 已加入 /veritys-game 宇宙清单并做非官方消歧。Verity's Game 攻略内容仍为 0，codes 仍无。

## GSC 诊断（2026-09-18，API 接入首日）

### 搜索数据（28 天，实为 09-14 上线后）

| 点击 | 展示 | 排名 | 关键词 |
|---:|---:|---:|---|
| 0 | 7 | 16.1 | verity roblox |
| 0 | 1 | 7.0 | verity companion roblox all endings |
| 0 | 1 | 79.0 | verity game |

日维度：09-14 24 展示/2 点击 → 09-15 **86 展示/0 点击**（有展示无点击 = 排名太靠后）

### ⚠️ 三个收录问题

1. **只有首页被收录** —— `/badges` `/good-ending` `/walkthrough` `/which-verity` `/faq` 全部「URL is unknown to Google」，从未抓取。首页最后抓取 09-14。
2. **`http://` 版本仍在 Google 索引里** —— page 维度显示 `http://veritysgame.xyz/` 独占 **46 次展示**（占全站 110 次的 42%）。http→https 的 301 已配，但 Google 尚未合并。
3. **`www.` 返回 200 且内容与非 www 完全相同**（39,081 字节）→ 重复内容，无跳转。

### 战略结论

`verity roblox` 排 16.1、`verity game` 排 79 —— 这是**抢不过的词**：5 个竞品站 + 官方游戏页 + Fandom + YouTube 全在争。唯一有戏的是长尾衍生作词（如 `verity companion roblox all endings` 已排 7.0）。`/which-verity` 消歧页 + 衍生作内容的策略是对的，应继续加码。

## 收录状态

- ✅ IndexNow（Bing/Yandex）：2026-09-14 已提交 10 URL
- ☐ Google Search Console：等用户拿 HTML 验证标记

## 待办（按优先级）

1. ☐ GSC 验证 + sitemap 提交（等用户提供 HTML 标记，两站一起）
2. ☐ 观察 `/which-verity` 排名（对标 verity.wiki / veritygame.wiki / veritysgame.wiki——三家都是同名混淆站的先行者）
3. ☐ `/veritys-game` 内容加深（等游戏攻略内容浮现，管道在盯）
4. ☐ 评估是否给热门衍生作（Build Base to Survive VERITY 4.5K CCU）建独立页
5. ☐ 观察 7 天流量

## 姊妹站

- holefishing.xyz（OPS.md 在同仓库，每日管道 11:00）
- 观察清单：Anomaly Detected（CCU 破 10K 再启动）
