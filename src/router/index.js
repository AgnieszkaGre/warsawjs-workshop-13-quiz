import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '@/components/MainPage';
import Finish from '@/components/Finish';
import Quiz from '@/components/Quiz';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/finish',
      name: 'Finish',
      component: Finish,
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz,
    },
  ],
});
