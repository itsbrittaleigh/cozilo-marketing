<template>
  <footer>
    <div class="container">
      <img src="../assets/images/logos/cozilo-white.svg" alt="Cozilo logo" class="logo">
      <div class="flex">
        <div class="col-lt">
          <nav>
            <ul>
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
            </ul>
          </nav>
        </div>
        <div class="col-rt">
          <p>Coming soon to</p>
          <div class="icons">
            <img src="../assets/images/icons/apple-white.png" alt="Apple App Store logo">
            <img src="../assets/images/icons/google-play-white.png" alt="Google Play Store logo">
          </div>
        </div>
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
  padding: 30px 0;
  background: $darkblue;
  .logo {
    width: 200px;
    height: auto;
  }
  .flex {
    display: flex;
    .col-lt,
    .col-rt {
      width: 50%;
    }
  }
  nav {
    ul {
      margin: 13px 0 0;
      padding: 0;
      list-style-type: none;
      a {
        text-transform: uppercase;
        color: #818d9a;
        font-size: 13px;
        text-decoration: none;
        line-height: 2;
      }
    }
  }
  .col-rt {
    p {
      text-transform: uppercase;
      color: #818d9a;
      font-size: 13px;
    }
    img {
      margin-right: 15px;
      height: 20px;
    }
  }
  @media only screen and (min-width: 1000px) {
    .container {
      display: flex;
      align-items: center;
    }
    .flex {
      flex: 1;
      justify-content: space-between;
      align-items: center;
      .col-lt,
      .col-rt {
        width: auto;
      }
    }
    nav {
      ul {
        margin: 0;
        display: flex;
        li {
          margin-left: 50px;
          a {
            font-size: 16px;
          }
          @media only screen and (min-width: $xlarge) {
            margin-left: 70px;
          }
        }
      }
    }
    .col-rt {
      display: flex;
      align-items: center;
      img {
        margin: 0 0 0 15px;
      }
      p {
        font-size: 16px;
      }
    }
  }
}
</style>

