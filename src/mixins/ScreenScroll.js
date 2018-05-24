import _ from 'lodash';

const ScreenScroll = {
  data() {
    return {
      mockups: [],
    };
  },
  methods: {
    setScrollPatterns() {
      _.forEach(this.mockups, (mockup) => {
        const height = mockup.clientHeight;
        /* eslint-disable no-param-reassign */
        mockup.style.setProperty('--element-height', `-${height - 521}px`);
      });
    },
    isVisible() {
      /* eslint-disable no-restricted-syntax */
      for (const mockup of this.mockups) {
        if (
          mockup.getBoundingClientRect().top <= window.innerHeight * 0.75 &&
          mockup.getBoundingClientRect().top > 0
        ) {
          mockup.classList.add('visible');
        } else {
          mockup.classList.remove('visible');
        }
      }
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      this.mockups = document.querySelectorAll('.mockup.with-screen-scroll .screen');
      this.setScrollPatterns();
    });
    window.addEventListener('scroll', () => {
      this.isVisible();
    });
  },
};

export default ScreenScroll;
