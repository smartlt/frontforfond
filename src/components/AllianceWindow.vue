<template>
    <div>
        <b-img thumbnail fluid :src="imglink" alt="Responsive image"/>
    </div>
</template>

<script>
export default {
  name: "allianceWindow",
  data() {
    return {
      imglink: require("../assets/fondlogo.png")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 154px;
  height: 154px;
  background-color: #f8dadf;
}
</style>