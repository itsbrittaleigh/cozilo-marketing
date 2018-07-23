<template>
  <div
    :class="{
      'page': true,
      'sticky-header': stickyHeader,
    }"
  >
    <app-header></app-header>
    <main>
      <slot name="content"></slot>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'Base',
  data() {
    return {
      heroEndToTop: 0,
      stickyHeader: false,
    };
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
  methods: {
    stickHeader() {
      const difference = this.heroEndToTop - window.pageYOffset;
      this.stickyHeader = difference < 0;
    },
  },
  mounted() {
    const hero = document.querySelector('#hero');
    if (hero) this.heroEndToTop = hero.clientHeight;
    document.addEventListener('scroll', () => {
      if (window.pageYOffset) this.stickHeader();
    });
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
.sticky-header {
  header .header {
    @keyframes slide-down {
      0% { max-height: 0; }
      100% { max-height: 81px; }
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: white;
    box-shadow: 0 0 2px 0 rgba(lightgray, 0.6);
    animation: slide-down 0.4s;
    @media only screen and (min-width: $large) {
      @keyframes slide-down {
        0% { max-height: 0; }
        100% { max-height: 114px; }
      }
      animation: slide-down 0.4s;
    }
  }
}
</style>

