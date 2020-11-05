import {share} from './share.js';
import navigatorShare from './navigator.js'

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

navigatorShare()