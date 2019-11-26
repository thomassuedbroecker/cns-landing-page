<template>

  <cv-header aria-label="label">
    <cv-skip-to-content href="#main-content"
      >Skip to content</cv-skip-to-content
    >

    <cv-header-name to="/" prefix="">Cloud Native Starter</cv-header-name>

    <cv-header-nav aria-label="label nav">
      <cv-header-menu-item to="/get-started">Get Started</cv-header-menu-item>
    </cv-header-nav>

     <cv-header-nav aria-label="label nav">
      <cv-header-menu-item to="/repos">Capabilities</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="label nav">
      <cv-header-menu-item to="/repos">Videos</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="label nav">
      <cv-header-menu-item to="/repos">Blogs</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="label nav">
      <cv-header-menu-item to="/repos">Workshops</cv-header-menu-item>
    </cv-header-nav>

    <cv-header-nav aria-label="label nav">
      <cv-header-menu-item to="/repos">About</cv-header-menu-item>
    </cv-header-nav>

    <template slot="header-global">
      <cv-header-global-action aria-label="Notifications" v-on:click="onGithubClicked">
        <Github20 />
      </cv-header-global-action>
      
    </template>
  </cv-header>
</template>

<script>

import Github20 from '@carbon/icons-vue/es/logo--github/20';

export default {
  name: 'Header',
  components: { Github20 },
  created() {
    console.debug("lkj")
  },
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter','_blank');
     
    }
  }
};
</script>

<style lang="scss"></style>
