export default function shareUrl(id){
    const shareUrl = document.getElementById("browser")
    const title = window.document.title
    const url = window.document.location.href

    shareUrl.addEventListener('click', () => {
        if(navigator.share) {
            navigator.share({
                title: `${title}`,
                url: `${url}/${id}`
            }).then(() => {
                console.log('Obrigado por compartilhar!')
            })
            .catch(console.error)
        }
    })
}