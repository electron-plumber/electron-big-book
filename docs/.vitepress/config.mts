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
        content: '#409eff',
      },
    ]
  ],
  themeConfig: {
    sidebars,
    nav,
    agolia: {
      apiKey: '01ac5b2a54f0f72478b584dacf8acc29',
      appId: 'EGEB2XPPPP',
    },
  },
  lang: 'zh-CN',
  markdown: {
    config: (md) => mdPlugin(md),
  },
} as UserConfig
