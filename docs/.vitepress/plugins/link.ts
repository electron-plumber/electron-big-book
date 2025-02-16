// markdown-it plugin for:
// 1. adding target="_blank" to external links
// 2. normalize internal links to end with `.html`
import type MarkdownIt from 'markdown-it'
import { URL } from 'url'
const indexRE = /(^|.*\/)index.md(#?.*)$/i
const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i
const KNOWN_EXTENSIONS = new Set()

export const linkPlugin = (
  md: MarkdownIt,
  externalAttrs: Record<string, string>
) => {
  md.renderer.rules.link_open = (
    tokens,
    idx,
    options,
    env,
    self
  ) => {
    const token = tokens[idx]
    const hrefIndex = token.attrIndex('href')
    const targetIndex = token.attrIndex('target')
    const downloadIndex = token.attrIndex('download')
    if (hrefIndex >= 0 && targetIndex < 0 && downloadIndex < 0) {
      const hrefAttr = token.attrs![hrefIndex]
      const url = hrefAttr[1]
      if (EXTERNAL_URL_RE.test(url)) {
        Object.entries(externalAttrs).forEach(([key, val]) => {
          token.attrSet(key, val)
        })
        hrefAttr[1] = url
      } else {
        const { pathname, protocol } = new URL(url, 'http://a.com')

        if (
          // skip internal anchor links
          !url.startsWith('#') &&
          // skip mail/custom protocol links
          protocol.startsWith('http') &&
          // skip links to files (other than html/md)
          treatAsHtml(pathname)
        ) {
          normalizeHref(hrefAttr, env)
        } else if (url.startsWith('#')) {
          hrefAttr[1] = decodeURI(hrefAttr[1])
        }

        // 去掉资源文件的public目录,vite不处理data-src的路径编译,有public会找不到文件
        hrefAttr[1] = `${decodeURIComponent(hrefAttr[1]).replace(/public\//, '/')}`
                                                        .replace(/\/+/g, '/')
      }
    }
    return self.renderToken(tokens, idx, options)
  }

  function normalizeHref(hrefAttr: [string, string], env) {
    let url = hrefAttr[1]

    const indexMatch = url.match(indexRE)
    if (indexMatch) {
      const [, path, hash] = indexMatch
      url = path + hash
    } else {
      let cleanUrl = url.replace(/[?#].*$/, '')
      // transform foo.md -> foo[.html]
      if (cleanUrl.endsWith('.md')) {
        cleanUrl = cleanUrl.replace(/\.md$/,'.html')
      }
      // transform ./foo -> ./foo[.html]
      if (
        !cleanUrl.endsWith('.html') &&
        !cleanUrl.endsWith('/')
      ) {
        cleanUrl += '.html'
      }
      const parsed = new URL(url, 'http://a.com')
      url = cleanUrl + parsed.search + parsed.hash
    }

    // ensure leading . for relative paths
    if (!url.startsWith('/') && !/^\.\//.test(url)) {
      url = './' + url
    }

    // markdown-it encodes the uri
    hrefAttr[1] = decodeURI(url)
  }


  function treatAsHtml(filename: string): boolean {
    if (KNOWN_EXTENSIONS.size === 0) {
      const extraExts =
          (typeof process === 'object' && process.env?.VITE_EXTRA_EXTENSIONS) ||
          (import.meta as any).env?.VITE_EXTRA_EXTENSIONS ||
          ''

        // md, html? are intentionally omitted
      ;(
        '3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,' +
        'doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,' +
        'man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,' +
        'opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,' +
        'tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,' +
        'yaml,yml,zip,pptx' +
        (extraExts && typeof extraExts === 'string' ? ',' + extraExts : '')
      )
        .split(',')
        .forEach((ext) => KNOWN_EXTENSIONS.add(ext))
    }

    const ext = filename.split('.').pop()

    return ext == null || !KNOWN_EXTENSIONS.has(ext.toLowerCase())
  }
}

