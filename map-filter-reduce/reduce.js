// Reduce soma números de array
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const soma = numeros.reduce(function(acc, num){
    return acc + num
})
console.log(soma)     