<template>
  <div class="about-container"> 
    <swiper :options="swiperOption" ref="mySwiper" style="height: 100%;">
      <swiper-slide class="swiper-item">
        <div class="slide-container">
          <div class="header-side-nav">
            <img src="@/assets/hamburger.png" @click="navLock = true">
          </div> 
          <div class="slide-title">
            <div class="en-title">FROFILE</div>
            <div class="cn-title">项目简介</div>
          </div>
          <div class="main-container">
            <div class="profile-title">
              <div class="profile-title-en">Craftsmanship creates quality life products</div>
              <div class="profile-title-cn">匠心筑就智慧人居精品</div>
            </div>
            <div class="profile-content">
              <p>实地集团，2006年从广州出发，始于地产而不止于地产。13年来，实地一直致力于将人类科技的一切探索创新以人居业态为依托运用于生活中的方方面面，将科技与人文连接，重新构建人类对于自身与居住空间关系的认知。目前，实地集团已经发展成为一家为用户提供贯穿全生命周期智慧人居解决方案的综合性企业。</p>
              <p>实地集团现已覆盖全国六大最具成长力城市群，在26城全面绽放。每落子一地，均从区域先天资源的统筹观出发，开发每个城市的独特魅力，探索每个城市的人文价值，创造与之匹配的智能生活解决方案，为每座城市打造专属的人居经典。</p>
              <p>实地集团坚持用户至上原则，关注每一个个体的真实需求。从项目规划之初，就从用户痛点出发，以科技创新的产品思维先行，借助智能产品、数据分析、生活配套三位一体的服务体系，满足用户对居住环境安全、家庭健康、时间管理、情感交互等多维度的需求,以此为主线来逐步构建SLS(Smart Life System)智慧人居系统，为用户打造美好生活体验的同时，引领行业发展方向，提升城市整体的人居品质。</p>
            </div>
          </div>
          <div class="footer">
            <div class="footer-left">
              <span>01</span>
              /05
            </div>
            <div class="footer-right">
              <div class="footer-frame" tabindex="0" role="button" aria-label="Next slide">
                <div class="more-left">
                  <div class="en-more">EXPLORE MORE</div>
                  <div class="cn-more">点击更多</div>
                </div>
                <div class="more-right">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-item-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="slide-container">
          <div class="header-side-nav">
            <img src="@/assets/hamburger.png" @click="navLock = true">
          </div> 
          <div class="slide-title">
            <div class="en-title">MILESTONES</div>
            <div class="cn-title">里程碑</div>
          </div>
          <div class="main-container">
            <div class="mile-content">
              <strong>萌芽，生长的开始..</strong>
              <p>2006年,一股地产新兴势力在华南地区悄然崛起，实地集团正式成立。</p>
              <strong>扎根，能量的注入</strong>
              <p>2006年，实地集团在中山启动第一个综合社区项目——实地•中山璟湖城。该项目获当地“最受欢迎楼盘”、“最具魅力园林社区”等奖项，为集团赢得良好开局及市场声誉。</p>
              <strong>生长，全面的发展</strong>
              <p>实地集团发展迅猛，一路高歌、不断壮大，陆续推出实地•遵义蔷薇国际、实地•六盘水紫藤庄园等高品质地产项目，实现以广州为总部，辐射周边省份的跨越式发展。</p>
              <strong>成熟，崭新的高度</strong>
              <p>2013年，实地集团发展日益成熟，战略触角延伸至华东等地区。实地•无锡玫瑰庄园等项目的落地标志着实地集团吹响进发中国东部房地产市场的号角，并向更高的目标迈进。</p>
              <strong>回归，荣耀的释放</strong>
              <p>2015年，实地集团回归一线城市。在广州筑造的百万方生活综合体——实地•广州常春藤项目，拉开了集团新一轮战略布局的序幕。2017年，实地进入第二个十年，旗下项目多点齐发，打开全国发展的新格局。</p>
              <strong>绽放，力量的迸发</strong>
              <p>2018年，实地集团加速拓展，新布局十余个中国潜力城市，并正式提出构建SLS（SmartLifeSystem）智慧人居系统的战略设想，通过建立统一的云平台，与用户保持高频次的互动，不断迭代产品、优化服务，构建覆盖家居、社区、城市的智慧生活版图。</p>
            </div>
          </div>
          <div class="footer">
            <div class="footer-left">
              <span>02</span>
              /05
            </div>
            <div class="footer-right">
              <div class="footer-prev" tabindex="0" role="button" aria-label="Previous slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
              <div class="footer-frame next" tabindex="0" role="button" aria-label="Next slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="slide-container">
          <div class="header-side-nav">
            <img src="@/assets/hamburger.png" @click="navLock = true">
          </div> 
          <div class="slide-title">
            <div class="en-title">BRAND CONNOTATION</div>
            <div class="cn-title">品牌诠释</div>
          </div>
          <div class="main-container">
            <div class="brand-content">
              <video class="brand-video" src="http://www.seedland.cc/wp/wp-content/uploads/2019/04/video_three.mp4" muted="muted" controls="controls" loop="loop"></video>
              <div class="brand-text">
                <div class="brand-title">品牌诠释</div>
                <div class="brand-line"></div>
                <div class="brand-desc">实地（Seedland0），寓意为土壤，实地一直奉行种子文化，认为生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，只有不断去灌溉培育，精心呵护，才能让种子茁壮成长，生活才会变得更加美好幸福。不论是居住空间的创新与改造、高科技的社区智能集约，亦或是和谐人居的社区服务，实地致力于关注每一个个体的真实需求，为未来全新的智慧人居生活提供完整舒适的体验服务。</div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="footer-left">
              <span>03</span>
              /05
            </div>
            <div class="footer-right">
              <div class="footer-prev" tabindex="0" role="button" aria-label="Previous slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
              <div class="footer-frame next" tabindex="0" role="button" aria-label="Next slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="slide-container">
          <div class="header-side-nav">
            <img src="@/assets/hamburger.png" @click="navLock = true">
          </div> 
          <div class="slide-title">
            <div class="en-title">PHILOSOPHY</div>
            <div class="cn-title">实地理念</div>
          </div>
          <div class="main-container">
            <div class="idea-content">
              <div class="idea-btn">
                <div :class="{ ideaBtn: true, active: render }" @click="render = true ">
                  实地文化 [Culture]
                  <div class="cross-box">
                    <div :class="'cross-item-' + index" v-for="index in 4" :key="index">+</div>
                  </div>
                </div>
                <div :class="{ ideaBtn: true, active: !render }" @click="render = false ">
                  实地愿景 [Vision]
                  <div class="cross-box">
                    <div :class="'cross-item-' + index" v-for="index in 4" :key="index">+</div>
                  </div>
                </div>
              </div>
              <div class="idea-text" id="idealText">
                <div class="left-text" v-for="item in textData" :key="item.title">
                  <div class="left-text-title">{{ item.title }}</div>
                  <div class="left-text-desc" v-html="item.text"></div>
                </div>
                <div class="right-text" v-for="item in blurData" :key="item.title">
                  <div class="right-text-title">{{ item.title }}</div>
                  <div class="right-text-desc" v-html="item.text"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="footer-left">
              <span>04</span>
              /05
            </div>
            <div class="footer-right">
              <div class="footer-prev" tabindex="0" role="button" aria-label="Previous slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
              <div class="footer-frame next" tabindex="0" role="button" aria-label="Next slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item">
        <div class="slide-container">
          <div class="header-side-nav">
            <img src="@/assets/hamburger.png" @click="navLock = true">
          </div> 
          <div class="slide-title">
            <div class="en-title">GLORY</div>
            <div class="cn-title">实地荣誉</div>
          </div>
          <div class="main-container glory-container">
            <div class="glory-content">
              <div class="glory-title">Seedland credentials 集团荣誉</div>
              <ul class="glory-list">
                <li class="glory-item">2017年、2018年</li>
                <p>连续两年入选国务院发展研究中心企业研究所、清华大学房地产研究所、中国指数研究院-中国房地产公司品牌价值TOP30、中国房地产住宅开发专业领先品牌价值TOP10–智慧人居</p>
                <li class="glory-item">2018年</li>
                <p>中国房地产业协会-中国房地产开发企业100强、中国房地产开发企业品牌价值华南10强</p>
                <li class="glory-item">2018年</li>
                <p>新浪乐居 年度品牌创新科技奖</p>
                <li class="glory-item">2018年</li>
                <p>时代周报 年度产品创新奖</p>
                <li class="glory-item">2018年</li>
                <p>人民网 年度实力品牌企业</p>
                <li class="glory-item">2019年</li>
                <p>国务院发展研究中心企业研究所、清华大学房地产研究所、中国指数研究院联合发布-中国房地产百强企业</p>
                <p>亿翰智库-中国房地产品牌价值TOP100、中国房地产企业粤港澳大湾区竞争力TOP20、中国房地产企业品牌价值成长性二十强、中国房地产企业品牌运营能力二十强</p>
                <p>观点指数研究院-中国年度科技地产领军企业</p>
                <p>♦实地 · 武汉君兰汀岸</p>
                <p>2017年环球设计第1601期推荐项目</p>                        
                <p>♦实地 · 三亚海棠华著</p>
                <p>意大利A’Design Award室内空间和展览类金奖</p>
                <p>♦实地 · 遵义蔷薇国际</p>
                <p>遵义地产十年地标楼盘</p>
                <p>♦ 实地 · 天津海棠雅著</p>                 
                <p>意大利A’Design Award室内空间和展览类银奖</p>
                <p>红棉中国设计奖 年度室内设计至尊奖</p>
                <p>2017年金盘奖 年度最佳售楼空间</p>
                <p>♦实地 · 广州常春藤</p>
                <p>2016年、2018年先后两次通过BREEAM英国绿色建筑评估认证荣获广州区域首个全球杰出先驱奖</p>
                <p>2018年荣获新浪乐居 年度智慧人居奖</p>
                <p>2018年获网易新闻&广东省地产商会中国地产冠军榜年度人气明星楼盘</p>
                <p>2017年度中国地产冠军榜 年度品质精工楼盘</p>
                <p>♦实地 · 广州蔷薇国际</p>
                <p>意大利A’Design Award室内空间和展览类银奖</p>
                <p>2017中国房产风云榜年度品质楼盘</p>
                <p>2017年获克尔瑞 广州楼盘销售面积TOP10</p>
                <p>2017年获微博 十大房地产创新营销项目类（广东）</p>
                <p>2018年获网易房产&广东省地产商会中国地产冠军榜十大畅销红盘（广州）</p>
              </ul>
            </div>
          </div>
          <div class="footer">
            <div class="footer-left">
              <span>05</span>
              /05
            </div>
            <div class="footer-right">
              <div class="footer-prev" tabindex="0" role="button" aria-label="Previous slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
              <div class="footer-frame next" tabindex="0" role="button" aria-label="Next slide">
                <div class="point">
                  <div class="arrow"></div>
                  <div class="line"></div>
                </div>
                <div class="cross-box">
                  <div :class="'cross-' + index" v-for="index in 4" :key="index">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <sideNav v-if="navLock" @close="closeNav" />
  </div>
</template>

<script>
import sideNav from '@/components/sideNav.vue'

export default {
  name: "about",
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".footer-frame",
          prevEl: ".footer-prev"
        }
      },
      idealText1: [
        {
          title: "万物向阳 实地生长",
          text:
            "<p>我们认为,生活就像是一颗种子，需要阳光、水分、土壤、空气的用心滋养，只有不断去灌溉培育，精心呵护，才能让种子茁壮成长，生活才会变得更加美好幸福。</p><p>实地集团将为孕育人们美好生活的种子提供养分与能量，扶植他们破土发芽，生根向阳，去向更美好的地方。</p>"
        }
      ],
      idealText2: [
        {
          title: "打造美好人居生活体验",
          text:
            "<p>人类文明的繁衍传承来自于外在两大驱力的推动，即科技创新与人文关怀。二者互为促进，互为支撑。实地集团坚持用户至上原则，始终秉承初心，关注每一个个体的真实需求，锲而不舍的创新只为提升生活品质。勇者不囿于现状，而智者尤擅于超越。实地相信，唯有不拘传统、锐意进取、持续迭代，才能在未来人居体验的探索道路上，创造匠心铸就的精品。</p>"
        }
      ],
      render: true,
      navLock: false
    }
  },
  methods: {
    closeNav(val) {
      this.navLock = val;
    }
  },
  watch: {
    render() {
      let idealText = document.getElementById("idealText");
      idealText.style.opacity = 0;
      idealText.style.cssText += "transition:none";
      setTimeout(() => {
        idealText.style.cssText += "transition:opacity 500ms linear";
        idealText.style.opacity = 1;
      }, 500);
    }
  },
  computed: {
    textData() {
      if (this.render) {
        return this.idealText1;
      } else {
        return this.idealText2;
      }
    },
    blurData() {
      if (this.render) {
        return this.idealText2;
      } else {
        return this.idealText1;
      }
    }
  },
  components: {
    sideNav
  }
}
</script>

<style lang="less">
.about-container{
  height: 100%;
  color: #fff;
  background-color: rgba(0,0,0,.5);
  position: relative;
  .swiper-container{
    .swiper-item{
      .slide-container{
        padding: 3% 5%;
        .header-side-nav {
          margin-left:  120px;
          position: absolute;
          top: 115px;
          right: 115px;
          cursor: pointer;
          z-index: 99;
          img{
            width: 25px;
          }
        }
        .slide-title{
          font-size: 18px;
          .en-title{
            font-family: DIN-Regular;
            letter-spacing: 3px;
            margin-bottom: 10px;
          }
          .cn-title{
            font-family: NotoSansCJKsc-Light,sans-serif;
          }
        }
        .main-container{
          width: 70vw;
          margin: 1.5% 0 0 7%;
          .profile-title{
            font-family: NotoSansCJKsc-Light,sans-serif;
            font-size: 50px;
            font-weight: 300;
            white-space: nowrap;
            .profile-title-cn{
              padding-left: 15%;
              margin-top: 1%;
            }
          }
          .profile-content{
            width: 50vw;
            height: 30vh;
            overflow-y: auto;
            float: right;
            margin-top: 3%;
            p{
              font-family: NotoSansCJKsc-Thin,sans-serif;
              font-size: 18px;
              font-weight: 300;
              margin-bottom: 1em;
              letter-spacing: 1px;
              opacity: .8;
            }
          }
          .mile-content{
            width: 70vw;
            height: 40vh;
            overflow-y: auto;
            margin: 5%;
            font-family: NotoSansCJKsc-Medium;
            font-size: 18px;
            p{
              font-weight: 300;
              margin: 4em 0 8em;
              letter-spacing: 1px;
              opacity: .9;
            }
          }
          .brand-content{
            width: 75vw;
            margin: 5%;
            display: flex;
            .brand-video{
              width: 55%;
            }
            .brand-text{
              margin-left: 70px;
              .brand-title{
                font-family: NotoSansCJKsc-Light,sans-serif;
                font-size: 42px;
                font-weight: 300;
              }
              .brand-line{
                width: 100px;
                margin: 20px 0;
                border-bottom: 1px solid #fff;
              }
              .brand-desc{
                font-family: NotoSansCJKsc-Thin,sans-serif;
                font-size: 18px;
                max-width: 100%;
                line-height: 28px;
                font-weight: 300;
                opacity: .8;
              }
            }
          }
          .idea-content{
            margin: -4% -7% 0 12%;
            max-height: 56vh;
            overflow-y: auto;
            .idea-btn{
              display: flex;
              margin: 8px;
              .ideaBtn{
                width: 250px;
                position: relative;
                padding: 13px 25px;
                border: 1px solid #fff;
                font-family: NotoSansCJKsc-Light;
                font-weight: 100;
                font-size: 24px;
                cursor: pointer;
                white-space: nowrap;
                transition: background 1s ease-in;
                margin-right: 5%;
                background: rgba(255, 255, 255, 0.5);
                opacity: 0.5;
                .cross-box{
                  .cross-item-1{
                    position: absolute;
                    top: -19px;
                    left: -8px;
                    display: none;
                  }
                  .cross-item-2{
                    position: absolute;
                    top: -19px;
                    right: -8px;
                    display: none;
                  }
                  .cross-item-3{
                    position: absolute;
                    bottom: -15px;
                    right: -8px;
                    display: none;
                  }
                  .cross-item-4{
                    position: absolute;
                    bottom: -15px;
                    left: -8px;
                    display: none;
                  }
                }
              }
              .ideaBtn.active{
                  opacity: 1;
                  .cross-box{
                    .cross-item-1{
                      display: block;
                    }
                    .cross-item-2{
                      display: block;
                    }
                    .cross-item-3{
                      display: block;
                    }
                    .cross-item-4{
                      display: block;
                    }
                  }
                }
            }
            .idea-text{
              display: flex;
              opacity: 1;
              transition: opacity 500ms linear 0s;
              margin-top: 7%;
              .left-text{
                width: 65%;
                margin-right: 6%;
                .left-text-title{
                  font-family: NotoSansCJKsc-Thin;
                  font-size: 4vw;
                  white-space: nowrap;
                  font-weight: 100;
                }
                .left-text-desc{
                  font-family: NotoSansCJKsc-Thin;
                  font-size: 20px;
                  margin-top: 30px;
                  font-weight: 100;
                  opacity: .9;
                }
              }
              .right-text{
                width: 28%;
                opacity: .8;
                filter: blur(3px);
                .right-text-title{
                  font-family: NotoSansCJKsc-Thin;
                  font-size: 30px;
                  font-weight: 100;
                }
                .right-text-desc{
                  font-family: NotoSansCJKsc-Thin;
                  font-size: 16px;
                  margin-top: 30px;
                  font-weight: 100;
                  opacity: .9;
                }
              }
            }
          }
          .glory-content{
            display: flex;
            margin: 7% 0;
            max-height: 50vh;
            overflow-y: auto;
            .glory-title{
              width: 30%;
              font-size: 18px;
              font-family: NotoSansCJKsc-Medium;
              margin-top: 25px;
              margin-left: 8%;
            }
            .glory-list{
              width: 60%;
              font-family: NotoSansCJKsc-Thin,sans-serif;
              font-size: 18px;
              font-weight: 100;
              opacity: .9;
              margin-left: 150px;
              padding-right: 20px;
              .glory-item{
                line-height: 1.5;
                margin: 20px 0;
              }
              p{
                line-height: 1.5;
                margin: 15px 0;
              }
            }
          }
        }
        .glory-container{
          width: 78vw;
        }
        .footer{
          width: 91%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          bottom: 40px;
          .footer-left{
            font-family: DIN-Regular;
            letter-spacing: 13px;
            white-space: nowrap;
            font-size: 40px;                
            span{
              font-size: 100px;
            }
          }
          .footer-right{
            position: relative;
            .footer-frame{
              width: 320px;
              height: 80px;
              color: #fafafa;
              display: flex;
              cursor: pointer;
              border: 1px solid #fafafa;
              background-color: transparent;
              transition: background-color .5s ease-in;
              .more-left{
                margin: 10px;
                .en-more{
                  font-family: "DIN-Light";
                  font-size: 14px;
                  padding: 5px 0;
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
                  right: 15px;
                  bottom: 40px;
                  transform: rotate(32deg);
                }
                .line{
                  width: 70px;
                  border-bottom: 2px solid #fafafa;
                  margin-top: 25px;
                  position: absolute;
                  right: 15px;
                  bottom: 36px
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
            .footer-prev,.next{
              width: 57px;
              height: 57px;
              border: 1px solid #fafafa;
              padding: 10px;
              position: relative;
              display: inline-block;
              background-color: transparent;
              transition: background-color .3s ease-in;
              cursor: pointer;
              .point{
                position: absolute;
                top: 50%;
                left: 25%;
                .arrow{
                  width: 10px;
                  border-bottom: 1px solid #fafafa;
                }
                .line{
                  width: 29px;
                  border-bottom: 1px solid #fafafa;
                }
              }
            }  
            .footer-prev{
              margin-right: 50px;
              position: relative;
              .point{
                position: absolute;
                top: 50%;
                left: 25%;
                .arrow{
                  transform-origin: bottom left;
                  transform: rotate(-35deg) translateY(1px);
                }
              }
            }
            .next{
              .point{
                .arrow{
                  transform-origin: bottom right;
                  transform: rotate(389deg) translate(17px,-9px);
                }
              }
            }
            .cross-box{
              .cross-1{
                position: absolute;
                top: -13px;
                left: -6px;
              }
              .cross-2{
                position: absolute;
                top: -13px;
                right: -6px;
              }
              .cross-3{
                position: absolute;
                bottom: -10px;
                left: -6px;
              }
              .cross-4{
                position: absolute;
                bottom: -10px;
                right: -6px;
              }
            }
          }
          .footer-frame:hover{
            background-color: #595959;
          }
          .footer-prev:hover{
            background-color: #595959;
          }
        }
      }
    }
    .swiper-pagination{
      width: auto;
      top: 35%;
      margin-left: 5%;
      .swiper-pagination-bullet{
        margin-top: 10px !important;
        width: 10px;
        height: 40px;
        border-left: 2px solid #fff;
        background: transparent;
        border-radius: 0;
        display: block;
      }
      .swiper-pagination-bullet-active{
        opacity: 1;
      }
    }
  }
}
</style>