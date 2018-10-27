<template>
  <div class="how-to-vote-container">
    <div class="bg-pic">
        <div class='text'>
            <div class="head">{{ bgText.head }}</div>
            <div class="body">{{ bgText.body }}</div>
        </div>
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
    background-image: url('../assets/5-how-bg.png');
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;
    height: 500px;
    color: white;
    margin-bottom: 30px;
}

.bg-pic > .text {
    padding-left: 10%;
    padding-top: 250px;
}
.text > .head {
    font-size: 50px;
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
    font-size: 30px;
    font-weight: 500;
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
