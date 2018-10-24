<template>
  <div class="how-to-vote-container">
    <b-container>
        <b-row>
            <b-col>1</b-col>
            <b-col>2</b-col>
            <b-col>3</b-col>
        </b-row>
        <b-row>
            <b-col v-for="section in sections" :key="section.id" v-bind:class="{active: section.isActive}" >
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
