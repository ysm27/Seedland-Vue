<template>
  <div class="news-container">
    <div class="header-side-nav">
      <img src="@/assets/hamburger.png" @click="navLock = true">
    </div> 
    <div class="title">
      <div class="cn-title">最新消息</div>
      <div class="en-title">LATEST NEWS</div>
    </div>
    <div class="find-out">
      <div class="find-out-container">
        <div class="more-left">
          <div class="en-more">FIND OUT MORE</div>
          <div class="cn-more">了解更多</div>
        </div>
        <div class="more-right">
          <div class="arrow"></div>
          <div class="line"></div>
        </div>
        <div class="cross-box">
          <div class="cross-item-1">+</div>
          <div class="cross-item-2">+</div>
          <div class="cross-item-3">+</div>
          <div class="cross-item-4">+</div>
        </div>
      </div>
    </div>
    <sideNav v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNav from '@/components/sideNav.vue'

export default {
  name: "news",
  data() {
    return {
      navLock: false
    }
  },
  methods: {
    closeNav(val) {
      this.navLock = val;
    }
  },
  components: {
    sideNav
  }
}
</script>

<style lang="less" scoped>
.news-container{
  height: 100%;
  min-width: 600px;
  position: relative;
  background-color: rgba(0,0,0,.24);
  .header-side-nav{
    margin-left:  120px;
    position: absolute;
    top: 115px;
    right: 115px;
    cursor: pointer;
    z-index: 2;
    img{
      width: 25px;
    }
  }
  .title{
    width: 500px;
    color: #fff;
    position: absolute;
    top: 45%;
    left: 53%;
    .en-title{
    font-family: NotoSansCJKsc-Thin;
    font-size: 65px;
    font-weight: lighter;
    }
    .cn-title{
    font-family: NotoSansCJKsc-Thin;
    font-size: 44px;
    font-weight: lighter;
    margin-top: 15px;
    }
  }
  .find-out{
    width: 350px;
    height: 67px;
    border: 1px solid #fafafa;
    position: absolute;
    bottom: 80px;
    right: 80px;
    background-color: transparent;
    transition: background-color .5s ease-in;
    .find-out-container{
      height: 100%;
      color: #fafafa;
      display: flex;
      cursor: pointer;
      .more-left{
        margin: 10px;
        .en-more{
          font-family: "DIN-Light";
          font-size: 14px;
          padding-bottom: 5px;
          letter-spacing: 3px;
        }
        .cn-more{
          font-family: "NotoSansCJKsc-Light";
          font-size: 15px;
          letter-spacing: 3px;
        }
      }
      .more-right{
        width: 150px;
        position: relative;
        .arrow{
          width: 12px;
          border-bottom: 2px solid #fafafa;
          position: absolute;
          right: 0;
          bottom: 29px;
          transform: rotate(32deg);
        }
        .line{
          width: 70px;
          border-bottom: 2px solid #fafafa;
          margin-top: 25px;
          position: absolute;
          right: 0px;
          bottom: 25px
        }
      }
      .cross-box{
        .cross-item-1{
          position: absolute;
          top: -13px;
          left: -6px;
        }
        .cross-item-2{
          position: absolute;
          top: -13px;
          right: -6px;
        }
        .cross-item-3{
          position: absolute;
          bottom: -10px;
          left: -6px;
        }
        .cross-item-4{
          position: absolute;
          bottom: -10px;
          right: -6px;
        }
      }
    }
  }
  .find-out:hover{
    background-color: #595959;
  }
}
</style>