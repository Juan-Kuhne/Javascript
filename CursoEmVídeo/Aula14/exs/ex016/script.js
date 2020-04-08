function contar(){
    var res = document.querySelector('div#ctg')
    let st = document.querySelector('input#st')
    let end = document.querySelector('input#end')
    let ft = document.querySelector('input#ft')

    if(st.value.length == 0 || end.value.length == 0 || ft.value.length == 0){
        alert('Campo não preenchido!')
    }else if(ft.value == 0){
        alert('Incremento inválido ...')        
    }else{        
        res.innerHTML = `Contando: <br>`
        if(Number(st.value) < Number(end.value)){
            for(let i = Number(st.value); i <= Number(end.value); i+=Number(ft.value)){
                res.innerHTML += i + ' '
                res.innerHTML += '\u{1F449} '
            }

        }else if(Number(st.value) > Number(end.value)){
            for(let i = Number(st.value); i >= Number(end.value); i-=Number(ft.value)){
                res.innerHTML += i + ' '
                res.innerHTML += '\u{1F449} '
            }            
        }
        res.innerHTML += '\u{1F3C1}'
    }
}