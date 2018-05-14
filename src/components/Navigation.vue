<template>
  <nav>
    <button
      v-if="menuIsMobile"
      @click="toggleMenu()"
      class="burger"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul :class="{'base-menu': true, 'open': menuIsOpen}">
      <li>
        <router-link :to="{ name: 'About' }">Features</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }">Stay Connected</router-link>
      </li>
      <span class="soon">
        <p>Coming soon to</p>
        <img src="https://fillmurray.com/30/30" alt="Apple App Store logo">
        <img src="https://fillmurray.com/30/30" alt="Google Play Store logo">
      </span>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navigation',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'menuIsMobile',
      'menuIsOpen',
    ]),
  },
  methods: {
    ...mapActions([
      'toggleMenu',
      'resizeScreen',
    ]),
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.resizeScreen();
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
// hamburger button
button {
  width: 24px;
  height: 18px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -9px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  z-index: 101;
  border: none;
  background: none;
  padding: 0;
  @media only screen and (min-width: 1000px) {
    display: none;
    visibility: hidden;
  }
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: $green;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 7px;
    }
    &:nth-child(4) {
      top: 14px;
    }
  }
}
ul {
  width: 100vw;
  height: 100vh;
  padding: 120px 5% 0;
  text-align: right;
  position: fixed;
  top: 0;
  left: 100vw;
  margin: 0;
  list-style-type: none;
  background: rgba($darkblue, 0.95);
  transition: left 0.4s;
  li {
    a {
      padding: 10px 0;
      display: block;
      color: $white;
      text-decoration: none;
      @include title-font;
    }
  }
  &.open {
    left: 0;
  }
}
.soon {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 100px;
  p {
    @include title-font;
    color: $white;
  }
  img {
    margin-left: 15px;
  }
}
@media only screen and (min-width: 1000px) {
  nav {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
    position: static;
    height: auto;
    width: auto;
    justify-content: flex-end;
    padding: 0;
    background: transparent;
    li {
      margin-left: 50px;
      a {
        color: $lightblue;
      }
    }
  }
  .soon {
    color: $green;
    margin-top: 0;
  }
}
</style>

