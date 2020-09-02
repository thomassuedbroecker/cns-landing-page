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
        <h1
          class="landing-page__heading"
          style="font-size:3rem;line-height: normal;"
        >Get Started - Set up the Sample Application</h1>
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
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">1. Clone the Repo</h1>
              <p class="landing-page__p">First things first. Clone the repo:</p>
              <cv-code-snippet>
$ git clone https://github.com/IBM/cloud-native-starter.git
$ cd cloud-native-starter
$ ROOT_FOLDER=$(pwd)
              </cv-code-snippet>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"></div>
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
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >2. Set up a Kubernetes Cluster</h1>
              <p
                class="landing-page__p"
              >The sample application runs on any Kubernetes cluster. However the easiest way to get started it to use Minikube which the instructions on this page will cover.</p>
              <p
                class="landing-page__p"
              >In order to set up Minikube and Istio locally, follow the steps in the documentation.</p>
              <p class="landing-page__p" style="padding-top: 15px;">
                <cv-button
                  style="padding-right: 12px;font-size: 20px;"
                  v-on:click="onSetupMinikubeClicked"
                >Set up Minikube</cv-button>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <p
                class="landing-page__p"
              >Alternatively there are instructions and scripts for the following environments:</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/IKSDeployment.md"
                    >IBM Cloud Kubernetes Service</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/MinishiftDeployment.md"
                    >Minishift</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/OpenShiftIKSDeployment.md"
                    >Red Hat Open Shift on IBM Cloud</cv-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">3. Install Tools</h1>
              <p
                class="landing-page__p"
              >In order to deploy the sample application, you need to install Docker Desktop, if you haven't done this yet.</p>
              <p class="landing-page__p" style="padding-top: 5px;">
                <cv-button
                  style="padding-right: 12px;font-size: 20px;"
                  v-on:click="onInstallDockerClicked"
                  kind="tertiary"
                >Install Docker</cv-button>
              </p>
              <p
                class="landing-page__p"
              >Additionally the following command line interfaces (CLIs) must be installed:</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
                    >git</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://curl.haxx.se/download.html"
                    >curl</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://kubernetes.io/docs/tasks/tools/install-kubectl/"
                    >kubectl</cv-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <p
                class="landing-page__p"
              >As alternative to setting up all CLIs manually, the following Docker image can be used.</p>
              <p
                class="landing-page__p"
              >For Windows this is the only option so that the follwing 'sh' scripts can be executed.</p>
              <p
                class="landing-page__p"
              >The caveat is that in this case the Istio tools cannot be invoked easily.</p>
              <cv-code-snippet>
$ cd ${ROOT_FOLDER}
$ docker run -v $ROOT_FOLDER/:/cloud-native-starter -it --rm ibmcom/ibm-cloud-developer-tools-amd64
              </cv-code-snippet>
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
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >4. Deploy the Sample Application</h1>
              <p
                class="landing-page__p"
              >Invoke the following commands to set up the core components of the sample application:</p>
              <cv-code-snippet>
$ cd ${ROOT_FOLDER}
$ scripts/check-prerequisites.sh
$ scripts/deploy-articles-java-jee.sh
$ scripts/deploy-web-api-java-jee.sh
$ scripts/deploy-authors-nodejs.sh
$ scripts/deploy-istio-ingress-v1.sh
$ scripts/deploy-web-app-vuejs.sh
$ scripts/show-urls.sh
              </cv-code-snippet>
              <p
                class="landing-page__p"
              >To invoke the web application open the URL that is printed out in the last command.</p>
              <p class="landing-page__p">
                To set up more microservices functionality, follow the instructions in the
                <cv-link
                  style="font-size: inherit;"
                  href="https://github.com/ibm/cloud-native-starter#setup"
                >documentation</cv-link>.
              </p>
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

    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
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
  name: 'GetStarted',
  created() {},
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter', '_blank');
    },
    onSetupMinikubeClicked() {
      window.open(
        'https://github.com/IBM/cloud-native-starter/blob/master/documentation/SetupLocalEnvironment.md',
        '_blank'
      );
    },
    onGetStartedClicked() {
      this.$router.push('get-started');
    },
    onInstallDockerClicked() {
      window.open('https://docs.docker.com/install/', '_blank');
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

.cv-feedback-button  {
 display:none }
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
