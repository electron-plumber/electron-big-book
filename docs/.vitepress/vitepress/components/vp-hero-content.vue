<script setup lang="ts">
import { computed } from 'vue'
import heroContentLocale from '../../i18n/component/hero-content.json'
import { useData } from 'vitepress'
const { lang } = useData()
const locale = computed(() => heroContentLocale[lang.value])
</script>

<template>
  <div class="hero-content">
    <Content />
  </div>
  <el-divider style="margin-bottom: 0" />
  <div class="text-center py-6 text-xs">
    <p class="mb-1">
      {{ locale['text'] }}
    </p>
    <p class="mt-1">
      {{ locale['sub-text'] }}
    </p>
  </div>
</template>
