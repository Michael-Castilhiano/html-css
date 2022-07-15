let agr = new Date()
let horas = agr.getHours()
if (horas <= 12 && horas > 5){
    console.log('Bom dia')
}else if (horas < 18 && horas > 12){
     console.log('Boa tarde')
}else if (horas >= 18 && horas < 24){
    console.log('Boa noite')
}else {
    console.log('Boa madrugada')
}