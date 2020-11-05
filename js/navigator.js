/* API NAVIGATOR.SHARE */
export default function navigatorShare(){
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
}