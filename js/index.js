const hamburger = document.querySelector("#hamburger")
const nav = document.querySelector("#header_nav")
let isHamburgerOpen = false

window.addEventListener("resize",hideHamburger)
hamburger.addEventListener("click", toggleMenu)
hideHamburger()
function hideHamburger() {
    const windowWidth = window.innerWidth
    if(windowWidth > 600) {
        hamburger.classList.add("hidden")
        nav.classList.remove("hidden")
    } else {
        hamburger.classList.remove("hidden")
        nav.classList.add("hidden")
    }
}

function toggleMenu() {
    console.log(nav.classList)
   if(nav.classList.contains("hidden")) {
    nav.classList.remove("hidden")
    hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`
   } else {
    nav.classList.add("hidden")
    hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`
   }
}