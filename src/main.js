import Vue from 'vue';
import router from './router.js';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';

Vue.component('Panel', () => import('./components/UI/Panel.vue'));

Vue.use(VueAnalytics, {
  id: 'UA-30012836-1',
  router,
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');