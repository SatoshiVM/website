<template>
  <div class="layout-header">
    <div class="header-container">
      <div class="title">
        <SatoshiLogo />
      </div>
      <div class="links">
        <a
          class="link-item"
          href="https://testnet.svmscan.io"
          target="_blank"
        >Explorer</a>
        <a
          class="link-item"
          href="https://bridge.satoshivm.io"
          target="_blank"
        >Bridge</a>
        <a
          class="link-item"
          href="https://docs.satoshivm.io"
          target="_blank"
        >Docs</a>
        <VMenu placement="bottom-end">
          <div class="link-item">
            Paper
          </div>

          <template #popper>
            <ul class="dropdown-menu">
              <li>
                <a
                  href="https://github.com/SatoshiVM/whitepaper"
                  target="_blank"
                  class="link-item"
                >White Paper</a>
              </li>
              <li>
                <a
                  href="https://github.com/SatoshiVM/yellowpaper"
                  target="_blank"
                  class="link-item"
                >Yellow Paper</a>
              </li>
            </ul>
          </template>
        </VMenu>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-header {
  @include flexRsb;
  width: 100%;
  height: 80px;
  margin-top: 20px;
  z-index: 100;
  padding: 0 10px;
  transition: 0.4s;

  &.show {
    top: 0;
    transition: 0.4s;
  }

  @include phone {
    // padding: 0;
  }

  .header-container {
    width: 100%;
    max-width: 1520px;
    margin: 0 auto;
    padding: 0 20px;
    height: 80px;
    border-radius: 8px;
    backdrop-filter: blur(10px);
    @include flexRsb;
    align-items: center;

    @include phone {
      padding: 0px;
    }
    .title {
      font-size: 30px;
      color: $primary;
      font-weight: 700;
      font-family: 'IBMPlexMono-Bold';

      @include phone {
        font-size: 30px;
        scale: 0.8;
        transform-origin: left;
      }
    }
    // .logo {
    //   width: 110px;

    //   @include phone {
    //     width: 80px;
    //   }
    // }

    .links {
      @include flexRc;
      .link-item {
        color: #fff;
        opacity: 1;
        font-family: 'IBMPlexMono-Bold';
        font-size: 20px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: 0px;
        text-align: right;
        text-transform: uppercase;
        @include flexRc;
        justify-content: flex-end;
        align-items: flex-start;
        cursor: pointer;
        margin: 0 10px;

        @include phone {
          font-size: 14px;
          margin: 0 4px;
        }

        .icon {
          width: 36px;
          height: 36px;
          margin-left: 6px;
          object-fit: contain;

          @include phone {
            width: 20px;
            height: 20px;
            margin-left: 4px;
          }
        }
      }
    }
  }
}
</style>
