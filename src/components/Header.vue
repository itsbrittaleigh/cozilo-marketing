<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/images/logos/cozilo.svg" alt="Cozilo logo" class="logo">
      </router-link>
      <app-menu></app-menu>
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
header {
  padding: 20px 0;
  position: relative;
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
    padding: 40px 0;
  }
  a {
    line-height: normal;
  }
}
</style>

