<template>
  <div class="akb-election-container">
    <div class="bg-pic">
        <b-container class="full-height">
            <b-row class="full-height">
                <b-col class="content order-2">
                    <div><p>{{ bgText.content1 }}</p>
                    <p>{{ bgText.content2 }}</p>
                    <p>{{ bgText.content3 }}</p>
                    <p>{{ bgText.content4 }}</p></div>
                </b-col>
                <b-col class="title order-1">
                    <span>{{ bgText.title }}</span>
                </b-col>
            </b-row>
    </b-container>
    </div>
  </div>
</template>

<script>
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
    height: 1200px;
    color: white;
    margin-bottom: 30px;
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
</style>
