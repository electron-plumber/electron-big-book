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
  <div class="hero-content-footer">
    <el-divider style="margin-bottom: 0" />
    <div class="text-center py-6 text-xs">
      <p class="mb-1">
        {{ locale['text'] }}
      </p>
      <p class="mt-1">
        {{ locale['sub-text'] }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">

@keyframes fadeIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.hero-content-footer {
  opacity: 0;
  animation: fadeIn 1s cubic-bezier(1, 1, 1, 1) 0.6s forwards;
}
</style>
