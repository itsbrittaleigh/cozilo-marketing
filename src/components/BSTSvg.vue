<template>
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
        <circle
          class="buy"
          :cx="buyCircleXCoordinate"
          :cy="buyCircleYCoordinate"
          :r="innerCircleRadius"
        />
        <foreignObject
          :x="buyCircleXCoordinate - innerCircleRadius"
          :y="buyCircleYCoordinate - innerCircleRadius"
          :width="innerCircleRadius * 2"
          :height="innerCircleRadius * 2"
        >
          <div class="content-circle">
            <p>
              <i class="fas fa-shopping-cart fa-lg"></i>
              BUY
            </p>
          </div>
        </foreignObject>
      </g>
      <g>
        <circle
          class="sell"
          :cx="sellCircleXCoordinate"
          :cy="sellCircleYCoordinate"
          :r="innerCircleRadius"
        />
        <foreignObject
          :x="sellCircleXCoordinate - innerCircleRadius"
          :y="sellCircleYCoordinate - innerCircleRadius"
          :width="innerCircleRadius * 2"
          :height="innerCircleRadius * 2"
        >
          <div class="content-circle">
            <p>
              <i class="fas fa-credit-card fa-lg"></i>
              SELL
            </p>
          </div>
        </foreignObject>
      </g>
      <g>
        <circle
          class="trade"
          :cx="tradeCircleXCoordinate"
          :cy="tradeCircleYCoordinate"
          :r="innerCircleRadius"
        />
        <foreignObject
          :x="tradeCircleXCoordinate - innerCircleRadius"
          :y="tradeCircleYCoordinate - innerCircleRadius"
          :width="innerCircleRadius * 2"
          :height="innerCircleRadius * 2"
        >
          <div class="content-circle">
            <p>
              <i class="fas fa-exchange-alt fa-lg"></i>
              TRADE
            </p>
          </div>
        </foreignObject>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BSTSvg',
  props: [],
  data() {
    return {
      innerCircleRadius: 75,
      outerCircleRadius: 100,
      canvasWidth: 330,
    };
  },
  computed: {
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
    sellCircleXCoordinate() {
      return (this.outerCircleRadius + this.offset) + this.margin;
    },
    sellCircleYCoordinate() {
      return (this.outerCircleRadius + (this.outerCircleRadius / 2)) + (this.margin * 1.5);
    },
    tradeCircleXCoordinate() {
      return this.canvasWidth / 2;
    },
    tradeCircleYCoordinate() {
      return (this.margin * 1.5);
    },
  },
  mounted() {
    const shape = document.querySelector('.outer-circle');
    setTimeout(() => {
      shape.setAttribute('stroke-dashoffset', 0);
    }, 0);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.svg-container {
  margin: 40px auto 0;
}
.value-props {
  .outer-circle {
    fill: none;
    stroke: white;
    stroke-width: 1;
    transition: all 4s ease-in-out;
  }
  .buy {
    fill: $lightblue;
  }
  .sell {
    fill: $green;
  }
  .trade {
    fill: $orange;
  }
  .content-circle {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      font: $font;
      margin: 0;
      color: white;
      svg {
        display: block;
        margin: 0 auto 10px;
      }
    }
  }
}
@media only screen and (min-width: $medium) {
  .svg-container {
    margin: 0;
  }
}
</style>

