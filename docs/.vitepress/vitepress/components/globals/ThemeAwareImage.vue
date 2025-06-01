<template>
  <img
    :src="imageSrc"
    :style="mergedImgStyle"
    alt="Theme Image"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePreferredColorScheme } from '@vueuse/core'

interface Props {
  lightSrc: string
  darkSrc: string
  imgStyle?: Record<string, string | number>
  defaultDark?: boolean
}

const props = defineProps<Props>()
const colorScheme = usePreferredColorScheme()

const imageSrc = computed(() => {
  if (colorScheme.value === 'dark') return props.darkSrc
  if (colorScheme.value === 'light') return props.lightSrc
  return props.defaultDark ? props.darkSrc : props.lightSrc
})

const defaultImgStyle = {
  width: '300px',
  height: 'auto'
}

const mergedImgStyle = computed(() => ({
  ...defaultImgStyle,
  ...(props.imgStyle || {})
}))
</script>
