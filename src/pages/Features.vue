<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="Cozilo Features"
        name="features"
      ></hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';

export default {
  name: 'Features',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
