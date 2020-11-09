import {share} from './share.js';
import navigatorShare from './navigator.js';
import uuidv4 from './uuid.js'
import css from '../css/main.css';
/* import { v4 as uuidv4 } from 'https://jspm.dev/uuid'; //Funciona porém não é uma boa prática
import { v4 as uuidv4 } from 'uuid'; */ //Maneira correta, porém apresenta erro


/* FILTRO ACTIVED */
share.forEach(share => {
    if(!share.actived) {
        const media = document.querySelectorAll(`#${share.name}`)
        media.forEach(item => {
            item.classList.add('disabled')
            item.setAttribute("disabled", "disabled")
        });
    }
})

/* EXIBIR TOOLTIP */
const buttonTooltip = document.querySelector("button")

buttonTooltip.addEventListener("click", () => {
    const nameClass = "show"
    const addClassDiv = buttonTooltip.parentNode

    addClassDiv.classList.toggle(nameClass)
})

/* API NAVIGATOR.SHARE */
navigatorShare(uuidv4())