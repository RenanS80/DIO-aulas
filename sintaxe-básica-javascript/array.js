let array = ['The Last of Us Part II', 'God of War', 'Horizon Zero Dawn']

// forEach - percorre o array
array.forEach(function(item, index){
    console.log(item, index)
})

// push - adiciona no final do array
array.push('Resident Evil Village')
console.log(array)

// pop - remove o último item do array
array.pop()
console.log(array)

// shift - remove o primeiro item do array
array.shift()
console.log(array)

// unshift - adiciona no início do array
array.unshift('The Last of Us Remastered')
console.log(array)

// indexOf - retorna o indice de um item do array
console.log(array.indexOf('God of War'))

// splice - remove itens em um intervalo de índices
array.splice(0, 2)
console.log(array)