'use strict'


let brandDark = document.querySelector('.brandDark');
let headerBars = document.querySelector('.headerBars');
let menuClose = document.querySelector('.menuClose');

function toggleeMenu() {
    brandDark.classList.toggle('hidden')
}

headerBars.addEventListener('click', toggleeMenu)
menuClose.addEventListener('click', toggleeMenu)