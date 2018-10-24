<template>
  <div class="vote-counter-container">
    <div class="counter-block">
        <div class="last-date">
            <div class="counter-title">{{ text.lastDate }}</div>
            <div class="counter-value">{{ endDateText }}</div>
        </div>
        <div class="clock">
            <div class="counter-title">{{ text.timeLeft }}</div>
            <div class="counter-value">{{ `${days} : ${hours} : ${minutes} : ${seconds}` }}</div>
        </div>
				<div>
					<b-button variant="outline-secondary">Donate</b-button>
				</div>
    </div>
  </div>
</template>

<script>
const sec = 1000;
const min = 60 * sec;
const hr = 60 * min;
const day = 24 * hr;
export default {
	name: 'VoteCounter',
	data() {
		return {
			endDate: '11 20 2018',
			endDateText: '25 มกราคม 2019',
			text: {
				lastDate: 'วันสุดท้ายของการโหวต',
				timeLeft: 'เวลาที่ยังโดเนทได้',
				donateButton: 'Donate',
			},
			interval: '',
			hours: '',
			minutes: '',
			seconds: '',
			days: '',
		};
	},
	mounted() {
		this.remaining();
		this.interval = setInterval(() => {
			this.remaining(), 1000
		})
	},
	methods: {
		remaining: function() {
			var duration = new Date(this.endDate) - Date.now() // milli
			var seconds = parseInt((duration/sec)%60)
			, minutes = parseInt((duration/min)%60)
			, hours = parseInt((duration/hr)%24)
			, days = parseInt((duration/day));

			this.hours = (hours < 10) ? "0" + hours : hours;
			this.minutes = (minutes < 10) ? "0" + minutes : minutes;
			this.seconds = (seconds < 10) ? "0" + seconds : seconds;
			this.days = (days < 10) ? "0" + days : days;
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter-block {
    text-align: center;
}

.counter-title {
	font-size: 20px;
}

.counter-value {
	font-size: 60px;
}
</style>
