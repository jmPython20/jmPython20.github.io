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
let images = [];
// Pobranie diva
let myDiv = document.getElementsByClassName('grid_galery three-col-grid_galery');

// Pobranie elementów img w divie
let imgElements = document.getElementsByClassName('img_galery');

// Dodanie elementów do tablicy
for (let i = 0; i < imgElements.length; i++) {
    let src = imgElements[i].getAttribute('src');
    images.push(src);
}
for (let i = 0; i < images.length; i++) {
    console.log(images[i]);
}
function openFullImg(pic){
    fullimgbox.style.display = "flex";
    fullimg.src= pic;
    console.log(fullimg.src);
}
function closeFullImg(){
    fullimgbox.style.display = "none"
}


function goRight(){
    let element = fullimg.getAttribute('src');
    console.log(element);
    let position = images.indexOf(element.replace('http://127.0.0.1:5501/drewland_realizacje/',''));
    const positionActual= position + 1;
    const lastIndex = images.length - 1;
    if (position !== -1 && positionActual <= lastIndex) {
        console.log(`Pozycja elementu "${element}" w tablicy to: ${position}`);
        fullimg.src= images[position+1];
    } else {
        fullimg.src= images[0];
    }
}
function goLeft(){
    let element = fullimg.getAttribute('src');
    console.log(element);
    let position = images.indexOf(element.replace('http://127.0.0.1:5501/drewland_realizacje/',''));
    const positionActual= position - 1;
    const lastIndex = images.length - 1;
    if (position !== -1 && positionActual >=0) {
        console.log(`Pozycja elementu "${element}" w tablicy to: ${position}`);
        fullimg.src= images[position-1];
    } else {
        fullimg.src= images[lastIndex];
    }
}