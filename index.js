// navbar hide function we can remove this comment anytime and use this function ============================

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     navbarSticky.style.transition = "1s";
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navbarSticky.style.transform = "translateY(0px)";
//   } else {
//     navbarSticky.style.transform = "translateY(-100px)";
//   }
//   prevScrollpos = currentScrollPos;
// } 

let bgBox = document.getElementsByClassName('blue-large-box');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

// sections ====================================================================

let section1 = document.getElementById('section-1');
let section2 = document.getElementById('section-2'); 
let section3 = document.getElementById('section-3');
let section4 = document.getElementById('section-4');

// navabr btn background move ===================================================


let btnBackground = document.getElementById('btnbackground');
let btn1 = document.getElementById('first-btn').addEventListener('click', function(){
    btnBackground.style.right = "393px";
});
let btn2 = document.getElementById('second-btn').addEventListener('click', function(){
    btnBackground.style.right = "311px";
});
let btn3 = document.getElementById('third-btn').addEventListener('click', function(){
    btnBackground.style.right = "225px";
});
let btn4 = document.getElementById('fourth-btn').addEventListener('click', function(){
    btnBackground.style.right = "140px";
});
let btn5 = document.getElementById('nth-btn').addEventListener('click', function(){
    btnBackground.style.right = "53px";
});

// carousel ================================================

let slideIndex = 1;
let slideshow = document.getElementsByClassName("carousel");
let slideShowImages = document.getElementsByClassName('img');


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  if (n > slideshow.length) {
    slideIndex = 1;
  }    

  if (n > slideShowImages.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slideshow.length;
  }

  if (n < 1) {
    slideIndex = slideShowImages.length;
  }
  for (i = 0; i < slideShowImages.length; i++) {
    slideShowImages[i].style.opacity = 0;
  }
  slideShowImages[slideIndex-1].style.opacity = 1;

  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";
  }
  slideshow[slideIndex-1].style.display = "flex";  
}

// burger menu button  ===================================
let flag = 1;
let burgerButton = document.getElementById('burg-btn');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let navbar = document.getElementById('navbar-links2');


burgerButton.addEventListener('click', function(burger){
 if (flag === 1) {
    line1.style.transition = "1s";
    line3.style.transition = "1s";
    line2.style.opacity = 0;
    line1.style.transform = "rotateZ(50deg)";
    line1.style.top = "50%";
    line3.style.top = "50%";
    line2.style.transition = "1s";
    line3.style.transform = "rotateZ(-50deg)";
    flag = 0;
    navbar.style.display = "flex";
    const interval = setInterval(() => {

      navbar.style.top = "100%";
      navbar.style.transition = "1s";

      clearInterval(interval);
    }, 0);
    
 } else {
    line1.style.transition = "1s";
    line3.style.transition = "1s";
    line2.style.transition = "1s";
    line1.style.transform = "rotateZ(0deg)";
    line3.style.transform = "rotateZ(0deg)";
    line1.style.top = "20%";
    line3.style.top = "68%";
    line2.style.opacity = 1;
    flag = 1;
    
    const interval2 = setInterval(() => {

      navbar.style.top = "-400%";
      navbar.style.transition = "1s";

      clearInterval(interval2);
    }, 0);

    const timeout = setTimeout(() => {
      navbar.style.display = "none";
    }, 900);
 } 

});

window.addEventListener('resize', function(){
  if (window.innerWidth > 600) {
    navbar.style.display = "none";
  }
});

