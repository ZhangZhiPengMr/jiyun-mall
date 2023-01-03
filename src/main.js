import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入公共样式
import '@/common/css/reset.css'
// 引入完整的ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
