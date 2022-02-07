function exponencial(array, num = 1){
    const resultado = [];

    for(let i = 0; i < array.length; i++){
        resultado.push(array[i] ** num);
    }

    console.log(resultado)
}

exponencial([1, 2, 3, 4])
exponencial([1, 2, 3, 4], 2)
exponencial([1, 2, 3, 4], 4)