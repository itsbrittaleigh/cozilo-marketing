<template>
  <form @submit.prevent="submitForm" id="contact">
    <div class="fields">
      <div class="field input fade-in">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" v-model="contact.name" required>
      </div>
      <div class="field input fade-in">
        <label for="company">Company Name</label>
        <input type="text" id="company" name="company" v-model="contact.company" required>
      </div>
      <div class="field input fade-in">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" v-model="contact.phone" required>
      </div>
      <div class="field input fade-in">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" v-model="contact.email" required>
      </div>
      <div class="field textarea fade-in">
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          v-model="contact.message"
          required
        ></textarea>
      </div>
      <p v-if="showSuccess">Your message was sent successfully</p>
      <div class="button-container hidden">
        <button type="submit">
          Submit
          <img src="../assets/images/icons/arrow-white-right.svg" alt="" class="arrow white">
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      showSuccess: false,
      contact: {
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      const config = { headers: { 'Content-Type': 'application/json' } };
      axios
        .post(
          'https://cpkgq5ic4i.execute-api.us-east-1.amazonaws.com/prod',
          JSON.stringify(this.contact),
          config,
        )
        .then((this.showSuccess = true));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
label {
  text-transform: uppercase;
  color: $orange;
  font-weight: bold;
  font-size: 12px;
}
.field {
  margin-bottom: 15px;
  border-radius: 5px;
  background: #f1f1f1;
  transition: 0.4s;
  &:focus-within {
    background: #e7e7e7;
  }
}
.field.input {
  display: flex;
  align-items: center;
  label {
    width: 125px;
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border-radius: 5px 0 0 5px;
    background: transparent;
  }
  input {
    border-radius: 0 5px 5px 0;
    height: 52px;
    flex: 1;
    background: transparent;
  }
}
.field.textarea {
  position: relative;
  label {
    position: absolute;
    top: 20px;
    left: 15px;
    background: transparent;
  }
  textarea {
    border-radius: 5px;
    outline: none;
    border: none;
    width: 100%;
    padding: 50px 10px 10px;
    height: 200px;
    background: transparent;
  }
}
.button-container {
  display: flex;
  justify-content: flex-end;
}
@media only screen and (min-width: $medium) {
  .fields {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .field.input {
      width: 49%;
    }
    .field.textarea,
    .button-container {
      width: 100%
    }
  }
}
</style>

