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
  mounted() {
    const hero = document.querySelector('#hero');
    if (hero) this.heroEndToTop = hero.clientHeight;
    document.addEventListener('scroll', () => {
      this.stickyHeader = window.pageYOffset > 40;
    });
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
.sticky-header {
  header .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    overflow: hidden;
    background: white;
    box-shadow: 0 0 2px 0 rgba(lightgray, 0.6);
  }
}
</style>

