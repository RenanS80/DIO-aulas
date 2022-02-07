// SPREAD
function soma(x, y, z){
    return x + y + z;
}

const nums = [1, 2, 3];

console.log(soma(...nums)); 


// REST
function confereTamanho(...args){
    console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(3, 4, 5);