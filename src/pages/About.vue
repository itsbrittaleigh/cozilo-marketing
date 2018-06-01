<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="About Cozilo"
        name="about"
      ></hero-section>
      <section class="about padded-section">
        <div class="container content-container content">
          <p class="lead hidden">
            Cozilo is an app for business owners, created by one: a truly B2B, business-only
            marketplace community that helps small-, medium-, and large-sized business
            owners buy, sell, and trade goods at wholesale and volume pricing.
          </p>
          <div class="flex-desktop">
            <div class="col-lt">
              <h2 class="color-lightblue hidden">How we got started</h2>
              <p class="hidden">
                After majoring in electronic controls computer engineering and minoring in
                finance in China, Lisa Yang, Cozilo's founder, immigrated to America to further
                her studies in computer &amp; electrical engineering. Upon graduating, she
                couldn't find a job that suited her skillset&mdash;so she started two of her
                own businesses. The idea for Cozilo came to her after Lisa began looking for
                business resources in her area and simply couldn't find what she needed: a
                B2B marketplace that helped small business owners like herself build a network
                and buy, sell, or trade goods.
              </p>
              <h2 class="color-orange hidden">What we're doing differently</h2>
              <p class="hidden">
                Cozilo is different from other business marketplaces in several key ways:
                <ul>
                  <li>
                    <strong>Business Only</strong><br>
                    No consumer goods on Cozilo means a clean, organized sales feed that
                    features only products that fit your needs.
                  </li>
                  <li>
                    <strong>Account Management</strong><br>
                    Once you set up your business' main account, you can quickly and
                    easily grant decision-making access to others within your business.
                  </li>
                  <li>
                    <strong>Pricing and Variety of Goods</strong><br>
                    Unlike other selling apps, Cozilo has both new and used goods in a
                    wide variety of categories to fit your budget and needs.
                  </li>
                  <li>
                    <strong>Advertise &amp; Sell at the Same Time</strong><br>
                    Cozilo is a cost-effective way for business owners to advertise their
                    business at the same time as buying or selling goods.
                  </li>
                </ul>
              </p>
              <h2 class="color-green hidden">What's next?</h2>
              <p class="hidden">
                As the Cozilo community grows, our services will grow as well. In addition
                to connecting with other business owners to buy, sell, and trade goods, we
                plan on adding additional services and features like group insurance and
                logistical services, group importing and exporting, and full Business Suites
                to better serve your business.
              </p>
            </div>
            <div class="col-rt stats">
              <div class="stat hidden">
                <p class="color-lightblue">50+</p>
                <p>Lorem ipsum</p>
              </div>
              <div class="stat hidden">
                <p class="color-orange">100</p>
                <p>Lorem ipsum</p>
              </div>
              <div class="stat hidden">
                <p class="color-green">3</p>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="team bg-lightblue padded-section">
        <div class="container content-container content">
          <h2 class="color-darkblue hidden">About the Cozilo team</h2>
          <p class="color-white hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet
            consectetur! Ratione praesentium corporis corrupti ad nemo nam, tempora
            repudiandae itaque est distinctio, repellendus eaque velit facere debitis
            cum ipsum.
          </p>
          <div class="grid">
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
          </div>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';
import TagAsVisible from '../mixins/TagAsVisible';

export default {
  name: 'About',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
  mixins: [
    TagAsVisible,
  ],
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.flex-desktop {
  @media only screen and (min-width: $large) {
    display: flex;
    align-items: flex-start;
    .col-lt {
      margin-right: 100px;
    }
  }
}
.stats {
  display: flex;
  justify-content: space-around;
  .stat {
    width: 25%;
    margin-bottom: 40px;
    p {
      margin: 0;
      text-align: center;
      font-size: 14px;
    }
    p:first-of-type {
      font-size: 40px;
    }
  }
  @media only screen and (min-width: $large) {
    flex-direction: column;
    .stat {
      width: 100%;
    }
  }
}
.grid {
  @include grid-boxes(2, 2, 1fr, auto, 20px);
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 150px;
      object-fit: cover;
    }
    p {
      margin: 0;
      font-size: 14px;
      &:first-of-type {
        margin: 20px 0 0;
        font-size: 18px;
      }
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(4, 1, 1fr, auto, 20px);
  }
}
</style>

