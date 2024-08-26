// markdown-it plugin for normalizing image source
import type MarkdownIt from 'markdown-it'

export interface Options {
  /**
   * Support native lazy loading for the `<img>` tag.
   * @default false
   */
  lazyLoading?: boolean

  /**
   * Support native asynchronously decode data for the `<img>` tag.
   * @default false
   */
  asyncDecoding?: boolean
}

/** 匹配https外部url */
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export const imagePlugin = (md: MarkdownIt, { lazyLoading, asyncDecoding }: Options = {}) => {
  const imageRule = md.renderer.rules.image!
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    let url = token.attrGet('src')
    // 解决idea拖入资源文件自动编码不处理解码会导致打包无法找到资源文件
    if (url && !EXTERNAL_URL_RE.test(url)) {
      if (!/^\.?\//.test(url)) url = './' + url
      const decodeURI = decodeURIComponent(url)
      token.attrSet('src', decodeURI)
      token.attrSet('data-src', decodeURI)
    }

    // lazysizes懒加载图片
    if (lazyLoading) {
      token.attrSet('src', '')
      token.attrSet('class', 'lazyload')
    }

    // 异步解码图像数据,减少对页面渲染的阻塞
    if (asyncDecoding) {
      token.attrSet('decoding', 'async');
    }
    return imageRule(tokens, idx, options, env, self)
  }



}
