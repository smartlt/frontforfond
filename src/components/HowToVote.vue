<template>
  <div class="how-to-vote-container">
    <div class="bg-pic">
        <b-row class="full-height"> 
            <b-col class="full-height">
                <div class='text full-height'>
                    <h1 class="head">{{ bgText.head }}</h1>
                    <div class="body">{{ bgText.body }}</div>
                </div>`
            </b-col>
            <b-col>
            </b-col>
        </b-row>
    </div>
    <b-container>
        <b-row>
            <b-col cols="12" lg="3" v-for="(section,index) in sections" :key="section.id" v-bind:class="{active: section.isActive}" >
                <div class="number">0{{ index + 1 }}.</div>
                <div class="title">{{ section.title }}</div>
                <div class="content">{{ section.content }}</div>
                <b-button variant="outline-secondary" block class="votebutton" :href="section.link">
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
            bgText: {
                head: 'วิธีโหวต',
                body: 'การโหวตให้ฟ้อนด์มี 3 วิธีด้วยกัน',
            },
			sections: [
                {
                    id: 1,
                    title: 'สมัคร BNK48 Account',
                    content: `สำหรับผู้ที่สนใจจะโหวตให้ฟ้อนด์ การโหวตจำเป็นต้องใข้รหัส หรือ Code สำหรับลงคะแนน ซึ่งจะได้จากการสั่งซื้อแผ่น [CD]BNK48 5th Single "BNK Festival" Limited Edition หรือ BNK48 5th Single "BNK Festival" Music Card Edition ซึ่งสามารถเข้าไปสั่งซื้อได้ที่ เว็บไซต์ shop ของ BNK48 โดยจำเป็นต้องสมัครสมาชิกเพื่อเข้าสู่ระบบในการสั่งซื้อโดยสามารถสมัครสมาชิก BNK48 ได้ทางลิงค์ด้านล่าง (หรือใช้ ID Facebook สมัครก็ได้)`,
                    button: 'สมัคร BNK48 Account',
                    link: 'https://shop.bnk48.com/index.php?page=signin',
                    isActive: false,
                },
                {
                    id: 2,
                    title: 'สั่งซื้อเพลงเพื่อรับคะแนนโหวต',
                    content: `สั่งซื้อแผ่น BNK48 5th Single "BNK Festival" Limited Edition หรือ BNK48 5th Single "BNK Festival" Music Card Edition ซึ่งแผ่น CD Limited Edition นั้นมีจำนวนจำกัด หากสินค้าหมดแล้วจะหมดเลย แต่ Music Card นั้นสามารถสั่งซื้อได้เรื่อยๆจนถึงวันที่ 22 มกราคม ซึ่งทั้ง 2 จะแถม Code สำหรับลงคะแนนเช่นเดียวกัน ซึ่งสามารถสั่งซื้อได้ที่ทางเว็บไซต์ shop ของ BNK48 ทางลิงค์ด้านล่าง`,
                    button: 'สั่งซื้อ BNK48 5th Single',
                    link: 'https://shop.bnk48.com/',
                    isActive: false,
                },
                {
                    id: 3,
                    title: 'กรอกคะแนนโหวตใน Application',
                    content: 'ดาวน์โหลดแอพพลิเคชั่น BNK48 Official จาก App Store สำหรับผู้ใช้มือถือระบบ iOS หรือ Play Store สำหรับผู้ใช้มือถือระบบแอนดรอยด์ โดยเข้าไปที่หน้าแรกและหาแบนเนอร์เลือกตั้งและกดที่คำว่า “โหวตเลย” บนแบนเนอร์ หลังจากนั้นพิมพ์ Fond BNK48 และกดโหวต โดยทำตามขั้นตอนที่แอพพลิเคชั่นแนะนำ หรือสามารถอ่านรายละเอียดเพิ่มเติมได้ที่ลิงค์นี้',
                    button: 'ขั้นตอนการโหวต',
                    link: 'https://shop.bnk48.com/index.php?page=howtovote',
                    isActive: true,
                },
                {
                    id: 4,
                    title: 'Donate กับทางเรา',
                    content: 'เพื่อเป็นการอำนวยความสะดวกของทุกคน เพราะการสั่งซื้อ BNK48 5th Single "BNK Festival" <br> นั้นมีขั้นตอนที่ค่อนข้างเยอะ และอาจจะมีค่าใช้จ่ายที่ค่อนข้างสูงสำหรับแฟนคลับบางกลุ่ม ทางเราได้เล็งเห็นปัญหานี้ เราจึงได้จัดทำระบบโดเนตขึ้นมา เพื่อเอื้ออำนวยความสะดวกให้ทุก ๆ คนไม่ว่าจะอายุ หรือมีกำลังทรัพย์เท่าไร สามารถร่วมกันเป็นส่วนหนึ่งในการสนับสนุนฟ้อนด์ให้ไปถึงฝันได้อย่างสะดวกและง่ายดาย โดยเราจะรวบรวมเงินทั้งหมดและนำไปสั่งซื้อโหวตให้แก่ฟ้อนด์ ทั้งนี้การรวมเงินกับทางเรา จะช่วยให้เราสามารถรวมยอด เพื่อใช้ในการประเมินภาพรวมของยอดโหวตได้อีกด้วย อย่างไรก็ตามทีมงานไม่ได้สนับสนุนให้ทุกคนโดเนตกับทางเราเป็นหลัก เราจัดทำระบบโดเนทขึ้นเพื่ออำนวยความสะดวกเท่านั้น หากผู้ใดไม่ประสงค์จะทำการร่วมโหวตกับกลุ่มเราตรงนี้ เรายินดีและพร้อมสนับสนุนให้ทุกคนโหวตกับทาง BNK48 Office ได้โดยตรงทันที',
                    button: 'Donate',
                    link: '',
                    isActive: true,
                },
            ]
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.how-to-vote-container {
    text-align: left;
}

.bg-pic {
    background-image: url('../assets/5.jpg');
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    color: white;
    margin-bottom: 30px;
}

.bg-pic .text {
    padding-left: 10%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

}
.text > .head {
    font-size: 100px;
    letter-spacing: 10px;
}

.text > .body {
    margin-top: -20px;
    font-size: 20px;
    font-weight: 300;
}

.title {
	font-size: 28px;
}

.content {
	font-size: 14px;
    color: #a7a7a7;
    margin: 0 0 1.5em;
    font-size: 18px;
    font-weight: 300;
}

.number {
    font-size: 60px;
    font-weight: 500;
    color: #eeeeee;
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
.votebutton{
    margin: 20px 0;
}
</style>
