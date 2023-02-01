const controls = document.querySelectorAll(".controls input")
function handleupdate(){
    // suffix convert the inputs in pixels to so we can apply the styles to it
    // this.name = the name of the variable is the same with the name in the inputs so we use name
    // this.value = value from the event listeners
    // suffix conversion to pixels
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
// event change listens for changes in inputs (range) so as its mousemove
controls.forEach(input => input.addEventListener("change", handleupdate))
controls.forEach(input => input.addEventListener("mousemove",handleupdate))