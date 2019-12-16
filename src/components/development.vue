<template> 
  <simplebar class="deve-box" data-simplebar-auto-hide="false">
    <div class="deve-list">
      <div class="deve-item"
        v-for="(item,index) in deveDataTop"
        :key="index"
        :style="{ backgroundImage: item.bgUrl }"
      >
        <div class="bg-color"></div>
        <div class="item-title">
          <div class="cn-title">{{ item.titleCn }}</div>
          <div class="en-title">{{ item.titleEn }}</div>
        </div>
        <div class="item-btn">
          <div class="btn-box">EXPLORE</div>
          <div class="box-line-top"></div>
          <div class="box-line-left"></div>
          <div class="box-line-right"></div>
          <div :class="'btn-cross-' + index" v-for="index in 4" :key="index">+</div>
        </div>
      </div>
    </div>
    <div class="deve-list">
      <div class="deve-item"
        v-for="(item,index) in deveDataBottom"
        :key="index"
        :style="{ backgroundImage: item.bgUrl }"
      >
        <div class="bg-color"></div>
        <div class="item-title">
          <div class="cn-title">{{ item.titleCn }}</div>
          <div class="en-title">{{ item.titleEn }}</div>
        </div>
        <div class="item-btn">
          <div class="btn-box">EXPLORE</div>
          <div class="box-line-top"></div>
          <div class="box-line-left"></div>
          <div class="box-line-right"></div>
          <div :class="'btn-cross-' + index" v-for="index in 4" :key="index">+</div>
        </div>
      </div>
    </div>
  </simplebar>
</template>

<script>
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';

export default {
  data() {
    return {
            deveDataTop: [
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/广州增城蔷薇国际.jpg)",
          titleCn: "广州蔷薇花园",
          titleEn: "QIANGWEI HUAYUAN"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/广州常春藤-1.jpg)",
          titleCn: "广州常春藤",
          titleEn: "BOSTON IVY"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2019/08/3e658b0fa85713ed7a6d47caeb276c6.jpg)",
          titleCn: "永川蔷薇国际",
          titleEn: "ROSA INTERNATIONAL"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/惠州常春藤.jpg)",
          titleCn: "惠州常春藤",
          titleEn: "ROYAL IVY"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/惠州木槿雅著.jpg)",
          titleCn: "惠州木槿雅著",
          titleEn: "RIVER ROSELLE"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/太原紫藤公馆.jpg)",
          titleCn: "太原紫藤公馆",
          titleEn: "THE WISTERIA"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/成都海棠名著.jpg)",
          titleCn: "成都海棠名著",
          titleEn: "BEGONIA WEAVE"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/三亚海棠华著.jpg)",
          titleCn: "三亚海棠华著",
          titleEn: "CRYSTAL BAY"
        }
      ],
      deveDataBottom: [
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/昆明花鹤翎.jpg)",
          titleCn: "昆明花鹤翎",
          titleEn: "CAMILLIA RISE"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/天津海棠雅著.jpg)",
          titleCn: "天津海棠雅著",
          titleEn: "HOUSE OF BEGONIA"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/深圳剑兰郡.jpg)",
          titleCn: "深圳剑兰郡",
          titleEn: "THE GLADIOLUS"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/遵义蔷薇国际.jpg)",
          titleCn: "遵义蔷薇国际",
          titleEn: "ROSE INTERNATIONAL GARDEN"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/ORCHID-SHORE-Intro-2.jpg)",
          titleCn: "武汉君兰汀岸",
          titleEn: "ORCHID SHORE"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/无锡玫瑰庄园.jpg)",
          titleCn: "无锡玫瑰庄园",
          titleEn: "ROSE MANOR"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2019/06/中山璟湖城.jpg)",
          titleCn: "中山璟湖城",
          titleEn: "LAKEVIEW COMMUNITY"
        },
        {
          bgUrl:
            "url(http://www.seedland.cc/wp/wp-content/uploads/2018/10/六盘水紫藤庄园.jpg)",
          titleCn: "六盘水紫藤庄园",
          titleEn: "WISTERIA LAKE"
        }
      ],
    }
  },
  name: "development",
  components: {
    simplebar
  }
}
</script>

<style lang="less">
.deve-box{
  height: 100%;
  width: 100%;
  position: relative;
  .deve-list{
    height: 50%;
    display: flex;
    flex-wrap: nowrap;
    .deve-item {
      flex: none;
      position: relative;
      width: 25%;
      height: 50vh;
      background-size: cover;
      background-repeat: no-repeat;
      white-space: nowrap;
      transition: all 2s ease-in-out;
      font-size: 14px;
      .bg-color {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
      }
      .item-title{
        position: absolute;
        color: #fff;
        z-index: 1;
        font-size: 15px;
        margin: 0 20px;
        padding-top: 20px;
        .cn-title{
          font-size: 18px;
          letter-spacing: 1px;
        }
        .en-title{
          letter-spacing: 2px;
          font-size: 15px;
          white-space: pre-line;
          line-height: 25px;
        }
      }
      .item-btn{
        width: 125px;
        position: absolute;
        right: 10%;
        top: calc(50vh - 10vh);
        color: #fff;
        .btn-box {
          width: 125px;
          height: 33px;
          font-size: 14px;
          color: #fff;
          font-family: "DIN-Regular";
          letter-spacing: 3px;
          text-align: center;
          opacity: 0;
          z-index: 1;
          float: right;
          padding: 6px 0;
          margin-top: -22px;
          background-color: rgba(0, 0, 0, 0.5);
          cursor: pointer;
          border-bottom: 1px solid #ffffff;
          line-height: 21px;
          transition: opacity 1.3s ease-in-out;
        }
        .btn-cross-1 {
          color: #fff;
          position: absolute;
          left: -4px;
          top: 0px;
          transition: transform 0.7s ease-in-out;
        }
        .btn-cross-2 {
          color: #fff;
          position: absolute;
          right: -4px;
          top: 0px;
          transition: transform 0.7s ease-in-out;
        }
        .btn-cross-3 {
          color: #fff;
          position: absolute;
          left: -4px;
          top: 0px;
          z-index: 2 !important;
          transition: transform 0.7s ease-in-out;
        }
        .btn-cross-4 {
          color: #fff;
          position: absolute;
          right: -4px;
          top: 0px;
          z-index: 2 !important;
          transition: transform 0.7s ease-in-out;
        }
        .box-line-top {
          width: 0px;
          height: 1px;
          background: #fff;
          position: absolute;
          top: -22px;
          right: 0;
          transition: width 1.6s;
          opacity: 0.7;
        }
        .box-line-left {
          width: 1px;
          height: 0px;
          background: #fff;
          position: absolute;
          left: 0px;
          top: -22px;
          transition: height 2.3s;
          opacity: 0.7;
        }
        .box-line-right {
          width: 1px;
          height: 0px;
          background: #fff;
          position: absolute;
          right: 0px;
          top: -21px;
          transition: height 2s;
          opacity: 0.7;
        }
        .btn-box:hover {
          background-color: rgba(179, 175, 175, 0.397);
        }
      }
    }
    .deve-item:hover{
      .bg-color {
        background-color: rgba(0, 0, 0, 0.35);
      }
      .btn-cross-1 {
        transform: rotate(360deg);
      }
      .btn-cross-2 {
        transform: rotate(360deg);
      }
      .btn-cross-3 {
        transform: translateY(-33px) rotate(360deg);
      }
      .btn-cross-4 {
        transform: translateY(-33px) rotate(360deg);
      }
      .btn-box {
        opacity: 1;
      }
      .box-line-top {
        width: 125px;
      }
      .box-line-left {
        height: 33px;
      }
      .box-line-right {
        height: 33px;
      }
    }
  }
}
</style>