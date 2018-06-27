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
        <img src="static/covers/home.jpg" alt="" class="background-image">
        <div class="overlay"></div>
        <div class="container">
          <h1 class="fade-in">The <span>mobile way</span><br>for businesses to</h1>
          <div class="value-props">
            <div class="prop fade-in">
              <i class="fas fa-shopping-cart fa-3x"></i>
              <p>Buy</p>
            </div>
            <div class="prop fade-in">
              <i class="fas fa-credit-card fa-3x"></i>
              <p>Sell</p>
            </div>
            <div class="prop fade-in">
              <i class="fas fa-exchange-alt fa-3x"></i>
              <p>Trade</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quidem aliquid facere
            nobis deserunt delectus repellat suscipit perspiciatis fugiat dolore? Perferendis
            recusandae magnam ipsa aliquam sequi corporis iure facere distinctio?
          </p>
        </div>
        <a href="#" class="more" v-scroll-to="'#marketplace'">
          Learn more
          <img src="../assets/images/icons/arrow-blue-down.svg" alt="">
        </a>
      </section>
      <section
        id="marketplace"
        class="value-section padded-section bg-lightblue pagination-section"
      >
        <div class="container">
          <div class="text color-white">
            <div class="section-header-icon bg-darkblue hidden">
              <i class="fas fa-building fa-2x"></i>
            </div>
            <h2 class="hidden">The business only, mobile marketplace</h2>
            <p class="hidden">
              Whether you’re just starting a company or you’ve been in business for decades,
              Cozilo is the business-focused app to help you easily and quickly buy, sell,
              and trade goods, right from your phone.
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button hidden"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll hidden">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_signin.jpg" alt="" class="screen">
          </div>
        </div>
      </section>
      <section class="from-to pagination-section">
        <div class="text text-left bg-wood">
          <div class="wrapper">
            <div class="section-header-icon bg-orange hidden">
              <i class="fas fa-briefcase fa-2x" style="color: white;"></i>
            </div>
            <h2 class="color-orange hidden">From<br>the<br>office<br>cubicle</h2>
            <p class="color-gray hidden">
              <strong>Buy</strong> office furniture your business needs to grow.
              <strong>Sell</strong> supplies to save space.
            </p>
          </div>
        </div>
        <div class="text text-right bg-cement">
          <div class="wrapper">
            <div class="section-header-icon bg-offwhite hidden">
              <i class="fas fa-industry fa-2x" style="color: #ec632e"></i>
            </div>
            <h2 class="color-white hidden">To<br>the<br>factory<br>floor<br></h2>
            <p class="color-white hidden">
              <strong>Trade</strong> machinery or equipment for nearly any industry.
              <strong>Hire</strong> extra help to meet a deadline.
            </p>
          </div>
        </div>
      </section>
      <section class="items pagination-section">
        <div class="item hidden">
          <img src="../assets/images/item1.png" alt="">
          <span class="price">Home Goods</span>
        </div>
        <div class="item hidden">
          <img src="../assets/images/item2.png" alt="">
          <span class="price">Machinery</span>
        </div>
        <div class="item hidden">
          <img src="../assets/images/item3.png" alt="">
          <span class="price">Consumer Electronics</span>
        </div>
        <div class="item hidden">
          <img src="../assets/images/item4.png" alt="">
          <span class="price">Office Furniture</span>
        </div>
        <div class="item hidden">
          <img src="../assets/images/item5.png" alt="">
          <span class="price">Construction</span>
        </div>
      </section>
      <section class="value-section padded-section bg-orange reverse-desktop pagination-section">
        <div class="container">
          <div class="text">
            <div class="section-header-icon bg-offwhite hidden">
              <i class="fas fa-coins fa-2x" style="color: #ec632e"></i>
            </div>
            <h2 class="hidden color-white">Trade using Cozilo tokens</h2>
            <p class="hidden color-white">
              Buy simpler and sell quicker with the option of using Cozilo tokens.
              Tokens never disappear and receive 500 when you sign up.
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button hidden"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll hidden">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_marketscroll.jpg" alt="" class="screen">
          </div>
        </div>
      </section>
      <section class="value-section padded-section bg-lightblue pagination-section">
        <div class="container">
          <div class="text">
            <div class="section-header-icon bg-offwhite hidden">
              <i class="fas fa-lock fa-2x" style="color: #62a9c5;"></i>
            </div>
            <h2 class="hidden color-white">Secure and reliable</h2>
            <p class="hidden color-white">
              In addition to our secure buying and selling platform, Cozilo is only available
              to approved and verified businesses, so you never have to worry about the
              safety of your transactions.
            </p>
            <router-link
              :to="{ name: 'Features' }"
              class="button hidden"
            >
              Learn more
              <img class="arrow" src="../assets/images/icons/arrow-white-right.svg" alt="">
            </router-link>
          </div>
          <div class="mockup with-screen-scroll hidden">
            <img src="../assets/images/iphone.png" alt="" class="phone-shell">
            <img src="../assets/images/mockups/cozilo_itemoverview1.jpg" alt="" class="screen long">
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
      <section class="newsletter bg-green pagination-section">
        <div class="container">
          <p class="large color-white">Sign up for our newsletter to stay up to date.</p>
          <newsletter-form></newsletter-form>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import NewsletterForm from '../components/NewsletterForm';
import ScreenScroll from '../mixins/ScreenScroll';
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
  },
  mixins: [
    ScreenScroll,
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
$mockup_height: 500px;
$mockup_width: 250px;
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
.hero {
  padding: 40px 0 120px;
  h1 {
    color: $white;
    text-align: center;
    margin-top: 0;
    span {
      color: $green;
    }
  }
  p {
    color: $white;
    text-align: center;
    max-width: 580px;
    margin: 40px auto 0;
  }
  .value-props {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 320px;
    margin: 0 auto;
    .prop {
      width: 150px;
      height: 150px;
      border-radius: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      i,
      svg {
        color: white;
      }
      &:nth-child(1) {
        background: $lightblue;
        margin: 0 20px 20px 0;
        &.fade-in {
          @include fade-in-up;
        }
      }
      &:nth-child(2) {
        background: $green;
        margin: 0 0 20px 0;
        &.fade-in {
          @include fade-in-up-offset-1;
        }
      }
      &:nth-child(3) {
        background: $orange;
        margin: 0;
        &.fade-in {
          @include fade-in-up-offset-2;
        }
      }
      img {
        width: 70px;
        height: 70px;
        object-fit: contain;
      }
      p {
        margin: 15px 0 0;
        color: $white;
        @include title-font;
      }
    }
  }
  .overlay {
    background: rgba($darkblue, 0.95);
  }
  .more {
    $width: 170px;
    position: absolute;
    width: $width;
    bottom: 0;
    left: 50%;
    margin-left: -($width / 2);
    background: $white;
    color: $gray;
    display: block;
    text-align: center;
    z-index: 3;
    text-decoration: none;
    padding: 20px 0;
    @include title-font;
    font-size: 15px;
    img {
      display: block;
      margin: 10px auto 0;
      width: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
    .value-props {
      width: 100%;
      .prop {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin: 0 20px 0 0;
        }
        &:nth-child(4) {
          margin: 0;
        }
      }
    }
  }
  @media only screen and (min-width: 1215px) {
    padding: 60px 0 150px;
    > .container {
      max-width: 90%;
    }
    .value-props {
      .prop {
        width: 200px;
        height: 200px;
        border-radius: 200px;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin: 0 30px 0 0;
        }
        i,
        svg {
          font-size: 4em;
        }
      }
    }
  }
}
.from-to {
  display: flex;
  flex-direction: column;
  position: relative;
  .text {
    .wrapper {
      width: 90%;
      margin: 0 auto;
    }
    &.text-left,
    &.text-right {
      padding: 30px 0;
    }
    &.text-left {
      > .wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      h2,
      p {
        text-align: right;
      }
      .fade-in {
        @include fade-in-up-from-left;
      }
    }
    &.text-right {
      .fade-in {
        @include fade-in-up-from-right;
      }
    }
  }
  .mockup {
    display: none;
    position: absolute;
    top: 50%;
    margin-top: -($mockup_height / 2);
    left: 50%;
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    .text {
      width: 50%;
      p {
        max-width: 310px;
      }
      &.text-left {
        padding: 100px ($mockup_width / 2) 100px 0;
      }
      &.text-right {
        padding: 100px 0 100px ($mockup_width / 2);
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    $mockup_width: 300px;
    $mockup_height: 600px;
    .mockup {
      display: block;
      top: 50%;
      margin-top: -($mockup_height / 2);
      left: 50%;
      margin-left: -($mockup_width / 2);
    }
    .text {
      &.text-left {
        padding: 100px (($mockup_width / 2) + 30px) 100px 0;
      }
      &.text-right {
        padding: 100px 0 100px (($mockup_width / 2) + 30px);
      }
    }
  }
}
.items {
  padding: 30px;
  @include grid-boxes(2, 2, 1fr, auto, 30px);
  .item {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .price {
      position: absolute;
      bottom: 20px;
      left: 0;
      background: $darkblue;
      color: $white;
      border-top-right-radius: 200px;
      border-bottom-right-radius: 200px;
      padding: 10px 25px 10px 20px;
    }
    &:last-of-type {
      display: none;
    }
    &.fade-in {
      @include fade-in-up;
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 30px;
    @include grid-boxes(5, 1, 1fr, auto, 30px);
    .item {
      &:last-of-type {
        display: block;
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
