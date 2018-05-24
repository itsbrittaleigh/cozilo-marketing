<template>
  <section id="hero" :class="`hero ${name}`">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      default: '',
    },
    name: {
      default: 'about',
    },
  },
  data() {
    return {};
  },
};
</script>
