import {share} from './share.js';

share.forEach(share => {
    if(!share.actived) {
        const media = document.querySelectorAll(`#${share.name}`)
        media.forEach(item => {
            item.classList.add('disabled')
        });
    }
})