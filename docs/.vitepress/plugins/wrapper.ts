/**
 * @fileOverview
 * <p>https://github.com/markdown-it/markdown-it-container</p>
 * @author WangXiang4
 * @since 4/5/25
 */

import type MarkdownIt from 'markdown-it';

interface WrapperOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?: MarkdownIt['renderer']['rules']['container']
}

function createWrapperContainer(md: MarkdownIt): WrapperOpts {
  return {
    validate(params) {
      return params.trim().match(/^wrap\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^wrap\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m[1] ? md.utils.escapeHtml(m[1]) : 'vp-mathjax'
        return `<div class="${description}">`
      } else {
        return '</div>'
      }
    },
  }
}

export default createWrapperContainer
