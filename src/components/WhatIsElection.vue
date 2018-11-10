<template>
    <div class="what-is-election-container">
        <b-container>
            <b-row>
                <div class="col-12 col-lg-5 left-container">
                    <div class="title">
                        {{ title }}
                    </div>
                    <div class="content">
                        <div><p>{{ content1 }}</p></div>
                        <div><p>{{ content2 }}</p></div>
                        <div><p>{{ content3 }}</p></div>
                        <div><p>{{ content4 }}</p></div>
                    </div>
                </div>
                <div class="col-12 col-lg-7 right-container">
                    <img width="600" src="../assets/3-1.jpg">
                </div>
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
            content1: `ในวันที่ 30 กันยายน 2018 ได้มีประกาศเปิดตัวของกิจกรรม "งานเลือกตั้งเซ็มบัตสึ 6th Single Senbatsu General Election" หลักสำหรับซิงเกิลที่ 6 ในปี 2019`,
            content2: `โดยสิ่งที่พิเศษสำหรับในซิงเกิ้ลนี้เพราะเซ็มบัตสึ หรือสมาชิกหลักทั้ง 16 คนในแต่ละซิงเกิ้ลที่ผ่านมานั้น ล้วนแล้วแต่ถูกคัดเลือกมาจากคณะผู้บริหารหรือกรรมการของ BNK48 Official ซึ่งได้คัดกรองจากหลายๆ ปัจจัย`,
            content3: `แต่ครั้งนี้จะเป็นครั้งแรกที่แฟนคลับ BNK48 สามารถเลือกตั้งหรือโหวตไอดอลที่ตัวเองชื่นชอบให้ติดเซ็มบัตสึได้ด้วยตนเอง`,
            content4: `โดยทุกคนสามารถร่วมกันโหวตได้ตั้งแต่วันนี้ - 20 ม.ค. 2019 และติดตามผลประกาศในวันที่ 26 ม.ค. 2019 ที่ Impact Arena เมืองทองธานี หรือ การถ่ายทอดสด`
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.what-is-election-container {
    min-height: 100vh;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.title {
    margin-top: 80px;
    font-size: 60px;
    letter-spacing: 6px;
    line-height: 60px;
    margin-bottom: 5vh;
    font-weight: bold;
    text-align: center;
    color: #ff55aa;
}

.fff-logo {
    width: 440px;
    height: 225px;
}

@media (max-width: 991.98px) {
    .what-is-election-container {
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