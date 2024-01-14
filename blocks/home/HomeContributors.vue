<script lang="ts" setup>
const userOptions: any[] = []
</script>

<template>
  <div class="home-contributors">
    <div v-motion-slide-visible-once-bottom class="title">
      CONTRIBUTORS
    </div>
    <div class="content">
      <div class="contributors">
        <div v-for="(item, i) in userOptions" :key="i" class="contributor-item">
          <div class="top">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="icons">
              <!-- <img src="~/assets/images/github.png" class="icon" alt="" />
              <img src="~/assets/images/x.png" class="icon" alt="" /> -->
            </div>
          </div>

          <div class="desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-contributors {
  width: 100%;

  .title {
    opacity: 1;
    color: $onBackground;
    font-family: 'IBMPlexMono-Bold';
    font-size: 60px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    line-height: 60px;
    margin-bottom: 58px;

    @include phone {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 28px;
    }
  }

  .content {
    width: 100%;
    .contributors {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, 270px);
      justify-content: space-between;
      gap: 55px;

      @include phone {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        align-items: flex-start;
        justify-content: space-between;
        gap: 26px;
      }
      .contributor-item {
        width: 270px;

        @include phone {
          width: 100%;
        }
        .top {
          @include flexRsb;
          margin-bottom: 24px;
          @include phone {
            justify-content: flex-start;
            margin-bottom: 12px;
          }
          .name {
            color: $onBackground;
            font-family: 'IBMPlexMono';
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-right: 10px;

            @include phone {
              font-size: 14px;
            }
          }

          .icons {
            @include flexRc;
            .icon {
              width: 27px;
              height: 27px;
              margin-left: 10px;

              @include phone {
                width: 20px;
                height: 20px;
                margin-left: 6px;
              }
            }
          }
        }

        .desc {
          color: $onBackground;
          font-family: 'IBMPlexMono';
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

          @include phone {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
