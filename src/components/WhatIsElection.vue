<template>
    <div class="what-is-election-container">
        <b-container>
            <b-row>
                <div class="col-12 col-lg-6 left-container">
                    <div class="title">
                        {{ title }}
                    </div>
                    <div class="content">
                        <div>{{ content }}</div>
                        <div>{{ content }}</div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 right-container" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
	name: 'StartOfFront',
	data() {
		return {
            title: `อะไรคือ
                    BNK48 Election?`,
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.what-is-election-container {
    height: 100%;
    background-image: url('../assets/fond-line-pink.svg');
    background-repeat: no-repeat;
    background-position: right center;
    margin: 3rem 1rem;
}
.left-container {
    display: inline-block;
    height: 100%;
    background-image: url('../assets/fond-line-pink.svg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 60%;
    color: #a7a7a7;
}
.right-container {
    display: inline-block;
}
.title {
    margin-top: 70px;
    font-size: 60px;
    font-weight: bold;
    color: #ff55aa;
    text-align: center;
}
.fff-logo {
    width: 440px;
    height: 225px;
}
</style>
