<template>
  <div
    class="bx--grid bx--grid--full-width landing-page"
    style="padding-left: 0rem; padding-right: 0rem;"
  >
    <!-- Header -->
    <div
      class="bx--row landing-page__banner"
      style="padding-top: 4rem;padding-bottom: 3rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col-lg-16">
        <h1
          class="landing-page__heading"
          style="font-size:2,5rem;line-height: normal;"
        > Basic Concepts</h1>
        <p class="landing-page__p">
        Learn how to start developing and operating simple Cloud-Native Applications
        <br>
        <cv-button
            style="padding-right: 12px;font-size: 20px;margin-right: 20px;"
            v-on:click="onGetStartedClicked"
          >Get Started</cv-button>
          <cv-button
            style="padding-right: 12px;font-size: 20px;margin-top:20px"
            v-on:click="onGithubClicked"
            kind="tertiary"
          >Open Repo</cv-button>
        </p>
      </div>
    </div>

    <!-- What is ... -->
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
              >What's in the 'Basic Concepts' part?</h1>
              <p
                class="landing-page__p"
              >We demonstrate how to develop complete enterprise applications with Java and MicroProfile and how to operate them with Kubernetes, RedHat OpenShift and Istio.<br>As example we use a simple application that displays and manages articles.</p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img
                class="landing-page__illo"
                src="../../assets/web-app.png"
                style="border:1px solid #ddd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Technologies -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <img class="landing-page__illo" src="../../assets/logos.png" />
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Key Technologies</h1>
              <p
                class="landing-page__p"
              >This subproject uses the following technologies:</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link style="font-size: inherit;" href="https://quarkus.io/">Quarkus</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link style="font-size: inherit;" href="https://openliberty.io/">Open Liberty</cv-link> /
                    <cv-link
                      style="font-size: inherit;"
                      href="https://jakarta.ee/"
                    >Eclipse JakartaEE</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://microprofile.io/"
                    >Eclipse MicroProfile</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://www.eclipse.org/openj9//"
                    >Eclipse OpenJ9</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link style="font-size: inherit;" href="https://kubernetes.io/">Kubernetes</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link style="font-size: inherit;" href="https://www.okd.io">Open Shift</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link style="font-size: inherit;" href="https://istio.io/">Istio</cv-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Services are based on Open Source -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 4rem;padding-bottom: 3rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >Core Services are based on Open Source</h1>
              <p
                class="landing-page__p"
              >The core components and platforms used in the sample application are available under open source licenses. Additionally the Cloud Native Starter project is available under the Apache license.</p>
              <p
                class="landing-page__p"
              >The components which are not available as open source, are only optional and can be replaced with other implementations.</p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img
                class="landing-page__illo"
                src="../../assets/architecture.jpg"
                style="border:1px solid #ddd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Run Everywhere -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <img class="landing-page__illo" src="../../assets/platforms.png" />
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Run Everywhere</h1>
              <p
                class="landing-page__p"
              >Cloud Native Starter can be run on any Kubernetes implementation without vendor lock-in.</p>
              <p
                class="landing-page__p"
              >Documentation and scripts are provided to deploy the sample application to the following environments:</p>

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
          </div>
        </div>
      </div>
    </div>
    
    <!-- Easy First Time Experience -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 2rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >Easy First Time Experience</h1>
              <p
                class="landing-page__p"
              >To minimize the time to get productive, several scripts are provided which make the setup as easy as possible.</p>
              <p
                class="landing-page__p"
              >Since finding the URLs of all services and tools can be challenging, a script displays all relevant endpoints.</p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img
                class="landing-page__illo"
                src="../../assets/urls.jpg"
                style="border:1px solid #ddd"
              />
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
              >Multiple roads lead to Rome. Choose yourself how you prefer to learn more about Cloud Native Starter.</p>

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
                      to="/workshops"
                    >Get your hands dirty with workshops</router-link>
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
   
    <!-- Footer -->
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
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  created() {},
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter', '_blank');
    },
    onGetStartedClicked() {
      this.$router.push('get-started');
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
