<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="pricing"
        title="Pricing"
        icon-class="shopping-cart"
        header-color="darkblue"
        bg-color="green"
      >
        <template slot="description">
          <p>
            Sign up for your free Cozilo account today, and during the 3-month
            promotional period,
            <strong>receive Cozilo Premium member benefits for free!</strong>
          </p>
        </template>
      </hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';

export default {
  name: 'Pricing',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
