import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Faq from '../pages/Faq';
import Features from '../pages/Features';
import Pricing from '../pages/Pricing';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Cozilo: The Truly B2B Mobile App For Buying & Selling Goods',
        metaTags: [
          {
            name: 'description',
            content: 'Cozilo is a truly B2B mobile marketplace app - buy & sell goods, interact with local businesses, & advertise your company, all within the app. Download it today!',
          },
        ],
      },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'The Future of B2B Transactions: Our Story | Cozilo',
        metaTags: [
          {
            name: 'description',
            content: 'Cozilo was created by a team of small business owners with small business needs in mind. Read more here about why it\'s the future of B2B transactions.',
          },
        ],
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Get In Touch With Us: Contact Information | Cozilo',
        metaTags: [
          {
            name: 'description',
            content: 'Contact us today if you have questions about the Cozilo app, your account, recent transactions, or want to provide feedback on the app.',
          },
        ],
      },
    },
    {
      path: '/frequently-asked-questions',
      name: 'FAQ',
      component: Faq,
      meta: {
        title: 'Frequently Asked Questions: Accounts, Transactions, Sign Up | Cozilo',
        metaTags: [
          {
            name: 'description',
            content: 'Have a question about your Cozilo account, payment methods, or a recent transaction? Check out our list of frequently asked questions for assistance.',
          },
        ],
      },
    },
    {
      path: '/features',
      name: 'Features',
      component: Features,
      meta: {
        title: 'Local Selling App Features: Buy, Sell, Advertise, Chat | Cozilo',
        metaTags: [
          {
            name: 'description',
            content: 'Buy, sell, and advertise your business on Cozilo, the first truly mobile B2B mobile marketplace app. Learn more about our local selling app and its features here.',
          },
        ],
      },
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
      meta: {
        title: 'Cozilo App Pricing Tiers: Free, Plus, & Enterprise | Cozilo',
        metaTags: [
          {
            name: 'description',
            content: 'Interested in buying and selling on the Cozilo app? Find the pricing level for your business here and sign up today!',
          },
        ],
      },
    },
  ],
});
