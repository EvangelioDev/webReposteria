const menu = document.querySelector('.btn-nav');
const nav_menu = document.querySelector('.nav-menu');

document.addEventListener('DOMContentLoaded', () =>{
    handler();
})

const handler = () => {
    menu.addEventListener('click', visibleMenu);
}

const visibleMenu = () => {
    nav_menu.classList.remove('hidden');
    visibleBtn();
}

const visibleBtn = () => {
    console.log('visibilidad del boton');
}

