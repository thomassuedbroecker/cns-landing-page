<template>
  <header role="banner" data-header class="cv-header bx--header" aria-label="label">
    
    <!-- Home Dropdown -->
    <div class="dropdown">
      <cv-header-global-action aria-label="Notifications" v-on:click="onHomeClicked">
          <Home20 />
      </cv-header-global-action>
      <div class="dropdown-content">
        <p class="bx--item">
          <router-link style="font-size:16px color:#ffffff" to="/basic-concepts">
          <span class="bx--text-truncate--end">Basic Concepts</span>
          </router-link>
        </p>
        <hr align="center" />
        <p class="bx--item">
          <router-link role="menuitem" style="font-size:16px" to="/reactive">
          <span class="bx--text-truncate--end">Reactive</span>
          </router-link>
        </p>
        <hr align="center" />
        <p class="bx--item">
          <router-link role="menuitem" style="font-size:16px" to="/security">
          <span class="bx--text-truncate--end">Security</span>
          </router-link>
        </p>
      </div>
   </div>

    <!-- Old Cloud Native Starter Home 
    <router-link class="cv-header-name bx--header__name router-link-exact-active router-link-active" role="menuitem" style="font-size:14px" to="/home">
    <span class="bx--text-truncate--end">Cloud Native Starter</span>
    </router-link>
    -->

    <!-- Security -->
    <router-link class="cv-header-name bx--header__name router-link-exact-active router-link-active" role="menuitem" style="font-size:14px" to="/">
    <span class="bx--header__section">Reactive</span>
    </router-link>
    
    <!-- Get started -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/get-started">
          <span class="bx--text-truncate--end">Get Started</span></router-link>
        </li>
      </ul>
    </nav>

    <!-- Capabilities -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">   
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/capabilities">
          <span class="bx--text-truncate--end">Capabilities</span></router-link>
        </li>
      </ul>
    </nav>

    <!-- Talks -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/talks">
          <span class="bx--text-truncate--end">Talks</span></router-link>
        </li>
      </ul>
    </nav>

    <!-- Blogs -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/blogs">
          <span class="bx--text-truncate--end">Blogs</span></router-link>
        </li>
      </ul>
    </nav>

    <!-- Workshops -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">   
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/workshops">
          <span class="bx--text-truncate--end">Workshops</span></router-link>
        </li>
      </ul>
    </nav>

    <!-- About -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/about">
          <span class="bx--text-truncate--end">About</span></router-link>
        </li>
      </ul>
    </nav>
  
    <!-- GitHubIcon -->
    <div class="bx--header__global">
        <cv-header-global-action aria-label="Notifications" v-on:click="onGithubClicked">
          <Github20 />
        </cv-header-global-action>
    </div>
   
  </header>
</template>

<script>
import Github20 from '@carbon/icons-vue/es/logo--github/20';
import Home20 from '@carbon/icons-vue/es/home/20';

export default {
  name: 'MyHeader',
  components: { Github20, 
                Home20 },
  methods: {
    onGithubClicked() {
      window.open('https://github.com/IBM/cloud-native-starter/blob/master/security/README.md', '_blank');
    },
    onHomeClicked() {
      this.$router.push('home');
    }
  }
};
</script>

<style lang="scss">

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
    background-color: #f3f3f3;
    padding-left: 1rem;
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
}
</style>
