<template>
  <div>
    <h1>Test</h1>
    <b-alert show>Default Alert</b-alert>
  </div>
</template>

<script>
export default {
    name: 'VoteCounter',
    data() {
        return {
            endDate: '20/04/19',
            text: {
                lastDate: 'วันสุดท้ายของการโหวต',
                timeLeft: 'เวลาที่ยังโดเนทได้',
                donateButton: 'Donate',
            }
        }
  }
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
