<template>
  <header>
    <div class="container">
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
  padding: 41px 0;
  position: relative;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
}
</style>

