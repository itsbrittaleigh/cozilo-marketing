<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="Pricing"
        name="pricing"
      ></hero-section>
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

<style lang="scss" scoped>

</style>

