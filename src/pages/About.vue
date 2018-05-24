<template>
  <base-page>
    <template slot="content">
      <hero-section
        title="About Cozilo"
        name="about"
      ></hero-section>
      <section class="about padded-section">
        <div class="container content-container content">
          <p class="lead hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit,
            obcaecati incidunt pariatur eum minus. Minus ipsum itaque eligendi earum
            enim dolor unde doloremque voluptatibus distinctio, repudiandae recusandae
            ipsam nesciunt!
          </p>
          <div class="flex-desktop">
            <div class="col-lt">
              <h2 class="color-lightblue hidden">How we got started</h2>
              <p class="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis,
                blanditiis voluptatum quos nam quasi cum aspernatur ipsum autem corrupti quisquam
                voluptatibus provident quis minus natus, praesentium inventore ex labore?
              </p>
              <h2 class="color-orange hidden">What we're doing differently</h2>
              <p class="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati porro provident
                adipisci dolor fugit deserunt assumenda exercitationem quia alias non nesciunt qui
                id, eaque sapiente ipsam hic similique odio ad?
              </p>
              <h2 class="color-green hidden">What's next?</h2>
              <p class="hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos cumque
                necessitatibus minima culpa quasi cum quo vitae quidem doloribus. Praesentium
                dicta veniam illum error dignissimos minima saepe fugit animi.
              </p>
            </div>
            <div class="col-rt stats">
              <div class="stat hidden">
                <p class="color-lightblue">666</p>
                <p>Lorem ipsum</p>
              </div>
              <div class="stat hidden">
                <p class="color-orange">666</p>
                <p>Lorem ipsum</p>
              </div>
              <div class="stat hidden">
                <p class="color-green">666</p>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="team bg-lightblue padded-section">
        <div class="container content-container content">
          <h2 class="color-darkblue hidden">About the Cozilo team</h2>
          <p class="color-white hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet
            consectetur! Ratione praesentium corporis corrupti ad nemo nam, tempora
            repudiandae itaque est distinctio, repellendus eaque velit facere debitis
            cum ipsum.
          </p>
          <div class="grid">
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
            <div class="box hidden">
              <img src="https://fillmurray.com/400/400" alt="">
              <p class="color-darkblue"><strong>Name</strong></p>
              <p class="color-white small"><em>Title</em></p>
            </div>
          </div>
        </div>
      </section>
    </template>
  </base-page>
</template>

<script>
import Base from '../templates/Base';
import Hero from '../components/Hero';
import TagAsVisible from '../mixins/TagAsVisible';

export default {
  name: 'About',
  data() {
    return {};
  },
  components: {
    'base-page': Base,
    'hero-section': Hero,
  },
  mixins: [
    TagAsVisible,
  ],
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.flex-desktop {
  @media only screen and (min-width: $large) {
    display: flex;
    align-items: flex-start;
    .col-lt {
      margin-right: 100px;
    }
  }
}
.stats {
  display: flex;
  justify-content: space-around;
  .stat {
    width: 25%;
    margin-bottom: 40px;
    p {
      margin: 0;
      text-align: center;
      font-size: 14px;
    }
    p:first-of-type {
      font-size: 40px;
    }
  }
  @media only screen and (min-width: $large) {
    flex-direction: column;
    .stat {
      width: 100%;
    }
  }
}
.grid {
  @include grid-boxes(2, 2, 1fr, auto, 20px);
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 150px;
      object-fit: cover;
    }
    p {
      margin: 0;
      font-size: 14px;
      &:first-of-type {
        margin: 20px 0 0;
        font-size: 18px;
      }
    }
  }
  @media only screen and (min-width: $medium) {
    @include grid-boxes(4, 1, 1fr, auto, 20px);
  }
}
</style>

