import Vue from 'vue';
import store from '@/store';
import Router from 'vue-router';
import Login from '@/pages/auth/Login.vue';
import MainLayout from '@/layouts/mainLayout/MainLayout.vue';
import Home from '@/pages/home/Home.vue';
import NotFound from '@/pages/errors/NotFound.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: (to) => {
        return { name: 'home' };
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/viewer',
      name: 'viewer',
      component: MainLayout,
      meta: {
        requiresAuth: true,
      },
    },
    {
        path: '*',
        name: 'not-found',
        component: NotFound,
        // redirect: { name: 'default' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters['auth/isLoggedIn']) {
      next({ name: 'login' });
      return;
    }
  }
  next();
});

export default router;
