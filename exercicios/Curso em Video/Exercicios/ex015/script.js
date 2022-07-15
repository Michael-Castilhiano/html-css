function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano){
        alert('erro')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fAno.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('scr', 'menino.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('scr', 'jovemmenino.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('scr', 'homemadulto.png')
            }else {
                //idoso
                img.setAttribute('scr', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('scr', 'menina.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('scr', 'jovemmenina.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('scr', 'mulheradulta.png')
            }else {
                //idosa
                img.setAttribute('scr', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}