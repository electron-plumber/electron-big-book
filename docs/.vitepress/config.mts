import type { UserConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'

export default {
  base: "/",
  title: 'master of management',
  description: 'master of management lesson notes',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/mba.jpg',
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
  lang: 'en-US',
  markdown: {
    config: (md) => {
      mdPlugin(md)
      // 支持md图片中文路径url解码 mdurl.decode
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
} as UserConfig
