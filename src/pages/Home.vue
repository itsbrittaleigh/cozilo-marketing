<template>
  <base-page>
    <template slot="content">
      <div class="pagination">
        <i
          v-for="(section, index) in sections"
          :key="index"
          :class="{ 'active': section.isActive }"
          v-scroll-to="`#section${section.id}`"
        ></i>
      </div>
      <section class="hero home with-bg-image pagination-section">
        <parallax :speed-factor="0.3">
          <img src="static/covers/home.jpg" alt="" class="background-image">
        </parallax>
        <div class="overlay"></div>
        <div class="container">
          <div class="content">
            <h1 class="fade-in">
              <span class="green">The business only,</span>
              <span class="blue">mobile marketplace</span>
            </h1>
            <p class="fade-in">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quidem aliquid facere
              nobis deserunt delectus repellat suscipit perspiciatis fugiat dolore? Perferendis
              recusandae magnam ipsa aliquam sequi corporis iure facere distinctio?
            </p>
            <router-link
              :to="{ name: 'Contact' }"
              class="fade-in button bg-green"
            >
              Sign Up For Free &rarr;
            </router-link>
          </div>
          <bst-svg></bst-svg>
        </div>
      </section>
      <section
        id="marketplace"
        class="value-section pagination-section angle-split"
      >
        <div class="col-lt padded-section">
          <div class="container">
            <div class="section-header-icon bg-lightblue hidden">
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <h2 class="hidden">Buy headline goes here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore tempore non maiores animi? Assumenda impedit id aspernatur repellat
              ipsam aperiam iste ducimus voluptas itaque. Explicabo ullam illo vitae magnam
              repellat.
            </p>
            <ul class="feature-list lightblue">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
        <div class="mockup">
          <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
          <div class="screen-container">
            <parallax :speed-factor="0.1">
              <img src="../assets/images/mockups/cozilo_marketscroll.jpg" alt="" class="screen">
            </parallax>
          </div>
        </div>
        <div class="col-rt padded-section">
          <div class="container">
            <div class="section-header-icon bg-green hidden">
              <i class="fas fa-credit-card" style="color: white;"></i>
            </div>
            <h2 class="hidden">Sell headline goes here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam perferendis
              consectetur, odio hic quasi beatae praesentium minus explicabo sequi similique
              voluptas veritatis voluptate, possimus voluptatem vitae aperiam placeat itaque.
            </p>
            <ul class="feature-list green">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="from-to pagination-section">
        <div class="toggle">
          <div class="front padded-section">
            <div class="container">
              <div class="section-header-icon bg-lightblue hidden">
                <i class="fas fa-industry" style="color: white;"></i>
              </div>
              <h2>From the factory floor</h2>
            </div>
          </div>
          <div class="back"></div>
        </div>
        <div class="toggle">
          <div class="front padded-section">
            <div class="container">
              <div class="section-header-icon bg-orange hidden">
                <i class="fas fa-briefcase" style="color: white;"></i>
              </div>
              <h2>To the office cubicle</h2>
            </div>
          </div>
          <div class="back"></div>
        </div>
        <div class="toggle">
          <div class="front padded-section">
            <div class="container">
              <div class="section-header-icon bg-green hidden">
                <i class="fas fa-leaf" style="color: white;"></i>
              </div>
              <h2>And everything in between</h2>
            </div>
          </div>
          <div class="back"></div>
        </div>
      </section>
      <section class="value-section pagination-section angle-split angle-color">
        <div class="col-lt padded-section">
          <div class="container">
            <div class="section-header-icon bg-darkblue hidden">
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <h2 class="hidden">Top feature goes here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore tempore non maiores animi? Assumenda impedit id aspernatur repellat
              ipsam aperiam iste ducimus voluptas itaque. Explicabo ullam illo vitae magnam
              repellat.
            </p>
            <ul class="feature-list darkblue">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
        <div class="mockup item-overview">
          <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
          <div class="screen-container">
            <parallax>
              <img src="../assets/images/mockups/cozilo_itemoverview1.jpg" alt="" class="screen">
            </parallax>
          </div>
        </div>
        <div class="col-rt padded-section">
          <div class="container">
            <div class="section-header-icon bg-darkblue hidden">
              <i class="fas fa-credit-card" style="color: white;"></i>
            </div>
            <h2 class="hidden">Top feature goes here</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam perferendis
              consectetur, odio hic quasi beatae praesentium minus explicabo sequi similique
              voluptas veritatis voluptate, possimus voluptatem vitae aperiam placeat itaque.
            </p>
            <ul class="feature-list darkblue">
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="app-markup padded-section bg-white pagination-section">
        <div class="container">
          <h2 class="color-lightgray hidden">
            Cozilo: The truly mobile way to buy, sell, and trade
          </h2>
          <div class="value-props">
            <div class="col-lt">
              <div class="prop">
                <p class="large color-darkblue hidden">A business-focused platform</p>
                <p class="hidden">
                  Cozilo is a business-focused marketplace that allows you to transparently
                  set your pricing levels: wholesale, volume, individual goods&mdash;whatever
                  your business needs.
                </p>
              </div>
              <div class="prop color-lightblue">
                <p class="large hidden">Find used and new</p>
                <p class="hidden">
                  Depending on your company's budget and needs, you can find both new and
                  used goods on Cozilo, unlike other selling apps and marketplaces.
                </p>
              </div>
              <div class="prop color-orange">
                <p class="large hidden">Simple interface and payment structure</p>
                <p class="hidden">
                  With one simple push of a button, you can take high-quality photos of your
                  goods and post them directly on the Cozilo B2B marketplace for thousands
                  of other business owners to see.
                </p>
              </div>
              <div class="prop color-green">
                <p class="large hidden">Advertise while you're here</p>
                <p class="hidden">
                  Connect directly and securely with other buyers, sellers, and traders on the
                  Cozilo app to create your own personal B2B network and advertise your company.
                </p>
              </div>
            </div>
            <div class="mockup with-screen-scroll">
              <img src="../assets/images/iphone.png" alt="" class="phone-shell">
              <img src="../assets/images/mockups/cozilo_landingscreen.jpg" alt="" class="static">
            </div>
            <div class="col-rt">
              <div class="prop color-lightblue">
                <p class="large hidden">Chat with sellers</p>
                <p class="hidden">
                  Connect and communicate with other business owners directly through the app before
                  meeting in person to complete your transactions.
                </p>
              </div>
              <div class="prop color-orange">
                <p class="large hidden">Take the hassle out of shipping</p>
                <p class="hidden">
                  Cozilo takes all the hassle out of shipping goods by offering fast and efficient
                  freight shipping assistance.
                </p>
              </div>
              <div class="prop color-green">
                <p class="large hidden">Safe transcations with user ratings and an escrow</p>
                <p class="hidden">
                  With our multi-step verification process for all Cozilo business users, you can
                  be sure that every transaction is secure before ever even meeting.
                </p>
              </div>
              <div class="prop">
                <p class="large color-darkblue hidden">Choose your method of payment</p>
                <p class="hidden">
                  The Cozilo app accepts all major credit cards, including VISA, Mastercard,
                  American Express, and more.
                </p>
              </div>
            </div>
          </div>
          <div class="button-container">
            <router-link
              :to="{ name: 'Features' }"
              class="button bg-lightblue hidden"
            >
              Learn More About The App Features
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
        </div>
      </section>
      <section class="newsletter bg-orange pagination-section">
        <div class="container">
          <p class="large color-white">Sign up for our newsletter to stay up to date.</p>
          <newsletter-form></newsletter-form>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Parallax from 'vue-parallaxy';
import Base from '../templates/Base';
import NewsletterForm from '../components/NewsletterForm';
import BSTSvg from '../components/BSTSvg';
import TagAsVisible from '../mixins/TagAsVisible';

export default {
  name: 'Home',
  data() {
    return {
      sections: [],
      viewportHeight: 0,
      scrollPosition: 0,
    };
  },
  components: {
    'base-page': Base,
    'newsletter-form': NewsletterForm,
    'bst-svg': BSTSvg,
    Parallax,
  },
  mixins: [
    TagAsVisible,
  ],
  methods: {
    measureViewport() {
      this.viewportHeight = window.innerHeight;
    },
    getPosition(element) {
      return element.getBoundingClientRect().top;
    },
    updateScrollPosition() {
      const scrollPosition = window.scrollY;
      this.sections.forEach((section, index) => {
        this.sections[index].isActive = (
          section.toTopOfPage - scrollPosition
        ) < (
          (window.innerHeight / 2)
        );
        if (this.sections[index].isActive && index > 0) {
          this.sections[index - 1].isActive = false;
        }
      });
    },
  },
  mounted() {
    this.updateScrollPosition();
    window.addEventListener('scroll', () => {
      this.updateScrollPosition();
    });
    const sections = document.getElementsByClassName('pagination-section');
    for (let i = 0; i < sections.length; i += 1) {
      this.sections.push({
        isActive: false,
      });
      this.sections[i].id = `section${i}`;
      this.sections[i].toTopOfPage = this.getPosition(sections[i]);
      sections[i].id = `section${i}`;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.pagination {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
  bottom: 0;
  top: auto;
  left: 0;
  right: 0;
  padding: 20px;
  background: $darkblue;
  i {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border: 1px solid $white;
    margin-right: 20px;
    box-shadow: 1px 2px 2px 0 rgba($darkblue, 0.5);
    cursor: pointer;
    transition: 0.3s;
    &:last-of-type {
      margin-right: 0;
    }
    &.active {
      background: $white;
    }
  }
  @media only screen and (min-width: $large) {
    left: 15px;
    right: auto;
    top: 10px;
    bottom: 10px;
    height: calc(100vh - 20px);
    flex-direction: column;
    padding: 0;
    background: none;
    i {
      margin: 0 0 15px 0;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
}
.Masthead {
  position: absolute;
  min-height: 0;
  height: 100% !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
.hero {
  padding: 70px 0 120px;
  h1 {
    color: $white;
    margin-top: 0;
    font-weight: lighter;
    margin: 0 0 20px;
    .green {
      color: $green;
    }
    .blue {
      color: $lightblue;
    }
  }
  p {
    color: $white;
    margin: 0 0 20px;
  }
  .overlay {
    background: rgba($darkblue, 0.92);
  }
  @media only screen and (min-width: $medium) {
    padding: 120px 0 200px;
    > .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 850px;
    }
    .content {
      margin-right: 20px;
      flex: 1;
    }
  }
  @media only screen and (min-width: $large) {
    .content {
      max-width: 430px;
      margin-right: 40px;
    }
  }
}
.from-to {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .toggle {
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    flex: 1;
    &:nth-child(1) {
      .front {
        background-image: url('~/static/covers/cement.jpg');
      }
    }
    &:nth-child(2) {
      .front {
        background-image: url('~/static/covers/wood.jpg');
        h2 {
          color: $gray;
        }
      }
    }
    &:nth-child(3) {
      .front {
        background-image: url('~/static/covers/dirt.jpg');
      }
    }
    .front {
      background-size: cover;
      background-repeat: no-repeat;
      height: 100%;
      > .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    h2 {
      color: white;
      text-align: center;
    }
    .back {
      top: 100%;
      transition: 0.4s;
    }
    &.open {
      .back {
        top: 0;
      }
    }
  }
  @media only screen and (min-width: $large) {
    flex-direction: row;
    .toggle {
      margin: 0 20px 0 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.app-markup {
  > .container {
    max-width: 1200px;
  }
  h2 {
    text-align: center;
  }
  p {
    margin: 0;
    &:not(.large) {
      color: $lightgray;
    }
    &.large {
      font-weight: bold;
    }
  }
  .value-props {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .col-lt {
      margin-right: 20px;
      .fade-in {
        @include fade-in-up-from-left;
      }
    }
    .col-rt {
      .fade-in {
        @include fade-in-up-from-right;
      }
    }
    .prop {
      margin-bottom: 20px;
    }
  }
  .mockup {
    display: none;
  }
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  @media only screen and (min-width: 1000px) {
    .value-props {
      margin-top: 80px;
      .col-lt,
      .col-rt {
        width: 300px;
      }
      .prop {
        margin-bottom: 60px;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    p:not(.large) {
      font-size: 18px;
    }
    p.large  {
      line-height: 1.2;
    }
    .mockup {
      display: block;
      // width: 400px;
      // object-fit: contain;
      align-self: center;
    }
  }
}
.newsletter {
  padding: 80px 0;
  p {
    text-align: center;
    margin: 0 0 30px;
  }
}
</style>
