<template>
  <div class="akb-election-container">
    <div class="bg-pic">
        <b-container>
            <b-row>
                <b-col class="content">
                    {{ bgText.content }}
                </b-col>
                <b-col class="title">
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
                title: 'AKB48 Senbutsu Election',
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
    padding: 200px 0;
    margin: 0 50px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: #ff55aa;
}

.content {
    padding: 100px 0;
    margin: 0 50px;
    font-size: 14px;
    color: white;
}
</style>
