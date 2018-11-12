<template>
    <div>
        <div class="fond-quote-container">
            <b-container>
                <b-row class="">
                    <b-col cols="12" lg="6" class="left-container">
                        <img class="image-quote" src="../assets/4-fond-2.png">
                    </b-col>
                    <b-col cols="12" lg="6" class="right-container">
                        <div class="title">
                            {{ title }}
                        </div>
                        <div class="content">
                            <div><p>{{ content }}</p></div>
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
                    <h3>{{quote3}}</h3>
                    <h4>{{quote4}}</h4>
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
            content: `ณ วันที่ 13 ตุลาคม 2561 เวลา 23:24 น. ฟ้อนด์ ณัฐทิชา จันทรวารีเลขา ได้ทำการลงสมัคร BNK48 6th Single Senbatsu General Election เพื่อพิสูจน์ตัวเอง การเลือกตั้งนี้เป็นครั้งแรกของวง BNK48 หนทางการต่อสู่ไปสู่ฝันครั้งนี้ มันมีอะไรหลายๆ อย่างที่น้องจะต้องเผชิญ มาร่วมกันช่วยนำพาฝันของสาวน้อยให้เป็นจริงด้วยกัน ในการเลือกตั้งให้เธอติดเซ็มบัตสึซิงเกิลที่ 6 นี้ด้วยกัน`,
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
    min-height: 100vh;
    background-image: url('../assets/fond-line-blue.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 40%;
    text-align: center;
}

.left-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
.right-container {
    min-height: 100vh;
    background-image: url('../assets/16.svg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100%;
    color: #a7a7a7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.quote-content{
    text-align: center;
    padding: 10rem 0;
}
.quote-text{
    font-size: 4rem;
    font-weight: 500;
}

h3{
    margin-top: 40px;
    font-weight: 300;
    font-size: 27px;
}

h4{
    font-weight: 300;
    font-size: 18px;
}

.title {
    margin-top: 80px;
    font-size: 60px;
    letter-spacing: 6px;
    line-height: 60px;
    margin-bottom: 5vh;
    font-weight: bold;
    text-align: center;
    color: #57defe;
    width: 300px;
}
.fff-logo {
    width: 220px;
    height: 125px;
}
.image-quote{
    max-width: 450px;
    width: 100%;
}

@media (max-width: 991.98px) {
    .fond-quote-container {
        background-image: none;
    }
    .left-container {
        min-height: 50vh;
    }
    .right-container {
        min-height: 50vh;
        background-size: 50%;
    }
}
</style>
