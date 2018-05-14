<template>
  <base-page>
    <template slot="content">
      <section class="hero with-bg-image">
        <img src="https://fillmurray.com/800/400" alt="" class="background-image">
        <div class="overlay"></div>
        <div class="container">
          <h1>The Cozilo way to</h1>
          <div class="value-props">
            <div class="prop">
              <img src="https://fillmurray.com/100/100" alt="">
              <p>Buy</p>
            </div>
            <div class="prop">
              <img src="https://fillmurray.com/100/100" alt="">
              <p>Sell</p>
            </div>
            <div class="prop">
              <img src="https://fillmurray.com/100/100" alt="">
              <p>Trade</p>
            </div>
            <div class="prop">
              <img src="https://fillmurray.com/100/100" alt="">
              <p>Hire</p>
            </div>
          </div>
        </div>
        <a href="#" class="more" v-scroll-to="'#marketplace'">
          Learn more
          <span>&darr;</span>
        </a>
      </section>
      <section id="marketplace" class="marketplace padded-section">
        <div class="container">
          <div class="text color-white">
            <div class="section-header-icon bg-darkblue">
              <img src="https://fillmurray.com/50/50" alt="">
            </div>
            <h2>The business only, mobile marketplace</h2>
            <p>
              Interact specifically with business owners without the clutter of consumer goods.
              Only approved business become part of the Cozilo ecoystem.
            </p>
          </div>
          <div class="mockup">
            <img src="https://fillmurray.com/350/600" alt="">
          </div>
        </div>
      </section>
      <section class="from-to">
        <div class="text text-left bg-white">
          <div class="wrapper">
            <div class="section-header-icon bg-orange">
              <img src="https://fillmurray.com/100/100" alt="">
            </div>
            <h2 class="color-orange">From<br>the<br>office<br>cubicle</h2>
            <p class="color-gray">
              Buy office furniture your business needs to grow. Sell supplies to save space.
            </p>
          </div>
        </div>
        <img src="https://fillmurray.com/350/600" alt="" class="mockup">
        <div class="text text-right bg-orange">
          <div class="wrapper">
            <div class="section-header-icon bg-white">
              <img src="https://fillmurray.com/100/100" alt="">
            </div>
            <h2 class="color-white">To<br>the<br>factory<br>floor<br></h2>
            <p class="color-white">
              Trade machinery or equipment for nearly any industry.
              Hire extra help to meet a deadline.
            </p>
          </div>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
  },
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
        margin: 0 20px 0 0;
      }
      &:nth-child(4) {
        background: $lightblue;
        margin: 0;
      }
      img {
        width: 70px;
        height: 70px;
        object-fit: contain;
      }
      p {
        margin: 15px 0 0;
        @include title-font;
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
    span {
      display: block;
      text-align: center;
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
  @media only screen and (min-width: 1000px) {
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
.marketplace {
  background: $lightblue;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    .container {
      flex-direction: row;
      justify-content: center;
      .text {
        flex: 1;
        margin-right: 100px;
      }
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
    &.text-left {
      padding: 30px 0 ($mockup_height / 2);
    }
    &.text-right {
      padding: ($mockup_height / 2) 0 30px;
    }
  }
  .mockup {
    width: $mockup_width;
    height: $mockup_height;
    position: absolute;
    top: 50%;
    margin-top: -($mockup_height / 2);
    left: 50%;
    margin-left: -($mockup_width / 2);
    object-fit: contain;
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    .text {
      width: 50%;
      p {
        max-width: 280px;
      }
      &.text-left {
        padding: 100px ($mockup_width / 2) 100px 0;
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
      &.text-right {
        padding: 100px 0 100px ($mockup_width / 2);
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    $mockup_width: 300px;
    $mockup_height: 600px;
    .mockup {
      width: $mockup_width;
      height: $mockup_height;
      position: absolute;
      top: 50%;
      margin-top: -($mockup_height / 2);
      left: 50%;
      margin-left: -($mockup_width / 2);
      object-fit: contain;
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
</style>
