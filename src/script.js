let openMenuElement = document.getElementById("openMenu")
let closeMenuElement = document.getElementById("closeMenu")
let menuElement = document.getElementById("navMenu")

openMenuElement.addEventListener("click", () => {
    menuElement.classList.toggle("show")
})
closeMenuElement.addEventListener("click", () => {
    menuElement.classList.toggle("show")
})