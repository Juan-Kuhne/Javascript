let num = -147
let est

function parimp(n){
    let res = n%2
    if(res == 1 || res== -1){
        return 'impar'
    }else if(res == 0){
        return 'par'
    }else{
        return '[ERRO]'
    }
    //console.log(`O número é ${est}`)
}

est = parimp(num)
console.log(`O número ${num} é ${est}`)

//-------------------------------------------

function soma(n1=0, n2=0){
    return n1 + n2
    //=0 é um valor padrão para quando um parametro não é passado
}

console.log(`A soma de 7 e 13 é ${soma(7, 13)}`)

//-------------------------------------------------

let v = function(x){
    return x*2
}

console.log(`O dobro de 5 é ${v(5)}`)

//-----------------------------------------------------

function fatorial(n){
    let fat = 1
    for(let c = n; c>1; c--){
        fat *= c
    }
    return fat
}

console.log(`O fatorial de 9 é ${fatorial(9)}`)

//-------------------------------------------------------

function fatorial2(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial2(n-1)
    }
}

console.log(`O fatorial de 5 é ${fatorial2(5)}`)
//QUE?? (RECURSIVIDADE)