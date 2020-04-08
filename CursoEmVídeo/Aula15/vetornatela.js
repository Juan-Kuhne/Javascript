let valores = [8, 1, 7, 4, 2, 9]

//Método 1
for(let pos = 0; pos<valores.length; pos++){
    console.log(`Posição ${pos} => ${valores[pos]}`)
}

//Método 2

for(let pos in valores){
    console.log(`Índice ${pos} => ${valores[pos]}`)
}