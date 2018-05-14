<template>
  <header>
    <div class="container">
      <img src="https://fillmurray.com/300/100" alt="Cozilo logo" class="logo">
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
    height: 75px;
    width: auto;
    object-fit: contain;
  }
  @media only screen and (min-width: 1000px) {
    padding: 40px 0;
  }
}
</style>

