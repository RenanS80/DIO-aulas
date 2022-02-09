// Map com this
const maca = {
    value: 2
}

const laranja = {
    value: 3
}

const array = [1, 2];

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisArg);
}

console.log('This -> Maçã', mapComThis(array, maca));
console.log('This -> Laranja', mapComThis(array, laranja));


// Map sem this
const nums = [10, 20, 30];

function mapSemThis(arr) {
    return arr.map(item => item * 3);
}

console.log(mapSemThis(nums));