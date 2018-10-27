<template>
    <b-container class="header">
        <b-row>
            <b-col>
                <h1 class="alliance-header">พันธมิตร</h1>
            </b-col>
        </b-row>
        <b-row v-for="r in getRows">
            <b-col v-for="c in getCols">
                <p v-if="(getCols*(r-1) + c-1) < getLength">{{alliance[getCols*(r-1) + c-1].name}}</p>
            </b-col>
        </b-row>        
    </b-container>
</template>

<script>
import allianceData from "./alliance-mockup.json";
const defineColNumbers = 7;
export default {
  name: "Alliance",
  data() {
    return {
      alliance: allianceData,
      defineColNumbers: defineColNumbers
    };
  },
  computed: {
    getRows: function() {
      let item = this.alliance.length;
      let rows = parseInt(item / defineColNumbers);
      if (item % defineColNumbers !== 0) {
        rows = rows + 1;
      }
      return rows;
    },
    getCols: function() {
      return defineColNumbers;
    },
    getLength: function() {
      return this.alliance.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.alliance-header {
  font-family: Prompt;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.96;
  text-align: center;
  color: #7c7c7c;
}
</style>