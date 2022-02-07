const person = {
    id: 1,
    firstName: 'Renan',
    lastName: 'Soares',
    fullName: function(){
        return this.firstName+ ' ' +this.lastName;
    },
    getId: function(){
        return this.id;
    }
}

console.log(person.fullName());
console.log(person.getId());