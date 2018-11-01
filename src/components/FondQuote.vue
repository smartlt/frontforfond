<template>
    <div class="">
        <b-container>
            <b-row class="fond-quote-container">
                <b-col class="left-container">
                    <img width="600" src="../assets/4-fond-2.png">
                </b-col>
                <b-col class="right-container full-height">
                    <div class="title">
                        {{ title }}
                    </div>
                    <div class="content full-height">
                        <div>{{ content }}</div>
                        <div>{{ content }}</div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="quote-content">
                    <h1 class="quote-text">{{quote1}}</h1>
                    <h1 class="quote-text">{{quote2}}</h1>
                    <br>
                    <p>{{quote3}}</p>
                    <p>{{quote4}}</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
	name: 'FondQuote',
	data() {
		return {
            title: 'ส่งฟ้อนด์ให้ถึงฝัน',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting`,
            quote1: `(จะ)เป็นคนที่ยิ้มเก่งที่สุดใน BNK ค่ะ`,
            quote2: `หนูจะยิ้มสู้กับทุกอุปสรรคค่ะ`,
            quote3: `FOND BNK48`,
            quote4: `BNK48 Senpai EP.5`
        }
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fond-quote-container {
    height: 100%;
    background-image: url('../assets/fond-line-pink.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 65%;
    padding: 10rem 0;
}
.left-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.right-container {
    height: 100%;
    background-image: url('../assets/fond-line-pink.svg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 30%;
    color: #a7a7a7;
}
.quote-content{
    text-align: center;
    padding: 10rem 0;
}
.quote-text{
    font-size: 4rem;
}

.title {
    margin-top: 70px;
    font-size: 60px;
    font-weight: bold;
    color: #57defe;
    text-align: center;
}
.fff-logo {
    width: 440px;
    height: 225px;
}
</style>
