<template>
  <header role="banner" data-header class="cv-header bx--header" aria-label="label">
    
    <!-- Home dropdown -->
    
    <div class="dropdown">
     <cv-header-global-action aria-label="Notifications">
         <Menu20 /> 
     </cv-header-global-action>   
     <div class="dropdown-content">
        <p class="bx--item">
          <router-link to="/basic-concepts">
          <span class="bx--text-truncate--end">Basic Concepts</span>
          </router-link>
        </p>
        <hr align="center" />
        <p class="bx--item">
          <router-link to="/reactive">
          <span class="bx--text-truncate--end">Reactive</span>
          </router-link>
        </p>
        <hr align="center" />
        <div class="bx--item">
          <router-link to="/security">
          <span class="bx--text-truncate--end">Security</span>
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Headline -->
    <router-link class="cv-header-name bx--header__name router-link-exact-active router-link-active" style="font-size:16px margin-left:1px padding:0" to="/home">
     <span class="bx--text-truncate--end">Cloud Native Starter</span>
    </router-link>

    <!-- Basic Concepts 
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">      
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/basic-concepts">
          <span class="bx--text-truncate--end">Basic Concepts</span></router-link>
        </li>
      </ul>
    </nav>
    -->

    <!-- Reactive 
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">      
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/reactive">
          <span class="bx--text-truncate--end">Reactive</span></router-link>
        </li>
      </ul>
    </nav>
    -->

    <!-- Security
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
        <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">      
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/security">
          <span class="bx--text-truncate--end">Security</span></router-link>
        </li>
      </ul>
    </nav>
    -->

    <!-- About -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/about">
          <span class="bx--text-truncate--end">About</span></router-link>
        </li>
      </ul>
    </nav>

    <!-- GitHub link -->
    <div class="bx--header__global">
        <cv-header-global-action aria-label="Notifications" v-on:click="onGithubClicked">
          <Github20 />
        </cv-header-global-action>
    </div>
   
  </header>
</template>

<script>
import Github20 from '@carbon/icons-vue/es/logo--github/20';
import Menu20 from '@carbon/icons-vue/es/menu/20';

export default {
  name: 'MyHeader',
  components: { Github20, Menu20 },
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
    //padding-left: 1rem;
    position: relative;
    display: contents !important;
}

// Own

.landing-page__p {
  @include carbon--type-style('productive-heading-03');
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;

  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}

.bx--item {
    height: 100%;
    padding-left: 1rem;
    font-size: 16px; 
    margin-top: 5px;
    margin-bottom: 5px;
    position: relative;
    display: contents !important;
}

// Drop down

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f3f3f3;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
  background-color: #ffffff;
}
</style>
