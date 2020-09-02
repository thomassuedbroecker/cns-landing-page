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
    },
    {
      path: '/reactive',
      name: 'reactive',
      beforeEnter() {location.href = 'https://cloud-native-starter-reactive-tsuedbro.mybluemix.net/'}
    },
    {
      path: '/synchron',
      name: 'synchron',
      beforeEnter() {location.href = 'https://cloud-native-starter-synchron-tsuedbro.mybluemix.net/'}
    },
    {
      path: '/security',
      name: 'security',
      beforeEnter() {location.href = 'https://cloud-native-starter-security-tsuedbro.mybluemix.net/'}
    }
  ]
});
