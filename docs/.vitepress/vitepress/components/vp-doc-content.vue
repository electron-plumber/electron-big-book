<script lang="ts" setup>
import { useData } from 'vitepress'
import VPPageNav from './doc-content/vp-page-nav.vue'
import VPTableOfContent from './doc-content/vp-table-of-content.vue'

const { page } = useData()
</script>

<template>
  <div class="doc-content-wrapper">
    <div :class="['doc-content-container', {'adaptive-content': page.headers.length == 0}]">
      <Content class="doc-content" />
      <ClientOnly>
        <VPPageNav />
      </ClientOnly>
    </div>
    <VPTableOfContent v-if="page.headers.length > 0" />
  </div>
</template>
