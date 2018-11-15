<template>
    <div class="akb-election-container">
        <parallax-container>
            <div class="bg-pic">
                <div class="parallax_group" >
                    <parallax-element class="parallax-otaku-image" :parallaxStrength="5" :type="'translation'">
                        <img class="otaku-image" src="../assets/3-akb-otaku.png" > 
                    </parallax-element>

                    <parallax-element class="parallax-effect1-image" :parallaxStrength="-15" :type="'translation'">
                        <img class="effect1-image" src="../assets/3-akb-effect-1.png" > 
                    </parallax-element>

                    <parallax-element class="parallax-effect2-image" :parallaxStrength="15" :type="'translation'">
                        <img class="effect2-image" src="../assets/3-akb-effect-2.png" > 
                    </parallax-element>
                </div>
                <b-container class="full-height">
                    <b-row class="full-height">
                        <b-col class="content order-2">
                            <div><p>{{ bgText.content1 }}</p>
                            <p>{{ bgText.content2 }}</p>
                            <p>{{ bgText.content3 }}</p>
                            <p>{{ bgText.content4 }}</p></div>
                        </b-col>
                        <b-col class="title order-1">
                            <parallax-element class="text-container" :parallaxStrength="-3" :type="'translation'">
                                <span>{{ bgText.title }}</span>
                            </parallax-element>
                        </b-col>
                    

                    </b-row>
                </b-container>
                    
            </div>
        </parallax-container>
    </div>
</template>

<script>
import Vue from 'vue'
import VueMouseParallax from 'vue-mouse-parallax'

Vue.use(VueMouseParallax)
export default {
	name: 'AkbElection',
	data() {
		return {
            bgText: {
                title: `AKB48
                        SENBATSU
                        ELECTION`,
                content1: `งานเลือกตั้งเซ็มบัตสึ คือกิจกรรมใหญ่ที่สุดของศิลปินไอดอลเครือ 48 Group ที่ถูกจัดขึ้นทุกๆปี ที่จัดตั้งขึ้นเพื่อให้แฟนคลับสามารถเลือกสมาชิกไอดอลที่ตัวเองชื่นชอบเป็นเซ็มบัตสึ`,
                content2: `โดยในช่วงเลือกตั้งไอดอลแต่ละคนจะคอยมาหาเสียงเพื่อเรียกคะแนนสนับสนุน และในวันประกาศผลเลือกตั้ง จะมีการจัดงานเช่าฮอลล์ใหญ่ เพื่อประกาศรายชื่อและผลโหวตของสมาชิกแต่ละอันดับจากท้ายๆไปสู่อันดับที่หนึ่ง โดยผู้ที่ได้ที่หนึ่งจะได้รับตำแหน่งเซนเตอร์ของเพลงนั้น`,
                content3: `งานประกาศผลเลือกตั้ง AKB48 ได้มีการขายสัญญาณภาพให้ช่องทีวี และสื่อแต่ละช่องซื้อเพื่อนำไปจัดรายการสดรายงานผลการเลือกตั้ง ทำให้งานประกาศผลเลือกตั้งนี้ได้ถูกถ่ายทอดสดไปหลากหลายช่องทั่วประเทศญี่ปุ่น ไม่ต่างกับกับการถ่ายทอดสดการแข่งขันฟุตบอลโลกแต่อย่างใด และผลการเลือกตั้งก็จะถูกรายงานในหนังสือพิมพ์ท้องถิ่นอีกด้วย นับเป็นกิจกรรมที่ยิ่งใหญ่และได้รับความสนใจอย่างมากในวงการบันเทิงประเทศญี่ปุ่น`,
                content4: `ซึ่งไอดอลที่ได้ติดเซ็มบัตสึนั้นจะได้รับโอกาสในการเดินสายออกสื่อ และงานต่างๆ ที่จะช่วยเพิ่มชื่อเสียงให้แก่พวกเธอได้นั่นเอง โดยเฉพาะสมาชิกแถวหน้าที่จะโดดเด่นและถูกจับตามองเยอะที่สุด งานเลือกตั้งจึงเป็นกิจกรรมที่มีความหมายและเป็นโอกาสที่ดีที่สุดของไอดอล 48 Group นั่นเอง`
            },
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-pic {
    background:
        /* top, transparent black, faked with gradient */ 
        linear-gradient(
          rgba(87, 57, 26, 0.6), 
          rgba(87, 57, 26, 0.6)
        ),
        /* bottom, image */
        url('../assets/3-akb-bg.png');
    background-attachment: fixed;

                    /* <------ */
    background-repeat:   no-repeat;
    background-position: center 40%;
        background-attachment: fixed;
    height: 1400px;
    color: white;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
}

.title {
    display: flex;
    align-items: center;
    margin: 0 50px;
    text-align: center;
    font-size: 70px;
    font-weight: bold;
    color: #ff55aa;
    letter-spacing: 6px;
    line-height: 65px;
}

.content {
    display: flex;
    align-items: center;
  /*  padding: 0 100px;*/
    margin: 0 50px;
    font-size: 14px;
    color: white;
}

.parallax_group{
    width:100vw; 
}

.parallax-otaku-image{
    transform: translateZ(0); /*Trigger GPU Acceleration*/
    position: absolute;
    display: block;
    overflow: visible;
    box-sizing: border-box;
    -ms-transform: translate(-10%,93vh); 
    -webkit-transform: translate(-10%,93vh); 
    transform: translate(-10%,93vh);
    bottom: -60vh;
    right: -15vw;
    transform: translateX(20px);
  
}

.parallax-effect1-image{
    transform: translateZ(0); /*Trigger GPU Acceleration*/
    position: absolute;
    display: block;
    overflow: visible;
    box-sizing: border-box;
    -ms-transform: translateX(30vw);
    -webkit-transform: translateX(30vw);
    transform: translateX(30vw);
    bottom: -3vh;
   
}

.parallax-effect2-image{
    transform: translateZ(0); /*Trigger GPU Acceleration*/
    position: absolute;
    display: block;
    overflow: visible;
    box-sizing: border-box;
    -ms-transform: translateX(-5vw);
    -webkit-transform: translateX(-5vw);    
    transform: translateX(-5vw);
    bottom: 10vh;
   
}
.otaku-image, .effect1-image, .effect2-image{
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: inherit;
    line-height: 0px;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 12px;
}

@media only screen and (min-width: 400px) {
    .bg-pic{
        height: 1200px;
    }
    
}


@media only screen and (min-width: 992px) {
    .bg-pic{
        background-position: center 3vh;
        background-size:     cover;  
    }
    
}

@media only screen and (min-width: 1100px) {
    .bg-pic{
        background-position: center center; 
    }
    
}

@media (max-width: 991.98px) {
    .title {
        margin: 0 20px;
        font-size: 45px;
    }
}
</style>
