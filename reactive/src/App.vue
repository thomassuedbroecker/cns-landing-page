<template>
  <div id="app">
 
    <my-header></my-header>
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="scss">
@import './styles/carbon';
</style>
