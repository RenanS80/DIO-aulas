const array = [1, 23, 55, 67, 30, 2, 4];

function numPares(array) {
    return array.filter(item => item % 2 == 0);
}

console.log(numPares(array));