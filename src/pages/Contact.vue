<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="Contact"
        name="contact"
      ></hero-section>
      <section class="form-container padded-section bg-lightblue">
        <div class="container content-container content">
          <p class="lead color-white hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur cupiditate animi quod quos velit, praesentium esse soluta,
            recusandae fugiat quibusdam architecto neque veniam laudantium provident
            consequuntur culpa aliquam nihil amet.
          </p>
          <contact-form></contact-form>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import TagAsVisible from '../mixins/TagAsVisible';

export default {
  name: 'Contact',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
    'contact-form': ContactForm,
  },
  mixins: [
    TagAsVisible,
  ],
};
</script>
