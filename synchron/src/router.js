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
      path: '/home',
      name: 'home',
      beforeEnter() {location.href = 'https://cloud-native-starter-landing-tsuedbro.mybluemix.net/'}
    },
    {
      path: '/get-started',
      name: 'get-started',
      component: () =>
        import(/* webpackChunkName: "get-started" */ './views/GetStarted')
    },
    {
      path: '/capabilities',
      name: 'capabilities',
      component: () =>
        import(/* webpackChunkName: "capabilities" */ './views/Capabilities')
    },
    {
      path: '/talks',
      name: 'talks',
      component: () =>
        import(/* webpackChunkName: "talks" */ './views/Talks')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () =>
        import(/* webpackChunkName: "blogs" */ './views/Blogs')
    },
    {
      path: '/workshops',
      name: 'workshops',
      component: () =>
        import(/* webpackChunkName: "workshops" */ './views/Workshops')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About')
    }
  ]
});
