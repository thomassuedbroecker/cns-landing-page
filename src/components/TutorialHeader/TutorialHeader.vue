<template>
  <cv-header aria-label="Carbon tutorial">
    <cv-skip-to-content href="#main-content"
      >Skip to content</cv-skip-to-content
    >

    <cv-header-name to="/" prefix="">Cloud Native Starter</cv-header-name>

    <cv-header-nav aria-label="Carbon tutorial nav">
      <cv-header-menu-item to="/repos">Get Started</cv-header-menu-item>
    </cv-header-nav>

     <cv-header-nav aria-label="Carbon tutorial nav">
      <cv-header-menu-item to="/repos">Capabilities</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="Carbon tutorial nav">
      <cv-header-menu-item to="/repos">Videos</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="Carbon tutorial nav">
      <cv-header-menu-item to="/repos">Blogs</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="Carbon tutorial nav">
      <cv-header-menu-item to="/repos">Workshops</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="Carbon tutorial nav">
      <cv-header-menu-item to="/repos">About</cv-header-menu-item>
    </cv-header-nav>

    <template slot="header-global">
      <cv-header-global-action aria-label="Notifications" v-on:click="onLoginClicked">
        <Github20 />
      </cv-header-global-action>
      
    </template>
  </cv-header>
</template>

<script>

//import UserAvatar20 from '@carbon/icons-vue/es/user--avatar/20';
//import AppSwitcher20 from '@carbon/icons-vue/es/app-switcher/20';
import Github20 from '@carbon/icons-vue/es/logo--github/20';

export default {
  name: 'TutorialHeader',
  components: { Github20 },
  methods: {
    onLoginClicked() {
      window.open('https://github.com/ibm/cloud-native-starter','_blank');
     
    }
  }
};
</script>

<style lang="scss"></style>
