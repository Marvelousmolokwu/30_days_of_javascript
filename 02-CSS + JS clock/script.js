const minutehand = document.querySelector(".min-hand")
const secondhand = document.querySelector(".second-hand")
const hourhand = document.querySelector(".hour-hand")
function setDate(){
const now = new Date()
const seconds = now.getSeconds();
secondsInDegree = ((seconds / 60) *360) + 90;
secondhand.style.transform = `rotate(${secondsInDegree}deg)`
const minutes = now.getMinutes();
minutesInDegree = ((minutes/  60) * 360)  + 90;
minutehand.style.transform = `rotate(${minutesInDegree}deg)`
const hours = now.getHours();
hourInDegree = ((hours / 12) * 360)  + 90;
hourhand.style.transform = `rotate(${hourInDegree}deg)`

}
setInterval(setDate, 1000)
setDate()