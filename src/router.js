import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from './components/pages/Home';

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:catchall(.*)',
      component: Home
    }
  ]
});

router.beforeEach(function(to, from, next) {
  if (from.name) {
    document.body.classList.remove(from.name);
  }
  if (to.name) {
    document.body.classList.add(to.name);
  }

  next();
});

export default router;