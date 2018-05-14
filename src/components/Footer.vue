<template>
  <footer>
    <div class="container">
      <img src="https://fillmurray.com/300/100" alt="Cozilo logo" class="logo">
      <div class="soon">
        <p>Coming soon to</p>
        <img src="https://fillmurray.com/30/30" alt="Apple App Store logo">
        <img src="https://fillmurray.com/30/30" alt="Google Play Store logo">
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

footer {
  padding: 50px 0 20px;
  background: $darkblue;
  .logo {
    height: 75px;
    width: auto;
    object-fit: contain;
  }
  .soon {
    display: flex;
    align-items: center;
    margin-top: 20px;
    p {
      @include title-font;
      color: $white;
      font-size: 15px;
    }
    img {
      margin-left: 15px;
    }
  }
  @media only screen and (min-width: 1000px) {
    padding: 50px 0;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .soon {
      margin-top: 0;
    }
  }
}
</style>

