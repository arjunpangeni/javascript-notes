class User {
    constructor(username, email, passwod) {
        this.username = username;
        this.email = email
        this.passwod = passwod
    }
    encryptPassword() {
        return `${this.passwod}abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}


const user1 = new User('arjun', 'arjun@gmail.com', '123')

console.log(user1.encryptPassword())
console.log(user1.changeUsername())


// behind the scene using traditional syntax

function Userr(username, email, passwod) {
    this.username = username;
    this.email = email;
    this.passwod = passwod;
}
Userr.prototype.encryptPassword = function () {
    return `${this.passwod}abc`
}
Userr.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const user2 = new Userr('arjun', 'hfls2@gmail', '124')
console.log(user2.changeUsername())

// inheritance



