let panel = document.querySelectorAll(".panel");

function addflex() {
  panel.forEach((items) => {
    if (items !== this) {
      items.classList.remove("open");
    }
  });
  this.classList.toggle("open");
}
function activetoggle(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panel.forEach((i) => i.addEventListener("click", addflex));
panel.forEach((i) => i.addEventListener("transitionend", activetoggle));
