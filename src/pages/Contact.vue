<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="Contact"
        name="contact"
      ></hero-section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
};
</script>
