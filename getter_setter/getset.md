# getter setter

In JavaScript, getters and setters are used to define accessors for object properties. They allow you to execute a function when a property is accessed or set, providing more control over how properties are read or modified. Here's a basic example of how to use getters and setters

```javascript
function User(email, password) {
    this.password = password;

    // Define getter and setter for the email property
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });

    // Initialize the email property using the setter
    this.email = email;
}

const user = new User('example@gmail.com', 'password123');
console.log(user.email); // Outputs: "EXAMPLE@GMAIL.COM"
```

**example with class**

```javascript
class User {
    constructor(email, password) {
        this._email = email;
        this.password = password;
    }

    // Getter for the email property
    get email() {
        return this._email.toUpperCase();
    }

    // Setter for the email property
    set email(value) {
        this._email = value;
    }
}

const user = new User('example@gmail.com', 'password123');
console.log(user.email); // Outputs: "EXAMPLE@GMAIL.COM"

// Using the setter
user.email = 'another@example.com';
console.log(user.email); // Outputs: "ANOTHER@EXAMPLE.COM"
```
