const navbar = document.querySelector('.navbar')
const srclogo = document.querySelector('.logo')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')


window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
        srclogo.src="/drewland_realizacje/schody/logo_white.png"
    } else {
        navbar.classList.remove('scrolled')
        srclogo.src="/drewland_realizacje/schody/logo_black.png"
    }
})



hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove('active')
    navLinks.classList.remove('active')

}))

AOS.init();

var fullimgbox = document.getElementById("fullimgbox")
var fullimg = document.getElementById("fullimg")

function openFullImg(pic){
    fullimgbox.style.display = "flex";
    fullimg.src= pic;
    
}
function closeFullImg(){
    fullimgbox.style.display = "none";
    
}