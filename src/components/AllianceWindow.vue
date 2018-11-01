<template>
    <div>
        <a :href="pageLink" target="_blank">
            <b-img fluid :src="imgLink" alt="No Image" :title="pageName" />
        </a>
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
    pageName: String,
    pageLink: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {  
  max-height: 154px;
  width: 154px;
  background-color: #f8dadf;
}

</style>