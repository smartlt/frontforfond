<template>
  <div class="akb-election-container">
    <div class="bg-pic">
        <b-container class="full-height">
            <b-row class="full-height">
                <b-col class="content order-2">
                    {{ bgText.content }}
                </b-col>
                <b-col class="title order-1">
                    <span>{{ bgText.title }}</span>
                </b-col>
            </b-row>
    </b-container>
    </div>
  </div>
</template>

<script>
export default {
	name: 'AkbElection',
	data() {
		return {
            bgText: {
                title: `AKB48
                        SENBATSU
                        ELECTION`,
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type speci.`,
            },
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-pic {
    background-image: url('../assets/3-akb-bg.png');
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;
    height: 500px;
    color: white;
    margin-bottom: 30px;
}

.title {
    display: flex;
    align-items: center;
    margin: 0 50px;
    text-align: center;
    font-size: 64px;
    font-weight: bold;
    color: #ff55aa;
}

.content {
    display: flex;
    align-items: center;
    padding: 0 100px;
    margin: 0 50px;
    font-size: 14px;
    color: white;
}
</style>
