<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="about"
        title="Cozilo: The Future of B2B Transactions"
        icon-class="shopping-cart"
      >
        <template slot="description">
          <p class="fade-in">
            Cozilo is an app for business owners by business owners: a truly B2B,
            business-focused marketplace community that helps businesses of all sizes
            and ages buy, sell, and trade goods at prices they set - wholesale, volume,
            or anything in-between.
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
                Cozilo was created by a team of small business owners with small business
                needs in mind. The idea came about when they began looking for business resources
                nearby but couldn’t effectively find what was needed at the competitive cost.
                The experience eventually lead to the creation of Cozilo: a truly mobile B2B
                marketplace that helps businesses to directly buy, sell, or trade goods with
                other businesses in a prompt and cost-effective manner.
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
                Cozilo is different from other business marketplaces in several key ways:
              </p>
              <h3 class="color-green fade-in">Business-Focused</h3>
              <p class="fade-in">
                Cozilo’s focus is on building networks for businesses while helping them
                buy, sell, and trade goods.
              </p>
              <h3 class="color-green hidden">Account Management</h3>
              <p class="hidden">
                Once you set up your business’ main account, you can quickly and easily
                grant decision-making access to others within your business.
              </p>
              <h3 class="color-green hidden">Pricing and Variety of Goods</h3>
              <p class="hidden">
                Unlike other selling apps, Cozilo has both new and used goods in a wide
                variety of categories to fit your budget and needs.
              </p>
              <h3 class="color-green hidden">Advertise and Sell at the Same Time</h3>
              <p class="hidden">
                Cozilo is a cost-effective way to business owners to advertise their business
                at the same time as buying or selling goods.
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
                As the Cozilo community grows, our services and platform will grow as well.
                In addition to connecting small business owners to help them buy, sell, and
                trade goods, we plan on adding additional services and features that will
                help support growth in their local communities, as well as internationally.
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

