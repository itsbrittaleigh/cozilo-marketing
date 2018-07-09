<template>
  <header>
    <div class="headline">
      <p>Coming soon to</p>
      <img src="../assets/images/icons/apple-white.png" alt="Apple App Store logo">
      <img src="../assets/images/icons/google-play-white.png" alt="Google Play Store logo">
      <p>Available for free</p>
    </div>
    <div class="header">
      <div class="container">
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/images/logos/cozilo.svg" alt="Cozilo logo" class="logo">
        </router-link>
        <app-menu></app-menu>
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'Header',
  data() {
    return {};
  },
  components: {
    'app-menu': Navigation,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
header {
  .headline {
    background: $green;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px 0;
    p {
      color: white;
      @include title-font;
      margin: 0 15px;
      font-size: 12px;
      line-height: normal;
    }
    img {
      max-height: 15px;
      max-width: 13px;
      &:first-of-type {
        margin-right: 15px;
      }
    }
  }
  .header {
    padding: 15px 0;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    .logo {
      width: 200px;
      height: auto;
    }
    @media only screen and (min-width: 1000px) {
      padding: 20px 0;
    }
    a {
      line-height: normal;
    }
  }
}
</style>

