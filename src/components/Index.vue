<template>
  <div id="app">
    <div class="page">
      <div class="page-bg">
        <video class="page-video" muted data-autoplay loop="loop" autoplay="autoplay" src="@/assets/videobg.mp4"></video>
      </div>
      <div class="page-container">
        <full-page
          class="fullpage-container"
          ref="fullpage"
          :options="options"
          id="fullpage"
        >
          <div class="section home"><home /></div>
          <div class="section about"><about /></div>
          <div class="section development"><development /></div>
          <div class="section news"><news /></div>
          <div class="section joinus"><joinus /></div>
          <div class="section whistleblower"><whistleblower /></div>
          <div class="section contact"><contact /></div>
        </full-page>
      </div>
    </div>
  </div>
</template>

<script>

import home from '@/components/home.vue';
import about from '@/components/about.vue';
import development from '@/components/development.vue';
import news from '@/components/news.vue';
import joinus from '@/components/joinus.vue';
import whistleblower from '@/components/whistleblower.vue';
import contact from '@/components/contact.vue';

export default {
  data() {
    return {
      options: {
        licenseKey: "4F375E3E-7D814D7F-B82954BA-31DC667F",
        anchors:[
          "landing",
          "about",
          "development",
          "news",
          "joinus",
          "whistleblower",
          "contact"
        ],
      },
    }
  },
  components: {
    home,
    about,
    development,
    news,
    joinus,
    whistleblower,
    contact
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app,body,html{
  width: 100%;
  height: 100%;
}
.page{
  .page-bg{
    .page-video{
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -100;
      object-fit: cover;
    }
  }
}
</style>