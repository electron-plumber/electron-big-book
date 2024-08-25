import type { UserConfig } from 'vitepress'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'
import { imagePlugin } from './plugins/image'

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
  lang: 'zh-CN',
  markdown: {
    config: (md) => {
      imagePlugin(md, {
        lazyLoading:true
      })
    }
  },

} as UserConfig
