import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Main from '@/components/Main';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import HeaderSection from '@/components/HeaderSection';
import VoteCounter from '@/components/VoteCounter';
import WhatIsElection from '@/components/WhatIsElection';
import AkbElection from '@/components/AkbElection';
import FondQuote from '@/components/FondQuote';
import HowToVote from '@/components/HowToVote';
import StartOfFront from '@/components/StartOfFront';
import Alliance from '@/components/Alliance';
import SiteFooter from '@/components/SiteFooter';


Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main,
    },
    {
      path: '/Header',
      name: 'Header',
      component: HeaderSection,
    },
    {
      path: '/vote',
      name: 'Counter',
      component: VoteCounter,
    },
    {
      path: '/elec',
      name: 'Election',
      component: WhatIsElection,
    },
    {
      path: '/elec2',
      name: 'Election2',
      component: AkbElection,
    },
    {
      path: '/fond',
      name: 'Fond',
      component: FondQuote,
    },
    {
      path: '/howtovote',
      name: 'HowToVote',
      component: HowToVote,
    },
    {
      path: '/fff',
      name: 'FrontForFond',
      component: StartOfFront,
    },
    {
      path: '/alliance',
      name: 'Alliance',
      component: Alliance,
    },
    {
      path: '/footer',
      name: 'Footer',
      component: SiteFooter,
    },
  ],
});
