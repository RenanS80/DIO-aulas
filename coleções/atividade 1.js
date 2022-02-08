function getAdmins(users){
    let admins = [];

    for([key, value] of users){
        if(value === 'Admin'){
            admins.push(key)
        }
    }

    return admins;
}

const users = new Map();

users.set('Renan', 'Admin');
users.set('Maria', 'User');
users.set('Rita', 'Admin');
users.set('Clara', 'User');
users.set('Júlia', 'User');
users.set('Matheus', 'Admin');

console.log(getAdmins(users));