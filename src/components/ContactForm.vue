<template>
  <form @submit.prevent="submitForm" id="contact">
    <div class="fields">
      <div class="field input hidden" v-in-viewport.once>
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" v-model="contact.name" required>
      </div>
      <div class="field input hidden" v-in-viewport.once>
        <label for="company">Company Name</label>
        <input type="text" id="company" name="company" v-model="contact.company" required>
      </div>
      <div class="field input hidden" v-in-viewport.once>
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" v-model="contact.phone" required>
      </div>
      <div class="field input hidden" v-in-viewport.once>
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" v-model="contact.email" required>
      </div>
      <div class="field input select hidden" v-in-viewport.once>
        <label for="category">Category</label>
        <select name="category" id="category" v-model="contact.category" required>
          <option value="1">Feedback or Suggestions</option>
          <option value="2">My Account</option>
          <option value="3">Reporting Bugs and Errors</option>
          <option value="4">Business and Investors</option>
          <option value="5">Transactions</option>
        </select>
        <img src="../assets/images/icons/arrow-orange-down.png" alt="" class="arrow">
      </div>
      <div class="field textarea hidden" v-in-viewport.once>
        <label for="message">Message</label>
        <textarea
          name="message"
          id="message"
          v-model="contact.message"
          required
        ></textarea>
      </div>
      <p v-if="showSuccess">Your message was sent successfully</p>
      <div class="button-container hidden" v-in-viewport.once>
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
        category: '',
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
  position: relative;
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
  input,
  select {
    border-radius: 0 5px 5px 0;
    height: 52px;
    flex: 1;
    background: transparent;
    border: none;
    appearance: none;
    font-size: 16px;
    font-family: $font;
    color: $gray;
  }
  .arrow {
    position: absolute;
    right: 20px;
    top: 50%;
    height: 10px;
    margin-top: -5px;
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
    padding: 50px 15px 10px;
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
    .field.select,
    .button-container {
      width: 100%
    }
  }
}
</style>

