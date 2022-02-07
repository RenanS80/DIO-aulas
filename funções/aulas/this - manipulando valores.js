const person = {
    name: 'Renan'
};

const animal = {
    name: 'Scooby'
};

function getSomething(){
    console.log(this.name);
}

getSomething.call(person);

