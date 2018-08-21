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
          Take high-quality photos of your goods & post them directly on Cozilo for
          thousands of other businesses to see.
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
          With Cozilo, transparently set your pricing levels: wholesale, volume, or
          individual goods.
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
          With a multi-step verification process for all Cozilo users, every transaction is
          secure.
        </p>
      </div>
    </div>
    <div class="mockup large">
      <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
      <div class="screen-container bg-lightblue" v-show="features[0]">
        <i class="fas fa-camera fa-7x" style="color: white;"></i>
      </div>
      <div class="screen-container bg-orange" v-show="features[1]">
        <i class="fas fa-hand-holding-usd fa-7x" style="color: white;"></i>
      </div>
      <div class="screen-container bg-green" v-show="features[2]">
        <i class="fas fa-lock fa-7x" style="color: white;"></i>
      </div>
      <div class="screen-container bg-lightblue" v-show="features[3]">
        <i class="fas fa-broadcast-tower fa-7x" style="color: white;"></i>
      </div>
      <div class="screen-container bg-orange" v-show="features[4]">
        <i class="fas fa-shipping-fast fa-7x" style="color: white;"></i>
      </div>
      <div class="screen-container bg-green" v-show="features[5]">
        <i class="fas fa-credit-card fa-7x" style="color: white;"></i>
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
          Customize your profile, connect directly with other users & advertise your business
          with Cozilo.
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
          Cozilo offers affordable & efficient freight shipping assistance to ensure quality
          delivery.
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
          The Cozilo app accepts ACH, Apple and Google Pay, as well as all major credit cards.
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
      const current = this.features[index];
      this.features = [false, false, false, false, false, false];
      this.features[index] = !current;
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
    .col-lt {
      .prop.selected:after {
        content: '';
        position: absolute;
        top: 30px;
        left: 100%;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid;
      }
    }
    .col-rt {
      .prop {
        .icon-plus {
          right: -16px;
          left: auto;
        }
      }
      .prop.selected:after {
        content: '';
        position: absolute;
        top: 30px;
        right: 100%;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 15px solid;
      }
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
      }
      .icon-plus {
        cursor: pointer;
        position: absolute;
        left: -16px;
        top: 20px;
        border-radius: 30px;
        transition: 0.4s;
        @include icon-plus(32px, 17px, 1px);
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
          &:after {
            border-left-color: $green;
            border-right-color: $green;
          }
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
          &:after {
            border-left-color: $orange;
            border-right-color: $orange;
          }
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
          &:after {
            border-left-color: $lightblue;
            border-right-color: $lightblue;
          }
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
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
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

