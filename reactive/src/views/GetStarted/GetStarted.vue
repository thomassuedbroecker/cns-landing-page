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
        <h1
          class="landing-page__heading"
          style="font-size:3rem;line-height: normal;"
        >Get Started - Set up the Sample Application</h1>
      </div>
    </div>
    
    <!-- 1. Install Minikube -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">1. Install Minikube</h1>
              <p class="landing-page__p">First install <cv-link
                style="font-size: inherit;"
                href="https://kubernetes.io/docs/tasks/tools/install-minikube/"
              >Minikube</cv-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- 2. Clone the repo -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">2. Get the code</h1>
              <cv-code-snippet>
$ git clone https://github.com/IBM/cloud-native-starter.git
$ cd cloud-native-starter/reactive
$ ROOT_FOLDER=$(pwd)
              </cv-code-snippet>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 3.  Check prerequisites -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >3. Check prerequisites</h1>
              <cv-code-snippet>
$ cd ${ROOT_FOLDER}
$ sh scripts/check-prerequisites.sh
              </cv-code-snippet>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <!-- 4. Start Minikube and deploy Kafka and Postgres -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">4. Start Minikube and deploy Kafka and Postgres</h1>
              <p
                class="landing-page__p"
              >After every step follow the instructions in the output of the commands to check when the components have been started before moving on. It's also recommended to doublecheck whether all components in all namespaces have the 'green' status in the Minikube dashboard ($ minikube dashboard).</p>
              <cv-code-snippet>
$ cd ${ROOT_FOLDER}
$ sh scripts/start-minikube.sh
$ sh scripts/deploy-kafka.sh
$ sh scripts/deploy-postgres.sh
$ sh scripts/deploy-postgres-admin.sh
              </cv-code-snippet>
            </div>
            <div class="bx--col-md-4 bx--col-lg-7">
              <p
                class="landing-page__p"
              >The script 'deploy-kafka.sh' performs the following actions:</p>
              <cv-list-item>
                    1. Create a namespace 'kafka'
              </cv-list-item>
              <cv-list-item>
                    2. Install the Kafka operator 
                    <cv-link
                      style="font-size: inherit;"
                      href="https://strimzi.io/docs/operators/master/using.html"
                    >strimzi-cluster-operator</cv-link>
              </cv-list-item>
              <cv-list-item>
                    3. Deploy the 'my-cluster-entity-operator'
              </cv-list-item>
              <cv-list-item>
                    4. Deploy Kafka (3 pods my-cluster-zookeeper, 3 pods my-cluster-kafka)
              </cv-list-item>
              <p class="landing-page__p">The script 'deploy-postgres.sh' deploys a simple Postgres database which doesn't require a persistent volume.</p>
              <p class="landing-page__p">The script 'deploy-postgres-admin.sh' is optional only and installs the Postgres admin tool 
              <cv-link
                      style="font-size: inherit;"
                      href="https://www.pgadmin.org/"
               >pgAdmin</cv-link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. Deploy Microservices -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1
                class="landing-page__subheading"
                style="font-size: 1.7rem;"
              >5. Deploy Microservices</h1>
              <cv-code-snippet>
$ cd ${ROOT_FOLDER}
$ sh scripts/deploy-articles-reactive-postgres.sh
$ sh scripts/deploy-authors.sh
$ sh scripts/deploy-web-api-reactive.sh
$ sh scripts/deploy-web-app-reactive.sh
$ sh scripts/show-urls.sh
              </cv-code-snippet>
              <p
                class="landing-page__p"
              >Once the web application has been deployed open the URL that is displayed in the output of the last command in a browser. Five articles with author information are displayed.</p>
              <p class="landing-page__p">
                To set up more microservices functionality, follow the instructions in the
                <cv-link
                  style="font-size: inherit;"
                  href="https://github.com/IBM/cloud-native-starter/blob/master/reactive/README.md"
                >documentation</cv-link>.
              </p>
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
      style="padding-top: 3rem;padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
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
