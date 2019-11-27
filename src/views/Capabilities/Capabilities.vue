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
        <h1 class="landing-page__heading" style="font-size:3rem;line-height: normal;" >Capabilities and Cloud-Native Functionality</h1>
      
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
              >Java Containers</h1>
              <p
                class="landing-page__p"
              >Cloud Native Starter demonstrates how to containerize microservices which are run on Quarkus and Open Liberty.</p>
               <p class="landing-page__p" style="padding-top: 5px;">
                
                <cv-button style="padding-right: 12px;font-size: 20px;" v-on:click="onContainerClicked" kind="tertiary">Learn More</cv-button>
              </p>
              
            </div>
            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              
              <img
                class="landing-page__illo"
                src="../../assets/containers.png"
                style="border:1px solid #ddd"
              />
              
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
              
              <img
                class="landing-page__illo"
                src="../../assets/rest.png"
                alt="Carbon illustration"
              />
             
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">REST APIs</h1>
              <p class="landing-page__p">
                The sample shows how to expose and consume REST APIs with MicroProfile.
              </p>
              <cv-button style="padding-right: 12px;font-size: 20px;" v-on:click="onRestClicked" kind="tertiary">Learn More</cv-button>
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
            <div class="bx--col-md-4 bx--col-lg-7">
               <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Traffic Routing</h1>
              <p class="landing-page__p">
                The project shows how traffic between different versions of services can be split with Istio.
              </p>
              <cv-button style="padding-right: 12px;font-size: 20px;" v-on:click="onTrafficClicked" kind="tertiary">Learn More</cv-button>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
             

              <img
                class="landing-page__illo"
                src="../../assets/traffic-management-2.png"
                alt="Carbon illustration"
              />
             
              <p class="landing-page__p"></p>
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
              
              <img
                class="landing-page__illo"
                src="../../assets/resiliency.png"
                alt="Carbon illustration"
              />
             
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">Resiliency</h1>
              <p class="landing-page__p">
                The sample shows how to develop Java microservices with MicroProfile so that application stay responsive.
              </p>
              <cv-button style="padding-right: 12px;font-size: 20px;" v-on:click="onResiliencyClicked" kind="tertiary">Learn More</cv-button>
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
            <div class="bx--col-md-4 bx--col-lg-7">
               <h1 class="landing-page__subheading" style="font-size: 1.7rem;">More Capabilities</h1>
              <p class="landing-page__p">
                Cloud Native Starter demonstrates several other cloud-native features:
              </p>
              <cv-list>
                
                  <cv-list-item>
                    -
                    <cv-link style="font-size: 20px;" href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoDistributedLoggingMonitoring.md">Distributed Logging</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    -
                    <cv-link style="font-size: 20px;" href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoHealthCheck.md">Health Checks</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    -
                    <cv-link
                      style="font-size: 20px;"
                      href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoConfiguration.md"
                    >Configuration</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    -
                    <cv-link
                      style="font-size: 20px;"
                      href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoMetrics.md"
                    >Metrics</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    -
                    <cv-link
                      style="font-size: 20px;"
                      href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoAuthentication.md"
                    >Authentication and Authorization</cv-link>
                  </cv-list-item>
                  <cv-list-item>
                    -
                    <cv-link
                      style="font-size: 20px;"
                      href="https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoJPA.md"
                    >Persistence</cv-link>
                  </cv-list-item>
                  
                  
                </cv-list>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
             

              <img
                class="landing-page__illo"
                src="../../assets/logging.png"
                alt="Carbon illustration"
              />
             
              <p class="landing-page__p"></p>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div
      class="bx--row landing-page__r2"
      style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;"
    >
      <div class="bx--col bx--no-gutter">
        <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
          <div class="bx--row landing-page__tab-content">
            <div class="bx--col-md-4 bx--col-lg-7">
              <img
                class="landing-page__illo"
                src="../../assets/directory-235562_1280.png"
                alt="Carbon illustration"
              />
              <p class="landing-page__p"></p>
            </div>

            <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
              <h1 class="landing-page__subheading" style="font-size: 1.7rem;">What's next?</h1>
              <p
                class="landing-page__p"
              >Choose yourself how you prefer to learn more about Cloud Native Starter.</p>
            
              <p class="landing-page__p">
                <cv-list>
                  
                  <cv-list-item>
                    - <router-link class="cv-link bx--link" style="font-size:20px" to="/get-started">Set up the sample application</router-link>   
                  </cv-list-item>
                  <cv-list-item>
                    - <router-link class="cv-link bx--link" style="font-size:20px" to="/talks">Watch recorded talks</router-link>   
                  </cv-list-item>
                  <cv-list-item>
                    - <router-link class="cv-link bx--link" style="font-size:20px" to="/blogs">Read blogs</router-link>   
                  </cv-list-item>
                  <cv-list-item>
                    - <router-link class="cv-link bx--link" style="font-size:20px" to="/get-started">Get your hands dirty with workshops</router-link>   
                  </cv-list-item>
                  <cv-list-item>
                    - <router-link class="cv-link bx--link" style="font-size:20px" to="/get-started">Contact the Cloud Native Starter developers</router-link>   
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
  name: 'Capabilities',
  created() {
  },
  methods: {
    onGithubClicked() {
      window.open('https://github.com/ibm/cloud-native-starter','_blank');
    },
    onGetStartedClicked() {
      this.$router.push("get-started");
    },
    onContainerClicked () {
      window.open('https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoJavaImage.md','_blank');
    }
    ,
    onRestClicked () {
      window.open('https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoConsumeRESTAPIs.md','_blank');
    },
    onTrafficClicked () {
      window.open('https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoTrafficRouting.md','_blank');
    },
    onResiliencyClicked () {
      window.open('https://github.com/IBM/cloud-native-starter/blob/master/documentation/DemoResiliency.md','_blank');
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
