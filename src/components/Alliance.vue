<template>
    <b-container class="header">
        <b-row>
            <b-col>
                <h1 class="alliance-header">พันธมิตร</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="6" md="2" class="py-2" v-for="(alliance, key) in alliances" :key="key">
                <allianceWindow :pageName="alliance.name" :imgLink="alliance.imgLink" :pageLink="alliance.pageLink"></allianceWindow>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// import mockup db
import allianceData from "./alliance-mockup.json";

// import windows template
import AllianceWindow from "@/components/AllianceWindow";

export default {
  name: "Alliance",
  data() {
    return {
      alliances: allianceData,
    };
  },
  components: {
      AllianceWindow
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
  margin-top: 80px;
  margin-bottom: 50px;
}

</style>