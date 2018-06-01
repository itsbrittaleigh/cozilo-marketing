<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="Frequently Asked Questions"
        name="faq"
      ></hero-section>
      <section class="faq">
        <div class="container content-container content padded-section">
          <p class="lead hidden">
            Below is a list of frequently asked questions that Cozilo users have about
            signing up, payment options, and more. If you don't see an answer to your
            question below, reach out to us using our
            <router-link :to="{ name: 'Contact' }">contact form</router-link>.
          </p>
          <div class="accordion hidden">
            <v-collapse-wrapper :active="true">
              <div class="header" v-collapse-toggle>
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
                <h2 class="color-orange">What are my payment options?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  In addition to PayPal, all major credit cards are acceptable forms of
                  payment on the Cozilo platform.
                </p>
              </div>
            </v-collapse-wrapper>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <h2 class="color-green">How do Cozilo tokens work?</h2>
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
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <h2 class="color-darkblue">How does the trade system work?</h2>
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
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <h2 class="color-lightblue">Does Cozilo manage shipping?</h2>
              </div>
              <div class="my-content" v-collapse-content>
                <p>
                  Yes, Cozilo handles all shipping through Shippo, a cost-efficient,
                  cloud-based, e-commerce platform.
                </p>
              </div>
            </v-collapse-wrapper>
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <h2 class="color-orange">How are my transactions secured?</h2>
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
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <h2 class="color-green">Who do I contact with account questions?</h2>
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
.accordion {
  .vc-collapse {
    border-bottom: 1px solid #e5e5e5;
  }
  .header {
    padding: 10px 0;
    cursor: pointer;
    h2 {
      font-weight: normal;
    }
  }
}
</style>

