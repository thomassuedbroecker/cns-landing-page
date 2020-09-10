<template>
  <div id="app">
    <my-header></my-header>
    <!-- <my-menu></my-menu> -->
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';
//import MyMenu from './components/MyMenu';

export default {
  name: 'App',
  components: {
    MyHeader,
    //MyMenu
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
