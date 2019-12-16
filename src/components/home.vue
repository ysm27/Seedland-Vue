<template>
  <div class="home-container"> 
    <div class="home-header">
      <div class="page-logo"><img src="@/assets/Logo_Anim_1000x80.gif"></div>
      <div class="nav">
        <ul id="menu" class="menu-container">
          <li class="menu-item"><a href="#about">关于实地</a></li>
          <li class="menu-item"><a href="#development">地产开发</a></li>
          <li class="menu-item"><a href="#news">最新消息</a></li>
          <li class="menu-item"><a href="#joinus">加入实地</a></li>
          <li class="menu-item"><a href="#whistleblower">廉洁举报</a></li>
          <li class="menu-item"><a href="#contact">联系我们</a></li>
        </ul>  
        <div class="header-side-nav">
          <img src="@/assets/hamburger.png" @click="navLock = true">
        </div> 
      </div>
    </div>
    <div class="page-main">
      <div class="landing-border">
        <div class="top-border horizontal"></div>
        <div class="bottom-border horizontal"></div>
      </div>
      <div class="landing-grid">
        <div class="grid-border-1 horizontal"></div>
        <div class="grid-border-2 horizontal"></div>
        <div class="grid-border-3 horizontal"></div>
      </div>
      <div class="landing-vertical">
        <div class="vertical-1 vertical"></div>
        <div class="vertical-2 vertical"></div>
        <div class="vertical-3 vertical"></div>
        <div class="vertical-4 vertical"></div>
        <div class="vertical-5 vertical"></div>
        <div class="vertical-6 vertical"></div>
        <div class="vertical-7 vertical"></div>
      </div>
      <div class="cross-box">
        <p :class="'cross-item-' + index" v-for="index in 17" :key="index">
          +
        </p>
      </div>
      <div class="main-title">
        <div class="en-title">THE FUTURE IS HERE</div>
        <div class="cn-title">未来·就在眼前</div>
      </div>
    </div>
    <div class="page-footer">
      <div class="footer-container">
        <div class="cn-tip">向下滚动</div>
        <div class="en-tip">SCROLL DOWN FOR MORE</div>
        <div class="mouse-btn">
          <span class="block"></span>
        </div>
      </div>
    </div>
    <sideNav v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNav from '@/components/sideNav.vue'

export default {
  name: "home",
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
.home-container{
  height: 100%;
  position: relative;
  .home-header{
    height: 14%;
    display: flex;
    justify-content: space-between;
    padding: 5px 50px 0 65px;
    .page-logo{
      width: 270px;
      height: 25px;
      padding-top: 35px;
      img{
        width: 100%;    
      }
    }
    .nav{
      display: flex;
      position: relative;
      .menu-container{
        width: 650px;
        list-style: none;
        display: flex;
        z-index: 2;
        margin-right: 45px;
        .active {
          background-color: #35b558;
        }
        .menu-item{
          padding-top: 35px;
          a{
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            margin-right: 40px;
          }
        }
        .menu-item:hover{
          border-top: 3px solid #fff;
        }
      }
      .header-side-nav{
        position: fixed;
        right: 80px;
        top: 41px;
        cursor: pointer;
        z-index: 2;
        img{
          width: 25px;
        }
      }
    }
  }
  .page-main{
    width: 100%;
    height: 61%;
    position: relative;
    font-size: 14px;
    .landing-border{
      width: 100%;
      height: 100%;
      position: absolute;
      .top-border{
        width: 0;
        top: 0;
        position: absolute;
        animation: lineardashcenter 1s 3s linear forwards;
        transform-origin: center;
      }
      .bottom-border{
        width: 0;
        bottom: 0;
        position: absolute;
        opacity: 0.3;
        animation: lineardashcenter 1s 3s linear forwards;
        transform-origin: center;
      }
      @keyframes lineardashcenter {
        0% {
          left: 50%;
          right: 50%;
          width: 0%;
        }
        100% {
          left: 0%;
          right: 0%;
          width: 100%;
        }
      }
    }
    .landing-grid{
      height: 100%;
      width: 100%;
      position: absolute;
      @keyframes linearh1 {
        0% {
          left: 37.5%;
          right: 62.5%;
          width: 0%;
        }
        100% {
          left: 0%;
          right: 0%;
          width: 100%;
        }
      }
      @keyframes linearh2 {
        0% {
          left: 75%;
          right: 25%;
          width: 0%;
        }
        100% {
          left: 0%;
          right: 0%;
          width: 100%;
        }
      }
      @keyframes linearh3 {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
      .grid-border-1 {
        position: absolute;
        top: 24%;
        opacity: 0.9;
        animation: linearh1 1s 4s linear forwards;
      }
      .grid-border-2 {
        position: absolute;
        top: 51%;
        opacity: 0.5;
        animation: linearh2 1s 4s linear forwards;
      }
      .grid-border-3 {
        top: 75%;
        position: absolute;
        opacity: 0.5;
        animation: linearh3 1s 4s linear forwards;
      }
    }
    .landing-vertical{
      height: 100%;
      width: 100%;
      position: absolute;
      @keyframes linearv1 {
        0% {
          top: 75%;
          bottom: 25%;
          height: 0%;
        }
        100% {
          top: 0%;
          bottom: 0%;
          height: 100%;
        }
      }
      @keyframes linearv2 {
        0% {
          top: 50%;
          bottom: 50%;
          height: 0%;
        }
        100% {
          top: 0%;
          bottom: 0%;
          height: 100%;
        }
      }
      @keyframes linearv3 {
        0% {
          top: 75%;
          bottom: 25%;
          height: 0%;
        }
        100% {
          top: 0%;
          bottom: 0%;
          height: 100%;
          width: 1px;
        }
      }
      @keyframes linearv4 {
        0% {
          top: 50%;
          bottom: 50%;
          height: 0%;
        }
        100% {
          top: 0%;
          bottom: 0%;
          height: 100%;
          width: 1px;
        }
      }
      @keyframes linearv5 {
        0% {
          top: 25%;
          bottom: 75%;
          height: 0%;
        }
        100% {
          top: 0%;
          bottom: 0%;
          height: 100%;
          width: 1px;
        }
      }
      @keyframes linearv6 {
        0% {
          top: 50%;
          bottom: 50%;
          height: 0%;
        }
        100% {
          top: 0%;
          bottom: 0%;
          height: 100%;
        }
      }
      .vertical-1 {
        position: absolute;
        left: calc((100% / 2) / 4);
        animation: linearv1 1s 3s linear forwards;
      }
      .vertical-2 {
        position: absolute;
        left: calc(((100% / 2) / 4) * 2);
        animation: linearv2 1s 3s linear forwards;
      }
      .vertical-3 {
        position: absolute;
        left: calc(((100% / 2) / 4) * 3);
        animation: linearv3 1s 4s linear forwards;
      }
      .vertical-4 {
        position: absolute;
        left: calc(100% / 2);
        opacity: 0.3;
        animation: linearv4 1s 4s linear forwards;
      }
      .vertical-5 {
        position: absolute;
        right: calc(((100% / 2) / 4) * 3);
        opacity: 0.3;
        animation: linearv5 1s 4s linear forwards;
      }
      .vertical-6 {
        position: absolute;
        right: calc(((100% / 2) / 4) * 2);
        opacity: 0.3;
        animation: linearv6 1s 3s linear forwards;
      }
      .vertical-7 {
        position: absolute;
        right: calc((100% / 2) / 4);
        animation: linearv6 1s 3s linear forwards;
      }
    }
    .horizontal {
      border-bottom: 0.05em solid transparent;
      background-image: linear-gradient(white, white),
      radial-gradient(#fafafa, rgba(0, 0, 0, 0));
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    .vertical {
      opacity: 0.8;
      border-left: 0.05em solid transparent;
      background-image: linear-gradient(white, white),
      radial-gradient(#fafafa, rgba(0, 0, 0, 0));
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    .cross-box {
      width: 100%;
      position: absolute;
      bottom: 0;
      top: 0;
      p {
        opacity: 0;
        animation: fadeIncross 1s 4s forwards;
        font-size: 21px;
        margin-top: 1px;
        color: white;
        @keyframes fadeIncross {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }
      .cross-item-1 {
        top: 25%;
        left: 12.5%;
        transform: translate(-5px, -17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-2 {
        left: 12.5%;
        transform: translate(-5px, -13px);
        position: absolute;
        top: 75%;
      }
      .cross-item-3 {
        top: 0%;
        left: 25%;
        transform: translate(-5px, -11px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-4 {
        top: 52%;
        left: 25%;
        transform: translate(-5px, -17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-5 {
        top: 100%;
        left: 25%;
        transform: translate(-5px, -13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-6 {
        top: 0%;
        left: 50%;
        transform: translate(-5px, -11px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-7 {
        top: 52%;
        left: 50%;
        transform: translate(-5px, -17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-8 {
        top: 100%;
        left: 50%;
        transform: translate(-5px, -13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-9 {
        top: 25%;
        right: 37%;
        transform: translate(-5px, -17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-10 {
        top: 75%;
        right: 37%;
        transform: translate(-5px, -13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-11 {
        top: 0%;
        right: 25%;
        transform: translate(5px, -11px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-12 {
        top: 52%;
        right: 25%;
        transform: translate(4px, -18px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-13 {
        top: 100%;
        right: 25%;
        transform: translate(5px, -13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-14 {
        top: 25%;
        right: 12%;
        transform: translate(0px, -17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-15 {
        top: 75%;
        right: 12%;
        transform: translate(-5px, -13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-16 {
        top: 75%;
        left: 37.5%;
        transform: translate(-5px, -13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-17 {
        top: 25%;
        left: 37.5%;
        transform: translate(-5px, -17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
    }
    .main-title{
      width: 430px;
      color: #fff;
      position: absolute;
      top: 167px;
      right: 392px;
      .en-title{
      font-family: DIN-Regular;
      font-size: 45px;
      letter-spacing: 10px;
      }
      .cn-title{
      font-family: NotoSansCJKsc-Thin;
      font-size: 35px;
      font-weight: 200;
      margin-top: 15px;
      }
    }
  }
  .page-footer{
    width: 100%;
    height: 25%;
    position: relative;
    .footer-container{
      color: #fff;
      text-align: center;
      padding-bottom: 30px;
      .cn-tip{
        font-family: NotoSansCJKsc-Regular;
        font-size: 20px;
        opacity: .8;
      }
      .en-tip{
        width: 245px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        letter-spacing: 3px;
        padding: 15px 0 14px 0;
        border-bottom: 2px dashed #ffffff;
        margin: 0 auto;
      }
      .mouse-btn{
        width: 30px;
        height: 55px;
        margin: 40px auto 0;
        position: relative;
        border: 2px solid white;
        border-radius: 15px;
        opacity: 0.8;
      }
      .block{
        position: absolute;
        left: 50%;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        background: white;
        border-radius: 50%;
        animation: ani-mouse 2.5s linear infinite;
      }
      @keyframes ani-mouse {
        0% {
          opacity: 1;
          top: 29%;
        }
        15% {
          opacity: 1;
          top: 71%;
        }
        50% {
          opacity: 0;
          top: 71%;
        }
        100% {
          opacity: 0;
          top: 71%;
        }
      }
    }
  }
}
</style>