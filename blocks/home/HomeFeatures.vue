<script lang="ts" setup>
const slideUp = {
  distance: '200%',
  origin: 'bottom',
  opacity: 10,
  delay: 1000,
  reset: true
}
</script>
<template>
  <div v-scroll-reveal="slideUp" class="home-features">
    <div v-for="item in 4" :key="item">
      <info-card class="info-card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-features {
  width: 100vw;
  padding: 80px;
  @include flexRc;
  @include flexRGap(40px);
  flex-wrap: wrap;
}
</style>
