<template>
  <div class="form-container hidden">
    <form action="https://cozilo.us18.list-manage.com/subscribe/post?u=fa27529a5d259d242d544ac90&amp;id=07e41434a5" method="post" id="news" target="_blank">
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="b_fa27529a5d259d242d544ac90_07e41434a5" tabindex="-1" value="">
      </div>
      <div class="input-container">
        <input
          v-model="news.email"
          type="email"
          name="EMAIL"
          id="news_email"
          class="input"
          placeholder="Email address"
        >
        <i>
          <img src="../assets/images/icons/email.svg" alt="">
        </i>
      </div>
      <button class="bg-darkblue color-white" type="submit">Submit</button>
    </form>
    <p v-if="showSuccess">Your message was sent successfully</p>
    <p v-if="showError">There was an error, please try again later.</p>
  </div>
</template>

<script>
export default {
  name: 'NewsletterForm',
  data() {
    return {
      showError: false,
      showSuccess: false,
      news: {
        email: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.form-container {
  max-width: 768px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .input-container {
      position: relative;
      i {
        $height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -($height / 2);
        left: 20px;
        img {
          height: $height;
          width: auto;
        }
      }
    }
    .input-container {
      flex: 1;
      margin-bottom: 10px;
      .input {
        padding-left: 80px;
        width: 100%;
      }
    }
    button {
      font-size: 16px;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 768px) {
    form {
      flex-direction: row;
      .input-container {
        margin: 0 20px 0 0;
      }
    }
  }
}
</style>

