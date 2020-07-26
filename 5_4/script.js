let body = document.body;
let show = false;
let navBar = body.firstElementChild.firstElementChild.querySelector(".nav-style");
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