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
      <span>
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Features' }">Features</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'FAQ' }">FAQ</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Pricing' }">Pricing</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact' }">Contact</router-link>
        </li>
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
  background: $orange;
  border-radius: 3px;
  width: 40px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -15px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  z-index: 101;
  border: none;
  padding: 0;
  @media only screen and (min-width: $large) {
    display: none;
    visibility: hidden;
  }
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 20px;
    background-color: $white;
    border-radius: 2px;
    opacity: 1;
    left: 10px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 8px;
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 14px;
    }
    &:nth-child(4) {
      top: 20px;
    }
  }
}
ul {
  height: 0;
  text-align: center;
  position: absolute;
  z-index: 100;
  overflow: hidden;
  top: 100%;
  left: -6%;
  right: -6%;
  margin: 0;
  list-style-type: none;
  transition: height 0.4s;
  background: white;
  li {
    a {
      padding: 10px 0;
      display: block;
      color: $lightblue;
      text-decoration: none;
      text-transform: uppercase;
      transition: 0.4s;
      &.router-link-active {
        color: $green;
      }
      &:hover {
        color: $orange;
      }
    }
  }
  &.open {
    margin-top: 15px;
    border-top: 1px solid #e2e2e2;
    padding: 15px 0;
    height: 253px;
  }
}
@media only screen and (min-width: $large) {
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
    justify-content: space-between;
    align-items: center;
    padding: 0;
    background: transparent;
    flex: 1;
    span {
      display: flex;
    }
    li {
      margin-left: 50px;
      a {
        color: $gray;
        font-size: 16px;
      }
      @media only screen and (min-width: $xlarge) {
        margin-left: 70px;
      }
    }
  }
}
</style>
