<template>
  <header role="banner" data-header class="cv-header bx--header" aria-label="label">
    
    <!-- Header -->
    <router-link class="cv-header-name bx--header__name router-link-exact-active router-link-active" role="menuitem" style="font-size:14px" to="/home">
    <span class="bx--text-truncate--end"></span>Cloud Native Starter</router-link>

    <!-- Home Cloud Native Starter -->
    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/">
          <span class="bx--text-truncate--end">First Cloud-Native Application</span></router-link>
        </li>
      </ul>
    </nav>

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
   
    <div class="bx--header__global">
        <cv-header-global-action aria-label="Notifications" v-on:click="onGithubClicked">
          <Github20 />
        </cv-header-global-action>
    </div>
   
  </header>
</template>

<script>
import Github20 from '@carbon/icons-vue/es/logo--github/20';

export default {
  name: 'MyHeader',
  components: { Github20 },
  methods: {
    onGithubClicked() {
      window.open('https://github.com/IBM/cloud-native-starter/blob/master/README.md', '_blank');
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
}</style>