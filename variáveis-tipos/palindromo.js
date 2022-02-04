// Solução 1
function verificaPalindromo(palavra){
    if(!palavra) {
        return "String inexistente";
    }
    
    return palavra.split("").reverse().join("") === palavra
}

console.log(verificaPalindromo("arara"))

// Solução 2;
function verificaPalindromo2(palavra) {
    if(!palavra) {
        return "String inexistente";
    }
    
    for(let i = 0; palavra.length / 2; i++){
        if(palavra[i] !== palavra[palavra.length - 1 - i]){
            return false;
        }
        else {
            return true;
        }
    }
}

console.log(verificaPalindromo2("arara"))