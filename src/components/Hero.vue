<template>
  <section id="hero" :class="`hero ${name}`">
    <div :class="`content bg-${bgColor}`">
      <div class="container">
        <i :class="`fas fa-${iconClass} fa-2x fade-in`" style="color: white;"></i>
        <h1 :class="`color-${headerColor} fade-in`">{{ title }}</h1>
        <slot name="description"></slot>
      </div>
    </div>
    <div :class="`image ${name}`"></div>
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
    iconClass: {
      default: 'shopping-cart',
    },
    headerColor: {
      default: 'lightblue',
    },
    bgColor: {
      default: 'darkblue',
    },
  },
  data() {
    return {};
  },
};
</script>
