<script setup lang="ts">
  import nprogress from 'nprogress'
  import { useToggle } from '@vueuse/core'
  import { useSidebar } from '../composables/sidebar'
  import { useToggleWidgets } from '../composables/toggle-widgets'
  import { breakpoints } from '../constant'
  import VPNav from './vp-nav.vue'
  import VPSubNav from './vp-subnav.vue'
  import VPSidebar from './vp-sidebar.vue'
  import VPContent from './vp-content.vue'
  import VPOverlay from './vp-overlay.vue'
  import { nextTick, onMounted, watch } from 'vue'
  import { useRoute } from 'vitepress'
  import mediumZoom from 'medium-zoom'

  const [isSidebarOpen, toggleSidebar] = useToggle(false)
  const { hasSidebar } = useSidebar()

  useToggleWidgets(isSidebarOpen, () => {
    if (window.outerWidth >= breakpoints.lg) {
      toggleSidebar(false)
    }
  })

  const route = useRoute();
  // Initialization clicks the image zoom
  const initZoom = () => {
    //mediumZoom('[data-zoomable]', { background: 'var(--bg-color)' });
    mediumZoom('.doc-content img:not(a img)', { background: 'var(--bg-color)' });
  };

  watch(
    () => route.path,
    () => nextTick(() => initZoom())
  );

  onMounted(async () => {
    initZoom();
    window.addEventListener(
      'click',
      (e) => {
        const link = (e.target as HTMLElement).closest('a')
        if (!link) return

        const { protocol, hostname, pathname, target } = link
        const currentUrl = window.location
        const extMatch = pathname.match(/\.\w+$/)
        // only intercept inbound links
        if (
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.altKey &&
          !e.metaKey &&
          target !== `_blank` &&
          protocol === currentUrl.protocol &&
          hostname === currentUrl.hostname &&
          !(extMatch && extMatch[0] !== '.html')
        ) {
          e.preventDefault()
          if (pathname !== currentUrl.pathname) {
            nprogress.start()
          }
        }
      },
      { capture: true }
    )

    // TODO: Will cause link preloading related resources to fail,
    // TODO: the problem of slow resource loading is not a big deal, and will be upgraded later (upgrade.json).
    // Using mathjax's $\href{}$ symbol in markdown will causes error in
    // svg pathname matching in VitePress's lazy loading prefetching
    // Reason:https://github.com/vuejs/vitepress/blob/42d2e32f40872a7369fb5c5a838d1760fdd80ea6/src/client/app/composables/preFetch.ts#L78
    // Fixed:https://github.com/vuejs/vitepress/commit/010b3e5ad99f5e61fd01e27d0c3144896a8f3d86#diff-caf1aa54e64c62c1b926a294d523f321adf4dd0c7c83e07d8118bc12d6883491L80-R77
    if (import.meta.env.PROD) {
      // Currently, all uncaught errors in the console are blocked.
      window.onerror = () => true
    }
  })
</script>

<template>
  <div class="App">
    <VPOverlay class="overlay" :show="isSidebarOpen" @click="toggleSidebar(false)" />
    <VPNav />
    <VPSubNav v-if="hasSidebar" @open-menu="toggleSidebar(true)" />
    <VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
    </VPContent>
    <Debug />
  </div>
</template>
