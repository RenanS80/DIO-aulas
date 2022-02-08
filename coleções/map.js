const myMap = new Map();

// Inserir 
myMap.set('apple', 'fruits')
myMap.set('banana', 'fruits')
myMap.set('dog', 'animal')

// Recuperar
console.log(myMap.get('apple'))

// Deletar
myMap.delete('apple');

console.log(myMap.get('apple'))     

