const copy = {
  zh: {
    "nav.posts": "文章",
    "nav.projects": "项目",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "技术 / 创作者博客",
    "hero.title": "你好，我是 Jason。这里记录技术、产品与长期思考。",
    "hero.description":
      "我关注软件工程、AI 工具、产品构建和个人知识系统。这个博客用来沉淀实践经验，也记录一些正在形成中的想法。",
    "hero.primary": "阅读文章",
    "hero.secondary": "了解我",
    "posts.eyebrow": "精选文章",
    "posts.title": "近期最值得读的 3 篇",
    "posts.description": "这些文章代表了我近期最关注的方向：知识系统、AI 协作和产品构建。",
    "post.one.title": "如何建立一个长期可维护的个人知识系统",
    "post.one.description": "从记录、整理、回顾到输出，分享一个适合长期使用的知识管理流程。",
    "post.two.title": "AI 工具如何改变个人开发流程",
    "post.two.description": "记录从需求拆解、代码实现到验证交付的 AI 协作实践。",
    "post.three.title": "从一个小产品开始理解复杂系统",
    "post.three.description": "用产品构建过程观察需求、约束、反馈和系统演化。",
    "topics.eyebrow": "主题分类",
    "topics.title": "围绕实践建立的内容地图",
    "topics.description": "我把文章按长期关注的问题组织起来，方便你从一个主题进入，再慢慢延展。",
    "topic.engineering": "关于代码、系统设计和工程实践。",
    "topic.ai": "关于 AI 工具、工作流和人机协作。",
    "topic.product": "关于产品构建、体验设计和决策。",
    "topic.notes": "关于阅读、学习和长期记录。",
    "updates.eyebrow": "近期动态",
    "updates.title": "正在更新的笔记",
    "update.one.title": "整理个人主页设计稿",
    "update.one.description": "确定博客首页的信息架构、视觉方向和双语文案。",
    "update.two.title": "发布一篇 AI 工作流笔记",
    "update.two.description": "记录如何用 AI 辅助完成小型产品迭代。",
    "update.three.title": "更新项目归档方式",
    "update.three.description": "把项目从简单列表调整为按主题分组。",
    "about.eyebrow": "关于我",
    "about.title": "把实践问题整理成可复用的文章",
    "about.description":
      "我是一名关注软件工程、AI 工具和产品构建的创作者。平时喜欢把实践中的问题拆开，整理成可复用的方法和文章。这个网站是我的公开笔记本，也是一处长期维护的个人档案。",
    "contact.eyebrow": "联系与订阅",
    "contact.title": "保持联系，或者继续阅读",
    "contact.description": "如果你对文章、项目或合作有兴趣，欢迎通过邮件联系我。"
  },
  en: {
    "nav.posts": "Posts",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Tech / Creator Blog",
    "hero.title": "Hi, I'm Jason. I write about engineering, products, and long-term thinking.",
    "hero.description":
      "I explore software engineering, AI tools, product building, and personal knowledge systems. This blog collects practical notes, experiments, and ideas in progress.",
    "hero.primary": "View Posts",
    "hero.secondary": "About",
    "posts.eyebrow": "Featured Posts",
    "posts.title": "Three Recent Reads Worth Starting With",
    "posts.description": "These essays represent what I am thinking about lately: knowledge systems, AI collaboration, and product building.",
    "post.one.title": "Building a Personal Knowledge System That Lasts",
    "post.one.description": "From capture and organization to review and publishing, a practical workflow for long-term knowledge work.",
    "post.two.title": "How AI Tools Reshape Solo Development",
    "post.two.description": "A field note on collaborating with AI from scoping and implementation to verification and delivery.",
    "post.three.title": "Learning Complex Systems Through a Small Product",
    "post.three.description": "Using a product-building process to observe needs, constraints, feedback, and system evolution.",
    "topics.eyebrow": "Topics",
    "topics.title": "A Content Map Built Around Practice",
    "topics.description": "I organize writing around long-running questions, so each topic can become a useful path into the archive.",
    "topic.engineering": "Code, system design, and engineering practice.",
    "topic.ai": "AI tools, workflows, and human-AI collaboration.",
    "topic.product": "Product building, experience design, and decisions.",
    "topic.notes": "Reading, learning, and long-term notes.",
    "updates.eyebrow": "Updates",
    "updates.title": "Notes in Progress",
    "update.one.title": "Organized the personal homepage design",
    "update.one.description": "Defined the blog homepage structure, visual direction, and bilingual copy.",
    "update.two.title": "Published an AI workflow note",
    "update.two.description": "Documented how AI can help with a small product iteration.",
    "update.three.title": "Updated the project archive",
    "update.three.description": "Moved projects from a simple list into topic-based groups.",
    "about.eyebrow": "About",
    "about.title": "Turning practical problems into reusable writing",
    "about.description":
      "I'm a creator focused on software engineering, AI tools, and product building. I like turning practical problems into reusable notes, methods, and essays. This site is my public notebook and a long-term personal archive.",
    "contact.eyebrow": "Contact",
    "contact.title": "Stay in Touch or Keep Reading",
    "contact.description": "If you're interested in my writing, projects, or collaboration, feel free to reach out by email."
  }
};

let language = "zh";

const nav = document.querySelector(".nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const languageToggles = document.querySelectorAll("[data-language-toggle]");

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = copy[language][key];
  });

  languageToggles.forEach((button) => {
    button.textContent = language === "zh" ? "English" : "中文";
  });
}

languageToggles.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(language === "zh" ? "en" : "zh");
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

applyLanguage(language);
