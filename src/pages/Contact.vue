<template>
  <base-page>
    <template slot="content"></template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
  },
};
</script>
