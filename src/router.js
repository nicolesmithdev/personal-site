import { createRouter, createWebHistory } from 'vue-router';

import PageHome from './components/pages/PageHome';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/:catchall(.*)',
      redirect: { name: 'home' }
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