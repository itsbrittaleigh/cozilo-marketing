<template>
  <carousel
    :per-page="1"
    :navigation-enabled="true"
    pagination-active-color="#8a8a8a"
  >
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container">
          <img src="../assets/images/mockups/cozilo_landingscreen.jpg" class="screen">
        </div>
      </div>
      <div class="prop">
        <p class="large color-lightblue">Easy-to-Navigate Interface</p>
        <p>
          Take high-quality photos of your goods & post them directly on Cozilo for
          thousands of other businesses to see.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container">
          <img src="../assets/images/mockups/cozilo_landingscreen.jpg" class="screen">
        </div>
      </div>
      <div class="prop">
        <p class="large color-orange">Customizable Price Setting</p>
        <p>
          With Cozilo, transparently set your pricing levels: wholesale, volume, or
          individual goods.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container">
          <img src="../assets/images/mockups/cozilo_landingscreen.jpg" class="screen">
        </div>
      </div>
      <div class="prop">
        <p class="large color-green">Safe & Reliable Transactions</p>
        <p>
          With a multi-step verification process for all Cozilo users, every transaction is
          secure.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container">
          <img src="../assets/images/mockups/cozilo_landingscreen.jpg" class="screen">
        </div>
      </div>
      <div class="prop">
        <p class="large color-lightblue">Advertise Your Company</p>
        <p>
          Customize your profile, connect directly with other users & advertise your business
          with Cozilo.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container">
          <img src="../assets/images/mockups/cozilo_landingscreen.jpg" class="screen">
        </div>
      </div>
      <div class="prop">
        <p class="large color-orange">Simple & Quick Shipping</p>
        <p>
          Cozilo offers affordable & efficient freight shipping assistance to ensure quality
          delivery.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container">
          <img src="../assets/images/mockups/cozilo_landingscreen.jpg" class="screen">
        </div>
      </div>
      <div class="prop">
        <p class="large color-green">Pay Your Own Way</p>
        <p>
          The Cozilo app accepts ACH, Apple and Google Pay, as well as all major credit cards.
        </p>
      </div>
    </slide>
  </carousel>
</template>

<script>
export default {
  name: 'AppMarkupCarousel',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
.VueCarousel {
  .VueCarousel-dot-container {
    position: absolute;
    top: 490px;
    left: 0;
    width: 100%;
  }
  .VueCarousel-dot-button {
    border: 1px solid $lightgray !important;
  }
  .VueCarousel-navigation-button {
    padding: 0 !important;
    margin: 0 !important;
    color: #414142 !important;
    top: 245px !important;
  }
  .VueCarousel-navigation--disabled {
    opacity: 0 !important;
  }
  .VueCarousel-slide {
    position: relative;
  }
  .VueCarousel-dot {
    margin-top: 0 !important;
  }
  .mockup {
    top: 0;
    margin-top: -50px;
  }
  .prop {
    padding-top: 530px;
    p {
      text-align: center;
    }
  }
}
</style>

