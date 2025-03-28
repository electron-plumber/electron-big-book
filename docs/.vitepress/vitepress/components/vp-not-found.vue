<script setup lang="ts">
import { useData } from "vitepress"
import notFoundLocale from "../../i18n/pages/not-found.json"
const goHome = () => {
  window.location.href = `/`
}, { lang } = useData(), locale = notFoundLocale[lang.value];
</script>

<template>
  <ElResult icon="error" :title="locale.title" :sub-title="locale.desc">
    <template #extra>
      <ElButton @click="goHome">{{ locale['button-title'] }}</ElButton>
    </template>
  </ElResult>
</template>

<style lang="scss" scoped>
.el-result {
  height: 50vh;
  width: 100vw;
}
</style>
