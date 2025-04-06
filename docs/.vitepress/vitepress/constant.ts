import { useBreakpoints } from '@vueuse/core';

export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 960,
  xlg: 1280,
  xxl: 1440,
  max: 1680
}

export const deviceBreakpoints = useBreakpoints(breakpoints)
