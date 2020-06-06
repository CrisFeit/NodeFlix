import { swiper } from './modules/slides';

document.addEventListener('DOMContentLoaded', ()=> {
    swiper
    if(window.innerWidth <= 800){
        [...document.querySelectorAll('.swiper-button-prev,.swiper-button-next')].forEach(btn => {
            btn.classList.add('is-hidden')
        })
    }
})