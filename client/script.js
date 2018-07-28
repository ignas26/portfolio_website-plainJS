const left = document.querySelectorAll('section.flex .containerL');
const right = document.querySelectorAll('section.flex .containerR');
const title = document.querySelector('.landing-page');
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
var cont = document.querySelector('.modal .modal-content h1 a');
var logo = document.querySelector('.landing-page .container .content .icon img');
var devName = document.querySelector('.landing-page .container .content h2');


document.addEventListener('scroll', function () {

  for (let x= 0; x<left.length; x++ ) {
    if (window.scrollY + window.innerHeight * 0.15 > title.offsetTop) {
      setTimeout(function(){
        left[x].style.opacity = 1;
        left[x].style.transform = 'translateX(0)';
        right[x].style.opacity = 1;
        right[x].style.transform = 'translateX(0)';
      },500);
      }
  }
});

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal || event.target === cont) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

var catcher = '';

devName.addEventListener('mouseover', function(){
catcher = 1;
});



function blink() {
  if (catcher > 0) return;
  logo.style.opacity = ( logo.style.opacity == 1 )? 0 : 1;
  setTimeout("blink();", 1000);
}

blink();



