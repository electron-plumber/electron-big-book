// markdown-it plugin for normalizing an image source
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

/** Match https external url */
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export const imagePlugin = (md: MarkdownIt, { lazyLoading, asyncDecoding }: Options = {}) => {
  const imageRule = md.renderer.rules.image!
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    let url = token.attrGet('src')
    if (!/^\.?\//.test(url)) url = './' + url
    // Solve idea drag in resource files automatic encoding,
    // not handling decoding will lead to build unable to find a resource file
    const decodeURI = decodeURIComponent(url)
    if (url && !EXTERNAL_URL_RE.test(url)) {
      token.attrSet('src', decodeURI)
    }

    // Lazysizes loading images
    if (lazyLoading) {
      // Remove the public directory of a resource file,
      // vite doesn't process path compilation of data-src,exists public will not find a file
      token.attrSet('data-src', decodeURI.replace(/public\//, '')
                                         .replace(/\/+/g, '/'))
      token.attrSet('src', '')
      token.attrSet('class', 'lazyload')
    }

    // Asynchronously decode image data,deduce blocking of page rendering
    if (asyncDecoding) {
      token.attrSet('decoding', 'async');
    }
    return imageRule(tokens, idx, options, env, self)
  }



}
