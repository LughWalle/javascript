let body = document.body;
/* Cria div de style */
body.onload = adcDivStyle;
function adcDivStyle() {
  alert("Ola mundo!")
}

/*Funcoes navBar*/
let navBar = body.firstElementChild.querySelector(".nav-style");

// mostra/esconde div
let show = false;
navBar.style.display = 'none';
function navStyle() {
  if (!show && navBar.style.display === 'none') {
    show = true;
  }
  if (show && navBar.style.display === 'inline-grid') {
    show = false;
  }
  if (!show) {
    navBar.style.display = 'none';
  } else {
    navBar.style.display = 'inline-grid';
  }
  
}
body.firstElementChild.firstElementChild.querySelector('#bar-style').addEventListener('click', navStyle);

// muda cores
let aUm = navBar.querySelector('a')[0];
let color1 = 'rgba(45, 150, 196, 50)';
let color2 = 'rgba(20, 70, 196, 25)';
let change = false;
function changeColor() {
  if (!change && aUm.style.backgroundColor === color1) {
    console.log(change = true);
  }
  if(change && aUm.style.backgroundColor === color2) {
    console.log(change = false);
  }
  // if (!change) {
  //   aUm.style.backgroundColor = color2;
  // } else {
  //   aUm.style.backgroundColor = color1;
  // }
}
navBar.firstElementChild.addEventListener('click', changeColor);
