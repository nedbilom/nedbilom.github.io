const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const min = now.getMinutes();
	const hour = now.getHours();

	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutesDegrees = ((min / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hoursDegrees = ((hour / 60) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);