function gerarTabuada(){
    let tabuada = document.getElementById('tabuada')
    let tab = document.getElementById('seltab')
    if (tabuada.value.length == 0){
        alert('Erro, digite um número!')
    }else {
        let num = Number(tabuada.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num}x${c}=${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}