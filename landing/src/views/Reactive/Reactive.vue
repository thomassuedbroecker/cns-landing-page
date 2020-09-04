<template>
  <!-- Header -->
  <div
    class="bx--grid bx--grid--full-width landing-page"
    style="padding-left: 0rem; padding-right: 0rem;"
  >
    <!-- Reactive -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Reactive Application</h1>
              <p
                class="landing-page__p"
              >Cloud Native Starter explains how to use reactive programming and event based messaging in Quarkus applications and how to run them on Kubernetes and OpenShift.</p>
              <cv-button
                style="padding-right: 12px;font-size: 20px;"
                v-on:click="onReactiveClicked"
                kind="tertiary"
              >Learn More</cv-button>
            </div>
            <div class="bx--col-md-4 bx--col-lg-7">
              <img class="landing-page__illo" src="../../assets/architecture-reactive.png" />
              <p class="landing-page__p"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-8 bx--col-lg-14">
              <cv-link
                style="font-size: inherit;"
                href="https://github.com/ibm/cloud-native-starter"
              >Repo on GitHub</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/privacy/us/en/"
              >IBM Privacy Statement</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/legal/us/en/"
              >Terms of Use</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/legal"
              >Imprint / Impressum</cv-link> |
              <cv-link
                style="font-size: inherit;"
                href="https://www.ibm.com/de-de/about?lnk=flg"
              >Impressum (German)</cv-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  created() {},
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter', '_blank');
    },
    onGetStartedClicked() {
      this.$router.push('get-started');
    },
    /* Navigation to external pages*/
    onSynchronousClicked() {
      window.open(
        'https://cloud-native-starter-synchron-tsuedbro.mybluemix.net/',
        '_blank'
      );
    },
    onSecurityClicked() {
      window.open(
        'https://cloud-native-starter-security-tsuedbro.mybluemix.net/',
        '_blank'
      );
    },
    onReactiveClicked() {
      window.open(
        'https://cloud-native-starter-reactive-tsuedbro.mybluemix.net/',
        '_blank'
      );
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import './../carbon-overrides';
@import './../mixins';

ol,
ul {
  list-style-type: circle;
  padding-left: 20px;
}
.landing-page__illo {
  max-width: 100%;
}

.landing-page__banner {
  padding-top: $spacing-05;
  padding-bottom: $spacing-07 * 4;
  @include landing-page-background;
}

.landing-page__heading {
  @include carbon--type-style('productive-heading-05');
}

.landing-page__r2 {
  margin-top: rem(-40px);
}

.landing-page__tab-content {
  padding-top: $layout-05;
  padding-bottom: $layout-05;
}

.landing-page__subheading {
  @include carbon--type-style('productive-heading-03');
  @include carbon--font-weight('semibold');
}

.landing-page__p {
  @include carbon--type-style('productive-heading-03');
  margin-top: $spacing-06;
  margin-bottom: $spacing-08;

  @include carbon--breakpoint-between((320px + 1), md) {
    max-width: 75%;
  }
}

.landing-page__r3 {
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;
  @include landing-page-background;
}

.landing-page__label {
  @include carbon--type-style('heading-01');
}
</style>
