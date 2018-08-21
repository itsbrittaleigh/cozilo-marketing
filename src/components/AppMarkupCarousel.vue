<template>
  <carousel
    :per-page="1"
    :navigation-enabled="true"
    navigation-next-label=">"
    navigation-prev-label="<"
    pagination-active-color="#8a8a8a"
  >
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container bg-lightblue">
          <i class="fas fa-camera fa-6x" style="color: white;"></i>
        </div>
      </div>
      <div class="prop">
        <p class="large color-lightblue">Easy-to-Navigate Interface</p>
        <p>
          Take high-quality photos of your goods & post them directly on
          Cozilo for thousands of other businesses to see.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container bg-orange">
          <i class="fas fa-hand-holding-usd fa-6x" style="color: white;"></i>
        </div>
      </div>
      <div class="prop">
        <p class="large color-orange">Customizable Price Setting</p>
        <p>
          With Cozilo, transparently set your pricing levels: wholesale,
          volume, or individual goods.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container bg-green">
          <i class="fas fa-lock fa-6x" style="color: white;"></i>
        </div>
      </div>
      <div class="prop">
        <p class="large color-green">Safe & Reliable Transactions</p>
        <p>
          With a multi-step verification process for all Cozilo users, every transaction
          is secure.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container bg-lightblue">
          <i class="fas fa-broadcast-tower fa-6x" style="color: white;"></i>
        </div>
      </div>
      <div class="prop">
        <p class="large color-lightblue">Advertise Your Company</p>
        <p>
          Customize your profile, connect directly with other users & advertise your
          business with Cozilo.
        </p>
      </div>
    </slide>
    <slide>
      <div class="mockup">
        <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
        <div class="screen-container bg-orange">
          <i class="fas fa-shipping-fast fa-6x" style="color: white;"></i>
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
        <div class="screen-container bg-green">
          <i class="fas fa-credit-card fa-6x" style="color: white;"></i>
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
    top: 410px;
    left: 0;
    width: 100%;
  }
  .VueCarousel-dot-button {
    border: 1px solid $lightgray !important;
  }
  .VueCarousel-navigation-button {
    padding: 0 !important;
    color: #414142 !important;
    top: 215px !important;
    font-size: 30px;
    &.VueCarousel-navigation-next {
      margin: 0 10px 0 0 !important;
      transform: translateY(-50%) translateX(100%) scaleX(0.6);
    }
    &.VueCarousel-navigation-prev {
      margin: 0 0 0 10px !important;
      transform: translateY(-50%) translateX(-100%) scaleX(0.6);
    }
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
    $screen_width: 385px;
    $screen_height: 530px;
    position: absolute;
    left: 50%;
    width: $screen_width;
    height: $screen_height;
    margin-left: -($screen_width / 2);
    pointer-events: none;
    .screen-container {
      top: 121px;
      left: 105px;
      width: 171px;
      height: 289px;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .prop {
    padding-top: 450px;
    p {
      text-align: center;
      &.large {
        font-weight: bold;
      }
    }
  }
}
</style>

