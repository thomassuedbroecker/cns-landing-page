<template>   
   
   <div
      class="bx--row landing-page__r2"
      style="background-color:c7c1c6; padding-top: 1rem; padding-bottom: 0rem;padding-left: 2rem; padding-right: 2rem;"
    >
    <!-- c7c1c6 or f0f5f6-->
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
</template>

<script>
export default {
  name: 'MyFooter'
};
</script>

<style lang="scss">
@import '../../styles/carbon-utils';

ol,

.landing-page__r2 {
  margin-top: rem(-40px);
}

</style>