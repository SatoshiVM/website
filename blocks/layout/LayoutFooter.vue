<script lang="ts" setup></script>

<template>
  <div class="layout-footer">
    <div class="social-icons">
      <icon-accessibility />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-footer {
  height: 200px;
  width: 100%;
  background: $secondary;
  color: $onSecondary;
  @include flexRc;
  .social-icons {
    @include flexRc;
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
