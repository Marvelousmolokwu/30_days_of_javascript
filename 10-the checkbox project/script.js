const checkboxes = document.querySelectorAll('.inbox input[type ="checkbox"]');
let lastChecked;
function handlecheck(e){
      let inBetween = false;
    if(e.shiftKey && this.checked){
      checkboxes.forEach(checkbox=>{
        console.log('me')
        if(checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween
            console.log("me!")
        }
        if(inBetween){
            checkbox.checked = true;
        }
      })

    } 
lastChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handlecheck));