let currentNumberWrapper = document.getElementById('currentNumber');
let subtrair = document.getElementById('subtrair');
let adicionar = document.getElementById('adicionar')
let currentNumber = 0;


adicionar.addEventListener('click', () => {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0){
        currentNumberWrapper.classList.remove('color-red')
    }
})

subtrair.addEventListener('click', () => {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0){
        currentNumberWrapper.classList.add('color-red')
    }
    

})








