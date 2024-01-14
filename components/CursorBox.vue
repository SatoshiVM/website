<script lang="ts" setup>
const props = defineProps({
  width: {
    type: Number,
    default: 10
  },
  height: {
    type: Number,
    default: 20
  },
  color: {
    type: String,
    default: '#fff'
  }
})

const style = computed(() => {
  return {
    width: props.width + 'px',
    height: props.height + 'px',
    backgroundColor: props.color
  }
})
</script>

<template>
  <span :style="style" class="cursor-box" />
</template>

<style scoped lang="scss">
@keyframes box {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}

.cursor-box {
  display: inline-block;
  transform: translateY(2px);
  animation: box 1s;
  animation-iteration-count: infinite;
  border-radius: 1px;
}
</style>
