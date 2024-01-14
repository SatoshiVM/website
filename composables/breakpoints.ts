import { useBreakpoints } from '@vueuse/core'
export const breakpoints = useBreakpoints({
  phone: 799,
  pad: 1280,
  desktop: 1280
})
export const isPhone = computed(() => {
  if (process.server) {
    return false
  }

  return !breakpoints.phone.value
})
export const isPad = computed(() => {
  if (process.server) {
    return false
  }
  return !breakpoints.pad.value
})
export const isDesktop = computed(() => {
  return !breakpoints.desktop.value
})
