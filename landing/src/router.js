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
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About')
    },
    {
      path: '/reactive_page',
      name: 'reactive_page',
      component: () =>
        import(/* webpackChunkName: "reactive-page" */ './views/Reactive')
    },
    {
      path: '/synchron_page',
      name: 'synchron_page',
      component: () =>
       import( /* webpackChunkName: "cloudnative-page" */ './views/CloudNative')
    },
    {
      path: '/security_page',
      name: 'security_page',
      component: () =>
       import( /* webpackChunkName: "security-page" */ './views/Security')
    },
    // ----------------------
    // Applications navigation
    {
      path: '/home',
      name: 'home',
      beforeEnter() {location.href = 'https://cloud-native-starter-landing-tsuedbro.mybluemix.net/'}
    },
    {
      path: '/basic-concepts',
      name: 'basic-concepts',
      beforeEnter() {location.href = 'https://cloud-native-starter-synchron-tsuedbro.mybluemix.net/'}
    },
    {
      path: '/reactive',
      name: 'reactive',
      beforeEnter() {location.href = 'https://cloud-native-starter-reactive-tsuedbro.mybluemix.net/'}
    },       
    {
      path: '/security',
      name: 'security',
      beforeEnter() {location.href = 'https://cloud-native-starter-security-tsuedbro.mybluemix.net/'}
    },
    // Applications navigation
    // -----------------------
  ]
});