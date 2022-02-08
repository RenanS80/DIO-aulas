const obj = [
    {
        nome: "Renan",
        idade: 25
    },
    {
        nome: "Maria",
        idade: 32
    },
    {
        nome: "Marcos",
        idade: 22
    }
]

function verificaArray(array, num) {
    try {
        if(!array || !num) {
            throw new ReferenceError("Envie os parâmetros esperados");
        }
    
        if(typeof array !== "object") {
            throw new TypeError("Array precisa ser do tipo object");
        }
    
        if(typeof num !== "number") {
            throw new TypeError("Num precisa ser do tipo number");
        }
    
        if(array.length !== num) {
            throw new RangeError("Tamanho inválido");
        }

        return array;
    }
    catch(e){
        if(e instanceof ReferenceError) {
            console.log("Este erro é do tipo ReferenceError");
            throw e;
        }
        else if(e instanceof TypeError) {
            console.log("Este erro é do tipo TypeError");
            throw e.message;
        }
        else if(e instanceof RangeError) {
            console.log("Este erro é do tipo RangeError");
            throw e.message;
        }
        else {
            console.log("Tipo de erro não esperado: " +e);
        }

    }
}

console.log(verificaArray(obj, 3));