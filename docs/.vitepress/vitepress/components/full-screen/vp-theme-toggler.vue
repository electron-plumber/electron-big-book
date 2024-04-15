<script setup lang="ts">
import { computed } from 'vue';
import { isDark } from '../../composables/dark'
import { useData } from 'vitepress'
import CommonThemeToggler from '../common/vp-theme-toggler.vue'
import subNavLocale from '../../../i18n/component/sub-nav.json';

const { lang } = useData()
const locale = computed(() => subNavLocale[lang.value])
</script>

<template>
  <div class="full-screen-theme-toggler">
    <span>Theme</span>
    <CommonThemeToggler
        :aria-label="locale['theme-toggler']"
        :aria-checked="isDark"
    />
  </div>
</template>

<style lang="scss" scoped>
.full-screen-theme-toggler {
  display: flex;
  padding: 12px 14px;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 13px;
  background-color: var(--bg-color-soft);
  border-radius: 8px;
}
</style>
