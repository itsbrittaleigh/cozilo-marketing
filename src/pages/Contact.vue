<template>
  <base-page>
    <template slot="content">
      <hero-section
        name="contact"
        title="Contact"
        icon-class="shopping-cart"
        header-color="darkblue"
        bg-color="lightblue"
      >
        <template slot="description">
          <p>
            Our customer support team is <strong>available 24/7</strong> to answer
            any inquiries you might have about the Cozilo platform, a recent
            transaction, or any other questions you might have. Fill out the form
            below or contact us through email, phone, or live chat now.
          </p>
        </template>
      </hero-section>
      <section class="form-container padded-section bg-lightblue">
        <div class="container content-container content">
          <p class="lead color-white fade-in">
            Our customer support team is available 24/7 to answer any inquiries you might
            have about the Cozilo platform, a recent transaction, or any other questions you
            might have. Fill out the form below or contact us through email, phone, or live
            chat now.
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
