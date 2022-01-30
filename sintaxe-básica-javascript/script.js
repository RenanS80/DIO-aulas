function calculadora() {
    let operacao = Number(prompt("Selecione a operação desejada: \n 1- Soma (+) \n 2- Subtração (-) \n 3- Multiplicação (*) \n 4- Divisão Real (/) \n 5- Divisão Inteira (%) \n 6- Potenciação (**)"))

    if (!operacao || operacao >= 7 || operacao < 1) {
        alert("Erro - operação inválida");
        calculadora();
    }
    else {
        let n1 = Number(prompt("Digite o primeiro número"));
        let n2 = Number(prompt("Digite o segundo número"));

        if(!n1 || !n2){
            alert("Erro - parâmetros inválidos")
            calculadora();
        }
        else {
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
                default:
                    alert("Opção inválida!");
                    calculadora();
                    break;
            }
    
            function soma() {
                alert(`${n1} + ${n2} = ${n1 + n2}`)
                novaOperacao();
            }
    
            function subtracao() {
                alert(`${n1} - ${n2} = ${n1 - n2}`)
                novaOperacao();
            }
    
            function multiplicacao() {
                alert(`${n1} * ${n2} = ${n1 * n2}`)
                novaOperacao();
            }
    
            function divisaoReal() {
                alert(`${n1} / ${n2} = ${n1 / n2}`)
                novaOperacao();
            }
    
            function divisaoInteira() {
                alert(`${n1} % ${n2} = ${n1 % n2}`)
                novaOperacao();
            }
    
            function potenciacao() {
                alert(`${n1} ** ${n2} = ${n1 ** n2}`)
                novaOperacao();
            }
    
            function novaOperacao() {
                let op = Number(prompt("Deseja fazer uma nova operação? \n 1- Sim \n 2- Não"))
    
                if (op == 1) {
                    calculadora();
                }
                else if (op == 2) {
                    alert("Até mais!")
                }
                else {
                    alert("Opção inválida!")
                    novaOperacao();
                }
            }
        }
    }
}

calculadora();