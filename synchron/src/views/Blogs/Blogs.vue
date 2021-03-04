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
        <p class="landing-page__p" style="padding-top: 5px;">
          <cv-button
            style="padding-right: 12px;font-size: 20px;"
            v-on:click="onOverviewClicked"
            kind="tertiary"
          >Read Overview Blog</cv-button>
        </p>
      </div>
    </div>
    
    <!-- MicroProfile -->
    <div
      class="bx--row landing-page__r2"
      style="padding-top: 3rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">MicroProfile</h1>
              <p
                class="landing-page__p"
              >The following blogs cover cloud-native functionality in MicroProfile:</p>

              <p class="landing-page__p">
                <cv-list style="list-style: black important!;">
                  <cv-list-item style="font-size: inherit;list-style: black;">
                    <cv-link
                      style="font-size: inherit;list-style: black;"
                      href="http://heidloff.net/article/how-to-build-and-run-a-hello-world-java-microservice/"
                    >How to build and run a Hello World Java Microservice</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/dockerizing-container-java-microprofile"
                    >Dockerizing Java MicroProfile Applications</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/resiliency-microservice-microprofile-java-istio"
                    >Developing resilient Microservices with Istio and MicroProfile</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/rest-apis-microprofile-javaee-jaxrs"
                    >Implementing and documenting REST APIs with JavaEE</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/invoke-rest-apis-java-microprofile-microservice"
                    >Invoking REST APIs from Java Microservices</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/prometheus-metrics-microprofile-microservices-istio/"
                    >Prometheus Metrics for MicroProfile Microservices in Istio</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/implementing-health-checks-microprofile-istio"
                    >Implementing Health Checks with MicroProfile and Istio</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/configuring-java-microservices-microprofile-kubernetes/"
                    >Configuring Microservices with MicroProfile and Kubernetes</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/persistence-java-microservices-kubernetes-jpa/"
                    >Persistence for Java Microservices in Kubernetes via JPA</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/quarkus-javaee-microprofile-kubernetes"
                    >Using Quarkus to run Java Apps on Kubernetes</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/debugging-microservices-kubernetes"
                    >Debugging Microservices running in Kubernetes</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/authenticating-web-users-openid-connect-jwt/"
                    >Authenticating Web Users with OpenID and JWT</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/authorization-microservices-java-microprofile/"
                    >Authorization in Microservices with MicroProfile</cv-link>
                  </cv-list-item>
                </cv-list>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img class="landing-page__illo" src="../../assets/microprofile.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Kubernetes and Istio -->
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
              >The following blogs cover cloud-native functionality in Kubernetes and Istio:</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://haralduebele.github.io/2019/03/11/managing-microservices-traffic-with-istio/"
                    >Managing Microservices Traffic with Istio</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/sample-app-manage-microservices-traffic-istio"
                    >Web Application to demo Traffic Management with Istio</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/setup-local-development-kubernetes-istio"
                    >Setup of a Local Kubernetes and Istio Dev Environment</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://haralduebele.github.io/2019/04/04/moving-from-minikube-to-ibm-cloud-kubernetes-service/"
                    >Moving from Minikube to IBM Cloud Kubernetes Service</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/how-to-develop-your-first-cloud-native-applications-with-java/"
                    >Recorded demos: Traffic management, resiliency, authorization, logging</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/deploying-microprofile-microservices-tekton/"
                    >Deploying MicroProfile Microservices with Tekton</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://haralduebele.github.io/2019/04/08/whats-going-on-in-my-cluster/"
                    >Distributed logging with LogDNA and Monitoring with Sysdig</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/authentication-authorization-openid-connect-istio"
                    >Authorization in Cloud-Native Applications via OpenID and Istio</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://developer.ibm.com/technologies/java/articles/deploy-reactive-quarkus-microservices-on-ibm-cloud-kubernetes-service/"
                    >Build more efficient applications with reactive Java technologies</cv-link>
                  </cv-list-item>  
                </cv-list>
              </p>
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <img class="landing-page__illo" src="../../assets/kubeistio.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Red Hat OpenShift -->
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
              >The following blogs cover cloud-native functionality in OpenShift:</p>
              <p class="landing-page__p">
                <cv-list>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/setup-cloud-native-sample-app-minishift/"
                    >Setting up a cloud-native Sample App on Minishift in an Hour</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://haralduebele.github.io/2019/07/03/deploying-the-cloud-native-starter-microservices-on-minishift/"
                    >Deploying the Cloud Native Starter microservices on Minishift</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="https://haralduebele.github.io/2019/07/10/deploying-the-cloud-native-starter-example-on-red-hat-openshift-on-the-ibm-cloud/"
                    >Deploying on Red Hat OpenShift on the IBM Cloud</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/source-to-image-builder-open-liberty-openshift/"
                    >Source to Image Builder for Open Liberty Apps on OpenShift</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/how-to-develop-open-liberty-microservices-openshift/"
                    >How to develop Open Liberty Microservices on OpenShift</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/deploying-open-liberty-microservices-openshift/"
                    >Deploying Open Liberty Microservices to OpenShift</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    <cv-link
                      style="font-size: inherit;"
                      href="http://heidloff.net/article/accessing-private-gitlab-repositories-from-openshift/"
                    >Accessing private GitLab Repositories from OpenShift</cv-link>
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
  name: 'Blogs',
  created() {},
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter', '_blank');
    },
    onGetStartedClicked() {
      this.$router.push('get-started');
    },
    onOverviewClicked() {
      window.open(
        'http://heidloff.net/article/example-java-app-cloud-kubernetes',
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
