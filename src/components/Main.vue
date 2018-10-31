<template>
  <div class="hello">
    <nav-bar></nav-bar>
    <vote-counter class="section"></vote-counter>
    <what-is-election></what-is-election>
    <akb-election class="section"></akb-election>
    <how-to-vote class="section"></how-to-vote>
    <start-of-front class="section"></start-of-front>
    <alliance></alliance>
    <site-footer></site-footer>
    
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
import SiteFooter from '@/components/SiteFooter';

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
    WhatIsElection,
    SiteFooter,

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('https://fonts.googleapis.com/css?family=Prompt');
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
