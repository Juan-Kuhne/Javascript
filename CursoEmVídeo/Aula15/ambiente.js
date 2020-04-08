let num = [5, 8, 4]
console.log(`Nosso vetor é o ${num}`)
num[3] = 6
console.log(`Vetor atualizado => ${num}`)
num.push(7)
console.log(`Vetor atualizado => ${num}`)
console.log(`Tamanho do vetor ${num.length}`)
console.log(`Vetor ordenado => ${num.sort()}`)
console.log(`Teste de modificação => ${num}`)

console.log(`Indice do número 7 => ${num.indexOf(7)}`)
console.log(`Indice do número 7 => ${num.indexOf(9)}`) 
//resultado -1 de indexOf significa que não existe o número no array