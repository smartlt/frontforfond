<template>
    <div class="start-of-front-container">
        <b-container>
            <b-row>
                <b-col class="left-container">
                    <div class="title">
                        {{ title }}
                    </div>
                    <div class="content">
                        <div><p>{{ content1 }}</p></div>
                        <div><p>{{ content2 }}</p></div>
                        <div><p>{{ content3 }}</p></div>
                        <div><p>{{ content4 }}</p></div>
                        
                    </div>
                </b-col>
                <b-col class="right-container" >
                    <img width="600" src="../assets/fff-rect-gray-1200px.png">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
	name: 'StartOfFront',
	data() {
		return {
            title: 'จุดเริ่มต้น Front For FOND',
            content1: `จุดมุ่งหมายสำหรับโปรเจ็คต์ ‘‘Front For Fond’’ คือการรวมพลังของคนที่รักน้องฟ้อนด์และอยากสนับสนุนน้องฟ้อนด์ให้มาร่วมกันส่งให้น้องทำได้ตามความฝันที่ตัวเองตั้งใจไว้ให้ได้`,
            content2: `โดยพวกเราได้รวบรวมทีมงานจากทั้งกลุ่มแอดมินสวนพริกของฟ้อนด์ที่คอยจัดการดูแลกิจกรรมแฟนคลับของฟ้อนด์ประจำงานต่างๆ ของ BNK48 มาโดยตลอด พร้อมทั้งอาสาสมัครและพันธมิตรที่มีใจและพร้อมที่อยากจะเข้ามาสนับสนุนฟ้อนด์กัน ณ ตรงนี้`,
            content3: `ซึ่งพวกเราคาดหวังว่าจะทำให้น้องฟ้อนด์ติดเซ็มบัตสึในงานเลือกตั้ง BNK48 6th Single Generation Election ให้ได้และรวมถึงช่วยผลักดันให้น้องสามารถก้าวสู่การเป็นสมาชิกแถวหน้าของ BNK48 ให้จงได้`,
            content4: `วง BNK48 ไม่ใช่แค่วงที่มีไอดอลเป็นผู้หญิงที่มาร้อง มาเต้นเพียงอย่างเดียว เราอยากให้ทุกคนได้เห็นความพยายามของน้องๆ เมมเบอร์ทุกคน รวมถึงน้องฟ้อนด์ ในการที่จะพัฒนาตัวเองเพื่อทำหน้าที่ออกมาให้ดีที่สุดเพื่อตัวเอง และแฟนคลับของน้อง รวมถึงคนทั่วไปที่ไม่ได้เข้ามาติดตามวง BNK48 พวกเราอยากให้ทุกคนได้รู้ว่าเด็กตัวน้อยๆ คนนี้ก็สามารถเป็นกำลังใจและเป็นแรงผลักดันให้ใครหลายๆคนได้เช่นกัน`
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.start-of-front-container {
    min-height: 100vh;
    background-image: url('../assets/fond-line-pink.svg');
    background-repeat: no-repeat;
    background-position: right center;
}
@media (max-width: 991.98px) {
    .start-of-front-container {
        background-image: none;
    }
}
.left-container {
    height: 100%;
    background-image: url('../assets/fond-line-pink.svg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 60%;
    color: #a7a7a7;
    padding: 5rem 0;
}
.right-container {
    display: flex;
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
    width: 400px;
}
.fff-logo {
    width: 440px;
    height: 225px;
}
</style>
