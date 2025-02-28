const menu=document.querySelector(".navbar")
const toggleContainer=document.querySelector(".toggle-container")
const togglePlaceholder = document.querySelector(".toggle-placeholder")
const hamburgerMenu=document.querySelector("#hamburger")
const toggleMode=document.querySelector("#toggle")
const body=document.body
const closeButton = document.querySelector(".close-button button")

hamburgerMenu.addEventListener("click",showMenu);
window.addEventListener("resize",handleResize)
closeButton.addEventListener("click", closeMenu)
toggleMode.addEventListener("change",darkMode)

function showMenu() {
    menu.classList.toggle("show");
    hamburgerMenu.classList.toggle("show");
}
function darkMode() {
    if (toggleMode.checked){
        body.classList.add("dark-mode")
        document.querySelectorAll(".navbar ul li a").forEach(el=> {el.classList.add("dark-mode")})
        document.getElementById("hamburger-icon").classList.add("dark-mode")
        document.querySelector(".get-live-demo").classList.add("dark-mode")
        document.querySelectorAll(".close-button button svg rect").add("dark-mode")
        document.querySelectorAll(".navbar ul li a:hover").forEach(el=>{el.classList.add("dark-mode")})
        document.querySelectorAll(".navbar ul li a::after").forEach(el=>{el.classList.add("dark-mode")})
        if(window.innerWidth<=640){
            menu.classList.add("dark-mode")
        }

    } else {
        body.classList.remove("dark-mode")
        document.querySelectorAll(".navbar ul li a").forEach(el=>{el.classList.remove("dark-mode")})
        document.getElementById("hamburger-icon").classList.remove("dark-mode")
        document.querySelector(".get-live-demo").classList.remove("dark-mode")
        document.querySelectorAll(".close-button button svg rect").remove("dark-mode")
        if(window.innerWidth<=640){
            menu.classList.remove("dark-mode")
            document.querySelector(".navbar").classList.remove("dark-mode")
        }
    }
}
function handleResize() {
    if (window.innerWidth<=640) {
        if (!togglePlaceholder.contains(toggleContainer)) {
            togglePlaceholder.appendChild(toggleContainer);
        }
    } else {
        if (togglePlaceholder.contains(toggleContainer)) {
            document.querySelector(".header").appendChild(toggleContainer)
        }
    }
}
function closeMenu() {
    menu.classList.remove("show");
    hamburgerMenu.classList.remove("show")
}

handleResize()