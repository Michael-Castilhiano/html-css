function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}hrs</strong>`
    if (hora >=0 && hora < 12){
        img.src = 'manha1.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde1.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite1.png'
        document.body.style.background = '#515154'
    }
}    