import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from './views/LandingPage';

Vue.use(Router);

export default new Router({
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
      path: '/capabilities',
      name: 'capabilities',
      component: () =>
        import(/* webpackChunkName: "capabilities" */ './views/Capabilities')
    },
    {
      path: '/videos',
      name: 'videos',
      component: () =>
        import(/* webpackChunkName: "videos" */ './views/Videos')
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
