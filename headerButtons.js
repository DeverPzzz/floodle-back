
let menuButton = document.querySelector('.menu-icon');
let sidebarScreen = document.querySelector('.sidebar-screen');
let textScreen = document.querySelector('.text-screen');

menuButton.onclick = function() {
  sidebarScreen.classList.toggle('sidebar-opened')
  if (sidebarScreen.classList.contains('sidebar-opened')) {
    sidebarScreen.style.width = "500px";
    textScreen.style.marginLeft = "500px";
  } else {
    sidebarScreen.style.width = "0";
    textScreen.style.marginLeft= "0";
  };
};

