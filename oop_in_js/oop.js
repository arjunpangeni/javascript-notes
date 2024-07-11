const user = {
    user: 'hitesh',
    loginCount: 8,
    signIn: true,
    getuserDetail: function () {
        console.log(`Username ${this.user}`)
        console.log(this)
    }
}  // object literal 

// console.log(this)
// console.log(user.getuserDetail())


//constructor function
function User(username, loginCount) {
    this.username = username;
    this.loginCount = loginCount;
    // return this;
    this.gretting = function () {
        console.log(`Hello ${this.username}!`)
    }

}
const userone = User('hitesh', 6)
const usertwo = User('arjun', 8)
// console.log(userone)
// usertwo overwrite the userone, 

const user3 = new User('lolo', 9)
// console.log(user3.constructor)
// it creates completely new instance of User constructor function.


// prototypical behaviour

function createUser(username, score) {
    this.username = username;
    this.score = score
}
createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.print = function () {
    console.log(this.username)
}

const newUser = new createUser()
//  q: what happens behind the scenes when the new keyword is used.?

// prototype

// console.log(myName.truelength())

let myHeros = ['hero1', 'hero2']
let hero = {
    hero1: 'hammer',
    hero2: 'sling',
    getheropower: function () {
        console.log(this.hero2)
    }
}

// inheritance 
const User2 = {
    user: 'arjun',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true,

}
const Teachingsupport = {
    inAviable: false
}

const Tasupport = {
    makessign: 'js assignment',
    fulltime: true,
    __proto__: Teachingsupport
}
Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(Teachingsupport, Teacher)



// let fullname = ' arjunpangeni     '
// String.prototype.TrueLength = function () {
//     console.log(`true lengthis :${this.trim().length}`);

// }
// fullname.TrueLength()

let fullname = ' arjunpangeni ';

String.prototype.TrueLength = function () {
    console.log(`true length is: ${this.trim().length}`);
};

fullname.TrueLength(); // true length is: 12


// call this 

