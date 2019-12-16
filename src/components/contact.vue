<template>
  <div class="contact-container">
    <div class="header-side-nav">
      <img src="@/assets/hamburger.png" @click="navLock = true">
    </div> 
    <div class="company-info">
      <div class="select-container">
        <select class="select" id="select" @click="getValue">
          <option 
          :value="index" 
          v-for="(item, index) in optionData" 
          :key="index"
          >{{ item.title }}</option>
        </select>
      </div>
      <div class="address">
        <p v-text="adress"></p>
      </div>
      <div class="phone">
        <p v-text="tel"></p>
      </div>
      <div class="logo"><img src="@/assets/Logo_Anim_1000x80.gif"></div>
    </div>
    <div class="all-rights">
      <div class="en-copyright">©2018 版权所有：广州实地房地产开发有限公司.</div>
      <div class="cn-copyright">ALL RIGHTS RESERVED: GUANGZHOU SEEDLAND REAL ESTATE DEVELOPMENT CO., LTD.</div>
      <div class="record"><a href="#">粤ICP备13058296号</a></div>
    </div>
    <div class="pages-link">
      <ul class="bottom-nav-list">
        <li class="bottom-nav-item"><a href="#about">关于实地 ABOUT</a></li>
        <li class="bottom-nav-item"><a href="#development">地产开发 DEVELOPMENT</a></li>
        <li class="bottom-nav-item"><a href="#news">最新消息 LATEST NEWS</a></li>
        <li class="bottom-nav-item"><a href="#joinus">加入实地 JOIN US</a></li>
        <li class="bottom-nav-item"><a href="#contact">廉洁举报 WHISTLEBLOWER</a></li>
      </ul>
      <div class="contact-method">
        <div class="title">联系 CONTACT</div>
        <i></i>
      </div>
    </div>
    <sideNav v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNav from '@/components/sideNav.vue'

export default {
  name: "contact",
  data() {
    return {
      optionData: [
        {
          title: "实地地产（总部）",
          adress: "广州市天河区华夏路16号富力盈凯广场21楼",
          tel: "020-89192000"
        },
        {
          title: "实地·广州常春藤",
          adress: "广州市黄埔区乔丰路与永和大道交汇处",
          tel: "020-26227888"
        },
        {
          title: "实地·广州蔷薇国际",
          adress: "广州市广汕路21号线钟岗地铁站西侧",
          tel: "020-32636888"
        },
        {
          title: "实地·天津海棠雅著",
          adress: "天津市津蓟区高速温泉城出口西侧500米",
          tel: "022-29208228"
        },
        {
          title: "实地·武汉君兰汀岸",
          adress: "武汉汉阳经济技术开发区滨江带",
          tel: "027-83769888"
        },
        {
          title: "实地·无锡玫瑰庄园",
          adress: "无锡市惠山区城铁国际商务区",
          tel: "0510-83256666"
        },
        {
          title: "实地·惠州常春藤",
          adress: "惠州市惠阳区惠南大道旁",
          tel: "0752-3916888"
        },
        {
          title: "实地·遵义蔷薇国际",
          adress: "遵义市新蒲新区播州大道与新蒲大道交叉路口",
          tel: "0851-28869999"
        },
        {
          title: "实地·三亚海棠华著",
          adress: "三亚海棠区海棠北路18号（海棠广场北侧200米）",
          tel: "0898-88859999"
        },
        {
          title: "实地·六盘水紫藤庄园",
          adress: "六盘水钟山区明湖路湿地公园旁",
          tel: "0858-8709888"
        },
        {
          title: "实地·中山璟湖城",
          adress: "中山市火炬开发区博爱七路113号（麦当劳得来速餐厅旁）",
          tel: '0760-85280728"'
        },
        {
          title: "实地·昆明花鹤翎",
          adress: "昆明市五华区普吉路普吉立交东北侧200米",
          tel: "0871-64336666"
        },
        {
          title: "实地·惠州木槿雅著",
          adress: "惠阳经济开发区御和路（淡水河岸）",
          tel: "0752-3737111"
        },
        {
          title: "实地·成都海棠名著",
          adress: "成都市青白江新城中心家乐福旁",
          tel: "028-83662666"
        },
        {
          title: "实地·深圳剑兰郡",
          adress: "深圳市罗湖区红桂路红桂横街27号",
          tel: "0755-22380888"
        },
        {
          title: "实地·太原紫藤公馆",
          adress: "太原市晋阳街与体育路交汇处以南",
          tel: "0351-5658888"
        },
        {
          title: "实地·泰州君兰汀岸",
          adress: "泰州市海陵区秋雪湖大道（秋雪湖旁100米",
          tel: "0523-82379999"
        }
      ],
      adress: "广州市天河区华夏路16号富力盈凯广场21楼",
      tel: "020-89192000",
      navLock: false
    }
  },
  methods: {
    getValue() {
      let select = document.getElementById("select");
      let index = select.selectedIndex;
      this.adress = this.optionData[index].adress;
      this.tel = this.optionData[index].tel;
    },
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
.contact-container{
  height: 100%;
  box-shadow: inset 0 -300px 196px rgba(0,0,0,.721);
  position: relative;
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
  .company-info{
    position: absolute;
    bottom: 30px;
    left: 65px;
    color: #fff;
    .select-container{
      width: 350px;
      .select{
        display: block;
        width: 350px;
        height: 50px;
        margin: 15px 0;
        padding: 0 24px;
        font-size: 16px;
        line-height: 1.75;
        color: #fff;
        background-color: hsla(0,0%,100%,0);
        border: 1px solid #ccc;
        appearance: none;
        position: relative;
      }
    }
    .address{
      font-size: 16px;
      margin: 30px 0 20px;
    }
    .phone{
      font-size: 20px;
      margin-top: 50px;
    }
    .logo{
      margin-top: 70px;
      img{
        width: 270px;
      }
    }
  }
  .all-rights{
    position: absolute;
    bottom: 30px;
    left: 37vw;
    text-align: center;
    color: #fff;
    font-size: 12px;
    .en-copyright{
      margin-bottom: 10px;
    }
    .record{
      margin-top: 10px;
      a{
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .pages-link{
    position: absolute;
    bottom: 30px;
    right: 65px;
    .bottom-nav-list{
      list-style: none;
      padding-left: 70px;
      .bottom-nav-item{
        font-size: 14px;
        cursor: pointer;
        margin-bottom: 20px;
        a{
          color: #fff;
          text-decoration: none;
        }
      }
    }
    .contact-method{
      margin-top: 100px;
      position: relative;
      .title{
        letter-spacing: 6px;
        font-size: 23px;
        color: #fff;
      }
      i{
        position: absolute;
        top: 4px;
        right: -35px;
        transform: rotate(45deg);
        border: solid #fff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 6px;
      }
    }
  }
}  
</style>