<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="features"
        title="Features"
        icon-class="exchange-alt"
        header-color="green"
      >
        <template slot="description">
          <p class="hidden" v-in-viewport.once>
            Cozilo is a business-focused, mobile marketplace for business owners who
            want to buy, sell, or trade new or used goods without having to sort through
            the clutter of consumer goods like in other selling apps.
          </p>
        </template>
      </hero-section>
      <section class="features padded-section">
        <div class="container">
          <div class="point">
            <div class="section-header-icon bg-lightblue hidden" v-in-viewport.once>
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <h2 class="color-lightblue hidden" v-in-viewport.once>Buy</h2>
            <p class="hidden" v-in-viewport.once>
              As your business grows, you’ll need goods and products to build your office,
              help your employees do their jobs, and more. Cozilo provides a secured marketplace
              for that to happen, with new & gently-used goods, verified businesses and a user
              rating system.
            </p>
          </div>
          <div class="point">
            <div class="section-header-icon bg-green hidden" v-in-viewport.once>
              <i class="fas fa-credit-card" style="color: white;"></i>
            </div>
            <h2 class="color-green hidden" v-in-viewport.once>Sell</h2>
            <p class="hidden" v-in-viewport.once>
              Cozilo provides a secure marketplace to sell your business’ items, whether moving
              offices, looking to sell excess goods, or need to liquidate assets. Provide photos
              with a description of your goods and you’re ready to sell.
            </p>
          </div>
          <div class="point">
            <div class="section-header-icon bg-orange hidden" v-in-viewport.once>
              <i class="fas fa-exchange-alt" style="color: white;"></i>
            </div>
            <h2 class="color-orange hidden" v-in-viewport.once>Trade</h2>
            <p class="hidden" v-in-viewport.once>
              Trade goods within a community of verified and trusted companies. Cozilo adds an
              extra layer of security, allowing only approved businesses to become part of the
              Cozilo ecosystem.
            </p>
          </div>
        </div>
      </section>
      <section class="value-section bg-green padded-section">
        <div class="container">
          <div class="content">
            <div class="section-header-icon bg-darkblue hidden" v-in-viewport.once>
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <h2 class="color-darkblue hidden" v-in-viewport.once>
              The Business-Focused, Mobile Marketplace
            </h2>
            <p class="hidden" v-in-viewport.once>
              Cozilo was built to be a true B2B marketplace where approved businesses could
              buy, sell, trade, and interact specifically with other business owners in
              their area. Without the clutter of consumer goods in our app, finding the products
              your company needs - office furniture, heavy-duty machinery, POS computers - has
              never been easier.
            </p>
            <p class="hidden" v-in-viewport.once>
              From the clean, organized sales feed to the simple post creation process, Cozilo’s
              user-friendly interface means you can be out of the office, yet still totally in
              control of your business and it’s sales flow.
            </p>
          </div>
          <div class="mockup-container">
            <div class="mockup">
              <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
              <div class="screen-container">
                <img src="../assets/images/mockups/cozilo_signin.jpg" alt="" class="screen">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="value-section bg-lightblue padded-section reverse">
        <div class="container">
          <div class="content">
            <div class="section-header-icon bg-darkblue hidden" v-in-viewport.once>
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <h2 class="color-white hidden" v-in-viewport.once>Find new and used goods</h2>
            <p class="hidden" v-in-viewport.once>
              Unlike other marketplaces that only feature brand new, expensive goods, you can
              search through new or gently-used items in the Cozilo marketplace. This is a much
              more cost-efficient way for your business to find the products you need.
            </p>
          </div>
          <div class="mockup-container">
            <div class="mockup">
              <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
              <div class="screen-container">
                <img src="../assets/images/mockups/cozilo_marketscroll.jpg" alt="" class="screen">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="value-section bg-orange padded-section">
        <div class="container">
          <div class="content">
            <div class="section-header-icon bg-darkblue hidden" v-in-viewport.once>
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <h2 class="color-white hidden" v-in-viewport.once>Secure and reliable</h2>
            <p class="hidden" v-in-viewport.once>
              Requiring verification in Cozilo helps us make sure that any and all
              transactions happen between real, actual businesses and their owners -
              you’ll never have to worry about transactions falling through or users not
              being who they say they are.
            </p>
            <p class="hidden" v-in-viewport.once>
              Cozilo uses multi-level, transport layer security with the latest security protocols,
              along with hardware storage of keys and storage service encryption, to ensure that
              your business and all important information is safe.
            </p>
          </div>
          <div class="mockup-container">
            <div class="mockup">
              <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
              <div class="screen-container">
                <img src="../assets/images/mockups/cozilo_landingscreen.jpg" alt="" class="screen">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feature-overview">
        <div class="container">
          <div class="col-lt">
            <h3 class="color-lightblue hidden" v-in-viewport.once>Trade using Cozilo</h3>
            <p class="hidden" v-in-viewport.once>
              Trade new or used goods with confidence knowing that every business within
              Cozilo is verified through our multiple-step application process, unlike other
              buying and selling platforms that allow anyone to create an account.
            </p>
            <h3 class="color-orange hidden" v-in-viewport.once>
              Simple interface and payment structure
            </h3>
            <p class="hidden" v-in-viewport.once>
              From account set-up to completing transactions, Cozilo’s simple, user-friendly
              interface and payment structure help keep your business running smoothly. Our
              transparent payment structure allows you to set up volume or wholesale pricing,
              as well as price points that make sense for your business.
            </p>
            <h3 class="color-green hidden" v-in-viewport.once>Advertise while you're here</h3>
            <p class="hidden" v-in-viewport.once>
              For businesses looking to be more cost-efficient with their budgets, Cozilo
              allows you to advertise your business and its offerings right within the app.
              Connect directly with other local business owners, build your network, and
              showcase what makes your company unique.
            </p>
            <h3 class="color-darkblue hidden" v-in-viewport.once>Chat with buyers and sellers</h3>
            <p class="hidden" v-in-viewport.once>
              Communicate easily with other local business owners directly within the Cozilo
              app. Arrange in-person meetings, discuss your terms of sale or trade, or simply
              connect to expand your business’ network. Every business on Cozilo is verified,
              so you’ll know exactly who you’re speaking with, every time.
            </p>
          </div>
          <div class="col-rt">
            <h3 class="color-darkblue hidden" v-in-viewport.once>
              Take the hassle out of shipping
            </h3>
            <p class="hidden" v-in-viewport.once>
              The Cozilo platform provides quick, reliable, and cost-effective shipping logistics
              for all of your transactions. Simply submit your order, and we’ll print all
              necessary packing and shipping labels for you. Traceable shipping options are also
              provided to ensure delivery of your merchandise.
            </p>
            <h3 class="color-lightblue hidden" v-in-viewport.once>
              Safe transactions with user ratings and escrow accounts
            </h3>
            <p class="hidden" v-in-viewport.once>
              Users and businesses are rated based on buying and selling performance, along
              with an internal auditing process. As soon as both parties mark a transaction
              as complete, funds are transferred directly from the buyer to the seller. If
              the exchange is agreed upon in part or in full with Cozilo Tokens, tokens are
              immediately available.
            </p>
            <h3 class="color-orange hidden" v-in-viewport.once>Choose your method of payment</h3>
            <p class="hidden" v-in-viewport.once>
              Payment options include Cozilo tokens, all major credit cards (Visa, MasterCard,
              Discover, and American Express), smart wallets like Apple Pay and Google Pay,
              as well as ACH. Additionally, if your account has multiple payment methods, you
              can combine the various forms of payment to complete your transaction.
            </p>
            <h3 class="color-green hidden" v-in-viewport.once>
              Multi-level pricing options
            </h3>
            <p class="hidden" v-in-viewport.once>
              With Cozilo, you can set up leveled, volume, or wholesale pricing: set your
              prices to be public or have them be business-only, increasing the selling
              opportunities for items like used furniture, office supplies and more. You
              can also set up repeat purchase pricing, which is great for routinely-used items.
            </p>
          </div>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';

export default {
  name: 'Features',
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
@import '../assets/styles/variables';
.features {
  > .container {
    .point {
      padding: 20px 0;
      border-bottom: 1px solid #e7e7e7;
      &:last-of-type {
        border-bottom: none;
      }
    }
    @media only screen and (min-width: $large) {
      display: flex;
      .point {
        padding: 0 40px;
        border-bottom: none;
        border-right: 1px solid #e7e7e7;
        flex: 1;
        &:first-of-type {
          padding-left: 0;
        }
        &:last-of-type {
          border-right: none;
          padding-right: 0;
        }
      }
    }
  }
}
.value-section {
  clip-path: polygon(0 25px, 100% 0, 100% 100%, 0 calc(100% - 25px));
  margin-top: -25px;
  h3 {
    margin-bottom: 5px;
  }
  p {
    color: white;
    margin: 0 0 20px;
  }
  padding: 50px 0 0;
  .mockup-container {
    position: relative;
    height: 500px;
    .mockup {
      top: -80px;
      margin-top: 0;
      .screen-container {
        .screen {
          position: absolute;
          top: -30px;
          left: 0;
        }
      }
    }
  }
  @media only screen and (min-width: $xxxlarge) {
    padding: 50px 0;
  }
  &.reverse {
    clip-path: polygon(0 0, 100% 25px, 100% calc(100% - 25px), 0 100%);
  }
  @media only screen and (min-width: $large) {
    > .container {
      display: flex;
      align-items: center;
    }
    .content {
      margin-right: 100px;
      padding-bottom: 50px;
    }
    .mockup-container {
      width: 970px;
    }
  }
  &.reverse {
    .content {
      order: 2;
      @media only screen and (min-width: $large) {
        margin: 0 0 0 100px;
      }
    }
    .mockup-container {
      order: 1;
    }
  }
}
.feature-overview {
  padding: 0 0 40px;
  h3 {
    margin: 40px 0 5px;
  }
  p {
    margin: 0;
  }
  @media only screen and (min-width: $medium) {
    padding: 0 0 60px;
    > .container {
      display: flex;
      .col-lt,
      .col-rt {
        flex: 1;
      }
      .col-lt {
        padding-right: 50px;
        border-right: 1px solid #e7e7e7;
      }
      .col-rt {
        padding-left: 50px;
      }
    }
  }
}
</style>

