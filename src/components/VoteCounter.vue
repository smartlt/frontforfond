<template>
  <div class="vote-counter-container">
    <div class="counter-block">
        <div class="section">
            <div class="counter-title">{{ text.lastDate }}</div>
            <div class="counter-value">{{ endDateText }}</div>
        </div>
        <div class="section">
            <div class="counter-title">{{ text.timeLeft }}</div>
           	<div class="counter">
				<div class="test"> 
					<span class="counter-value">{{ days }}</span>
					<span>Days</span>
				</div>
			</div>
			<span class="counter-value">:</span>
			<div class="counter">
				<div class="test">
					<div class="counter-value">{{ hours }}</div>
					<div>Hours</div>
				</div>
			</div>
			<span class="counter-value">:</span>
			<div class="counter">
				<div class="test">
					<div class="counter-value">{{ minutes }}</div>
					<div>Minutes</div>
				</div>
			</div>
			<span class="counter-value">:</span>
			<div class="counter">
				<div class="test">
					<div class="counter-value">{{ seconds }}</div>
					<div>Seconds</div>
				</div>
			</div>
        </div>
		<div>
			<b-button variant="outline-secondary" href="https://goo.gl/forms/uIsh2X7hNcH1Z2XP2">Donate</b-button>
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
			endDate: '1/22/2019  12:00:00',
			endDateText: '24 มกราคม 2019',
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
.vote-counter-container {
	padding: 50px;
}

.counter-block {
	text-align: center;
	margin: 0 auto;
}

.counter-title {
	font-size: 20px;
}

.counter-value {
	font-size: 60px;
}

.section {
	margin-bottom: 30px;
}

.test {
	display: inline-block;
	margin-right: 20px;
	margin: 0 25px;
	display: flex;
	flex-direction: column;
}

.counter{
	display: inline-block;
}
</style>
