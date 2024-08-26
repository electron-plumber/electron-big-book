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
    const decodeURI = decodeURIComponent(url)
    // 解决idea拖入资源文件自动编码不处理解码会导致打包无法找到资源文件
    if (url && !EXTERNAL_URL_RE.test(url)) {
      if (!/^\.?\//.test(url)) url = './' + url
      token.attrSet('src', decodeURI)
    }

    // lazysizes懒加载图片
    if (lazyLoading) {
      // 去掉资源文件的public目录,lazysizes内部会重新给src赋值指向跟路径,有public会找不到文件
      token.attrSet('data-src', decodeURI.replace(/public\//, ''))
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
