function substituirPares(array){
    let novoArray = [];

    if(array.length < 1){
        return -1;
    }
    
    for(let i = 0; i < array.length; i++){
        novoArray.push(array[i])

        if(array[i] % 2 === 0){
            novoArray.splice(i, 1, 0);
        }
    }

    return novoArray;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90]
console.log(substituirPares(array))