<template>
  <!-- Page header -->
  <div
    class="bx--grid bx--grid--full-width landing-page"
    style="padding-left: 0rem; padding-right: 0rem;"
  >
    <div
      class="bx--row landing-page__banner"
      style="padding-top: 4rem;padding-bottom: 3rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col-lg-16">
        <h1
          class="landing-page__heading"
          style="font-size:2,5rem;line-height: normal;"
        >Learn how to develop and operate Cloud-Native applications</h1>
      </div>
    </div>
    
    <!-- What is Cloud Native Starter? -->
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
              >What's in Cloud Native Starter?</h1>
              <p
                class="landing-page__p"
              >Cloud Native Starter contains three parts:</p>
              <p class="landing-page__p">
              <p class="landing-page__p" style="padding-top: 5px;">
                <cv-button
                  style="padding-right: 12px;font-size: 18px;margin-right: 20px;"
                  v-on:click="onCloudNativeClicked"
                >Basic Concepts</cv-button>
                <cv-button
                  style="padding-right: 12px;font-size: 18px;margin-right: 20px;"
                  v-on:click="onReactiveClicked"
                  kind="tertiary"
                >Reactive</cv-button>
                <cv-button
                  style="padding-right: 12px;font-size: 18px;margin-right: 20px;"
                  v-on:click="onSecurityClicked"
                  kind="tertiary"
                >Security</cv-button>
              </p>
              <p
                class="landing-page__p"
              >The open source project demonstrates how to develop complete enterprise applications with Java, Quarkus, OpenLiberty and MicroProfile and how to operate them with Kubernetes, OpenShift and Istio. It also explains how to implement reactive systems and how to secure applications.</p>       
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img
                class="landing-page__illo"
                src="../../assets/word-cloud-opentechnologies.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Run everywhere -->
    <div
      class="bx--row landing-page__r2"
     style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >Run everywhere</h1>
              <p
                class="landing-page__p"
              >Cloud Native Starter project implements different topics and runs on any Kubernetes implementation without vendor lock-in. The project provides documentation and scripts to deploy the example application to different Kubernetes environments.</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://kubernetes.io/docs/setup/learning-environment/minikube/"
                    >Minikube</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://www.ibm.com/cloud/container-service/"
                    >IBM Cloud Kubernetes Service</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://developers.redhat.com/products/codeready-containers/overview"
                    >Red Hat CodeReady Containers</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://www.ibm.com/cloud/openshift"
                    >Red Hat OpenShift on IBM Cloud</cv-link>
                  </cv-list-item> 
                </cv-list>
              </p>
            </div>
            <div class="bx--col-md-4 bx--col-lg-7">
              <img class="landing-page__illo" src="../../assets/platforms.png" />
              <p class="landing-page__p"></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Easy First Time Experience -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <img class="landing-page__illo" src="../../assets/urls.jpg" />
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
            <h1 class="landing-page__subheading" style="font-size: 1.7rem;"
            >Easy First Time Experience</h1>
              <p class="landing-page__p"
              >To minimize the time to get productive, several scripts are provided which make the setup as easy as possible. Finding the URLs of all services and tools can be challenging. The image on the left-hand side shows for example, how a script displays the relevant endpoints in a subproject.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
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
  name: 'LandingPage',
  created() {},
  methods: {
    onCloudNativeClicked() {
      //this.$router.push('synchron_page');
      window.open('https://cloud-native-starter-synchron-tsuedbro.mybluemix.net/', '_blank');
    },
    onReactiveClicked() {
      //this.$router.push('reactive_page');
      window.open('https://cloud-native-starter-reactive-tsuedbro.mybluemix.net/', '_blank');
    },
    onSecurityClicked() {
      //this.$router.push('security_page');
      window.open('https://cloud-native-starter-security-tsuedbro.mybluemix.net/', '_blank');
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

ol,
ul {
  list-style-type: circle;
  padding-left: 20px;
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
