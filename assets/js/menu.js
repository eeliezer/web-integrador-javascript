const barsMenu = document.querySelector('.navbarList');
const barsBtn = document.querySelector('.menuLabel');
const cartBtn = document.querySelector('.cartOption');

const toggleMenu = () => {
    barsMenu.classList.toggle('openMenu');

    if(barsMenu.classList.contains('openMenu')){
        cartContainer.classList.remove('openCart');
        overlay.classList.add('showOverlay')
        return
    }
    overlay.classList.toggle('showOverlay');
};

const initMenu = () =>{
    barsBtn.addEventListener('click', toggleMenu);
};

initMenu();