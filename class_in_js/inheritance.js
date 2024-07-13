//inheritance in classes 

class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(` username is: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password
    }
    addCourse() {
        console.log(`a new course was added by ${this.username}`)
    }
}
const teacher = new Teacher('chai', 'email@gamil', '123th')


const user1 = new User('arjunpageni')
user1.logMe()
teacher.logMe()

// check if the object is instance of the class 
console.log(teacher instanceof Teacher)