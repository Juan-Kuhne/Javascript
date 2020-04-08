function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value>ano){
        alert('[ERRO] Verifique os dados e tente novamente ...')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<12){
                //Criança
                img.setAttribute('src', 'crianca-m.png')
                genero = 'Criança'
            }else if(idade<21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
                genero = 'Jovem'
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
                genero = 'Adulto'
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
                genero = 'Idoso'
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<12){
                //Criança
                img.setAttribute('src', 'criança-f.png')
                genero = 'Criança'
            }else if(idade<21){
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
                genero = 'Jovem'
            }else if(idade<50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
                genero = 'Adulta'
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
                genero = 'Idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero: ${genero} idade: ${idade} anos`
        res.appendChild(img)
    }
}