import type { UserConfig } from 'vitepress'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'
import { imagePlugin } from './plugins/image'
import { linkPlugin } from './plugins/link'
import tableWrapper from './plugins/table-wrapper'

export default {
  base: "/",
  title: 'master of management',
  description: 'master of management lesson notes',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/notes.png',
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
    // 使用DocSearchScraper手动爬取本地sitemap.xml地址内容推送(搜索api密钥)
    // agolia: {
    //   apiKey: 'f6c169e48ebc81ecfaad4657c39c9ba4',
    //   indexName: 'note-mba',
    //   appId: 'PVEXLTFZ5B',
    // },
    // 使用 https://docsearch.algolia.com/apply 审核通过(搜索api密钥)
    agolia: {
      apiKey: 'c8e09bde038a34837750f74707e89bac',
      indexName: 'dolphinx',
      appId: 'H7A0XFYKI1',
    },
  },
  lang: 'zh-CN',
  markdown: {
    config: (md) => {
      md.use(tableWrapper)
      imagePlugin(md, {
        lazyLoading:true,
        asyncDecoding: true
      })
      linkPlugin(md, {
        target: '_blank',
        rel: 'noreferrer'
      })
    }
  },

} as UserConfig
