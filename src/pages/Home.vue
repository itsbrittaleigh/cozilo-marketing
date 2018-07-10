<template>
  <base-page>
    <template slot="content">
      <div class="pagination">
        <i
          v-for="(section, index) in sections"
          :key="index"
          :class="{ 'active': section.isActive }"
          v-scroll-to="`#${section.id}`"
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
        <div :class="{ toggle: true, open: factoryIsOpen }">
          <i class="icon-plus" @click="toggleFactory"></i>
          <div class="front padded-section">
            <div class="container">
              <div class="section-header-icon bg-lightblue hidden">
                <i class="fas fa-industry" style="color: white;"></i>
              </div>
              <h2>From the factory floor</h2>
            </div>
          </div>
          <div class="back">
            <div class="container">
              <header>
                <div class="section-header-icon bg-white">
                  <i class="fas fa-industry" style="color: #62a9c5"></i>
                </div>
                <p><em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora,
                  ipsa repellat eius totam earum, aut officiis
                </em></p>
              </header>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div :class="{ toggle: true, open: cubicleIsOpen }">
          <i class="icon-plus" @click="toggleCubicle"></i>
          <div class="front padded-section">
            <div class="container">
              <div class="section-header-icon bg-orange hidden">
                <i class="fas fa-briefcase" style="color: white;"></i>
              </div>
              <h2>To the office cubicle</h2>
            </div>
          </div>
          <div class="back">
            <div class="container">
              <header>
                <div class="section-header-icon bg-white">
                  <i class="fas fa-briefcase" style="color: #ec632e"></i>
                </div>
                <p><em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora,
                  ipsa repellat eius totam earum, aut officiis
                </em></p>
              </header>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
        <div :class="{ toggle: true, open: betweenIsOpen }">
          <i class="icon-plus" @click="toggleBetween"></i>
          <div class="front padded-section">
            <div class="container">
              <div class="section-header-icon bg-green hidden">
                <i class="fas fa-leaf" style="color: white;"></i>
              </div>
              <h2>And everything in between</h2>
            </div>
          </div>
          <div class="back">
            <div class="container">
              <header>
                <div class="section-header-icon bg-white">
                  <i class="fas fa-leaf" style="color: #77c373"></i>
                </div>
                <p><em>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora,
                  ipsa repellat eius totam earum, aut officiis
                </em></p>
              </header>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="pagination-section angle-split angle-color">
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
          <h2 class="hidden">
            Cozilo:
            <span class="lower">
              The truly mobile way to
              <span class="color-lightblue">buy,</span>
              <span class="color-green">sell,</span>
              <span class="color-orange">and trade.</span>
            </span>
          </h2>
          <div class="value-props">
            <div class="col-lt">
              <div :class="{'prop lightblue': true, 'selected': featureOneIsSelected}">
                <i class="icon-plus" @click="toggleFeatureOne"></i>
                <p class="large hidden">Feature one</p>
                <p class="hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div :class="{'prop orange': true, 'selected': featureTwoIsSelected}">
                <i class="icon-plus" @click="toggleFeatureTwo"></i>
                <p class="large hidden">Feature two</p>
                <p class="hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div :class="{'prop green': true, 'selected': featureThreeIsSelected}">
                <i class="icon-plus" @click="toggleFeatureThree"></i>
                <p class="large hidden">Feature three</p>
                <p class="hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div class="mockup item-overview">
              <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
              <div class="screen-container">
                <img src="../assets/images/mockups/cozilo_landingscreen.jpg" alt="" class="screen">
              </div>
            </div>
            <div class="col-rt">
              <div :class="{'prop lightblue': true, 'selected': featureFourIsSelected}">
                <i class="icon-plus" @click="toggleFeatureFour"></i>
                <p class="large hidden">Feature four</p>
                <p class="hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div :class="{'prop orange': true, 'selected': featureFiveIsSelected}">
                <i class="icon-plus" @click="toggleFeatureFive"></i>
                <p class="large hidden">Feature five</p>
                <p class="hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div :class="{'prop green': true, 'selected': featureSixIsSelected}">
                <i class="icon-plus" @click="toggleFeatureSix"></i>
                <p class="large hidden">Feature six</p>
                <p class="hidden">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div class="button-container">
            <router-link
              :to="{ name: 'Features' }"
              class="button bg-lightblue hidden"
            >
              Learn More About Cozilo's Features &rarr;
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
      factoryIsOpen: false,
      cubicleIsOpen: false,
      betweenIsOpen: false,
      featureOneIsSelected: false,
      featureTwoIsSelected: false,
      featureThreeIsSelected: false,
      featureFourIsSelected: false,
      featureFiveIsSelected: false,
      featureSixIsSelected: false,
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
    toggleCubicle() {
      this.cubicleIsOpen = !this.cubicleIsOpen;
    },
    toggleFactory() {
      this.factoryIsOpen = !this.factoryIsOpen;
    },
    toggleBetween() {
      this.betweenIsOpen = !this.betweenIsOpen;
    },
    toggleFeatureOne() {
      this.featureOneIsSelected = !this.featureOneIsSelected;
    },
    toggleFeatureTwo() {
      this.featureTwoIsSelected = !this.featureTwoIsSelected;
    },
    toggleFeatureThree() {
      this.featureThreeIsSelected = !this.featureThreeIsSelected;
    },
    toggleFeatureFour() {
      this.featureFourIsSelected = !this.featureFourIsSelected;
    },
    toggleFeatureFive() {
      this.featureFiveIsSelected = !this.featureFiveIsSelected;
    },
    toggleFeatureSix() {
      this.featureSixIsSelected = !this.featureSixIsSelected;
    },
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
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid #d9d9d9;
    margin-right: 15px;
    cursor: pointer;
    transition: 0.3s;
    &:last-of-type {
      margin-right: 0;
    }
    &.active {
      background: #d9d9d9;
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
    height: 450px;
    &:nth-child(1) {
      .front {
        background-image: url('~/static/covers/cement.jpg');
      }
      .back {
        background: $lightblue;
      }
    }
    &:nth-child(2) {
      .front {
        background-image: url('~/static/covers/wood.jpg');
        h2 {
          color: $gray;
        }
      }
      .back {
        background: $orange;
      }
    }
    &:nth-child(3) {
      .front {
        background-image: url('~/static/covers/dirt.jpg');
      }
      .back {
        background: $green;
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
      position: absolute;
      top: 100%;
      height: 100%;
      width: 100%;
      z-index: 5;
      transition: 0.4s;
      padding: 40px 20px 20px;
      p,
      li {
        color: white;
      }
      header {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        p {
          flex: 1;
          margin: 0 0 0 15px;
        }
      }
    }
    .icon-plus {
      position: absolute;
      top: 10px;
      right: 10px;
      @include icon-plus;
    }
    &.open {
      .icon-plus {
        &:after,
        &:before {
          transform: rotate(45deg);
        }
      }
      .back {
        top: 0;
      }
    }
  }
  @media only screen and (min-width: $large) {
    flex-direction: row;
    margin-bottom: 30px;
    .toggle {
      flex: 1;
      margin: 0 30px 0 0;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.app-markup {
  h2 {
    color: $lightgray;
    text-align: center;
    margin-bottom: 40px;
    .lower {
      text-transform: none;
    }
  }
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
  .mockup {
    display: none;
    visibility: hidden;
  }
  .value-props {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    .prop {
      width: 300px;
      padding: 20px 40px;
      margin-bottom: 20px;
      background: #f6f6f6;
      border-radius: 5px;
      position: relative;
      transition: 0.4s;
      &.selected {
        &.orange,
        &.lightblue,
        &.green {
          p,
          p.large {
            color: white;
          }
          .icon-plus {
            background: $darkblue;
          }
        }
      }
      .icon-plus {
        position: absolute;
        left: -10px;
        top: 20px;
        border-radius: 20px;
        transition: 0.4s;
        @include icon-plus(20px, 11px, 1px);
      }
      &.green {
        p.large {
          color: $green;
        }
        .icon-plus {
          background: $green;
        }
        &.selected {
          background: $green;
        }
      }
      &.orange {
        p.large {
          color: $orange;
        }
        .icon-plus {
          background: $orange;
        }
        &.selected {
          background: $orange;
        }
      }
      &.lightblue {
        p.large {
          color: $lightblue;
        }
        .icon-plus {
          background: $lightblue;
        }
        &.selected {
          background: $lightblue;
        }
      }
      p {
        margin: 0;
        &.large {
          font-weight: bold;
        }
      }
    }
    @media only screen and (min-width: $large) {
      justify-content: space-between;
      .mockup {
        display: block;
        visibility: visible;
      }
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
