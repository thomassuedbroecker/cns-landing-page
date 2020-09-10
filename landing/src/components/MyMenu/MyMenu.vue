<template>
    <div id="MyMenu">
      <nav class="main-nav">
        <div class="landing-info__p">Cloud Native Starter</div>             
        <cv-header-global-action margin-left="1px" aria-label="Notifications" v-on:click="onGithubClicked">
          <Github20 />
        </cv-header-global-action>
        <div display=flex margin-left="30px"><MyBurger></MyBurger></div>
      </nav>
      
      <MySidebar>
       <ul class="sidebar-panel-nav">
        <li><router-link to="/synchron">Basic concepts</router-link></li>
        <li><router-link to="/reactive">Reactive</router-link></li>
        <li><router-link to="/security">Security</router-link></li>
       </ul>
      </MySidebar>
   </div>
 </template>

<script>
import Github20 from '@carbon/icons-vue/es/logo--github/20';
import MyBurger from '../MyBurger';
import MySidebar from '../MySidebar';


export default {
  name: 'MyMenu',
  components: { Github20,
                MyBurger,
                MySidebar },
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter', '_blank');
    }
  }
};
</script>

<style lang="scss">
.bx--header__nav {
    height: 100%;
    padding-left: 1rem;
    position: relative;
    display: contents !important;
}

@import '../../styles/carbon-utils';

.bx--header__nav {
    height: 100%;
    padding-left: 1rem;
    position: relative;
    display: contents !important;
}

.bx--header__section {
    height: 100%;
    padding-left: 1rem;
    position: relative;
    display: contents !important;
}

// --- Own ---

.landing-info__p {
  color: white;
  padding-right: 2px;
  text-decoration: none;
  font-size: 3rem;
  display: block;
}

.landing-menu__p {
  position: center;
  justify-content: space-between;
}

// --- Burger ---
.main-nav {
  display: flex;
  // justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: #171717;
  background: linear-gradient(45deg,
    rgba(23, 23, 23, 1) 40%,
    rgba(66, 66, 66, 1) 48%,
    rgba(133, 133, 133, 1) 100%
  );
  /*
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  ); */
}

</style>
