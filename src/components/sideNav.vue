<template>
  <div class="side-nav">
    <div class="nav-container">
      <img src="@/assets/close.png" @click="close">
      <div class="nav-list">
        <a class="nav-item" href="#landing" @click="close">
          01
          <div class="item-text">
            <div class="cn-text">主页</div>
            <div class="en-text">HOME</div>
          </div>
        </a>
        <a class="nav-item" href="#about" @click="close">
          02
          <div class="item-text">
            <div class="cn-text">关于地产</div>
            <div class="en-text">ABOUT</div>
          </div>
        </a>
        <a class="nav-item" href="#development" @click="close">
          03
          <div class="item-text">
            <div class="cn-text">地产开发</div>
            <div class="en-text">DEVELOPMENT</div>
          </div>
        </a>
        <a class="nav-item" href="#news" @click="close">
          04
          <div class="item-text">
            <div class="cn-text">最新消息</div>
            <div class="en-text">LATEST NEWS</div>
          </div>
        </a>
        <a class="nav-item" href="#joinus" @click="close">
          05
          <div class="item-text">
            <div class="cn-text">加入实地</div>
            <div class="en-text">JOIN US</div>
          </div>
        </a>
        <a class="nav-item" href="#whistleblower" @click="close">
          06
          <div class="item-text">
            <div class="cn-text">廉洁举报</div>
            <div class="en-text">WHISTLEBLOWER</div>
          </div>
        </a>
        <a class="nav-item" href="#contact" @click="close">
          07
          <div class="item-text">
            <div class="cn-text">联系我们</div>
            <div class="en-text">CONTACT</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sideNav",
  methods: {
    close() {
      this.$emit('close', false);
    }
  }, 
}
</script>

<style lang="less" scoped>
.side-nav{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0,0,0,.85);
  z-index: 99;
  animation: slideright 1s both;
  @keyframes slideright {
    0% {
      transform: translate3d(100%, 0, 0);
      visibility: visible;
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  .nav-container{
    width: 300px;
    position: absolute;
    right: 0;
    top: 0;
    img{
        width: 34px;
        margin: 40px 48px 0 0;
        cursor: pointer;
        float: right;
    }
    .nav-list{
      position: absolute;
      top: 100px;
      .nav-item{
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        margin: 25px 0;
        display: flex;
        align-items: center;
        .item-text{
          font-size: 14px;
          font-weight: 100;
          line-height: 1.5;
          border-left: 1px solid hsla(0,0%,100%,.41);
          flex-direction: column;
          margin-left: 10px;
          padding: 5px 0 5px 15px;
          display: flex;
          .en-text{
            font-size: 8px;
          }
        }
      }
    }
  }
}
</style>

