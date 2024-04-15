import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'

export default {
  base: "/",
  title: '管理类硕士',
  description: '管理类硕士课程文档',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/icon.png',
        type: 'image/svg+xm',
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#F6F6F6',
      },
    ]
  ],
  themeConfig: {
    sidebars,
    nav,
    agolia: {
      apiKey: 'f6c169e48ebc81ecfaad4657c39c9ba4',
      indexName: 'note-mba',
      appId: 'PVEXLTFZ5B',
    },
  },
  lang: 'zh-CN',
  markdown: {
    config: (md) => mdPlugin(md),
  },
} as UserConfig
