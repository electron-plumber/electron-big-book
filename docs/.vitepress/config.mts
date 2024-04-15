import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'

export default {
  base: "/",
  title: '管理类硕士',
  description: '管理类硕士课程记录笔记',
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
      apiKey: 'd0e40e4eeaa574ebf46358f5e0b23a08',
      appId: 'PVEXLTFZ5B',
    },
  },
  lang: 'zh-CN',
  markdown: {
    config: (md) => mdPlugin(md),
  },
} as UserConfig
