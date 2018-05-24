<template>
  <base-page>
    <template slot="content">
      <!-- <div class="pagination">
        <i
          v-for="(section, index) in sections"
          :key="index"
        ></i>
      </div> -->
      <section class="hero with-bg-image">
        <img src="../assets/images/covers/home.jpg" alt="" class="background-image">
        <div class="overlay"></div>
        <div class="container">
          <h1>The Cozilo way to</h1>
          <div class="value-props">
            <div class="prop">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
              <p>Buy</p>
            </div>
            <div class="prop">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
              <p>Sell</p>
            </div>
            <div class="prop">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
              <p>Trade</p>
            </div>
          </div>
        </div>
        <a href="#" class="more" v-scroll-to="'#marketplace'">
          Learn more
          <img src="../assets/images/icons/arrow-blue-down.svg" alt="">
        </a>
      </section>
      <section id="marketplace" class="value-section padded-section bg-lightblue">
        <div class="container">
          <div class="text color-white">
            <div class="section-header-icon bg-darkblue">
              <!-- <img src="https://fillmurray.com/50/50" alt=""> -->
            </div>
            <h2>The business only, mobile marketplace</h2>
            <p>
              Interact specifically with <strong>business owners</strong> without the clutter of
              consumer goods. Only approved business become part of the Cozilo ecoystem.
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_signin.jpg" alt="" class="screen">
          </div>
        </div>
      </section>
      <section class="from-to">
        <div class="text text-left bg-wood">
          <div class="wrapper">
            <div class="section-header-icon bg-orange">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
            </div>
            <h2 class="color-orange">From<br>the<br>office<br>cubicle</h2>
            <p class="color-gray">
              <strong>Buy</strong> office furniture your business needs to grow.
              <strong>Sell</strong> supplies to save space.
            </p>
          </div>
        </div>
        <div class="mockup with-screen-scroll small">
          <img src="../assets/images/iphone.png" alt="" class="phone-shell">
          <img src="../assets/images/mockups/cozilo_mainpage.jpg" alt="" class="screen long">
        </div>
        <div class="text text-right bg-cement">
          <div class="wrapper">
            <div class="section-header-icon bg-offwhite">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
            </div>
            <h2 class="color-white">To<br>the<br>factory<br>floor<br></h2>
            <p class="color-white">
              <strong>Trade</strong> machinery or equipment for nearly any industry.
              <strong>Hire</strong> extra help to meet a deadline.
            </p>
          </div>
        </div>
      </section>
      <section class="items">
        <div class="item">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$100</span>
        </div>
        <div class="item">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$2400</span>
        </div>
        <div class="item">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$1500</span>
        </div>
        <div class="item">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$900</span>
        </div>
        <div class="item">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$50</span>
        </div>
      </section>
      <section class="value-section padded-section bg-orange reverse-desktop">
        <div class="container">
          <div class="text color-white">
            <div class="section-header-icon bg-offwhite">
              <img src="https://fillmurray.com/50/50" alt="">
            </div>
            <h2>Trade using Cozilo tokens</h2>
            <p>
              Buy simpler and sell quicker with the option of using Cozilo tokens.
              Tokens never disappear and receive 500 when you sign up.
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_marketscroll.jpg" alt="" class="screen">
          </div>
        </div>
      </section>
      <section class="value-section padded-section bg-lightblue">
        <div class="container">
          <div class="text color-white">
            <div class="section-header-icon bg-offwhite">
              <img src="https://fillmurray.com/50/50" alt="">
            </div>
            <h2>Secure and reliable</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam odio obcaecati perspiciatis numquam!
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_itemoverview1.jpg" alt="" class="screen long">
          </div>
        </div>
      </section>
      <section class="app-markup padded-section bg-white">
        <div class="container">
          <h2 class="color-lightgray">The Cozilo way to buy, sell, hire, and trade.</h2>
          <div class="value-props">
            <div class="col-lt">
              <div class="prop">
                <p class="large color-darkblue">A business-only platform</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-lightblue">
                <p class="large">Find used and new</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-orange">
                <p class="large">Simple interface and payment structure</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-green">
                <p class="large">Advertise while you're here</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="mockup with-screen-scroll">
              <img src="../assets/images/iphone.png" alt="" class="phone-shell">
              <img src="../assets/images/mockups/cozilo_landingscreen.jpg" alt="" class="screen">
            </div>
            <div class="col-rt">
              <div class="prop">
                <p class="large color-lightblue">Chat with sellers</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-orange">
                <p class="large">Take the hassle out of shipping</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-green">
                <p class="large">Safe transcations with user ratings and an escrow</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop">
                <p class="large color-darkblue">Choose your method of payment</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div class="button-container">
            <router-link
              :to="{ name: 'Features' }"
              class="button bg-lightblue"
            >
              Learn More About The App Features
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
        </div>
      </section>
      <section class="newsletter bg-orange">
        <div class="container">
          <p class="large color-white">Sign up for our newsletter to stay up to date.</p>
          <newsletter-form></newsletter-form>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import NewsletterForm from '../components/NewsletterForm';
import ScreenScroll from '../mixins/ScreenScroll';

export default {
  name: 'Home',
  data() {
    return {
      sections: [],
    };
  },
  components: {
    'base-page': Base,
    'newsletter-form': NewsletterForm,
  },
  mixins: [
    ScreenScroll,
  ],
  // mounted() {
  //   this.sections = document.querySelectorAll('section');
  // },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
$mockup_height: 500px;
$mockup_width: 250px;
.hero {
  padding: 40px 0 120px;
  h1 {
    color: $white;
    text-align: center;
    margin-top: 0;
  }
  .value-props {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 320px;
    margin: 0 auto;
    .prop {
      width: 150px;
      height: 150px;
      border-radius: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:last-of-type {
        margin: 0;
      }
      &:nth-child(1) {
        background: $lightblue;
        margin: 0 20px 20px 0;
      }
      &:nth-child(2) {
        background: $green;
        margin: 0 0 20px 0;
      }
      &:nth-child(3) {
        background: $orange;
        margin: 0;
      }
      img {
        width: 70px;
        height: 70px;
        object-fit: contain;
      }
      p {
        margin: 15px 0 0;
        color: $white;
      }
    }
  }
  .overlay {
    background: rgba($darkblue, 0.95);
  }
  .more {
    $width: 170px;
    position: absolute;
    width: $width;
    bottom: 0;
    left: 50%;
    margin-left: -($width / 2);
    background: $white;
    color: $gray;
    display: block;
    text-align: center;
    z-index: 3;
    text-decoration: none;
    padding: 20px 0;
    @include title-font;
    font-size: 15px;
    img {
      display: block;
      margin: 10px auto 0;
      width: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    .value-props {
      width: 100%;
      .prop {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin: 0 20px 0 0;
        }
        &:nth-child(4) {
          margin: 0;
        }
      }
    }
  }
  @media only screen and (min-width: 1215px) {
    padding: 80px 0 200px;
    > .container {
      max-width: 90%;
    }
    .value-props {
      .prop {
        width: 250px;
        height: 250px;
        border-radius: 250px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin: 0 30px 0 0;
        }
        img {
          height: 100px;
          width: 100px;
        }
      }
    }
  }
}
// .pagination {
//   position: fixed;
//   left: 10px;
//   z-index: 20;
//   i {
//     display: block;
//     margin-bottom: 10px;
//     border: 1px solid $white;
//     width: 10px;
//     height: 10px;
//     border-radius: 10px;
//     background: transparent;
//     &.active {
//       background: $white;
//     }
//   }
// }
.value-section {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button {
    height: 44px;
    margin-bottom: 30px;
  }
  @media only screen and (min-width: 768px) {
    .container {
      flex-direction: row;
      justify-content: center;
      .text {
        flex: 1;
      }
      div:first-of-type {
        margin-right: 100px;
      }
    }
  }
  &.reverse-desktop {
    .text {
      order: 0;
    }
    .mockup {
      order: 1;
    }
  }
}
.from-to {
  display: flex;
  flex-direction: column;
  position: relative;
  .text {
    .wrapper {
      width: 90%;
      margin: 0 auto;
    }
    &.text-left,
    &.text-right {
      padding: 30px 0;
    }
    &.text-left {
      > .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      h2,
      p {
        text-align: right;
      }
    }
  }
  .mockup {
    display: none;
    position: absolute;
    top: 50%;
    margin-top: -($mockup_height / 2);
    left: 50%;
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    .text {
      width: 50%;
      p {
        max-width: 310px;
      }
      &.text-left {
        padding: 100px ($mockup_width / 2) 100px 0;
      }
      &.text-right {
        padding: 100px 0 100px ($mockup_width / 2);
      }
    }
    .mockup {
      display: block;
    }
  }
  @media only screen and (min-width: 1200px) {
    $mockup_width: 300px;
    $mockup_height: 600px;
    .mockup {
      top: 50%;
      margin-top: -($mockup_height / 2);
      left: 50%;
      margin-left: -($mockup_width / 2);
    }
    .text {
      &.text-left {
        padding: 100px (($mockup_width / 2) + 30px) 100px 0;
      }
      &.text-right {
        padding: 100px 0 100px (($mockup_width / 2) + 30px);
      }
    }
  }
}
.items {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 30px 0;
  .item {
    margin-bottom: 30px;
    width: calc((100vw - 90px) / 2);
    position: relative;
    &:nth-child(odd) {
      margin-right: 30px;
    }
    &:last-of-type {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .price {
      position: absolute;
      bottom: 20px;
      left: 0;
      background: $gray;
      color: $white;
      border-top-right-radius: 200px;
      border-bottom-right-radius: 200px;
      padding: 10px 25px 10px 20px;
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 30px;
    .item {
      margin: 0 30px 0 0;
      width: calc((100vw - 180px) / 5);
      &:last-of-type {
        display: block;
        margin-right: 0;
      }
    }
  }
}
.app-markup {
  > .container {
    max-width: 1200px;
  }
  h2 {
    text-align: center;
  }
  p {
    margin: 0;
    &:not(.large) {
      color: $lightgray;
    }
    &.large {
      font-weight: bold;
    }
  }
  .value-props {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .col-lt {
      margin-right: 20px;
    }
    .prop {
      margin-bottom: 20px;
    }
  }
  .mockup {
    display: none;
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  @media only screen and (min-width: 1000px) {
    .value-props {
      margin-top: 80px;
      .col-lt,
      .col-rt {
        width: 300px;
      }
      .prop {
        margin-bottom: 60px;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    p:not(.large) {
      font-size: 18px;
    }
    p.large  {
      line-height: 1.2;
    }
    .mockup {
      display: block;
      // width: 400px;
      // object-fit: contain;
      align-self: center;
    }
  }
}
.newsletter {
  padding: 80px 0;
  p {
    text-align: center;
    margin: 0 0 30px;
  }
}
</style>
