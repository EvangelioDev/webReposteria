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
    const btnClose = document.createElement('p');
    btnClose.textContent = 'x';
    btnClose.classList.add('btn-close');
    nav_menu.appendChild(btnClose); 
    
    /* difurminar */
    const body = document.querySelector('body');
    const overlay = document.createElement('div');
    if(document.querySelectorAll('.back').length > 0) return;
    overlay.classList.add('back');
    body.appendChild(overlay);

    handlerClose(btnClose, overlay);
}

const handlerClose = (button, overlay) =>
{
    button.addEventListener('click', () => {
        nav_menu.classList.add('hidden');
        overlay.remove();
        button.remove();
    });

    overlay.addEventListener('click', () => {
        nav_menu.classList.add('hidden');
        overlay.remove();
        button.remove();
    });
}

