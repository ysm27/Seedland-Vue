import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;

Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper);

new Vue({
  render: h => h(App),
}).$mount('#app')
