<template>
  <div
    class="bx--grid bx--grid--full-width landing-page"
    style="padding-left: 0rem; padding-right: 0rem;"
  >
    <!-- Header -->
    <div
      class="bx--row landing-page__banner"
      style="padding-top: 4rem;padding-bottom: 4rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col-lg-16">
        <h1 class="landing-page__heading" style="font-size:3rem;line-height: normal;">Workshops</h1>
      </div>
    </div>

    <!-- Reactive endpoints -->

    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 3rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Reactive Endpoints with Quarkus on OpenShift</h1>
              <p class="landing-page__p">In this workshop you'll learn how to implement reactive endpoints with Java, Quarkus and MicroProfile. An end-to-end sample application will be deployed to Red Hat OpenShift.</p>
              <p class="landing-page__p" style="padding-top: 15px;">
                <cv-button
                  style="padding-right: 12px;font-size: 20px;"
                  v-on:click="onWorkshop1Clicked"
                  kind="tertiary"
                >Open Workshop</cv-button>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img
                class="landing-page__illo"
                src="../../assets/workshop-endpoints.png"
                style="border:1px solid #ddd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reactive Messaging -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <img
                class="landing-page__illo"
                src="../../assets/workshop-reactive-messaging.png"
              />
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Reactive messaging</h1>
              <p class="landing-page__p">In this workshop you'll learn how to implement reactive messaging functionality with Java, Quarkus, Kafka, Vert.x and MicroProfile. An end-to-end sample application will be deployed to Red Hat OpenShift.</p>
              <p class="landing-page__p" style="padding-top: 15px;">
                <cv-button
                  style="padding-right: 12px;font-size: 20px;"
                  v-on:click="onWorkshop2Clicked"
                  kind="tertiary"
                >Open Workshop</cv-button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 3rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Reactive Endpoints - YouTube playlist</h1>
              <p class="landing-page__p">This playlist contains videos related to the hands-on workshop: Reactive Endpoints with Quarkus on Openshift.</p>
              <p class="landing-page__p">  
                 <cv-list>
                  <cv-list-item>
                    Setup the Sample Application
                  </cv-list-item>
                  <cv-list-item>
                    Develop Reactive Endpoints
                  </cv-list-item>
                  <cv-list-item>
                    Invoke Endpoints Reactively
                  </cv-list-item>
                  <cv-list-item>
                    Deploy the Microservice to OpenShift
                  </cv-list-item>
                  <cv-list-item>
                    Use of Distributed Logging
                  </cv-list-item>
                  <cv-list-item>
                    Setup the Reactive Example Application with one bash-script on OpenShift in IBM Cloud
                  </cv-list-item>
                </cv-list>
              </p> 
              <p class="landing-page__p" style="padding-top: 15px;">
                <cv-button
                  style="padding-right: 12px;font-size: 20px;"
                  v-on:click="onYouTubePlaylistClicked"
                  kind="tertiary"
                >Open YouTube Playlist</cv-button>
              </p>
            </div>
            <div class="bx--col-md-4 bx--col-lg-7">
              <a href="https://www.youtube.com/playlist?list=PLUte4WEyMEjVjm9ZE5Gp3LKrt78VovkRJ">
                <img class="landing-page__illo" src="../../assets/workshop-youtube-playlist.png" />
              </a>
              <p class="landing-page__p"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What's next? -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <img class="landing-page__illo" src="../../assets/next.png" />
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">What's next?</h1>
              <p
                class="landing-page__p"
              >Choose how you prefer to learn more about Cloud Native Starter.</p>

              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/get-started"
                    >Set up the sample application</router-link>
                  </cv-list-item>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/capabilities"
                    >Learn about the capabilities</router-link>
                  </cv-list-item>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/talks"
                    >Watch recorded talks</router-link>
                  </cv-list-item>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/blogs"
                    >Read blogs</router-link>
                  </cv-list-item>
                  <cv-list-item>
                    <router-link
                      class="cv-link bx--link"
                      style="font-size:20px"
                      to="/about"
                    >Contact the Cloud Native Starter developers</router-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer 
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
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
    -->
  </div>
 
</template>

<script>
export default {
  name: 'Workshops',
  created() {},
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter/reactive', '_blank');
    },
    onGetStartedClicked() {
      this.$router.push('get-started');
    },
    onWorkshop1Clicked() {
      window.open('https://ibm-developer.gitbook.io/reactive-endpoints-with-quarkus-on-openshift/', '_blank');
    },
    onWorkshop2Clicked() {
      window.open('https://app.gitbook.com/@ibm-developer/s/reactive-messaging-with-quarkus-on-openshift/', '_blank');
    },
    onYouTubePlaylistClicked() {
      window.open('https://www.youtube.com/playlist?list=PLUte4WEyMEjVjm9ZE5Gp3LKrt78VovkRJ', '_blank');
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
