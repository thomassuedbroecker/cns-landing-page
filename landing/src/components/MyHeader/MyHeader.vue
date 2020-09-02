<template>
  <header role="banner" data-header class="cv-header bx--header" aria-label="label">
    
    <router-link class="cv-header-name bx--header__name router-link-exact-active router-link-active" role="menuitem" style="font-size:14px" to="/">
    <span class="bx--text-truncate--end">Cloud Native Starter</span></router-link>

    <nav class="cv-header-nav bx--header__nav" aria-label="label nav">
      <ul role="menubar" class="bx--header__menu-bar">
        <li class="cv-header-menu-item">      
          <router-link class="bx--header__menu-item" role="menuitem" style="font-size:14px" to="/projects">
          <span class="bx--text-truncate--end">Projects</span></router-link>
        </li>
      </ul>
    </nav>
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
}</style>
