<template>
  <div
    class="super-container"
    :style="`padding-left: ${innerCircleRadius}px;`"
  >
    <div
      class="svg-container"
      :style="`width: ${canvasWidth}px; height: ${canvasWidth}px;`"
    >
      <svg
        class="value-props"
        :style="`width: ${canvasWidth}px; height: ${canvasWidth}px;`"
      >
        <circle class="outer-circle"
          :cx="outerCircleXCoordinate"
          :cy="outerCircleYCoordinate"
          :r="outerCircleRadius"
          stroke-dasharray="1000"
          stroke-dashoffset="1000"
        />
        <g>
          <foreignObject
            class="buy"
            :x="buyCircleXCoordinate - innerCircleRadius"
            :y="buyCircleYCoordinate - innerCircleRadius"
            :width="innerCircleRadius * 2"
            :height="innerCircleRadius * 2"
          >
            <div
              :class="{
                'content-circle': true,
                'selected': buyIsSelected
              }"
              @click="toggleBuy"
            >
              <i class="icon-plus"></i>
              <div class="content">
                <p>
                  <i class="fas fa-shopping-cart fa-lg"></i>
                  BUY
                </p>
                <p class="selected-text">
                  Buy new &amp; used goods to stock your office, expand your business,
                  and more.
                </p>
              </div>
            </div>
          </foreignObject>
        </g>
        <g>
          <foreignObject
            class="sell"
            :x="sellCircleXCoordinate - innerCircleRadius"
            :y="sellCircleYCoordinate - innerCircleRadius"
            :width="innerCircleRadius * 2"
            :height="innerCircleRadius * 2"
          >
            <div
              :class="{
                'content-circle': true,
                'selected': sellIsSelected
              }"
              @click="toggleSell"
            >
            <i class="icon-plus"></i>
            <div class="content">
              <p>
                <i class="fas fa-credit-card fa-lg"></i>
                SELL
              </p>
              <p class="selected-text">
                Quickly &amp; easily sell new or used goods to other businesses, locally
                or nationally, on Cozilo.
              </p>
            </div>
            </div>
          </foreignObject>
        </g>
        <g>
          <foreignObject
            class="trade"
            :x="tradeCircleXCoordinate - innerCircleRadius"
            :y="tradeCircleYCoordinate - innerCircleRadius"
            :width="innerCircleRadius * 2"
            :height="innerCircleRadius * 2"
          >
            <div
              :class="{
                'content-circle': true,
                'selected': tradeIsSelected
              }"
              @click="toggleTrade"
            >
              <i class="icon-plus"></i>
              <div class="content">
                <p>
                  <i class="fas fa-exchange-alt fa-lg"></i>
                  TRADE
                </p>
                <p class="selected-text">
                  Cozilo allows you to trade goods and gain future value for items.
                </p>
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BSTSvg',
  props: [],
  data() {
    return {
      isMobile: window.innerWidth < 1200,
      buyIsSelected: false,
      sellIsSelected: false,
      tradeIsSelected: false,
    };
  },
  computed: {
    canvasWidth() {
      if (this.isMobile) return 330;
      return 500;
    },
    outerCircleRadius() {
      if (this.isMobile) return 100;
      return 150;
    },
    innerCircleRadius() {
      if (this.isMobile) return 75;
      return 100;
    },
    margin() {
      return (this.canvasWidth / 2) - this.outerCircleRadius;
    },
    a() {
      return this.outerCircleRadius / 2;
    },
    offset() {
      return Math.sqrt((this.outerCircleRadius ** 2) - (this.a ** 2));
    },
    outerCircleXCoordinate() {
      return this.canvasWidth / 2;
    },
    outerCircleYCoordinate() {
      return (this.canvasWidth / 2) + (this.margin / 2);
    },
    buyCircleXCoordinate() {
      return (this.outerCircleRadius - this.offset) + this.margin;
    },
    buyCircleYCoordinate() {
      return (this.outerCircleRadius + (this.outerCircleRadius / 2)) + (this.margin * 1.5);
    },
    tradeCircleXCoordinate() {
      return (this.outerCircleRadius + this.offset) + this.margin;
    },
    tradeCircleYCoordinate() {
      return (this.outerCircleRadius + (this.outerCircleRadius / 2)) + (this.margin * 1.5);
    },
    sellCircleXCoordinate() {
      return this.canvasWidth / 2;
    },
    sellCircleYCoordinate() {
      return (this.margin * 1.5);
    },
  },
  methods: {
    toggleBuy() {
      this.buyIsSelected = !this.buyIsSelected;
    },
    toggleSell() {
      this.sellIsSelected = !this.sellIsSelected;
    },
    toggleTrade() {
      this.tradeIsSelected = !this.tradeIsSelected;
    },
  },
  mounted() {
    const shape = document.querySelector('.outer-circle');
    setTimeout(() => {
      shape.setAttribute('stroke-dashoffset', 0);
    }, 0);
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 1200;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@keyframes pop-in {
  0% {
    transform: rotate(-30deg) scale(0);
  }
  75% {
    transform: rotate(-30deg) scale(1.2);
  }
  100% {
    transform: rotate(-30deg) scale(1);
  }
}
.super-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.svg-container {
  margin: 40px;
  transform: rotate(30deg);
  overflow: visible;
}
.value-props {
  overflow: visible;
  .outer-circle {
    fill: none;
    stroke: white;
    stroke-width: 1;
    transition: all 4s ease-in-out;
  }
  .buy {
    overflow: visible;
    .content-circle {
      @keyframes fade-in {
        0% {
          opacity: 0
        }
        39% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
      animation: 1s ease-in 0.6s pop-in, 1.6s ease-in 0s fade-in;
      background: $lightblue;
    }
  }
  .sell {
    overflow: visible;
    .content-circle {
      @keyframes fade-in {
        0% {
          opacity: 0
        }
        49% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
      animation: 1s ease-in 0.9s pop-in, 1.9s ease-in 0s fade-in;
      background: $green;
    }
  }
  .trade {
    overflow: visible;
    .content-circle {
      @keyframes fade-in {
        0% {
          opacity: 0
        }
        24% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
      animation: 1s ease-in 0.3s pop-in, 1.3s ease-in 0s fade-in;
      background: $orange;
    }
  }
  .content-circle {
    transform: rotate(-30deg);
    height: 100%;
    width: 100%;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: 0.4s;
    .icon-plus {
      position: absolute;
      top: 10px;
      left: 50%;
      margin-left: -14px;
      transition: 0.4s;
      @include icon-plus(28px, 13px, 1px);
    }
    p {
      padding-top: 10px;
      text-align: center;
      font-family: $font;
      margin: 0;
      color: white;
      user-select: none;
      svg {
        display: block;
        margin: 0 auto 10px;
        transition: 0.4s;
      }
    }
    .content {
      position: absolute;
      top: 50%;
      margin-top: -30px;
      padding: 0 18px;
      transition: 0.4s;
    }
    .selected-text {
      opacity: 0;
      font-size: 13px;
      line-height: 1.25;
      padding: 0;
      transition: 0.4s;
      @media only screen and (min-width: $xlarge) {
        font-size: 16px;
        padding-top: 15px;
      }
    }
    &.selected {
      .icon-plus {
        transform: rotate(45deg);
      }
      p:not(.selected-text),
      svg {
        opacity: 0;
      }
      .content {
        top: -25px;
        margin-top: 0;
      }
      .selected-text {
        opacity: 1;
      }
    }
    &:hover {
      transform: rotate(-30deg) scale(1.1);
    }
  }
}
@media only screen and (min-width: $medium) {
  .svg-container {
    margin: 0;
  }
}
</style>

