// Função Autoinvocável
(
    function(){
        let nome = "Renan Soares"
        console.log(nome)
    }
)();

// Callback
const calc = function(operacao, num1, num2){
    return operacao(num1, num2)
}

const soma = function(num1, num2){
    return num1 + num2;
}

const subtracao = function(num1, num2){
    return num1 - num2;
}

const resultSoma = calc(soma, 4, 2);
const resultSub = calc(subtracao, 4, 2);

console.log(resultSub);
console.log(resultSoma);