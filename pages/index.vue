<script lang="ts" setup></script>

<template>
  <div class="index-page">
    <div class="index-container">
      <HomeStats />
      <HomeIntroduction />
      <HomeTable class="home-table" />
      <HomeArchitecture :style="{ marginBottom: '200px' }" />
      <HomeFooter class="footer" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-page {
  width: 100%;
  height: auto;
  min-height: 100vh;
  position: relative;
  @include flexCc;
  justify-content: flex-start;
  .background-img {
    height: 959.993px;
    width: 905px;
    position: absolute;
    z-index: -1;
    top: 360px;

    @include phone {
      width: 100%;
      height: auto;
      top: 480px;
    }
  }

  .index-container {
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    padding: 30px 20px 0 20px;

    @include phone {
      padding: 0;
      padding-top: 0px;
    }

    .home-table {
      margin-bottom: 311px;
      margin-top: 30px;

      @include phone {
        margin-bottom: 120px;
      }
    }

    .footer {
      margin-top: 100px;
    }
  }
}
</style>
