const perfil = {
    nome: 'Mike',
    altura: 1.77,
    idade: 29,
    profissao: 'Engenheiro Mecânico',
    estadoCivil: 'Solteiro',
    graduacao: 'Engenharia Mecânica'
}

const {nome, idade, altura, ...outros} = perfil

console.log(nome)
console.log(idade)
console.log(altura)
console.log(outros)

let amigo = {nome: 'Paulo', 
sexo: 'M', 
peso: 85.5, 
engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)