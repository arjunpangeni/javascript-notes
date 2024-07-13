// 
class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`username:${this.username}`)
    }
    static createId() {
        return this.username + Math.floor(Math.random() * 1000)
    }
}
const arjun = new User('arjun')
// console.log(arjun.createId())


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const myteacher = new Teacher('arjun', 'arjun@ga')
console.log(myteacher)