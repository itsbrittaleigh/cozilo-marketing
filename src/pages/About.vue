<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="about"
        title="About"
        icon-class="shopping-cart"
      >
        <template slot="description">
          <p class="fade-in">
            Cozilo is an app <strong>for business owners, by business owners:</strong>
            a truly B2B, business-only marketplace community that helps businesses of all
            sizes buy, sell, and trade goods at wholesale and volume pricing.
          </p>
        </template>
      </hero-section>

      <section class="about padded-section">
        <div class="container content-container content">
          <div class="point">
            <div class="section-header-icon bg-lightblue fade-in">
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <div class="text">
              <h2 class="color-lightblue fade-in">How we got started</h2>
              <p class="fade-in">
                The idea for Cozilo came to her after Lisa began looking for business
                resources in her area and simply couldn't find what she needed: a B2B
                marketplace that helped small business owners like herself build a network
                and buy, sell, or trade goods.
              </p>
            </div>
          </div>
          <div class="point">
            <div class="section-header-icon bg-green fade-in">
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <div class="text">
              <h2 class="color-green fade-in">What we're doing differently</h2>
              <p class="fade-in">
                Cozilo is different from other business marketplaces in several key ways.
              </p>
              <h3 class="color-green fade-in">Business-Focused</h3>
              <p class="fade-in">
                Cozilo's focus is on building networks for businesses while helping them buy,
                sell, and trade goods.
              </p>
              <h3 class="color-green hidden">Account Management</h3>
              <p class="hidden">
                Once you set up your business's main account, you can quickly and easily grant
                decision-making access to others within your business.
              </p>
              <h3 class="color-green hidden">Pricing and Variety of Goods</h3>
              <p class="hidden">
                Unlike other selling apps, Cozilo has both new and used goods in a wide
                variety of categories to fit your budget and needs.
              </p>
              <h3 class="color-green hidden">Advertise and Sell at the Same Time</h3>
              <p class="hidden">
                Cozilo is a cost-effective way for business owners to advertise their
                business at the same time as buying or selling goods.
              </p>
            </div>
          </div>
          <div class="point">
            <div class="section-header-icon bg-orange hidden">
              <i class="fas fa-shopping-cart" style="color: white;"></i>
            </div>
            <div class="text">
              <h2 class="color-orange hidden">What's next?</h2>
              <p class="hidden">
                As the Cozilo community grows, our services will grow as well. In addition
                to connecting with other business owners to buy, sell, and trade goods, we
                plan on adding additional services and features like group insurance and
                logistical services, group importing and exporting, bartering, website listing
                management &amp; purchasing, and more.
              </p>
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
.point {
  display: flex;
  align-items: flex-start;
  max-width: 750px;
  margin: 0 auto;
  padding: 30px 0 10px;
  border-bottom: 1px solid #e7e7e7;
  &:last-of-type {
    border-bottom: none;
  }
  .section-header-icon {
    margin-right: 20px;
  }
  .text {
    flex: 1;
    h2 {
      margin: 0 0 10px;
    }
    p {
      margin: 0 0 20px;
    }
  }
  @media only screen and (min-width: $medium) {
    padding: 50px 0 10px;
    .text {
      p {
      margin: 0 0 40px;
    }
    }
  }
}
</style>

