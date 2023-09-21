const CONFIG = {
  HOME_BANNER_ENABLE: true,
  // 3.14.1以后的版本中，欢迎语在blog.config.js中配置，用英文逗号','隔开多个。
  HOME_BANNER_GREETINGS: ['Hi，我是一个程序员', 'Hi，我是一个打工人', 'Hi，我是一个干饭人', '欢迎来到我的博客🎉'], // 首页大图标语文字

  HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  // 已知未修复bug, 在移动端开启true后会加载不出图片； 暂时建议设置为false。
  HOME_NAV_BACKGROUND_IMG_FIXED: false, // 首页背景图滚动时是否固定，true 则滚动时图片不懂动； false则随鼠标滚动 ;
  // 是否显示开始阅读按钮
  SHOW_START_READING: true,

  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true, // 移动端悬浮目录






  // 特性介绍
  FEATURES_HEADER_1: '服務內容',
  FEATURES_HEADER_1_P: "如何搭建自己的门户网站，塑造一个品牌展示中心？<br/>曾经，它是系统<strong class='font-bold text-red-500'>繁重</strong>的Wordpress、是操作<strong class='font-bold  text-red-500'>复杂</strong>的Hexo、是<strong class='font-bold text-red-500'>昂贵</strong>且<strong class='font-bold text-red-500'>不稳定</strong>的技术团队;<br/>现在，只要一个Notion笔记就够了",
  FEATURES_HEADER_2: 'Notion+NextJs组合方案',
  FEATURES_HEADER_2_P: 'Notion作为CMS管理您的站点配置和网页数据，NextJs作为渲染博客的脚本，借助第三方的Vercel等托管平台提供网络服务。',
  FEATURES_CARD_1_TITLE: '简单快速的系统',
  FEATURES_CARD_1_P: '在Notion中写下一篇文章，内容立刻在您的网站首页中呈现给互联网',
  FEATURES_CARD_2_TITLE: '高效传播的媒介',
  FEATURES_CARD_2_P: '优秀的SEO、快速的响应速度，让您的产品和宣传触达到更多的受众',
  FEATURES_CARD_3_TITLE: '人性化的定制工具',
  FEATURES_CARD_3_P: '多款主题供您挑选，可以搭建各种不同风格和作用的网站，更多的主题正在陆续加入中。',

  // 特性介绍2
  FEATURES_BLOCK_HEADER: '解决方案',
  FEATURES_BLOCK_P: '人人自媒体的时代，一个网站将帮您链接更多的人，带给你无限的机会和客户。<br/>您还在等什么呢？',
  FEATURES_BLOCK_1_TITLE: '用网站来展示品牌',
  FEATURES_BLOCK_1_P: '比起线下渠道、一个公开域名和网站更有说服力',
  FEATURES_BLOCK_2_TITLE: 'SEO带来更多流量',
  FEATURES_BLOCK_2_P: '借助搜索引擎，精准定位您的受众',
  FEATURES_BLOCK_3_TITLE: '网站的性能很重要',
  FEATURES_BLOCK_3_P: '更快的响应，更好的用户体验',
  FEATURES_BLOCK_4_TITLE: '打造您的个人品牌',
  FEATURES_BLOCK_4_P: '继马斯克、乔布斯之后，您将是下一个传奇',
  FEATURES_BLOCK_5_TITLE: '写作表达是核心技能',
  FEATURES_BLOCK_5_P: '比起只阅读输入，更重要的是反思和输出',
  FEATURES_BLOCK_6_TITLE: '开始写博客吧',
  FEATURES_BLOCK_6_P: 'NotionNext，助您轻松开始写作',

  // 感言
  TESTIMONIALS_HEADER: '已搭建超4000个网站、浏览量突破 100,000,000+',
  TESTIMONIALS_P: '网站内容涵盖地产、教育、建筑、医学、机械、IT、电子、软件、自媒体、数位游民、短视频、电商、学生、摄影爱好者、旅行爱好者等等各行各业',

  TESTIMONIALS_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
  TESTIMONIALS_NICKNAME: 'Ryan_G',
  TESTIMONIALS_ID: 'Ryan`Log 站长',
  TESTIMONIALS_SOCIAL_NAME: '@Gaoran',
  TESTIMONIALS_SOCIAL_URL: 'https://blog.gaoran.xyz/',
  TESTIMONIALS_WORD: '“ 感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ “',

  POST_REDIRECT_ENABLE: process.env.NEXT_PUBLIC_POST_REDIRECT_ENABLE || false, // 是否开启文章地址重定向 ； 用于迁移旧网站域名
  POST_REDIRECT_URL: process.env.NEXT_PUBLIC_POST_REDIRECT_URL || 'https://blog.tangly1024.com', // 重定向网站地址

  NEWSLETTER: process.env.NEXT_PUBLIC_THEME_LANDING_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
