<template>
  <div class="how-to-vote-container">
    <parallax-container>
        <div class="bg-pic">
            <div class="parallax_group" >
                <parallax-element class="parallax-fond-image" :parallaxStrength="-1" :type="'translation'">
                    <img class="fond-image" src="../assets/5-how-fond.png" > 
                </parallax-element>

                <parallax-element class="parallax-overlay-image" :parallaxStrength="-10" :type="'translation'">
                    <img class="effect-image" src="../assets/5-how-effect-1.png" > 
                </parallax-element>
            </div>
            <b-row class="full-height"> 
                <b-col cols="12">
                    <parallax-element class="text-container" :parallaxStrength="5" :type="'translation'">
                        <div class='text full-height' style ="width: 450px">
                            <h1 class="head">{{ bgText.head }}</h1>
                            <div class="body">{{ bgText.body }}</div>
                        </div>
                    </parallax-element>

                </b-col>
                <b-col>
                </b-col>        
            </b-row>
        </div>
    </parallax-container>
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
             <b-col cols="12" lg="3">
                <div class="donate">
                    <div class="number donate">{{donate.id}}</div>
                    <div class="title donate">{{ donate.title }}</div>
                    <div class="content donate">{{ donate.content }}</div>
                    <b-button variant="outline-secondary" block class="votebutton" :href="donate.link">
                        {{ donate.button }}
                    </b-button> 
                </div>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMouseParallax from 'vue-mouse-parallax'

Vue.use(VueMouseParallax)
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
                    content: 'ในวันที่ 11 ธันวาคมจะเริ่มต้นการเลือกตั้ง สามารถเลือกตั้งได้ผ่านแอพพลิเคชั่น BNK48 Official จาก App Store สำหรับผู้ใช้มือถือระบบ iOS หรือ Play Store สำหรับผู้ใช้มือถือระบบแอนดรอยด์ โดยเข้าไปที่หน้าแรกและหาแบนเนอร์เลือกตั้งและกดที่คำว่า “โหวตเลย” บนแบนเนอร์ หลังจากนั้นพิมพ์ Fond BNK48 และกดโหวต โดยทำตามขั้นตอนที่แอพพลิเคชั่นแนะนำ หรือสามารถอ่านรายละเอียดเพิ่มเติมได้ที่ลิงค์นี้',
                    button: 'ขั้นตอนการโหวต',
                    link: 'https://shop.bnk48.com/index.php?page=howtovote',
                    isActive: true,
                },

            ],
            donate:{
                id: 'หรือ',
                title: 'Donate กับทางเรา',
                content: `<br>เพื่อเป็นการอำนวยความสะดวกของทุกคน เพราะการสั่งซื้อ BNK48 5th Single "BNK Festival"
                นั้นมีขั้นตอนที่ค่อนข้างเยอะ และอาจจะมีค่าใช้จ่ายที่ค่อนข้างสูงสำหรับแฟนคลับบางกลุ่ม</pre> ทางเราได้เล็งเห็นปัญหานี้ เราจึงได้จัดทำระบบโดเนตขึ้นมา เพื่อเอื้ออำนวยความสะดวกให้ทุก ๆ คนไม่ว่าจะอายุ หรือมีกำลังทรัพย์เท่าไร สามารถร่วมกันเป็นส่วนหนึ่งในการสนับสนุนฟ้อนด์ให้ไปถึงฝันได้อย่างสะดวกและง่ายดาย โดยเราจะรวบรวมเงินทั้งหมดและนำไปสั่งซื้อโหวตให้แก่ฟ้อนด์ ทั้งนี้การรวมเงินกับทางเรา จะช่วยให้เราสามารถรวมยอด เพื่อใช้ในการประเมินภาพรวมของยอดโหวตได้อีกด้วย อย่างไรก็ตามทีมงานไม่ได้สนับสนุนให้ทุกคนโดเนตกับทางเราเป็นหลัก เราจัดทำระบบโดเนทขึ้นเพื่ออำนวยความสะดวกเท่านั้น หากผู้ใดไม่ประสงค์จะทำการร่วมโหวตกับกลุ่มเราตรงนี้ เรายินดีและพร้อมสนับสนุนให้ทุกคนโหวตกับทาง BNK48 Office ได้โดยตรงทันที`,
                button: 'Donate',
                link: '',
                isActive: true,
            },
            
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
    background-image: url('../assets/5-how-bg.png');
                    /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    color: white;
    margin-bottom: 30px;
        overflow: hidden;
    position: relative;
}

.bg-pic .text {
    padding-left: 10%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.text > .head {
    font-size: 80px;
    letter-spacing: 10px;
}

.text > .body {
    margin-top: -20px;
    font-size: 20px;
    font-weight: 300;
}

.text-container{
    top: 50%;
    position: fixed;
}


.parallax_group{
    width:100vw; height:100vh;
}
.parallax-fond-image{
 /*   background-image: url('../assets/5-how-fond.png');
background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;*/
    position: absolute;
    display: block;
    overflow: visible;
    box-sizing: border-box;
    left: 30vw;
    bottom: -10vh;
       z-index: 15;
}

.parallax-effect-image{
    z-index: -2;
}


.fond-image{
    visibility: inherit;
    width: 80em;
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

.effect-image{
    z-index: -1;
}

.parallax-element text-container{
 z-index: 20;
}
.title {
	font-size: 28px;
    text-align: center;
    margin: 0px auto 1em auto;
}

.content {
	font-size: 14px;
    color: #a7a7a7;
    margin: 0 0 1.5em;
    font-size: 18px;
    font-weight: 300;
    margin: auto auto 3em auto;
    padding-left: 2em;
    padding-right: 2em;

}

.number {
    font-size: 60px;
    font-weight: 500;
    color: #eeeeee;
    text-align: center;

}

.donate.number,.donate.title{
    color:#57DEFE;
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

.content.pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
}

@media only screen and (min-width: 992px) {
    
    .title {
        text-align: left;
        margin: auto auto auto auto;
    }

    .content {
        margin: 1em auto 1em auto;
        padding: 0;
    }

    .number {
        text-align: left;
    }

    .bg-pic{
        background-position: center 50%;
    }
    .text > .head {
        font-size: 100px;
    }
}

@media only screen and (min-width: 1100px) {
    .bg-pic{
        background-position: center center; 
    }
    

}
</style>
