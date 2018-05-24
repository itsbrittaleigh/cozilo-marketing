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
        <img src="static/covers/home.jpg" alt="" class="background-image">
        <div class="overlay"></div>
        <div class="container">
          <h1 class="hidden">The Cozilo way to</h1>
          <div class="value-props">
            <div class="prop hidden">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
              <p>Buy</p>
            </div>
            <div class="prop hidden">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
              <p>Sell</p>
            </div>
            <div class="prop hidden">
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
            <div class="section-header-icon bg-darkblue hidden">
              <!-- <img src="https://fillmurray.com/50/50" alt=""> -->
            </div>
            <h2 class="hidden">The business only, mobile marketplace</h2>
            <p class="hidden">
              Interact specifically with <strong>business owners</strong> without the clutter of
              consumer goods. Only approved business become part of the Cozilo ecoystem.
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button hidden"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll hidden">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_signin.jpg" alt="" class="screen">
          </div>
        </div>
      </section>
      <section class="from-to">
        <div class="text text-left bg-wood">
          <div class="wrapper">
            <div class="section-header-icon bg-orange hidden">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
            </div>
            <h2 class="color-orange hidden">From<br>the<br>office<br>cubicle</h2>
            <p class="color-gray hidden">
              <strong>Buy</strong> office furniture your business needs to grow.
              <strong>Sell</strong> supplies to save space.
            </p>
          </div>
        </div>
        <div class="mockup with-screen-scroll small hidden">
          <img src="../assets/images/iphone.png" alt="" class="phone-shell">
          <img src="../assets/images/mockups/cozilo_mainpage.jpg" alt="" class="screen long">
        </div>
        <div class="text text-right bg-cement">
          <div class="wrapper">
            <div class="section-header-icon bg-offwhite hidden">
              <!-- <img src="https://fillmurray.com/100/100" alt=""> -->
            </div>
            <h2 class="color-white hidden">To<br>the<br>factory<br>floor<br></h2>
            <p class="color-white hidden">
              <strong>Trade</strong> machinery or equipment for nearly any industry.
              <strong>Hire</strong> extra help to meet a deadline.
            </p>
          </div>
        </div>
      </section>
      <section class="items">
        <div class="item hidden">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$100</span>
        </div>
        <div class="item hidden">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$2400</span>
        </div>
        <div class="item hidden">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$1500</span>
        </div>
        <div class="item hidden">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$900</span>
        </div>
        <div class="item hidden">
          <img src="https://fillmurray.com/200/200" alt="">
          <span class="price">$50</span>
        </div>
      </section>
      <section class="value-section padded-section bg-orange reverse-desktop">
        <div class="container">
          <div class="text color-white">
            <div class="section-header-icon bg-offwhite hidden">
              <img src="https://fillmurray.com/50/50" alt="">
            </div>
            <h2 class="hidden">Trade using Cozilo tokens</h2>
            <p class="hidden">
              Buy simpler and sell quicker with the option of using Cozilo tokens.
              Tokens never disappear and receive 500 when you sign up.
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button hidden"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll hidden">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_marketscroll.jpg" alt="" class="screen">
          </div>
        </div>
      </section>
      <section class="value-section padded-section bg-lightblue">
        <div class="container">
          <div class="text color-white">
            <div class="section-header-icon bg-offwhite hidden">
              <img src="https://fillmurray.com/50/50" alt="">
            </div>
            <h2 class="hidden">Secure and reliable</h2>
            <p class="hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam odio obcaecati perspiciatis numquam!
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button hidden"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll hidden">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_itemoverview1.jpg" alt="" class="screen long">
          </div>
        </div>
      </section>
      <section class="app-markup padded-section bg-white">
        <div class="container">
          <h2 class="color-lightgray hidden">The Cozilo way to buy, sell, hire, and trade.</h2>
          <div class="value-props">
            <div class="col-lt">
              <div class="prop">
                <p class="large color-darkblue hidden">A business-only platform</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-lightblue">
                <p class="large hidden">Find used and new</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-orange">
                <p class="large hidden">Simple interface and payment structure</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-green">
                <p class="large hidden">Advertise while you're here</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="mockup with-screen-scroll">
              <img src="../assets/images/iphone.png" alt="" class="phone-shell">
              <img src="../assets/images/mockups/cozilo_landingscreen.jpg" alt="" class="screen">
            </div>
            <div class="col-rt">
              <div class="prop color-lightblue">
                <p class="large hidden">Chat with sellers</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-orange">
                <p class="large hidden">Take the hassle out of shipping</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop color-green">
                <p class="large hidden">Safe transcations with user ratings and an escrow</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="prop">
                <p class="large color-darkblue hidden">Choose your method of payment</p>
                <p class="hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div class="button-container">
            <router-link
              :to="{ name: 'Features' }"
              class="button bg-lightblue hidden"
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
import TagAsVisible from '../mixins/TagAsVisible';

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
    TagAsVisible,
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
      &:nth-child(1) {
        background: $lightblue;
        margin: 0 20px 20px 0;
        &.fade-in {
          @include fade-in-up;
        }
      }
      &:nth-child(2) {
        background: $green;
        margin: 0 0 20px 0;
        &.fade-in {
          @include fade-in-up-offset-1;
        }
      }
      &:nth-child(3) {
        background: $orange;
        margin: 0;
        &.fade-in {
          @include fade-in-up-offset-2;
        }
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
      .fade-in {
        @include fade-in-up-from-left;
      }
    }
    &.text-right {
      .fade-in {
        @include fade-in-up-from-right;
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
    &.fade-in {
      @include fade-in-up;
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
      .fade-in {
        @include fade-in-up-from-left;
      }
    }
    .col-rt {
      .fade-in {
        @include fade-in-up-from-right;
      }
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
