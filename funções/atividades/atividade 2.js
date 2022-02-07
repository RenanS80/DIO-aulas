const pessoa1 = {
    nome: 'Marcos',
    idade: 25
}

const pessoa2 = {
    nome: 'Ana',
    idade: 32
}

const pessoa3 = {
    nome: 'Maria',
    idade: 40
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 5))
console.log(calculaIdade.call(pessoa2, 10))

console.log(calculaIdade.apply(pessoa1, [20]))
console.log(calculaIdade.apply(pessoa3, [15]))

