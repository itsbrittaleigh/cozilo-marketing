<template>
  <base-page>
    <template slot="content"></template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
  },
};
</script>
