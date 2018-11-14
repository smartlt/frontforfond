<template>
    <div>
        <a :href="pageLink" target="_blank">
            <b-img fluid :src="src" :alt="pageName" :title="pageName" />
        </a>
    </div>
</template>

<script>
export default {
  name: "allianceWindow",
  data() {
    return {
      src: require('../assets/alliance/' + this.imgLink)
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
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>