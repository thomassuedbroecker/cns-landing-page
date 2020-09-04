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
          style="font-size:3rem;line-height: normal;"
        >Blogs and Articles</h1>
      </div>
    </div>
    
    <!-- Reactive programming -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Reactive programming</h1>
              <p
                class="landing-page__p"
              >The following blogs cover serveral topics of reactive programming:</p>

              <p class="landing-page__p">
                <cv-list style="list-style: black important!;">
                  <cv-list-item style="font-size: inherit;list-style: black;">
                    <cv-link
                      style="font-size: inherit;list-style: black;"
                      href="http://heidloff.net/article-development-reactive-applications-quarkus/"
                    >Development of Reactive Applications with Quarkus</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/accessing-apache-kafka-from-quarkus/"
                    >Accessing Apache Kafka from Quarkus</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/accessing-postgresql-from-quarkus/"
                    >Accessing PostgreSQL in Kubernetes from Quarkus</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/reactive-messaging-examples-quarkus/"
                    >Reactive Messaging Examples for Quarkus</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/developing-reactive-rest-apis-with-quarkus/"
                    >Developing reactive REST APIs with Quarkus</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/invoking-rest-apis-asynchronously-with-quarkus/"
                    >Invoking REST APIs asynchronously with Quarkus</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/comparing-synchronous-asynchronous-access-postgresql/"
                    >Comparing synchronous and asynchronous Access to Postgres</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/openj9-jvm-for-quarkus-applications/"
                    >Using the OpenJ9 JVM for Quarkus Applications</cv-link>
                  </cv-list-item>
              </cv-list>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img class="landing-page__illo" src="../../assets/blogs-reactive.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Kubernetes -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Kubernetes and Istio</h1>
              <p
                class="landing-page__p"
              >The following blogs deployment in Kubernetes:</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://suedbroecker.net/2020/02/03/deploy-the-reactive-cloud-native-starter-example-to-ibm-cloud/"
                    >Deployment to the IBM Cloud Kubernetes Service</cv-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img class="landing-page__illo" src="../../assets/blogs-kube.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OpenShift -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Red Hat OpenShift</h1>
              <p
                class="landing-page__p"
              >The following blogs cover the deployment in OpenShift:</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://haralduebele.blog/2020/02/03/cloud-native-and-reactive-microservices-on-red-hat-openshift-4/"
                    >Deployment to Red Hat OpenShift</cv-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img class="landing-page__illo" src="../../assets/openshift.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- What's next? -->
    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
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
  name: 'Blogs',
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
