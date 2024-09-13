const navLinks = document.getElementById("nav-links")
const burgerBTN = document.getElementById("burger-btn")

function toogleMenu(){
    navLinks.classList.toggle("open")
    burgerBTN.classList.toggle("is-open")
}