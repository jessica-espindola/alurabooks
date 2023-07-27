const menu = document.querySelector('.menu-hamburguer');
const menuArea = document.querySelector('.cabecalho__esquerdo__botao-menu');
const divMenu = document.querySelector('.menu__hamburguer');

menu.addEventListener ("click", abrirMenu);

function abrirMenu () {
    var validaArea = menuArea.classList.toggle("active");
    menu.classList.toggle("active");
    if (validaArea) {
        divMenu.style.visibility = 'visible';
    } else {
        divMenu.style.visibility = 'hidden';
    }    
}