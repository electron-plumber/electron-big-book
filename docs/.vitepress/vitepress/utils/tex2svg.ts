import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor'
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html'
import { AssistiveMmlHandler } from 'mathjax-full/js/a11y/assistive-mml'
import { mathjax } from 'mathjax-full/js/mathjax'
import juice from "juice/client"
import { TeX } from 'mathjax-full/js/input/tex'
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages'
import { SVG } from 'mathjax-full/js/output/svg'
import globalConfig from '../../config/mathjax'

import type { OptionList } from 'mathjax-full/ts/util/Options'
import type { LiteElement } from 'mathjax-full/ts/adaptors/lite/Element'
interface DocumentOptions {
  InputJax: TeX<unknown, unknown, unknown>
  OutputJax: SVG<unknown, unknown, unknown>
}
interface ConvertOptions {
  display: boolean
}


export function renderTeX(content: string, options?: OptionList = {}) {

  // Default options
  const documentOptions: DocumentOptions = {
    InputJax: new TeX({ packages: AllPackages,  ...globalConfig?.tex, ...options?.tex }),
    OutputJax: new SVG({ fontCache: 'none',  ...globalConfig?.svg, ...options?.svg })
  }
  const convertOptions: ConvertOptions = {
    display: false,
    ...globalConfig?.convert,
    ...options?.convert
  }

  const adaptor = liteAdaptor()
  const handler = RegisterHTMLHandler(adaptor)
  AssistiveMmlHandler(handler)
  const mathDocument = mathjax.document(content, documentOptions)
  const html = adaptor.outerHTML(mathDocument.convert(content, convertOptions))
  const stylesheet = adaptor.outerHTML(documentOptions.OutputJax.styleSheet(mathDocument) as LiteElement)

  // Wrap mjx-container in div to enable mobile math formula scrolling.
  const wrappedHtml = `<div class="vp-mathjax">${html}</div>`

  return juice(wrappedHtml+stylesheet)
}
