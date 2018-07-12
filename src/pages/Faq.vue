<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="faq"
        title="FAQ's"
        icon-class="exchange-alt"
        header-color="white"
        bg-color="orange"
      >
        <template slot="description">
          <p>
            Below is a list of <strong>frequently asked questions</strong> that
            Cozilo users have about signing up, payment options, and more. If you
            don't see an answer to your question below, reach out to us using our
            <router-link :to="{ name: 'Contact' }">contact form</router-link>.
          </p>
        </template>
      </hero-section>
      <section class="faq">
        <div class="container content-container content padded-section">
          <div class="accordion fade-in">
            <p class="heading">My Account</p>
            <v-collapse-wrapper :active="true">
              <div class="header" v-collapse-toggle>
                <img src="../assets/images/icons/arrow-blue-down.png" alt="">
                <h2 class="color-lightblue">How can I sign up for Cozilo?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  To sign up for Cozilo, simply download the app on iOS or Android
                  and follow the prompts to create an account for your approved and
                  verified business.
                </p>
              </div>
            </v-collapse-wrapper>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <img src="../assets/images/icons/arrow-blue-down.png" alt="">
                <h2 class="color-lightblue">Who do I contact with account questions?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  If you have any account questions, feel free to
                  <router-link :to="{ name: 'Contact' }">
                    contact our customer support team</router-link>.
                  Fill out the form, give us a call, or email us today.
                </p>
              </div>
            </v-collapse-wrapper>
          </div>
          <div class="accordion">
            <p class="heading">Transactions and Payments</p>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <img src="../assets/images/icons/arrow-green-down.png" alt="">
                <h2 class="color-green">What are my payment options?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  The Cozilo app accepts ACH, Cozilo tokens, smart wallets like Apple and Google
                  Pay, as well as  all major credit cards, including VISA, MasterCard, and
                  American Express.
                </p>
              </div>
            </v-collapse-wrapper>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <img src="../assets/images/icons/arrow-green-down.png" alt="">
                <h2 class="color-green">How do Cozilo tokens work?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  As soon as both parties mark transaction as completed satisfactorily, funds
                  are transferred directly from the buyer to the seller. If the exchange is agreed
                  upon in part or in full with Cozilo Tokens, tokens are immediately available.
                  Other means of payment have industry standard processing times for availability.
                </p>
              </div>
            </v-collapse-wrapper>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <img src="../assets/images/icons/arrow-green-down.png" alt="">
                <h2 class="color-green">How does the trade system work?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  Instead of having to barter over cash value for products, Cozilo Tokens supply a
                  means of gaining ‘future value’ for items you don’t want or need today. Accept
                  Cozilo Tokens for your items today, typically at a discount to get it off your
                  hands sooner, and you can bank tokens for future use of something you may want.
                </p>
              </div>
            </v-collapse-wrapper>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <img src="../assets/images/icons/arrow-green-down.png" alt="">
                <h2 class="color-green">How are my transactions secured?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit modi eius
                  praesentium cumque culpa, excepturi, et aliquid inventore qui autem totam
                  quidem asperiores officia perspiciatis maxime sapiente. Voluptate, nulla
                  dolorum.
                </p>
              </div>
            </v-collapse-wrapper>
          </div>
          <div class="accordion">
            <p class="heading">Shipping</p>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <img src="../assets/images/icons/arrow-orange-down.png" alt="">
                <h2 class="color-orange">Does Cozilo manage shipping?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  Yes, Cozilo handles all shipping through Shippo, a cost-efficient,
                  cloud-based, e-commerce platform.
                </p>
              </div>
            </v-collapse-wrapper>
          </div>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';
import TagAsVisible from '../mixins/TagAsVisible';

export default {
  name: 'FAQ',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
  mixins: [
    TagAsVisible,
  ],
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.heading {
  @include title-font;
  margin: 60px 28px 0;
  font-size: 12px;
  color: $darkblue;
}
.accordion {
  &:first-of-type {
    .heading {
      margin-top: 0;
    }
  }
  .vc-collapse {
    border-bottom: 1px solid #e5e5e5;
  }
  .header {
    padding: 20px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      margin-right: 10px;
    }
    h2 {
      font-weight: normal;
      text-transform: none;
    }
  }
}
</style>

