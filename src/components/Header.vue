<template>
  <header>
    <div class="headline">
      <p>
        Coming soon to
        <i class="fab fa-apple fa-2x"></i>
        <i class="fab fa-google-play fa-2x"></i>
        Available for free
      </p>
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
    padding: 8px 0;
    p {
      color: white;
      @include title-font;
      margin: 0;
      font-size: 12px;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      &:first-of-type {
        margin: 0 10px 0 10px;
        @media only screen and (min-width: $medium) {
          margin: 0 15px 0 20px;
        }
      }
      &:last-of-type {
        margin: 0 10px 0 0;
        @media only screen and (min-width: $medium) {
          margin: 0 20px 0 0;
        }
      }
    }
  }
  .header {
    padding: 30px 0;
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
      padding: 30px 0;
    }
    a {
      line-height: normal;
    }
  }
}
</style>

