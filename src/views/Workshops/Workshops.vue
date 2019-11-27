<template>
  <div
    class="bx--grid bx--grid--full-width landing-page"
    style="padding-left: 0rem; padding-right: 0rem;"
  >
    <div
      class="bx--row landing-page__banner"
      style="padding-top: 4rem;padding-bottom: 4rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col-lg-16">
        <h1 class="landing-page__heading" style="font-size:3rem;line-height: normal;" >Workshops</h1>
      
      </div>

    </div>

    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >to be done</h1>
              <p
                class="landing-page__p"
              >to be done</p>
              
              
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <!--
              <img
                class="landing-page__illo"
                src="../../assets/a.png"
                style="border:1px solid #ddd"
              />
              -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <!--
              <img
                class="landing-page__illo"
                src="../../assets/logos.png"
                alt="Carbon illustration"
              />
              -->
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">to be done</h1>
              <p class="landing-page__p">
                to be done
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  



<div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-8 bx--col-lg-14">
           <cv-link style="font-size: inherit;" href="https://github.com/ibm/cloud-native-starter">Repo on GitHub</cv-link>
            |
           <cv-link style="font-size: inherit;" href="https://www.ibm.com/cloud/container-service/">IBM Privacy Statement</cv-link>
 |
           <cv-link style="font-size: inherit;" href="https://www.ibm.com/legal/us/en/">Terms of Use</cv-link>
 |
           <cv-link style="font-size: inherit;" href="https://www.ibm.com/legal">Imprint / Impressum</cv-link>
          
            </div>
          </div>
        </div>
      </div>
    </div>








  </div>

  
</template>

<script>

export default {
  name: 'Workshops',
  created() {
  },
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter','_blank');
    },
    onGetStartedClicked() {
      this.$router.push("get-started");
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import './../carbon-overrides';
@import './../mixins';

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
