<template>
  <div class="how-to-vote-container">
    <b-container>
        <b-row>
            <b-col>1</b-col>
            <b-col>2</b-col>
            <b-col>3</b-col>
        </b-row>
        <b-row>
            <b-col v-for="section in sections" :key="section.id">
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
			sections: [
                {
                    id: 1,
                    title: 'Title 1',
                    content: 'lorem adasd adasd ',
                    button: 'Click',
                    link: '',
                },
                {
                    id: 2,
                    title: 'Title 2',
                    content: 'lorem adasd adasd ',
                    button: 'Click',
                    link: '',
                },
                {
                    id: 3,
                    title: 'Title 3',
                    content: 'lorem adasd adasd ',
                    button: 'Click',
                    link: '',
                }
            ]
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.how-to-vote-container{
    text-align: left;
}

.title {
	font-size: 30px;
}

.content {
	font-size: 23px;
    color: #a7a7a7
}
</style>
