import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'rujin',
  description:
    'A personal archive for physics study notes, research practice, small projects, and life moments.',
  website: 'https://Xyang722.github.io/',
  lang: 'en',
  base: '/',
  author: 'rujin',
  ogImage: '/og-image.webp',
  transition: false,
  themeAnimation: true,
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Photos',
    url: '/photos',
  },
  {
    name: 'Hobbies',
    url: '/hobbies',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Tags',
    url: '/tags',
  },
  {
    name: 'Photos',
    url: '/photos',
  },
  {
    name: 'Hobbies',
    url: '/hobbies',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = []

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'Statistical Physics',
          icon: 'icon-[ph--chart-line-up]',
        },
        {
          name: 'Condensed Matter',
          icon: 'icon-[ph--atom]',
        },
        {
          name: 'Spintronics',
          icon: 'icon-[ph--magnet]',
        },
        {
          name: 'Quantum Electronics',
          icon: 'icon-[ph--waveform]',
        },
        {
          name: 'Phase Transitions',
          icon: 'icon-[ph--circles-three-plus]',
        },
        {
          name: 'Course Notes',
          icon: 'icon-[ph--notebook]',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'LLG Simulation',
          icon: 'icon-[ph--function]',
        },
        {
          name: 'Python',
          icon: 'icon-[skill-icons--python-dark]',
        },
        {
          name: 'Numerical Modeling',
          icon: 'icon-[ph--brackets-curly]',
        },
        {
          name: 'Data Analysis',
          icon: 'icon-[ph--chart-scatter]',
        },
        {
          name: 'Mathematica',
          icon: 'icon-[ph--calculator]',
        },
        {
          name: 'LaTeX',
          icon: 'icon-[file-icons--latex]',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Git',
          icon: 'icon-[skill-icons--git]',
        },
        {
          name: 'Astro',
          icon: 'icon-[skill-icons--astro]',
        },
        {
          name: 'VS Code',
          icon: 'icon-[skill-icons--vscode-dark]',
        },
        {
          name: 'Obsidian',
          icon: 'icon-[skill-icons--obsidian-dark]',
        },
        {
          name: 'Reading',
          icon: 'icon-[ph--book-open-text]',
        },
        {
          name: 'Photography',
          icon: 'icon-[ph--camera]',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: false,
  GITHUB_USERNAME: '',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Study notes and essays by rujin',
  introduce: 'Notes from physics courses, research reading, coding tools, and the questions I am trying to understand.',
  author: 'rujin',
  homePageConfig: {
    size: 3,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
  recommendText: 'REC',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
  system: 'gitalk',
  gitalk: {
    clientID: import.meta.env.PUBLIC_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.PUBLIC_GITHUB_CLIENT_SECRET,
    repo: 'gitalk-comment',
    owner: 'rujin',
    admin: ['rujin'],
    language: 'en-US',
    perPage: 5,
    pagerDirection: 'last',
    createIssueManually: false,
    distractionFreeMode: false,
    enableHotKey: true,
  },
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'Research practice and small technical projects.',
  introduce: 'Small records of modeling, simulation, and analysis work built while learning physics and computation.',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'Photos',
  description: 'Fragments from ordinary days.',
  introduce: 'A quiet timeline of walks, short trips, friends, hometown views, and small moments worth keeping.',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: true,
  },
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
