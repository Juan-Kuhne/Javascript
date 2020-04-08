function tab(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length==0){
        alert('Digite um numero!')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        for(var c = 0; c<=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}