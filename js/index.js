import {share} from './share.js';

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
const shareUrl = document.querySelector("#browser")
const title = window.document.title
const url = window.document.location.href

shareUrl.addEventListener('click', () => {
    
    if(navigator.share) {
        navigator.share({
            title: `${title}`,
            url: `${url}`
        }).then(() => {
            console.log('Obrigado por compartilhar!')
        })
        .catch(console.error)
    } else {
        navigator.clipboard.writeText(`${title} - *Veja mais em: * ${url}`)
    }
})