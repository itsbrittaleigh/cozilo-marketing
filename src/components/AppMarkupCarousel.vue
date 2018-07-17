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
          With one simple push of a button, you can take high-quality photos of your
          goods and post them directly on the Cozilo B2B marketplace for thousands of
          other business owners to see.
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
          Cozilo is a business-focused marketplace that allows you to transparently
          set your pricing levels: wholesale, volume, individual goods - whatever your
          business needs.
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
          With our multi-step verification process for all Cozilo business users,
          you can be sure that every transaction is secure before ever even meeting.
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
          Create your customizable profile to connect directly with other buyers,
          sellers, and traders on the Cozilo app and create your own personal B2B
          network to advertise your company.
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
          Cozilo takes all the hassle out of shipping goods by offering fast and
          efficient freight shipping assistance.
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
          The Cozilo app accepts ACH, Cozilo tokens, smart wallets like Apple and
          Google Pay, as well as all major credit cards, including VISA, MasterCard,
          and American Express.
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

