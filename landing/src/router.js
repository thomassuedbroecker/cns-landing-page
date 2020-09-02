import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage';

Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior() {
      window.scrollTo(0,0);
    },
    routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: () =>
        import(/* webpackChunkName: "get-started" */ './views/GetStarted')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
        import(/* webpackChunkName: "capabilities" */ './views/Projects')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About')
    }
  ]
});
