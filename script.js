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
    "posts.title": "飞牛 OS 迁移实战 3 例",
    "posts.description": "从 HP Gen8 的系统盘迁移，到风险数据盘备份和 Docker 落盘优化，记录一次完整的 NAS 维护过程。",
    "post.one.title": "HP Gen8 从 SD 卡系统迁移到 Intel SSD",
    "post.one.description": "先验证 SATA5 独立启动不可行，再改为 SD 卡负责 GRUB 引导、SSD 承载真正的系统根目录。",
    "post.two.title": "数据盘 1 出现 SMART 风险后的抢救迁移",
    "post.two.description": "识别 WD-WCAV5M641288 的待映射扇区风险，先把用户数据和应用元数据备份到健康盘。",
    "post.three.title": "把 Docker 从机械盘迁到系统 SSD",
    "post.three.description": "兼容飞牛只识别存储空间的限制，用 bind mount 让 Docker 数据实际落到 SSD。",
    "cases.eyebrow": "维护案例",
    "cases.title": "一次迁移里拆出来的 3 个可复用经验",
    "cases.description": "这次维护的核心不是跑命令，而是把可回滚、可验证和不误伤数据盘放在第一位。",
    "case.one.tag": "系统盘迁移",
    "case.one.title": "SD 卡引导，SSD 运行系统",
    "case.one.summary": "HP Gen8 的 SATA5 光驱位无法稳定独立启动，因此保留 SD 卡作为 BIOS/GRUB 入口，把 Linux 根分区切到 Intel SSD。",
    "case.one.point1": "先初始化 SSD、复制系统，再给 SSD 安装 GRUB 做独立启动测试。",
    "case.one.point2": "独立启动失败后，只修改 SD 卡 GRUB 的 kernel root UUID，保留 search UUID 指向 SD 卡 /boot。",
    "case.one.point3": "最终验证 / 挂载到 Intel SSD，SD 卡旧系统分区卸载，仅保留引导职责。",
    "case.two.tag": "风险盘迁移",
    "case.two.title": "先抢数据，再讨论修盘",
    "case.two.summary": "数据盘 1 对应 WD-WCAV5M641288，SMART 里出现 1 个重映射扇区和 1 个待映射扇区，但 Btrfs 还没有记录读写错误。",
    "case.two.point1": "确认 /vol1 是风险盘，/vol2 基本空闲且容量足够承接数据。",
    "case.two.point2": "优先复制 /vol1/1000 用户数据，再备份 @appdata、@appmeta、@appcenter 和 @sysappmeta。",
    "case.two.point3": "不贸然执行 btrfs check --repair，等关键数据安全后再安排 SMART 长测。",
    "case.three.tag": "Docker 落盘优化",
    "case.three.title": "让飞牛看到 /vol2，实际写入 SSD",
    "case.three.summary": "飞牛应用中心只允许选择存储空间 1/2/3，无法直接选择系统 SSD，所以用 /vol2/docker 做表面路径，绑定到 SSD 的 /opt/docker。",
    "case.three.point1": "冷迁移 /vol1/docker 到 /opt/docker，保留旧目录作为可回滚备份。",
    "case.three.point2": "让 daemon.json 继续使用 /vol2/docker，避免被飞牛界面重写成其他存储空间。",
    "case.three.point3": "用 systemd mount unit 持久化 bind mount，重启后验证容器和挂载都恢复。",
    "topics.eyebrow": "主题分类",
    "topics.title": "围绕实践建立的内容地图",
    "topics.description": "我把文章按长期关注的问题组织起来，方便你从一个主题进入，再慢慢延展。",
    "topic.engineering": "关于代码、系统设计和工程实践。",
    "topic.ai": "关于 AI 工具、工作流和人机协作。",
    "topic.product": "关于产品构建、体验设计和决策。",
    "topic.notes": "关于阅读、学习和长期记录。",
    "updates.eyebrow": "近期动态",
    "updates.title": "正在更新的笔记",
    "update.one.title": "完成飞牛 OS 系统盘迁移",
    "update.one.description": "HP Gen8 保留 SD 卡引导，Intel SSD 承载实际系统根目录。",
    "update.two.title": "备份数据盘 1 的关键内容",
    "update.two.description": "把 /vol1 用户数据和应用元数据复制到健康的 /vol2。",
    "update.three.title": "Docker 数据迁移到 SSD",
    "update.three.description": "通过 /vol2/docker 的持久化绑定挂载兼容飞牛应用中心。",
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
    "posts.title": "Three fnOS Migration Case Notes",
    "posts.description": "A complete NAS maintenance log covering HP Gen8 system migration, risky disk backup, and Docker storage optimization.",
    "post.one.title": "Moving an HP Gen8 fnOS System from SD Card to Intel SSD",
    "post.one.description": "After SATA5 standalone boot failed, the safer path kept GRUB on the SD card while running the real root filesystem from SSD.",
    "post.two.title": "Rescuing Data After SMART Warnings on Storage Pool 1",
    "post.two.description": "The WD-WCAV5M641288 disk showed pending-sector risk, so user data and app metadata were copied to a healthier volume first.",
    "post.three.title": "Moving Docker from a Spinning Disk to the System SSD",
    "post.three.description": "A bind mount preserved fnOS's expected /vol2/docker path while keeping the actual Docker data on SSD.",
    "cases.eyebrow": "Maintenance Cases",
    "cases.title": "Three reusable lessons from one migration",
    "cases.description": "The work was less about commands and more about preserving rollback paths, verifying each step, and avoiding accidental data-disk changes.",
    "case.one.tag": "System migration",
    "case.one.title": "Boot from SD, run the OS from SSD",
    "case.one.summary": "Because the HP Gen8 optical-bay SATA5 path did not boot reliably on its own, the SD card remains the BIOS/GRUB entry point while Linux mounts the Intel SSD as root.",
    "case.one.point1": "Initialize the SSD, copy the system, and install GRUB to test standalone SSD boot first.",
    "case.one.point2": "After standalone boot failed, change only the kernel root UUID in the SD card's GRUB config while leaving the search UUID pointed at SD /boot.",
    "case.one.point3": "Verify that / mounts from the Intel SSD, then unmount the old SD root partition and keep the SD card only for boot.",
    "case.two.tag": "Risk-disk migration",
    "case.two.title": "Copy data first, discuss repair later",
    "case.two.summary": "Storage pool 1 mapped to WD-WCAV5M641288. SMART showed one reallocated sector and one pending sector, while Btrfs stats still reported no read/write errors.",
    "case.two.point1": "Confirm that /vol1 is the risky disk and that /vol2 has enough free space to receive the data.",
    "case.two.point2": "Copy /vol1/1000 first, then back up @appdata, @appmeta, @appcenter, and @sysappmeta.",
    "case.two.point3": "Avoid btrfs check --repair and schedule a SMART long test only after the important data is safe.",
    "case.three.tag": "Docker storage",
    "case.three.title": "Show fnOS /vol2, write to SSD",
    "case.three.summary": "The fnOS UI only exposes storage spaces 1/2/3, not the system SSD, so /vol2/docker is kept as the visible path and bind-mounted to /opt/docker on SSD.",
    "case.three.point1": "Cold-copy /vol1/docker to /opt/docker and keep the old directory as a rollback backup.",
    "case.three.point2": "Keep daemon.json on /vol2/docker so the fnOS UI does not rewrite it to another storage space.",
    "case.three.point3": "Persist the bind mount with a systemd mount unit and verify Docker containers after reboot.",
    "topics.eyebrow": "Topics",
    "topics.title": "A Content Map Built Around Practice",
    "topics.description": "I organize writing around long-running questions, so each topic can become a useful path into the archive.",
    "topic.engineering": "Code, system design, and engineering practice.",
    "topic.ai": "AI tools, workflows, and human-AI collaboration.",
    "topic.product": "Product building, experience design, and decisions.",
    "topic.notes": "Reading, learning, and long-term notes.",
    "updates.eyebrow": "Updates",
    "updates.title": "Notes in Progress",
    "update.one.title": "Completed the fnOS system-disk migration",
    "update.one.description": "The HP Gen8 now boots through the SD card while the Intel SSD carries the actual root filesystem.",
    "update.two.title": "Backed up key data from storage pool 1",
    "update.two.description": "User data and app metadata from /vol1 were copied to the healthier /vol2 volume.",
    "update.three.title": "Moved Docker data to SSD",
    "update.three.description": "A persistent /vol2/docker bind mount keeps fnOS compatible while Docker writes to SSD.",
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
