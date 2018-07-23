<template>
  <div class="value-props">
    <div class="col-lt">
      <div
        :class="{
          'prop lightblue': true,
          'selected': features[0]
        }"
        @click="toggleFeature(0)"
      >
        <i class="icon-plus"></i>
        <p class="large">Easy-to-Navigate Interface</p>
        <p>
          With one simple push of a button, you can take high-quality photos of your
          goods and post them directly on the Cozilo B2B marketplace for thousands of
          other business owners to see.
        </p>
      </div>
      <div
        :class="{
          'prop orange': true,
          'selected': features[1]
        }"
        @click="toggleFeature(1)"
      >
        <i class="icon-plus"></i>
        <p class="large">Customizable Price Setting</p>
        <p>
          Cozilo is a business-focused marketplace that allows you to transparently
          set your pricing levels: wholesale, volume, individual goods - whatever your
          business needs.
        </p>
      </div>
      <div
        :class="{
          'prop green': true,
          'selected': features[2]
        }"
        @click="toggleFeature(2)"
      >
        <i class="icon-plus"></i>
        <p class="large">Safe & Reliable Transactions</p>
        <p>
          With our multi-step verification process for all Cozilo business users,
          you can be sure that every transaction is secure before ever even meeting.
        </p>
      </div>
    </div>
    <div class="mockup large">
      <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
      <div class="screen-container">
        <img src="../assets/images/mockups/cozilo_landingscreen.jpg" alt="" class="screen">
      </div>
    </div>
    <div class="col-rt">
      <div
        :class="{
          'prop lightblue': true,
          'selected': features[3]
        }"
        @click="toggleFeature(3)"
      >
        <i class="icon-plus"></i>
        <p class="large">Advertise Your Company</p>
        <p>
          Create your customizable profile to connect directly with other buyers, sellers,
          and traders on the Cozilo app and create your own personal B2B network to
          advertise your company.
        </p>
      </div>
      <div
        :class="{
          'prop orange': true,
          'selected': features[4]
        }"
        @click="toggleFeature(4)"
      >
        <i class="icon-plus"></i>
        <p class="large">Simple & Quick Shipping</p>
        <p>
          Cozilo takes all the hassle out of shipping goods by offering fast and
          efficient freight shipping assistance.
        </p>
      </div>
      <div
        :class="{
          'prop green': true,
          'selected': features[5]
        }"
        @click="toggleFeature(5)"
      >
        <i class="icon-plus"></i>
        <p class="large">Pay Your Own Way</p>
        <p>
          The Cozilo app accepts ACH, Cozilo tokens, smart wallets like Apple and Google
          Pay, as well as  all major credit cards, including VISA, MasterCard, and
          American Express.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMarkupToggle',
  data() {
    return {
      features: [
        true,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  methods: {
    toggleFeature(index) {
      this.features = [false, false, false, false, false, false];
      this.features[index] = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.app-markup {
  .value-props {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    padding: 50px 0;
    .col-lt,
    .col-rt {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .prop {
      width: 300px;
      padding: 20px 40px;
      margin-bottom: 20px;
      background: #f6f6f6;
      border-radius: 5px;
      position: relative;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        box-shadow: 0 2px 2px 0 rgba($lightgray, 0.5);
      }
      &.selected {
        &.orange,
        &.lightblue,
        &.green {
          p,
          p.large {
            color: white;
          }
          .icon-plus {
            background: $darkblue;
            transform: rotate(45deg);
          }
        }
        p:not(.large) {
          opacity: 1;
          visibility: visible;
        }
      }
      .icon-plus {
        cursor: pointer;
        position: absolute;
        left: -10px;
        top: 20px;
        border-radius: 20px;
        transition: 0.4s;
        @include icon-plus(20px, 11px, 1px);
      }
      &.green {
        p.large {
          color: $green;
        }
        .icon-plus {
          background: $green;
        }
        &.selected {
          background: $green;
        }
      }
      &.orange {
        p.large {
          color: $orange;
        }
        .icon-plus {
          background: $orange;
        }
        &.selected {
          background: $orange;
        }
      }
      &.lightblue {
        p.large {
          color: $lightblue;
        }
        .icon-plus {
          background: $lightblue;
        }
        &.selected {
          background: $lightblue;
        }
      }
      p {
        margin: 0;
        &.large {
          font-weight: bold;
        }
      }
    }
    @media only screen and (min-width: $large) {
      justify-content: space-between;
      .mockup {
        display: block;
        visibility: visible;
      }
    }
    @media only screen and (min-width: $xlarge) {
      .prop {
        width: 400px;
      }
    }
  }
}
</style>

