
let menuButton = document.querySelector('.menu-button');
let sidebar = document.querySelector('.sidebar');

menuButton.onclick = function() {
  sidebar.classList.toggle('sidebar--opened');
  menuButton.classList.toggle('button--rotated');
  menuButton.classList.toggle('button--active'); 
}





