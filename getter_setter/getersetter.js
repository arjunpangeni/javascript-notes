class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value
    }
}

const arjun = new User('arjun@', '342gg')
// console.log(arjun.password)

// getter setter through properties

function Users(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()

        },
        set: function (value) {
            this._email = value
        }
    })
}
const pangeni = new Users('heloo@gamil', '3423fset')
// console.log(pangeni.email)

const obj1 = {
    _name: 'arjun',
    get name() {
        return this._name.toUpperCase()
    },
    set name(value) {
        this._name = value
    }
}

console.log(obj1.name)
obj1.name = 'boka'
console.log(obj1.name)