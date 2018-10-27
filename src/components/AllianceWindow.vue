<template>
    <div>
        <b-img thumbnail fluid :src="imgLink" alt="No Image" :title="pageName" />
    </div>
</template>

<script>
export default {
  name: "allianceWindow",
  data() {
    return {
      imglink: require("../assets/fondlogo.png")
    };
  },
  props: {
    imgLink: String,
    pageName: String
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