const hiddenMenu = document.querySelector('.hidden-menu');
const hiddenMenuToggleOut = document.querySelector('.hidden-menu-toggle-out');
const hiddenMenuToggle = document.querySelector('.hidden-menu-toggle');

function showMenu(){
    hiddenMenu.style.top = "0";
}


function hideMenu(){
    hiddenMenu.style.top = "-100vh";
}


hiddenMenuToggle.addEventListener('click', showMenu);

hiddenMenuToggleOut.addEventListener('click', hideMenu);

