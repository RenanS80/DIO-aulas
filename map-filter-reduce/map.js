// Map
const array = [1, 2, 3, 4, 5];

const dobro = array.map((item) => item * 2);
console.log(dobro)


const produtos = [
    { nome: '...', preco: 23.67, desconto: 0.2}, 
    { nome: '...', preco: 120.99, desconto: 0.3}, 
    { nome: '...', preco: 365.67, desconto: 0.5}, 
    { nome: '...', preco: 123.00, desconto: 0.25}, 
    { nome: '...', preco: 4500.99, desconto: 0.1}, 
    { nome: '...', preco: 193.60, desconto: 0.05}, 
]

// Calcular o desconto sobre cada preço
const descontoProduto = produtos.map(function(item){
    const calculaDesconto = (item.preco * (1 - item.desconto)).toFixed(2)       // Formata a saída com 2 casas decimais
    return Number(calculaDesconto)              // transforma a saída em Number porque o toFixed fica como String
})

console.log(descontoProduto)

