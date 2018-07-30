const left = document.querySelectorAll('section.flex .containerL');
const right = document.querySelectorAll('section.flex .containerR');
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".modal .modal-content .close-button");
var logo = document.querySelector('.landing-page .container .content .icon img');
var devName = document.querySelector('.landing-page .container .content h2');
var devNameHidden = document.querySelector('.landing-page .container div h3');
var english = document.querySelector('.about-me .en');
var lithuanian = document.querySelector('.about-me .lt');
var change = document.querySelector('.blueline-2 .container .button-change');
var current = document.querySelector('.blueline-2 .container .currentLanguage');
var aboutMe = document.querySelector('.blueline-2 .container h2');

var languages=[1];

function display(languages) {
  for (var x = 0; x<languages.length; x++) {
    if (languages[x] % 2 == 0) {
      lithuanian.style.display = 'block';
      english.style.display='none';
      //i lietuviu
      current.textContent = 'LT';
      aboutMe.textContent = 'Apie Mane';
      change.textContent= 'Keisti kalbą';
    } else{
      lithuanian.style.display = 'none';
      english.style.display='block';
      //i anglu
      current.textContent ='EN';
      aboutMe.textContent = 'About Me';
      change.textContent= 'Change language';
    }
  }
}


change.addEventListener('click', function(){
  var lastNumber = languages[languages.length-1];
  languages.push(lastNumber+1);
  display(languages);
});



function projects(){
  for (let x= 0; x<left.length; x++) {
    if (window.scrollY + window.innerHeight * 0.75 > left[x].offsetTop) {
      setTimeout(function(){
        left[x].style.opacity = 1;
        left[x].style.transform = 'translateX(0)';
        right[x].style.opacity = 1;
        right[x].style.transform = 'translateX(0)';
      },250);
      }
  }
}

document.addEventListener('scroll', projects);

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

var catcher = 0;
var catcherLogo = 0;


devName.addEventListener('mouseover', function(){
catcher++;
devName.style.opacity = 1;
});

logo.addEventListener('mouseover', function(){
  catcherLogo++;
  devName.style.opacity = 1;
});

function blink() {
  if (catcher !== 0 || catcherLogo !== 0) {
      devNameHidden.textContent ='A junior web developer from Vilnius, Lithuania';
      devNameHidden.classList.add('showName');
    return
  }
    logo.style.opacity = (logo.style.opacity == 1) ? 0 : 1;
    setTimeout("blink();", 1000);
  }

blink();



