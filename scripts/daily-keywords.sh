#!/bin/bash
# Verity 站每日关键词管道
set -u
PROJ="/Users/david/Desktop/david/Ship/veritygame"
LOG="/tmp/veritygame-daily.log"
PI="/Users/david/Library/pnpm/bin/pi"

export PATH="/Users/david/Library/pnpm/bin:/usr/local/bin:/usr/bin:/bin"
cd "$PROJ" || exit 1

echo "=== $(date '+%Y-%m-%d %H:%M') run start ===" >> "$LOG"

"$PI" -p --no-session <<'EOF' >> "$LOG" 2>&1
你是 Verity (Roblox) 攻略站的每日运营 agent。项目目录：/Users/david/Desktop/david/Ship/veritygame

## 站点现状
- 已有页面：/ /badges /good-ending /walkthrough /characters /veritys-game /codes
- 数据文件：src/data/badges.json game.config.json
- 部署：git push origin main → Cloudflare 自动构建部署（veritysgame.xyz）
- 所有内容必须真实（来源：YouTube 视频字幕、tavily 搜索、游戏媒体），禁止编造

## 任务流程
1. 用 tavily 搜索（tavily_tavily_search）：
   - "Verity's Game" Roblox（Slime Time Studios 的热门新游戏——目前内容极少，优先监控其 walkthrough/ending/secret 内容，一旦有实质信息立即扩写 /veritys-game 页）
   - Verity Roblox chapter 2 / update / sequel（原作更新动态）
   - "Escape Verity" chapter 3（衍生作动态，有内容可在 /characters 或新页面补充）
   - Verity codes（监控 codes 系统是否上线——目前没有）
2. 缺口分析：新内容是否已有页面覆盖？
3. 只有发现【真实且有价值】的新内容时才动手：
   - 优先扩写 /veritys-game（趋势词主阵地）
   - 新 badge/ending/角色 → 更新 badges.json /characters
   - 改完必须：npm run build 验证通过，然后 git add -A && git commit && git push（用 GIT_TERMINAL_PROMPT=0）
4. 没有新内容就一行输出"今日无新增"，不要做任何代码改动

## 硬性规则
- 不编造游戏内容；搜不到就标注"待验证"或不做
- 不要改动页面结构/组件
- build 失败绝不 push；修复不了就回滚（git checkout .）并报告
EOF

echo "=== $(date '+%Y-%m-%d %H:%M') run end (exit $?) ===" >> "$LOG"
