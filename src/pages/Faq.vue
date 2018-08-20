<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="faq"
        title="FAQ's"
        icon-class="question"
        header-color="white"
        bg-color="orange"
      >
        <template slot="description">
          <p class="hidden" v-in-viewport.once>
            Below are a list of frequently asked questions that Cozilo users have about
            signing up, payment options, and more. If you don’t see an answer to your
            question below, reach out to us through our
            <router-link :to="{ name: 'Contact' }">contact form</router-link>.
          </p>
        </template>
      </hero-section>
      <section class="faq">
        <div class="container content-container content padded-section">
          <div class="accordion">
            <p class="heading hidden" v-in-viewport.once>My Account</p>
            <accordion-section>
              <template slot="accordion-header">
                <div class="header hidden" v-in-viewport.once>
                  <img src="../assets/images/icons/arrow-blue-down.png" alt="">
                  <h2 class="color-lightblue">How can I sign up for Cozilo?</h2>
                </div>
              </template>
              <template slot="accordion-content">
                <p>
                  To sign up for Cozilo, simply download the app on iOS or Android and
                  follow the prompts to create an account for your approved and verified
                  business.
                </p>
              </template>
            </accordion-section>
            <accordion-section>
              <template slot="accordion-header">
                <div class="header hidden" v-in-viewport.once>
                  <img src="../assets/images/icons/arrow-blue-down.png" alt="">
                  <h2 class="color-lightblue">Who can buy and sell on Cozilo?</h2>
                </div>
              </template>
              <template slot="accordion-content">
                <p>
                  All Cozilo users are able to buy goods. To sell goods, Cozilo users will need
                  to provide additional business information to become verified sellers within
                  the platform. Once verified, you will be able to sell goods and products with
                  your Cozilo Free account. Find out more about
                  <router-link :to="{ name: 'Pricing' }">pricing here</router-link>.
                </p>
              </template>
            </accordion-section>
            <accordion-section>
              <template slot="accordion-header">
                <div class="header hidden" v-in-viewport.once>
                  <img src="../assets/images/icons/arrow-blue-down.png" alt="">
                  <h2 class="color-lightblue">Who do I contact with account questions?</h2>
                </div>
              </template>
              <template slot="accordion-content">
                <p>
                  If you have any account questions, feel free to
                  <router-link :to="{ name: 'Contact' }">
                    contact our customer support team</router-link>.
                  Fill out the form, give us a call, or email us today.
                </p>
              </template>
            </accordion-section>
          </div>
          <div class="accordion">
            <p class="heading hidden" v-in-viewport.once>Transactions and Payments</p>
            <accordion-section>
              <template slot="accordion-header">
                <div class="header hidden" v-in-viewport.once>
                  <img src="../assets/images/icons/arrow-green-down.png" alt="">
                  <h2 class="color-green">What are my payment options?</h2>
                </div>
              </template>
              <template slot="accordion-content">
                <p>
                  In addition to Cozilo tokens, ACH, smart wallets like Apple Pay and Google
                  Pay, all major credit cards - Visa, MasterCard, Discover, and American Express
                  - are accepted payment options on Cozilo. Set your value and pay how you like.
                </p>
              </template>
            </accordion-section>
            <accordion-section>
              <template slot="accordion-header">
                <div class="header hidden" v-in-viewport.once>
                  <img src="../assets/images/icons/arrow-green-down.png" alt="">
                  <h2 class="color-green">How do Cozilo tokens work?</h2>
                </div>
              </template>
              <template slot="accordion-content">
                <p>
                  As soon as both parties mark transaction as completed satisfactorily,
                  funds are transferred directly from the buyer to the seller. If the exchange
                  is agreed upon in part or in full with Cozilo Tokens, tokens are immediately
                  available and the funds will stay in the Cozilo app. Other means of payment
                  have industry standard processing times for availability.
                </p>
              </template>
            </accordion-section>
            <accordion-section>
              <template slot="accordion-header">
                <div class="header hidden" v-in-viewport.once>
                  <img src="../assets/images/icons/arrow-green-down.png" alt="">
                  <h2 class="color-green">How are my transactions secured?</h2>
                </div>
              </template>
              <template slot="accordion-content">
                <p>
                  The Cozilo platform uses multi-level security with the latest security protocols,
                  along with hardware storage of keys and storage service encryption, to ensure that
                  your business’ financial and private information is secure.
                </p>
              </template>
            </accordion-section>
          </div>
          <div class="accordion">
            <p class="heading hidden" v-in-viewport.once>Shipping</p>
            <accordion-section>
              <template slot="accordion-header">
                <div class="header hidden" v-in-viewport.once>
                  <img src="../assets/images/icons/arrow-orange-down.png" alt="">
                  <h2 class="color-orange">Does Cozilo manage shipping?</h2>
                </div>
              </template>
              <template slot="accordion-content">
                <p>
                  Yes, Cozilo handles all tracking & shipping. Choose from overnight,
                  business-class, and other types of shipping from UPS, Fedex, Postal
                  Office Services (First Class Mail, Priority Mail), or truck shipments for
                  large and heavy items.
                </p>
              </template>
            </accordion-section>
          </div>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';
import AccordionSection from '../components/AccordionSection';

export default {
  name: 'FAQ',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
    'accordion-section': AccordionSection,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.heading {
  @include title-font;
  margin: 60px 0 0;
  font-size: 12px;
  color: $darkblue;
}
.accordion {
  &:first-of-type {
    .heading {
      margin-top: 0;
    }
  }
  .accordion-section {
    border-bottom: 1px solid #e5e5e5;
    &.active {
      .header {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
  .header {
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    img {
      margin: 8px 10px 0 0;
      display: block;
      width: 18px;
      height: 10px;
      transition: 0.4s;
      @media only screen and (min-width: $large) {
        margin: 17px 20px 0 0;
      }
    }
    h2 {
      font-weight: normal;
      text-transform: none;
      line-height: 1.1;
      @media only screen and (min-width: $xxxlarge) {
        font-size: 2em;
      }
    }
  }
}
</style>

