const menu = document.querySelector('.btn-nav');
const nav_menu = document.querySelector('.nav-menu');
const imagenes = document.querySelectorAll('img');
const btn_all = document.querySelector(".all");
const btn_saled = document.querySelector(".saled");
const btn_pasta = document.querySelector(".pasta");
const btn_pizza = document.querySelector(".pizza");
const btn_desserts = document.querySelector(".desserts");
const container = document.querySelector(".platillos");


document.addEventListener('DOMContentLoaded', () =>{
    handler();
    platillos();
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

const observer = new IntersectionObserver((entrie, observer) =>{
    entrie.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
            
        }
    })
});


imagenes.forEach(img => {
    observer.observe(img);
})

/* filtrar platillos */
const platillos = () => {
    
    let allplatillosCopy = []; 
    const allplatillos = document.querySelectorAll(".platillo");
    allplatillos.forEach(platillo => allplatillosCopy = [ ...allplatillosCopy, platillo]);

    const ensaladas = allplatillosCopy.filter(saled => saled.getAttribute("data-typo") === "saled");
    const pasta = allplatillosCopy.filter(pasta => pasta.getAttribute("data-typo") === "pasta");
    const pizza = allplatillosCopy.filter(pizza => pizza.getAttribute("data-typo") === "pizza");
    const desserts = allplatillosCopy.filter(desserts => desserts.getAttribute("data-typo") === "desserts");
    showPlatillos(ensaladas, pasta, pizza, desserts, allplatillosCopy);

};

const showPlatillos = (ensaladas, pasta, pizza, desserts, todos) =>
{
    btn_saled.addEventListener("click", () => {
        clearContainer(container);
        ensaladas.forEach(saled => container.appendChild(saled));
    });
    btn_pasta.addEventListener("click", () => {
        clearContainer(container);
        pasta.forEach(pasta => container.appendChild(pasta));
    });
    btn_pizza.addEventListener("click", () => {
        clearContainer(container);
        pizza.forEach(pizza => container.appendChild(pizza));
    });
    btn_desserts.addEventListener("click", () => {
        clearContainer(container);
        desserts.forEach(desserts => container.appendChild(desserts));
    });
    btn_all.addEventListener("click", () => {
        clearContainer(container);
        todos.forEach(platillo => container.appendChild(platillo));
    });
};

const clearContainer = (container) => {
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
};