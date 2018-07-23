<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="pricing"
        title="Pricing"
        icon-class="shopping-cart"
        header-color="darkblue"
        bg-color="green"
      >
        <template slot="description">
          <p>
            Sign up for your free Cozilo account today, and during the 3-month promotional
            period, receive Cozilo Premium member benefits for free!
          </p>
        </template>
      </hero-section>
      <p class="lead">
        <span class="container">
          With three unique pricing tiers, there’s a Cozilo tier for every kind of member:
          individual sellers, small business owners, enterprise business owners, and everything
          in between.
        </span>
      </p>
      <div class="content">
        <div class="container padded-section">
          <div class="price-tag">
            <div class="header bg-lightblue">
              <div class="dot"></div>
              <h2>Cozilo Free</h2>
              <p class="lead"><em>Free</em></p>
              <a href="" class="button bg-white color-lightblue">Sign Up &rarr;</a>
            </div>
            <div class="list">
              <ul class="feature-list lightblue">
                <li>Free account</li>
                <li>Unlimited product listings with limited display time</li>
                <li>Ability to connect with interested buyers and fellow business owners</li>
                <li>1-5 GB of storage for video and image assets</li>
                <li>Email support</li>
              </ul>
            </div>
          </div>
          <div class="price-tag">
            <div class="header bg-orange">
              <div class="dot"></div>
              <h2>Cozilo Plus</h2>
              <p class="lead"><em>$29.99/month or $330/year</em></p>
              <a href="" class="button bg-white color-orange">Sign Up &rarr;</a>
            </div>
            <div class="list">
              <ul class="feature-list orange">
                <li>Free account</li>
                <li>Unlimited product listings with limited display time</li>
                <li>Ability to connect with interested buyers and fellow business owners</li>
                <li>1-5 GB of storage for video and image assets</li>
                <li class="break">Email support</li>
                <li>Priority customer support</li>
                <li>5-10 GB of storage for video and image assets</li>
                <li>Increased marketing exposure</li>
              </ul>
            </div>
          </div>
          <div class="price-tag">
            <div class="header bg-green">
              <div class="dot"></div>
              <h2>Cozilo Enterprise</h2>
              <p class="lead"><em>Contact for Quote</em></p>
              <a href="" class="button bg-white color-green">Sign Up &rarr;</a>
            </div>
            <div class="list">
              <ul class="feature-list green">
                <li>Free account</li>
                <li>Unlimited product listings with limited display time</li>
                <li>Ability to connect with interested buyers and fellow business owners</li>
                <li>1-5 GB of storage for video and image assets</li>
                <li class="break">Email support</li>
                <li>Priority customer support</li>
                <li>5-10 GB of storage for video and image assets</li>
                <li class="break">Increased marketing exposure</li>
                <li>Additional features coming soon!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';

export default {
  name: 'Pricing',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.lead {
  width: 90%;
  margin: 50px auto 0;
}
.container {
  @media only screen and (min-width: $large) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .price-tag {
      margin-right: 20px;
      flex: 1;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
.price-tag {
  border-radius: 10px;
  position: relative;
  background: #f5f5f5;
  margin-bottom: 20px;
  .header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 80px 30px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 280px;
    .dot {
      position: absolute;
      top: 20px;
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: white;
    }
    p,
    h2 {
      color: white;
      text-align: center;
      margin: 0 0 10px;
      line-height: 1.1;
    }
    h2 {
      @include title-font;
    }
    .button{
      position: absolute;
      bottom: 20px;
      left: 50%;
      width: 140px;
      margin-left: -70px;
      &:hover {
        background: transparent;
        color: white;
        border: 1px solid white;
      }
    }
  }
  .list {
    padding: 40px;
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    li {
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      &.break {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e4e4e4;
      }
    }
  }
}
</style>

