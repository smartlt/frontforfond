<template>
  <div class="how-to-vote-container">
    <div class="bg-pic">
        <b-row class="full-height"> 
            <b-col class="full-height">
                <div class='text full-height'>
                    <h1 class="head">{{ bgText.head }}</h1>
                    <div class="body">{{ bgText.body }}</div>
                </div>`
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </div>
    <b-container>
        <b-row>
            <b-col v-for="(section,index) in sections" :key="section.id" v-bind:class="{active: section.isActive}" >
                <div class="number">0{{ index + 1 }}.</div>
                <div class="title">{{ section.title }}</div>
                <div class="content">{{ section.content }}</div>
                <b-button variant="outline-secondary" :href="section.link">
                    {{ section.button }}
                </b-button>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
	name: 'HowToVote',
	data() {
		return {
            bgText: {
                head: 'วิธีโหวต',
                body: 'การโหวตให้ฟ้อนด์มี 3 วิธีด้วยกัน',
            },
			sections: [
                {
                    id: 1,
                    title: 'Title 1',
                    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                    button: 'Click',
                    link: '',
                    isActive: false,
                },
                {
                    id: 2,
                    title: 'Title 2',
                    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                    button: 'Click',
                    link: '',
                    isActive: false,
                },
                {
                    id: 3,
                    title: 'Title 3',
                    content: 'lorem adasd adasd ',
                    button: 'Click',
                    link: '',
                    isActive: true,
                }
            ]
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.how-to-vote-container {
    text-align: left;
}

.bg-pic {
    background-image: url('../assets/5.jpg');
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;
    height: 650px;
    width: 100%;
    color: white;
    margin-bottom: 30px;
}

.bg-pic .text {
    padding-left: 10%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.text > .head {
    font-size: 100px;
}

.text > .body {
    font-size: 20px;
}

.title {
	font-size: 28px;
}

.content {
	font-size: 14px;
    color: #a7a7a7
}

.number {
    font-size: 60px;
    font-weight: 500;
    color: #eeeeee;
}

.col.active > .title {
    color: #57defe;
}

.col.active > .content {
    color: black;
}

.col.active > button {
    background-color: #57defe;
}
</style>
