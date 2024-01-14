<script lang="ts" setup></script>

<template>
  <div class="default-layout">
    <NotificationBanner>
      Testnet is live, explore Bitcoin Layer2 at<a
        href="https://testnet.svmscan.io"
        target="_blank"
      >https://testnet.svmscan.io</a>. 🔥
    </NotificationBanner>
    <LayoutHeader />
    <slot />
    <!-- <LayoutFooter /> -->
  </div>
</template>

<style lang="scss">
a {
  margin-left: 8px;
  display: inline;
  color: white !important;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
.default-layout {
  width: 100%;
  height: auto;
  min-height: 100vh;

  @include phone {
    padding: 0 16px;
  }
}
</style>
