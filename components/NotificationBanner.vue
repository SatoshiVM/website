<script setup lang="ts">

</script>

<template>
  <div class="banner">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.banner {
    padding: 12px 10px;
    text-align: center;
    background-color: $primary;
    @include phone {
        margin: 0 -16px;
  }
}
</style>
