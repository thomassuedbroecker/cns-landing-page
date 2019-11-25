<template>
  <div class="bx--grid bx--grid--full-width landing-page" style="padding-left: 0rem; padding-right: 0rem;">
    <div class="bx--row landing-page__banner" style="padding-top: 3rem;padding-bottom: 3rem;padding-left: 2rem; padding-right: 2rem;">
      <div class="bx--col-lg-16">
        
        <h1 class="landing-page__heading">Learn how to develop and operate Microservices</h1>
      </div>
    </div>

    <div class="bx--row landing-page__r2" style="padding-top: 2rem;padding-bottom: 2rem;padding-left: 2rem; padding-right: 2rem;">
      <div class="bx--col bx--no-gutter">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-md-4 bx--col-lg-7">
                  <h2 class="landing-page__subheading">What is Cloud Native Starter?</h2>
                  <p class="landing-page__p">
                    Cloud Native Starter is an open source project that demonstrates how to develop full end-to-end enterprise applications with JakartaEE and Eclipse MicroProfile and how to operate it with Kubernetes and Istio.
                  </p>
                  <p class="landing-page__p">
                  <cv-button style="padding-right: 12px;">Get Started</cv-button>
                  </p>
                </div>
                <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                  <img
                    class="landing-page__illo"
                    src="../../assets/architecture-2.png"
                    alt="Carbon illustration"
                    
                  />
                </div>
              </div>
            </div>
      </div>
    </div>

    <div class="bx--row landing-page__r2" style="background-color:#f3f3f3;padding-top: 1rem;padding-bottom: 1rem;padding-left: 2rem; padding-right: 2rem;">
      <div class="bx--col bx--no-gutter">
            <div class="bx--grid bx--grid--no-gutter bx--grid--full-width">
              <div class="bx--row landing-page__tab-content">
                <div class="bx--col-md-4  bx--col-lg-7">
                  <img
                    class="landing-page__illo"
                    src="../../assets/logos.png"
                    alt="Carbon illustration"
                    
                  />
                  <p class="landing-page__p">
                  
                  </p>
                </div>
                
                <div class="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                  <h2 class="landing-page__subheading">What Key Technologies are used?</h2>
                  <p class="landing-page__p">
                    <cv-list >
  <cv-list-item>-  <cv-link style="font-size: inherit;"
  href="https://quarkus.io/" 
  >
  Quarkus
</cv-link> 
  </cv-list-item>
  <cv-list-item>
  -  <cv-link style="font-size: inherit;"
  href="https://openliberty.io/" 
  >
  Open Liberty
</cv-link> / <cv-link style="font-size: inherit;"
  href="https://jakarta.ee/" 
  >
  Eclipse JakartaEE
</cv-link> 
  </cv-list-item>
   <cv-list-item>- <cv-link style="font-size: inherit;"
  href="https://microprofile.io/" 
  >
  Eclipse MicroProfile
</cv-link>
  </cv-list-item>
   <cv-list-item>- <cv-link style="font-size: inherit;"
  href="https://kubernetes.io/" 
  >
  Kubernetes
</cv-link>
  </cv-list-item>
  <cv-list-item>- <cv-link style="font-size: inherit;"
  href="https://istio.io/" 
  >
  Istio
</cv-link>
  </cv-list-item>
</cv-list>
                 
                  </p>
                  
                </div>
                
              </div>
            </div>
      </div>
    </div>
  </div>



</template>

<script>
import { InfoSection, InfoCard } from '../../components/InfoSection';
import Globe32 from '@carbon/icons-vue/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-vue/lib/person--favorite/32';
import Application32 from '@carbon/icons-vue/lib/application/32';

export default {
  name: 'LandingPage',
  components: { InfoSection, InfoCard },
  created() {
    // Add icons to this
    Object.assign(this, {
      Globe32,
      PersonFavorite32,
      Application32
    });
  },
  methods: {
    onDiagramClicked() {
      window.open('../../assets/architecture-2.png','_blank');
     
    }
  }
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';
@import './carbon-overrides';
@import './mixins';

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
