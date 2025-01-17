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
      <section id="hero" class="hero home with-bg-image pagination-section">
        <parallax :speed-factor="0.3">
          <img src="static/covers/home.jpg" alt="" class="background-image">
        </parallax>
        <div class="overlay"></div>
        <div class="container">
          <div class="content">
            <h1 class="hidden" v-in-viewport.once>
              <span class="green">The business-focused,</span>
              <span class="blue">mobile marketplace</span>
            </h1>
            <p class="hidden" v-in-viewport.once>
              Reach out to serious buyers and sellers from a wide selection of industries
              easily and quickly, right from our free mobile app available on iOS and Android.
            </p>
            <router-link
              v-in-viewport.once
              :to="{ name: 'Contact' }"
              class="hidden button bg-green"
            >
              Sign Up For Free &rarr;
            </router-link>
          </div>
          <bst-svg></bst-svg>
        </div>
        <a href="" class="arrow" v-scroll-to="'#section1'">
          <img src="static/icons/arrow-down.png" alt="">
        </a>
      </section>
      <section class="value-section pagination-section angle-split">
        <div class="col-lt padded-section">
          <div class="container">
            <div class="section-header-icon bg-lightblue hidden" v-in-viewport.once>
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <h2 class="hidden" v-in-viewport.once>Buy with confidence</h2>
            <p class="hidden" v-in-viewport.once>
              With thousands of new & used goods across 50+ categories on the Cozilo
              feed, quickly and easily find the products you need.
            </p>
            <ul class="feature-list lightblue hidden" v-in-viewport.once>
              <li>Opening your new business</li>
              <li>Expanding your current business</li>
              <li>Getting your employees the products they need</li>
            </ul>
          </div>
        </div>
        <div class="mockup">
          <img src="../assets/images/iphone-shadow.png" alt="" class="phone-shell">
          <div class="screen-container">
            <parallax :speed-factor="0.1">
              <img src="../assets/images/mockups/cozilo_mainpage.jpg" alt="" class="screen">
            </parallax>
          </div>
        </div>
        <div class="col-rt padded-section">
          <div class="container">
            <div class="section-header-icon bg-green hidden" v-in-viewport.once>
              <i class="fas fa-credit-card" style="color: white;"></i>
            </div>
            <h2 class="hidden" v-in-viewport.once>Sell with ease</h2>
            <p class="hidden" v-in-viewport.once>
              Selling on Cozilo is as easy as uploading an image of your goods, posting
              to the sales feed, and communicating directly with a buyer - all from your
              mobile device.
            </p>
            <ul class="feature-list green hidden" v-in-viewport.once>
              <li>Sell a wide range of products and goods</li>
              <li>Liquidating overstock or excessive inventory</li>
              <li>Removing clutter from your office space</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="from-to pagination-section">
        <div :class="{ toggle: true, open: factoryIsOpen }">
          <div class="front padded-section" @click="toggleFactory">
            <img src="static/covers/architecture-building-empty.jpg" alt="">
            <div class="overlay"></div>
            <div class="container">
              <div class="section-header-icon bg-white hidden" v-in-viewport.once>
                <i class="fas fa-industry" style="color: #2d3f50;"></i>
              </div>
              <h2 class="hidden" v-in-viewport.once>From the factory floor</h2>
              <div class="divider"></div>
              <span class="more">Learn More <span class="plus">+</span></span>
            </div>
          </div>
          <div class="back">
            <i class="icon-plus" @click="toggleFactory"></i>
            <div class="container">
              <header>
                <div class="section-header-icon section-header-icon-large bg-white">
                  <i class="fas fa-industry fa-lg" style="color: #2d3f50"></i>
                </div>
                <p><em>
                  From heavy machinery to textiles and automotive parts, you
                  can find all of your industrial business needs on Cozilo.
                </em></p>
              </header>
              <div class="categories">
                <div class="col-rt">
                  <div class="category">
                    <h3>Auto &amp; Transportation</h3>
                    <ul>
                      <li>Automotive and Motorcycle Components</li>
                      <li>Transportation</li>
                    </ul>
                  </div>
                  <div class="category">
                    <h3>Home, Lights, and Construction</h3>
                    <ul>
                      <li>Construction Equipment</li>
                      <li>Lights and Lighting</li>
                    </ul>
                  </div>
                </div>
                <div class="col-rt">
                  <div class="category">
                    <h3>Machinery, Industrial, &amp; Tools</h3>
                    <ul>
                      <li>Hardware</li>
                      <li>Industrial Parts</li>
                      <li>Machinery</li>
                      <li>Tools</li>
                    </ul>
                  </div>
                  <div class="category">
                    <h3>Metals, Chemicals, Rubber, and Plastics</h3>
                    <ul>
                      <li>Chemicals</li>
                      <li>Energy, Environmental</li>
                      <li>Minerals, Metallurgy</li>
                      <li>Rubber, Plastics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ toggle: true, open: cubicleIsOpen }">
          <div class="front padded-section" @click="toggleCubicle">
            <img src="static/covers/chairs-computers-contemporary.jpg" alt="">
            <div class="overlay"></div>
            <div class="container">
              <div class="section-header-icon bg-white hidden" v-in-viewport.once>
                <i class="fas fa-briefcase" style="color: #ec632e;"></i>
              </div>
              <h2 class="hidden" v-in-viewport.once>To the office cubicle</h2>
              <div class="divider"></div>
              <span class="more">Learn More <span class="plus">+</span></span>
            </div>
          </div>
          <div class="back">
            <i class="icon-plus" @click="toggleCubicle"></i>
            <div class="container">
              <header>
                <div class="section-header-icon section-header-icon-large bg-white">
                  <i class="fas fa-briefcase fa-lg" style="color: #ec632e"></i>
                </div>
                <p><em>
                  Stock your entire office with products ranging from electronics
                  hardware or software to packaging and office supplies.
                </em></p>
              </header>
              <div class="categories">
                <div class="col-lt">
                  <div class="category">
                    <h3>Electronics</h3>
                    <ul>
                      <li>Computer Hardware</li>
                      <li>Computer Software</li>
                      <li>Consumer Electronics</li>
                      <li>Hard Drives</li>
                      <li>Printers and Scanners</li>
                      <li>Security Systems</li>
                    </ul>
                  </div>
                  <div class="category">
                  <h3>Electrical Equipment</h3>
                  <ul>
                    <li>Electrical Equipment and Supplies</li>
                    <li>Telecommunications</li>
                  </ul>
                </div>
                </div>
                <div class="col-rt">
                  <div class="category">
                    <h3>Office Furniture</h3>
                    <ul>
                      <li>Conference Tables</li>
                      <li>Desks and Chairs</li>
                      <li>Filing Cabinets</li>
                    </ul>
                  </div>
                  <div class="category">
                    <h3>Packaging and Office Supplies</h3>
                    <ul>
                      <li>Office and School Supplies</li>
                      <li>Packaging and Printing</li>
                      <li>Service Equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ toggle: true, open: betweenIsOpen }">
          <div class="front padded-section" @click="toggleBetween">
            <img src="static/covers/bags-business-commerce.jpg" alt="">
            <div class="overlay"></div>
            <div class="container">
              <div class="section-header-icon bg-white hidden" v-in-viewport.once>
                <i class="fas fa-leaf" style="color: #77c373;"></i>
              </div>
              <h2 class="hidden" v-in-viewport.once>And everything in between</h2>
              <div class="divider"></div>
              <span class="more">Learn More <span class="plus">+</span></span>
            </div>
          </div>
          <div class="back">
            <i class="icon-plus" @click="toggleBetween"></i>
            <div class="container">
              <header>
                <div class="section-header-icon section-header-icon-large bg-white">
                  <i class="fas fa-leaf fa-lg" style="color: #77c373"></i>
                </div>
                <p><em>
                  Find consumer goods like bags, luggage, sporting goods, toys,
                  and more to replenish your business’s supply, all on Cozilo.
                </em></p>
              </header>
              <div class="categories">
                <div class="col-lt">
                  <div class="category">
                    <h3>Apparel, Textiles, and Accessories</h3>
                    <ul>
                      <li>Apparel</li>
                      <li>Fashion, Jewelry, and Accessories</li>
                      <li>Textile and Leather</li>
                    </ul>
                  </div>
                  <div class="category">
                    <h3>Agriculture and Food</h3>
                    <ul>
                      <li>Agricultural Goods</li>
                      <li>Food and Beverage Goods</li>
                    </ul>
                  </div>
                </div>
                <div class="col-rt">
                  <div class="category">
                    <h3>Bags, Shoes, and Accessories</h3>
                    <ul>
                      <li>Luggage, Bags, and Cases</li>
                      <li>Shoes and Accessories</li>
                    </ul>
                  </div>
                  <div class="category">
                    <h3>Gifts, Toys, and Sporting Goods</h3>
                    <ul>
                      <li>Gifts and Crafts</li>
                      <li>Sports and Entertainment</li>
                      <li>Toys and Hobbies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pagination-section angle-split angle-color">
        <div class="col-lt padded-section">
          <div class="container">
            <div class="section-header-icon bg-darkblue hidden" v-in-viewport.once>
              <i class="fas fa-building" style="color: white;"></i>
            </div>
            <h2 class="hidden" v-in-viewport.once>A truly mobile, business-focused app</h2>
            <!-- <p class="hidden" v-in-viewport.once>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore tempore non maiores animi? Assumenda impedit id aspernatur repellat
              ipsam aperiam iste ducimus voluptas itaque. Explicabo ullam illo vitae magnam
              repellat.
            </p> -->
            <ul class="feature-list darkblue hidden" v-in-viewport.once>
              <li>Mobile app for on-the-move business owners</li>
              <li>Seamless navigation from sales feed to purchasing process</li>
              <li>Verified interactions with other companies</li>
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
            <div class="section-header-icon bg-darkblue hidden" v-in-viewport.once>
              <i class="fas fa-comments" style="color: white;"></i>
            </div>
            <h2 class="hidden" v-in-viewport.once>Chat with other businesses in real time</h2>
            <!-- <p class="hidden" v-in-viewport.once>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quibusdam perferendis
              consectetur, odio hic quasi beatae praesentium minus explicabo sequi similique
              voluptas veritatis voluptate, possimus voluptatem vitae aperiam placeat itaque.
            </p> -->
            <ul class="feature-list darkblue hidden" v-in-viewport.once>
              <li>Get quotes from multiple buyers or sellers</li>
              <li>Save and group messages</li>
              <li>Send images directly within chat</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="app-markup padded-section bg-white pagination-section">
        <div class="container">
          <h2 class="hidden" v-in-viewport.once>
            Cozilo:
            <span class="lower">
              The truly mobile way to
              <span class="color-lightblue">buy,</span>
              <span class="color-green">sell,</span>
              <span class="color-orange">and trade.</span>
            </span>
          </h2>
          <app-markup-carousel v-if="isMobile"></app-markup-carousel>
          <app-markup-toggle v-else></app-markup-toggle>
          <div class="button-container">
            <router-link
              :to="{ name: 'Features' }"
              class="button bg-lightblue hidden"
              v-in-viewport.once
            >
              Learn More About Cozilo's Features &rarr;
            </router-link>
          </div>
        </div>
      </section>
      <section class="newsletter bg-orange">
        <div class="container">
          <p class="large color-white hidden" v-in-viewport.once>
            Sign up for our newsletter to stay up to date.
          </p>
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
import AppMarkupCarousel from '../components/AppMarkupCarousel';
import AppMarkupToggle from '../components/AppMarkupToggle';

export default {
  name: 'Home',
  data() {
    return {
      isMobile: window.innerWidth < 992,
      sections: [],
      viewportHeight: 0,
      scrollPosition: 0,
      factoryIsOpen: false,
      cubicleIsOpen: false,
      betweenIsOpen: false,
    };
  },
  components: {
    'base-page': Base,
    'newsletter-form': NewsletterForm,
    'bst-svg': BSTSvg,
    'app-markup-carousel': AppMarkupCarousel,
    'app-markup-toggle': AppMarkupToggle,
    Parallax,
  },
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

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 992;
    });
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
    width: 15px;
    height: 15px;
    border-radius: 15px;
    border: 1px solid #d9d9d9;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:last-of-type {
      margin-right: 0;
    }
    &.active,
    &:hover {
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
  padding: 70px 0 180px;
  position: relative;
  .arrow {
    padding: 20px;
    width: 100px;
    position: absolute;
    bottom: 60px;
    left: 50%;
    margin-left: -50px;
    z-index: 10;
    &:hover {
      @keyframes slide {
        0% { margin-bottom: 0; }
        50% { margin-bottom: -20px; }
        100% { margin-bottom: 0; }
      }
      img {
        animation: 1s ease-in-out 0s slide infinite;
      }
    }
  }
  h1 {
    color: $white;
    font-weight: lighter;
    margin: 0 0 10px;
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
    }
    .content {
      margin-right: 20px;
      flex: 1;
    }
  }
  @media only screen and (min-width: $large) {
    min-height: calc(100vh - 144px);
    display: flex;
    align-items: center;
    .content {
      max-width: 570px;
      margin-right: 40px;
    }
  }
  @media only screen and (min-width: $xxxlarge) {
    .content {
      max-width: 580px;
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
    margin-bottom: 10px;
    height: 500px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
      transition: 0.4s;
    }
    &:nth-child(1) {
      .front {
        .overlay {
          background: rgba($darkblue, 0.9);
        }
      }
      .back {
        background: $darkblue;
      }
    }
    &:nth-child(2) {
      .front {
        .overlay {
          background: rgba($orange, 0.9);
        }
      }
      .back {
        background: $orange;
      }
    }
    &:nth-child(3) {
      .front {
        .overlay {
          background: rgba($green, 0.9);
        }
      }
      .back {
        background: $green;
      }
    }
    .front {
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;
      height: 100%;
      padding: 0 50px;
      position: relative;
      transition: 0.4s;
      cursor: pointer;
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      > .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 3;
        position: relative;
        transition: 0.4s;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
        > .container {
          padding-bottom: 40px;
        }
      }
    }
    h2 {
      color: white;
      text-align: center;
    }
    .divider {
      height: 1px;
      width: 50%;
      background: white;
      margin: 50px 0;
    }
    .more {
      @include title-font;
      color: white;
      display: flex;
      align-items: center;
      line-height: 1;
      .plus {
        font-weight: 300;
        font-size: 38px;
        margin-left: 10px;
      }
    }
    .back {
      position: absolute;
      top: 100%;
      height: 100%;
      width: 100%;
      z-index: 5;
      transition: 0.7s;
      padding: 50px 10px 20px;
      header {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        p {
          flex: 1;
          margin: 0 0 0 15px;
        }
      }
      h3,
      p,
      li {
        color: white;
      }
      .categories {
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
        .col-lt,
        .col-rt {
          width: calc(50% - 5px);
        }
      }
      .category {
        margin-top: 20px;
        img {
          height: 15px;
        }
        h3 {
          font-weight: bold;
          margin: 5px 0;
          font-size: 16px;
        }
        ul {
          margin: 0;
          padding: 0 20px;
          li {
            font-size: 12px;
          }
        }
      }
    }
    .icon-plus {
      position: absolute;
      top: 10px;
      right: 10px;
      @include icon-plus;
      cursor: pointer;
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
    margin-bottom: 10px;
    .toggle {
      height: 665px;
      flex: 1;
      margin: 0 10px 0 0;
      &:last-child {
        margin-right: 0;
      }
      .back {
        padding: 50px 20px 20px 40px;
      }
    }
  }
}
.app-markup {
  h2 {
    color: $lightgray;
    text-align: center;
    margin: 50px 0 20px;
    .lower {
      text-transform: none;
    }
  }
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    @media only screen and (min-width: $large) {
      margin-top: 60px;
    }
    .button {
      position: relative;
      z-index: 10;
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
