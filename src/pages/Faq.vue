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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Minus rerum non iure quae eum eius, eligendi ex beatae! Reiciendis,
            labore exercitationem magnam nihil asperiores sint laborum ipsa quaerat
            necessitatibus ea.
          </p>
          <div class="accordion hidden">
            <v-collapse-wrapper>
              <div class="header" v-collapse-toggle>
                <h2 class="color-lightblue">How can I sign up for Cozilo?</h2>
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
                <h2 class="color-orange">What are my payment options?</h2>
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit modi eius
                  praesentium cumque culpa, excepturi, et aliquid inventore qui autem totam
                  quidem asperiores officia perspiciatis maxime sapiente. Voluptate, nulla
                  dolorum.
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit modi eius
                  praesentium cumque culpa, excepturi, et aliquid inventore qui autem totam
                  quidem asperiores officia perspiciatis maxime sapiente. Voluptate, nulla
                  dolorum.
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
    h2 {
      font-weight: normal;
    }
  }
}
</style>

