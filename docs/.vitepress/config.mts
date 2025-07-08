import type { UserConfig } from 'vitepress'
import { sidebars } from './config/sidebars'
import { nav } from './config/nav'
import { imagePlugin } from './plugins/image'
import { linkPlugin } from './plugins/link'
import tableWrapper from './plugins/table-wrapper'
import mathjax from './plugins/mathjax'
import { linkInsideHeader } from './plugins/permalink'
import createWrapperContainer from './plugins/wrapper'
import mdContainer from 'markdown-it-container'

export default {
  base: "/",
  title: 'Books or Courses of MAT and Java',
  description: 'Free open source books for learners of Management admission test and Java',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/book.png',
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
    // Use https://docsearch.algolia.com/apply Approved(search api key)
    agolia: {
      apiKey: 'f15d018bd325a1fc739a2511b261a399',
      indexName: 'book-dolphinx',
      appId: '76WJQGCIC5',
    }
  },
  lang: 'en-US',
  markdown: {
    config: (md) => {
      md.use(tableWrapper)
      md.use(mathjax)
      md.use(mdContainer, 'wrap', createWrapperContainer(md))
      imagePlugin(md, {
        lazyLoading:true,
        asyncDecoding: true
      })
      linkPlugin(md, {
        target: '_blank',
        rel: 'noreferrer'
      })
    },
    anchor: {
      permalink: linkInsideHeader({
        symbol: `
          <span class="visually-hidden">Jump to heading</span>
          <span aria-hidden="true">🔗</span>
        `,
        placement: 'before',
      }),
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
} as UserConfig

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
]
