<template>
  <div class="hello">   
    <nav-bar></nav-bar>  
    <headerSection></headerSection>
    <vote-counter class="section"></vote-counter>
    <what-is-election></what-is-election>
    <akb-election class="section"></akb-election>
    <fond-quote class="section" ></fond-quote>
    <how-to-vote class="section"></how-to-vote>
    <start-of-front class="section"></start-of-front>
    <alliance></alliance>
    <site-footer></site-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import VoteCounter from '@/components/VoteCounter';
import HowToVote from '@/components/HowToVote';
import WhatIsElection from '@/components/WhatIsElection';
import StartOfFront from '@/components/StartOfFront';
import NavBar from '@/components/NavBar';
import AkbElection from '@/components/AkbElection';
import Alliance from '@/components/Alliance';
import HeaderSection from '@/components/HeaderSection';
import SiteFooter from '@/components/SiteFooter';
import FondQuote from '@/components/FondQuote';



export default {
  name: 'Main',
  data() {
    return {
      msg: 'Front to Fond',
    };
  },
  components: {
    VoteCounter,
    HowToVote,
    StartOfFront,
    NavBar,
    AkbElection,
    Alliance,
    HeaderSection,
    WhatIsElection,
    SiteFooter,
    FondQuote
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Prompt:300,500,700');
body{
  font-family: 'Prompt', sans-serif;
}

.fs-prompt-light{
  font-family: 'Prompt', sans-serif;
  font-weight: lighter
}

.fs-prompt-bold{
  font-family: 'Prompt', sans-serif;
  font-weight: bold
}
h1, h2 {
  font-weight: bold;
}

p{
  margin: 0 0 1.5em;
  font-size: 18px;
  font-weight: 300;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.section {
  margin-bottom: 30px;
  /* margin: 0 10%; */
}

.full-height{
  height: 100%;
}
</style>
