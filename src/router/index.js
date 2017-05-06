import Vue from 'vue';
import Router from 'vue-router';
import Game from '@/components/Game';
import Admin from '@/components/Admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
});
