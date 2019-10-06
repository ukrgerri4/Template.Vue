import Vue from 'vue';
import store from '@/store';
import Router from 'vue-router';
import Login from '@/pages/auth/Login.vue';
import MainLayout from '@/layouts/mainLayout/MainLayout.vue';
import Home from '@/pages/home/Home.vue';
import NotFound from '@/pages/errors/NotFound.vue';
import DataViewLayout from '@/layouts/mainLayout/dataViewLayout/DataViewLayout.vue';
import DataGrid from '@/components/data/dataGrid/DataGrid.vue';
import DataDetails from '@/components/data/dataDetails/DataDetails.vue';
import DataDefault from '@/components/data/dataDefault/DataDefault.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'default',
    //   redirect: (to) => {
    //     return { name: 'home' };
    //   },
    // },
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
      path: '/',
      component: MainLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '/',
          component: DataViewLayout,
          children: [
            {
              path: '/',
              name: 'default',
              component: DataDefault,
            },
            {
              path: '/:entity',
              component: DataGrid,
              props : { entity: 'client', serviceName: 'ClientService'},
            },
            {
              path: '/:entity/:id',
              component: DataDetails,
            },
          ],
        },
      ],
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
