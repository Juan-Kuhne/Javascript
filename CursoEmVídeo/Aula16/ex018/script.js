let vetor = []
let out = document.getElementById('saida')

function add(){
    let txtn = document.getElementById('txtnum')
    let tab = document.getElementById('tab')

    if(txtn.value == '' || Number(txtn.value) < 1 || Number(txtn.value) > 100){
        alert('Valor inválido!')
    }else if(vetor.indexOf(Number(txtn.value)) != -1){
        alert('Número já inserido!')
    }else{
        vetor.push(Number(txtn.value))
        let opt = document.createElement('option')
        opt.text = `... Valor ${txtn.value} adicionado ...`
        txtn.value = ''
        out.innerHTML = ''
        tab.appendChild(opt)
        txtn.focus()
    }
    
}

function show(){
    if(vetor.length == 0){
        alert('Cadastre algum valor ...')
    }else{
        out.innerText = ''

        //somando e tirando a média
        let soma = 0
        let media
        let maior = 0
        let menor = 0
        for(let pos in vetor){
            soma += vetor[pos]
            if(maior < vetor[pos]){
                maior = vetor[pos]
            }
            if(pos == 0){
                menor = vetor[pos]
            }else if(menor > vetor[pos]){
                menor = vetor[pos]
            }
        }
        media = soma / vetor.length

        out.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
        out.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
        out.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        out.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        out.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
        out.innerHTML += `<p>Vetor ordenado: ${vord}</p>`
    }
}