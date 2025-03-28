<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <ElTag size="small" hit>
    {{ version }}
  </ElTag>
</template>
