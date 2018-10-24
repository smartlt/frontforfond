<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vote-counter class="section"></vote-counter>
    <how-to-vote class="section"></how-to-vote>
    <start-of-front class="section"></start-of-front>
  </div>
</template>

<script>
import VoteCounter from '@/components/VoteCounter';
import HowToVote from '@/components/HowToVote';
import StartOfFront from '@/components/StartOfFront';
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
}
</style>
