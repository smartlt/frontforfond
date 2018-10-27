<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vote-counter></vote-counter>
    <alliance></alliance>
  </div>
</template>

<script>
import VoteCounter from '@/components/VoteCounter';
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
</style>
