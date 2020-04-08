function carregar(){
    var msg = document.getElementById('msg')
    var img  = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>=0 && hora<12){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#eebe3c'
    }else if(hora>=12 && hora<18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#bd8470'
    }else if(hora>=18 && hora<24){
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#3e6e9b'
    }
}