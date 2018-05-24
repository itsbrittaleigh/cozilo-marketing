<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="Frequently Asked Questions"
        name="faq"
      ></hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';

export default {
  name: 'FAQ',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
