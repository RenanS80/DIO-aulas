// Filter notas
const notas = [7.1, 4.5, 6.1, 8.2, 2.0]

const aprovados = notas.filter(nota => nota > 6)
console.log(aprovados)


// Filter frutas
const frutas = ['Maçã verde', 'Maçã do amor', 'Banana', 'Uva'];

const maca = frutas.filter(fruta => fruta.includes('Maçã'));
console.log(maca)


// Manipulando array de objetos com map e filter
const produtos = [
    { nome: '...', preco: 23.67, desconto: 0.2}, 
    { nome: '...', preco: 120.99, desconto: 0.3}, 
    { nome: '...', preco: 365.67, desconto: 0.5}, 
    { nome: '...', preco: 123.00, desconto: 0.25}, 
    { nome: '...', preco: 4500.99, desconto: 0.1}, 
    { nome: '...', preco: 193.60, desconto: 0.05}, 
]

function calculaDesconto(produto){
    const desconto = (produto.preco * (1 - produto.desconto)).toFixed(2)      // formata a saída com 2 casas decimais
    return Number(desconto)                  // transforma a saída em Number porque o toFixed fica como String
}


const produtoComprar = produtos.map(calculaDesconto).filter(desconto => desconto < 100)
console.log(produtoComprar)