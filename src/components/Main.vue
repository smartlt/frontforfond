<template>
  <div class="hello">
    <nav-bar></nav-bar>
    <vote-counter class="section"></vote-counter>
    <akb-election class="section"></akb-election>
    <how-to-vote class="section"></how-to-vote>
    <start-of-front class="section"></start-of-front>
    <h1>{{ msg }}</h1>
    <vote-counter></vote-counter>
    <alliance></alliance>
  </div>
</template>

<script>
import VoteCounter from '@/components/VoteCounter';
import HowToVote from '@/components/HowToVote';
import StartOfFront from '@/components/StartOfFront';
import NavBar from '@/components/NavBar';
import AkbElection from '@/components/AkbElection';
import Alliance from '@/components/Alliance';
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
    AkbElection.
    Alliance
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
  margin: 0 10%;
}
</style>
