const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function getId({ id }){
    return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }){
    return `${first} ${last}`
}

console.log(getId(user));
console.log(getFullName(user));