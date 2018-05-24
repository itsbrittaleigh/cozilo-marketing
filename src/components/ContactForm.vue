<template>
  <form @submit.prevent="submitForm" id="contact">
    <div class="fields">
      <div class="field input hidden">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" v-model="contact.name">
      </div>
      <div class="field input hidden">
        <label for="company">Company Name</label>
        <input type="text" id="company" name="company" v-model="contact.company">
      </div>
      <div class="field input hidden">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" v-model="contact.phone">
      </div>
      <div class="field input hidden">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" v-model="contact.email">
      </div>
      <div class="field textarea hidden">
        <label for="message">Message</label>
        <textarea name="message" id="message" rows="10" v-model="contact.message"></textarea>
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
          // 'https://bh72s9uy88.execute-api.us-east-1.amazonaws.com/Production',
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
}
.field.input {
  display: flex;
  align-items: center;
  label {
    width: 120px;
    background: white;
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-radius: 5px 0 0 5px;
  }
  input {
    border-radius: 0 5px 5px 0;
    height: 52px;
    flex: 1;
  }
}
.field.textarea {
  position: relative;
  label {
    position: absolute;
    top: 20px;
    left: 10px;
  }
  textarea {
    border-radius: 5px;
    outline: none;
    border: none;
    width: 100%;
    padding: 50px 10px 10px;
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

