<script setup lang="ts">
import { ref } from 'vue'
import { useToc } from '../../composables/use-toc'
import { useActiveSidebarLinks } from '../../composables/active-bar'

import { liteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html';
import { AssistiveMmlHandler } from 'mathjax-full/js/a11y/assistive-mml';
import { mathjax } from 'mathjax-full/js/mathjax';
import juice from "juice/client";
import { TeX } from 'mathjax-full/js/input/tex';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages';
import { SVG } from 'mathjax-full/js/output/svg';

const headers = useToc()
const container = ref()
useActiveSidebarLinks(container)

// todo: https://github.com/mathjax/MathJax-demos-node/blob/d9ba8c61e54683efc04d0e11d5812bc974da65db/preload/README.md
const mathjaxDocumentOptions = {
  InputJax: new TeX({ packages: AllPackages }),
  OutputJax: new SVG({ fontCache: 'none' })
}
const mathjaxConvertOptions = {
  display: false
}

function renderTableOfContents(content: string): string {
  let renderedContent = content.trim()
  const mathInlineRegex = new RegExp('(?<!\\\\|\\$)\\$(?!\\$|\\s|\\t)([^$]*)(?<!\\\\|\\s|\\t)\\$(?!\\$)', 'g')

  // Rendering Mathematical Formulas
  renderedContent = renderedContent.replace(mathInlineRegex,
    (match, formula) => {
      const adaptor = liteAdaptor()
      const handler = RegisterHTMLHandler(adaptor)
      AssistiveMmlHandler(handler)
      const mathDocument = mathjax.document(formula, mathjaxDocumentOptions)
      const html = adaptor.outerHTML(mathDocument.convert(formula, mathjaxConvertOptions))
      const stylesheet = adaptor.outerHTML(mathjaxDocumentOptions.OutputJax.styleSheet(mathDocument) as any)
      return juice(html+stylesheet)
  })

  return renderedContent
}

</script>

<template>

    <aside ref="container" class="toc-wrapper">
      <ElScrollbar class="toc-content">
        <nav>
          <h3 class="toc-content__heading">Contents</h3>
          <ul class="toc-items">
            <li v-for="{ link, text, children } in headers" :key="link" class="toc-item">
              <a class="toc-link" :href="link" :title="text">
                <span v-html="renderTableOfContents(text)" />
              </a>
              <ul v-if="children">
                <li v-for="{ link: childLink, text: childText } in children" :key="childLink" class="toc-item">
                  <a class="toc-link subitem" :href="childLink" :title="text">
                    <span v-html="renderTableOfContents(childText)" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </ElScrollbar>
    </aside>

</template>
