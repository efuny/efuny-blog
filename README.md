# 个人博客主页设计稿

## 1. 设计目标

这是一个清爽、专业、可长期维护的中英双语个人博客首页设计稿。站点定位为“技术 / 创作者”的个人主页，核心目标是在首页第一屏内清楚说明：

- 我是谁
- 我主要写什么
- 为什么值得继续阅读
- 如何找到文章、项目和联系方式

第一版只规划首页，不包含文章详情页、后台管理、评论系统或完整博客引擎。所有真实姓名、头像、文章标题、邮箱和社交链接均使用占位内容，后续可替换。

## 2. 受众与气质

### 目标受众

- 想了解作者技术能力、写作方向和项目经验的人
- 潜在合作方、招聘方、同行开发者、长期读者
- 对 Engineering、AI、Product、Notes 等主题感兴趣的访问者

### 视觉气质

- 清爽、克制、可信赖
- 更像专业博客和个人知识库，不像营销落地页
- 内容优先，阅读舒适，避免复杂动画和装饰性视觉
- 适合长期更新，首页不会因为内容变多而显得拥挤

## 3. 页面整体结构

首页从上到下分为以下区域：

1. 顶部导航
2. 首屏个人介绍
3. 精选文章
4. 主题分类
5. 近期动态 / 笔记
6. 关于我
7. 订阅与联系方式
8. 页脚

桌面端采用居中内容容器，最大宽度建议为 `1120px`。移动端采用单列布局，优先保证导航、文章列表和语言切换清晰可用。

## 4. 顶部导航

### 目的

让访问者快速识别站点归属，并进入文章、项目、关于和联系方式等核心入口。

### 桌面端布局

左侧：

- 站点名 / 姓名：`Jason's Notes`

右侧导航：

- `文章 / Posts`
- `项目 / Projects`
- `关于 / About`
- `联系 / Contact`
- `English`

### 移动端布局

- 左侧保留站点名
- 右侧显示语言切换和菜单按钮
- 菜单展开后显示文章、项目、关于、联系
- 导航高度建议控制在 `56px` 到 `64px`

### 状态规则

- 当前页面导航项使用强调色或下划线标识
- 语言切换默认显示 `English`
- 切换到英文后显示 `中文`

## 5. 首屏个人介绍

### 目的

第一屏必须回答“这个人是谁、写什么、值得读什么”。

### 中文文案占位

标题：

> 你好，我是 Jason。这里记录技术、产品与长期思考。

简介：

> 我关注软件工程、AI 工具、产品构建和个人知识系统。这个博客用来沉淀实践经验，也记录一些正在形成中的想法。

主按钮：

- `阅读文章`

次按钮：

- `了解我`

### English Copy

Headline:

> Hi, I'm Jason. I write about engineering, products, and long-term thinking.

Description:

> I explore software engineering, AI tools, product building, and personal knowledge systems. This blog collects practical notes, experiments, and ideas in progress.

Primary action:

- `View Posts`

Secondary action:

- `About`

### 版式规则

- 首屏不使用营销型巨大横幅
- 标题建议 40px 到 52px，移动端 30px 到 36px
- 简介宽度控制在 `640px` 左右，避免过长行宽
- 按钮使用简单文本按钮或轻量描边按钮
- 首屏底部要露出下一模块的一部分，提示页面可继续浏览

## 6. 精选文章

### 目的

展示最能代表作者方向的 3 篇文章，让访问者快速理解博客质量和主题。

### 区域标题

中文：

> 精选文章

英文：

> Featured Posts

### 文章卡片字段

每张文章卡片包含：

- 标题
- 摘要
- 标签
- 发布日期
- 阅读时间

### 示例内容

文章 1：

- 中文标题：`如何建立一个长期可维护的个人知识系统`
- English title: `Building a Personal Knowledge System That Lasts`
- 摘要：`从记录、整理、回顾到输出，分享一个适合长期使用的知识管理流程。`
- Tags: `Notes`、`Knowledge`
- Date: `2026.05.25`
- Reading time: `6 min read`

文章 2：

- 中文标题：`AI 工具如何改变个人开发流程`
- English title: `How AI Tools Reshape Solo Development`
- 摘要：`记录从需求拆解、代码实现到验证交付的 AI 协作实践。`
- Tags: `AI`、`Engineering`
- Date: `2026.05.18`
- Reading time: `8 min read`

文章 3：

- 中文标题：`从一个小产品开始理解复杂系统`
- English title: `Learning Complex Systems Through a Small Product`
- 摘要：`用产品构建过程观察需求、约束、反馈和系统演化。`
- Tags: `Product`、`Systems`
- Date: `2026.05.10`
- Reading time: `7 min read`

### 版式规则

- 桌面端使用三列卡片或一列主文章 + 两列次级文章
- 移动端使用单列列表
- 卡片圆角不超过 `8px`
- 卡片之间留出明确间距，避免拥挤
- 摘要最多显示 2 到 3 行

## 7. 主题分类

### 目的

让读者按兴趣进入不同内容方向，也帮助首页建立清晰的信息地图。

### 分类建议

- `Engineering`：软件工程、架构、开发流程
- `AI`：AI 工具、模型使用、自动化工作流
- `Product`：产品思考、用户体验、构建记录
- `Notes`：读书、学习、方法论、生活观察

### 组件规则

- 分类可以显示为简洁列表或轻量标签组
- 每个分类显示标题、简短说明和文章数量
- 文章数量使用占位值，例如 `12 posts`

### 示例文案

Engineering：

> 关于代码、系统设计和工程实践。

AI：

> 关于 AI 工具、工作流和人机协作。

Product：

> 关于产品构建、体验设计和决策。

Notes：

> 关于阅读、学习和长期记录。

## 8. 近期动态 / 笔记

### 目的

用轻量时间线展示最近更新，让主页显得真实、活跃、持续维护。

### 内容形式

每条动态包含：

- 日期
- 简短标题
- 一句话说明
- 可选链接

### 示例

- `2026.05.25`：整理个人主页设计稿  
  `确定博客首页的信息架构、视觉方向和双语文案。`

- `2026.05.20`：发布一篇 AI 工作流笔记  
  `记录如何用 AI 辅助完成小型产品迭代。`

- `2026.05.12`：更新项目归档方式  
  `把项目从简单列表调整为按主题分组。`

### 版式规则

- 桌面端可以使用左侧日期、右侧内容的时间线
- 移动端使用普通列表
- 不使用过强的视觉装饰，保持阅读节奏

## 9. 关于我

### 目的

提供简短可信的个人背景，不把首页变成完整简历。

### 中文文案占位

> 我是一名关注软件工程、AI 工具和产品构建的创作者。平时喜欢把实践中的问题拆开，整理成可复用的方法和文章。这个网站是我的公开笔记本，也是一处长期维护的个人档案。

### English Copy

> I'm a creator focused on software engineering, AI tools, and product building. I like turning practical problems into reusable notes, methods, and essays. This site is my public notebook and a long-term personal archive.

### 可选信息

- 所在城市：`Shanghai / Remote`
- 关注方向：`Engineering`、`AI`、`Product`
- 当前状态：`Open to collaboration`

## 10. 订阅与联系方式

### 目的

提供明确的后续连接方式，让读者知道如何继续关注或联系作者。

### 内容建议

- 邮箱：`hello@example.com`
- GitHub：`github.com/username`
- X / Twitter：`x.com/username`
- RSS：`/feed.xml`
- Newsletter：预留入口，第一版可不实现

### 中文文案

> 如果你对文章、项目或合作有兴趣，欢迎通过邮件联系我。

### English Copy

> If you're interested in my writing, projects, or collaboration, feel free to reach out by email.

## 11. 页脚

### 内容

- `© 2026 Jason. All rights reserved.`
- `RSS`
- `GitHub`
- `Email`
- 语言切换入口可重复放置

### 规则

- 页脚应简洁，不承载过多信息
- 与正文保持足够间距
- 移动端链接允许换行

## 12. 视觉规范

### 色彩

推荐色板：

- 页面背景：`#F7F8FA`
- 主内容背景：`#FFFFFF`
- 主文字：`#1F2933`
- 次级文字：`#5F6B7A`
- 边框：`#E2E8F0`
- 强调色：`#2563EB`
- 强调色 hover：`#1D4ED8`
- 成功 / 轻提示：`#0F766E`

使用规则：

- 页面整体以白色和浅灰为主
- 强调色只用于链接、按钮、当前导航和少量重点信息
- 不使用大面积渐变
- 不使用单一蓝紫色主题铺满全站

### 字体

中文：

- 优先使用系统字体：`PingFang SC`、`Microsoft YaHei`、`Noto Sans SC`

英文：

- 优先使用系统字体：`Inter`、`SF Pro Text`、`Segoe UI`

代码或技术标签：

- `SFMono-Regular`、`Menlo`、`Consolas`、`monospace`

### 字号建议

- 页面标题：`40px - 52px`
- 移动端标题：`30px - 36px`
- 区域标题：`24px - 30px`
- 正文：`16px - 18px`
- 辅助说明：`14px - 15px`
- 标签 / 元信息：`12px - 13px`

### 间距

- 页面左右边距：桌面端 `32px`，移动端 `20px`
- 区域上下间距：桌面端 `72px - 96px`，移动端 `48px - 64px`
- 卡片内边距：`20px - 24px`
- 卡片间距：`16px - 24px`

## 13. 组件清单

### Header

- 固定或普通顶部导航均可
- 若固定顶部导航，需要加轻微背景和边框，避免滚动时遮挡内容

### Language Switch

- 形态：文本按钮
- 中文界面显示 `English`
- 英文界面显示 `中文`

### Button

- 主按钮：蓝色背景、白色文字
- 次按钮：透明背景、边框或文本链接
- 移动端按钮宽度可自适应，避免文字换行

### Post Card

- 显示标题、摘要、标签、日期、阅读时间
- 整张卡片可点击
- hover 时边框或阴影轻微变化

### Category Item

- 显示分类名、说明和文章数
- 可以作为链接进入分类列表

### Timeline Item

- 显示日期、标题、说明
- 日期使用次级文字或等宽字体

### Contact Links

- 使用文本链接或图标 + 文本
- 链接之间保持足够点击间距

## 14. 响应式规则

### 桌面端：`1024px` 及以上

- 内容最大宽度 `1120px`
- 精选文章三列展示
- 分类区可四列展示
- 关于我和联系方式可并排展示

### 平板端：`768px - 1023px`

- 内容最大宽度随屏幕自适应
- 精选文章两列或单列，视内容长度决定
- 分类区两列展示
- 导航保持完整或切换为菜单按钮

### 移动端：`767px` 及以下

- 单列布局
- 导航折叠
- 首屏标题减少字号
- 文章卡片占满容器宽度
- 按钮可上下排列
- 语言切换始终可见

## 15. 双语内容策略

### 默认语言

默认显示中文。

### 切换规则

- 用户点击 `English` 后切换英文内容
- 英文界面导航、按钮、标题、文章摘要同步切换
- 不需要在同一段落中同时显示中英文，避免页面拥挤
- 第一版可使用前端状态切换，未来可以升级为独立路由，例如 `/en`

### 文案长度控制

- 中文标题建议不超过 26 个汉字
- 英文标题建议不超过 72 个字符
- 摘要建议控制在 80 到 120 个中文字符，英文控制在 140 到 180 个字符

## 16. 后续实现建议

### 第一阶段

实现一个静态首页：

- `index.html`
- `styles.css`
- 可选 `script.js` 用于语言切换

### 第二阶段

增加博客文章结构：

- 文章列表页
- 文章详情页
- 标签 / 分类页
- RSS 订阅

### 第三阶段

升级为静态站点生成器或框架：

- Astro
- Next.js
- Nuxt
- Hugo

建议优先考虑 Astro，因为它适合内容型个人站，性能好，复杂度适中。

## 17. 验收标准

设计稿完成后，应满足以下标准：

- 首页结构完整，开发者可以按文档直接实现
- 中文和英文核心文案均已预留
- 文章、分类、动态、关于和联系方式均有示例内容
- 桌面端、平板端和移动端布局规则明确
- 视觉规范足够具体，能避免实现时风格漂移
- 第一屏能清楚表达作者定位和博客价值
- 移动端导航、文章列表和语言切换都有明确方案

## 18. 图片资产方案

### 图片使用原则

个人博客首页需要图片，但不应让图片压过文字。图片的作用是建立清爽、可信、创作者感的氛围，并帮助读者快速理解站点主题。

推荐第一版使用 4 张图片：

1. 首屏主视觉图
2. 精选文章配图
3. 主题分类背景图
4. 关于我区域配图

所有图片都应避免真实品牌标识、可读文字、水印、过暗光线和拥挤构图。图片风格应统一为明亮、克制、现代、适合技术创作者博客。

### 文件位置

建议后续生成后保存到：

- `output/imagegen/blog-hero.png`
- `output/imagegen/featured-posts.png`
- `output/imagegen/topic-grid.png`
- `output/imagegen/about-workspace.png`

如果进入正式网页实现，建议再复制或移动到：

- `assets/images/blog-hero.png`
- `assets/images/featured-posts.png`
- `assets/images/topic-grid.png`
- `assets/images/about-workspace.png`

### 图片 1：首屏主视觉图

用途：

- 首页首屏右侧或背景局部视觉
- 桌面端可作为横向图，移动端可裁切为顶部插图

建议尺寸：

- `2048x1152`

Image2 Prompt:

```text
Use case: ui-mockup.
Asset type: hero image for a clean professional bilingual personal tech blog.
Primary request: A tasteful editorial-style abstract desktop scene for a technical creator's blog, showing a calm workspace with a laptop, notebook, subtle code-like patterns, soft daylight, and organized knowledge cards.
Scene/backdrop: bright minimal study desk, white and light gray surfaces, small accents in restrained blue and teal.
Composition: wide landscape hero image with generous negative space, suitable for website header crop.
Style: refined modern editorial illustration with slight realism, clean edges, calm professional mood.
Constraints: no readable words, no brand marks, no logos, no watermark, no human face, no clutter, no dark moody lighting.
```

### 图片 2：精选文章配图

用途：

- 精选文章区域顶部横幅或首张重点文章缩略图
- 表达“写作、知识整理、工程实践”

建议尺寸：

- `1536x1024`

Image2 Prompt:

```text
Use case: productivity-visual.
Asset type: featured posts image for a personal technology blog.
Primary request: A polished visual metaphor for writing technical essays: layered article cards, clean diagrams, a small code editor window, and a notebook arranged on a bright desk.
Scene/backdrop: modern clean workspace, soft daylight, white and pale gray background, subtle blue and green accents.
Composition: balanced editorial composition, enough open space for cropping, clear visual hierarchy.
Style: sophisticated semi-realistic illustration, crisp details, professional and calm.
Constraints: no readable text, no fake UI words, no logos, no watermark, no hands, no people, no messy clutter.
```

### 图片 3：主题分类背景图

用途：

- 主题分类区域的轻视觉背景
- 可裁切成横幅，也可作为四个分类卡片的统一视觉素材

建议尺寸：

- `1536x1024`

Image2 Prompt:

```text
Use case: infographic-diagram.
Asset type: abstract category illustration for a tech creator blog.
Primary request: A clean abstract map of four connected knowledge areas representing Engineering, AI, Product, and Notes, using simple cards, nodes, lines, and subtle geometric surfaces.
Scene/backdrop: bright neutral background with restrained blue, teal, graphite, and warm gray accents.
Composition: centered but airy layout, suitable for cropping into a website section background or category thumbnail.
Style: modern editorial infographic illustration, minimal, precise, elegant.
Constraints: no readable labels, no letters, no logos, no watermark, no neon cyberpunk style, no heavy gradients.
```

### 图片 4：关于我区域配图

用途：

- 关于我区域旁边的小幅配图
- 表达“长期记录、个人档案、持续创作”

建议尺寸：

- `1024x1024`

Image2 Prompt:

```text
Use case: stylized-concept.
Asset type: square about-section illustration for a personal blog.
Primary request: A quiet creator's archive scene with organized notebooks, a small laptop, pinned idea cards, and a warm desk lamp in a clean modern room.
Scene/backdrop: minimal study corner, soft natural light, white walls, pale wood, subtle blue and teal accents.
Composition: square image, subject centered with comfortable padding, readable at small sizes.
Style: refined cozy-modern illustration with realistic materials, calm and thoughtful.
Constraints: no readable text, no logos, no watermark, no face, no person, no dark dramatic shadows, no excessive decoration.
```

### 首页放置建议

- 首屏主视觉图放在介绍文案右侧，桌面端占宽约 `42%`，移动端放在标题下方。
- 精选文章配图只给重点文章使用，其余文章卡片保持纯文字，避免页面过重。
- 主题分类背景图应低对比度使用，不要影响分类文字可读性。
- 关于我配图尺寸不宜过大，保持辅助角色。

### 加载与裁切规则

- 正式实现时为每张图片生成 WebP 或 AVIF 版本。
- 首屏图片需要设置明确宽高或 `aspect-ratio: 16 / 9`，避免加载时页面跳动。
- 文章配图建议使用 `aspect-ratio: 3 / 2`。
- 关于我配图建议使用 `aspect-ratio: 1 / 1`。
- 移动端图片应压缩加载，避免影响首屏速度。
