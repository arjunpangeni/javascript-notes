# Class

A class is a blueprint for creating objects with predefined properties and methods. It provides a way to define object constructors and encapsulate methods for an object, making it easier to create and manage similar types of objects. Classes in js were introduced in `ES6` and provide a cleaner , more intuitive syntax to work with.

Classes are syntactic sugur in the js unlike the other programming languages, js doesn't contain proper classes. Classes use the prototype-based inheritance by using constructors.

## Defining a Class

A class in JavaScript is defined using the `class` keyword.

```javascript
 class  User {
constructor(username) {
  this.username = username
}
logMe() {
console.log(` username is: ${this.username}`)
  }
}
// creating an instance of the class
const user1=new User('arjun')
user1.logMe() // output: username is:arjun
```

**Constructor function approach :**

```javascript
function User(username){
  this.username=username
  }
  User.prototype.logMe=function(){
    console.log(`username is : ${this.username}`)
    }
  // creating an instance
  const user1=new User('arjun')

```

## Inheritance

Inheritance in JavaScript is achieved using the `extends` keyword. This allows one class to inherit the properties and methods of another class. The `super` keyword is used to call the constructor of the parent class.

```javascript
//using above User class.
class Student extends User{
   constructor(username,age,grade){
       super(username) // call the constructor of the parent class
       this.age=age;
       this.grade=grade;
       }
       study(){
       console.log(`${this.name} is studying`)
       }
   }
   // creating an instance of the subclass
   const student1=new Student('arjun','20','a')
   student.study() // output: arjun is studying
```

**inheritance using constructor function apporoch**

```javascript
// using above User functional constructor
function Employee (username,jobTitle){
  User.call(this,username); //call the parent (User) constructor
  this.jobTitle=jobTitle;
  }
  Employee.prototype=Object.create(User.prototype);
  Employee.prototype.constructor= Employee;

  // create instance and call logMe method.
```

## The static keyword

The `static` keyword defines a static method or property for a class. Static methods and properties are called on the class itself, not on instances of the class. They are often used for utility functions that do not depend on instance properties.

```javascript
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

// Calling a static method ,
console.log(MathUtil.add(5, 3)); // Output: 8
// this method cant call by intances object .
```
