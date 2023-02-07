// get elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll(".player__slider")
const fsbtn = player.querySelector(".fs")
// build our functions
function fullscreen(){
  video.requestFullscreen()
  console.log("yep")
}
function toggleplay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    
}
function updateButton(){
const icon = this.paused ?  '►' : '❚ ❚';
toggle.textContent = icon;
}
function skip(){
    video.currentTime +=parseInt(this.dataset.skip)
}
function handleRangeUpdate(){
video[this.name] = this.value;

}
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}
function scrub(e){
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime
}
// event listeners
video.addEventListener("click", toggleplay)
video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("timeupdate", handleProgress)
toggle.addEventListener("click", toggleplay)
skipButtons.forEach(button => button.addEventListener("click", skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
let mousedown = false;
progress.addEventListener("click",scrub)
progress.addEventListener("mousemove", ()=> mousedown && scrub(e));
progress.addEventListener("mousedown", ()=> mousedown = true);
progress.addEventListener("mouseup", ()=> mousedown = false)
fsbtn.addEventListener("click", fullscreen)