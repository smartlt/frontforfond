<template>
    <div>
        <div class="fond-quote-container">
            <b-container>
                <b-row class="">
                    <b-col cols="12" lg="6" class="left-container">
                        <img width="450" src="../assets/4-fond-2.png">
                    </b-col>
                    <b-col cols="12" lg="6" class="right-container">
                        <div class="title">
                            {{ title }}
                        </div>
                        <div class="content">
                            <div>{{ content }}</div>
                            <div>{{ content }}</div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container>
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
            quote3: `Fond BNK48`,
            quote4: `BNK48 Senpai EP.5`
        }
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fond-quote-container {
    height: 100%;
    background-image: url('../assets/fond-line-blue.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 55%;
    padding: 5rem 0;
    text-align: center;
}
.left-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.right-container {
    height: 100%;
    background-image: url('../assets/16.svg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 60%;
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
    font-size: 100px;
    font-weight: bold;
    color: #57defe;
    text-align: center;
}
.fff-logo {
    width: 220px;
    height: 125px;
}
</style>
