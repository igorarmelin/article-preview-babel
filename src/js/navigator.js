/* API NAVIGATOR.SHARE */
export default function navigatorShare(id){
    const shareUrl = document.querySelector("#browser")
    const title = window.document.title
    const url = window.document.location.href
    
    shareUrl.addEventListener('click', () => {
        
        if(navigator.share) {
            navigator.share({
                title: `${title}`,
                url: `${url}${id}`
            }).then(() => {
                console.log('Obrigado por compartilhar!')
            })
            .catch(console.error)
        } else {
            navigator.clipboard.writeText(`${title} - *Veja mais em: * ${url}${id}`)
        }
    })
}