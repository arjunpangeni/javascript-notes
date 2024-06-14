# Function in javascript

Function is a block of code designed to perform a particular task. It is a resuable piece of code that can be called multiple times with different arguments to produce different results.Function in javascript can be defined in serveral ways,

- **function declaration**
  A function declaration defines a named function. The function can be called before it is defined because of hoisting .

  ```javascript
  function greet(name) {
  return `Hello, ${name}!`;
     }

  console.log(greet("arjun")); // Output: Hello, arjun!
  ```

- **Function expression**
  A function expression defines a function inside an expression , and it can be anonymous (without a name)or named . Function expression are not hoisted , so they can't be called before they are defined. A function expression can be stored in variable.

  ```javascript
  const greet = function(name) {
  return `Hello, ${name}!`;
  };

  console.log(greet("arjun")); // Output: Hello, arjun!
  ```

  After a function expression has been stored in a variable, the variable can be used as a function. Actually it is an anonymous function . function stored in variable do not need function names.

- **Arrow function**
  An arrow function is a concise way to define a function usig the `=>` syntax. Arrow function were introduced in ES6 and offer more compact and readable way to write function , especially for simple expression , They also differ from traditional function in terms of handling the `this` keyword .

      **key features of arrow function :**
      - Shorter syntax:

        ````javascript
         // Traditional function expression
         const add = function(a, b) {
        return a + b;
         };

        // Arrow function
        const add = (a, b) => a + b;
         ````

  - Implict Return:
    if the function body is a single expression , the value of that expression is implicitly returned ( ie, no need to use the `return` keyword)
    ```javascript
    const square = x => x * x;
    ```
  - Lexical `this` Binding:
    Arrow functions do not have their own `this`context. Instead, they inherit `this` rom the enclosing lexical context. This makes them particulary useful in situation where you need to preserve the value of `this` from the outer scope.

    ```javascript
    function Person() {
    this.age = 0;

    setInterval(() => {
     this.age++; // `this` refers to the Person instance
    }, 1000);
    }

    const person = new Person();
    ```

  - No `argument` Object:
    Arrow functions do not have their own `argument` object. If you need to access the `argument` object, you should use a regular functions or rest parameters.

    ```javascript
     const traditionalFunction = function() {
     console.log(arguments); // works
    };

    const arrowFunction = () => {
    console.log(arguments);
    // ReferenceError: arguments is not defined
    };
    ```

    :warning: **Note**
    Arrow functions should not be used as method in object because they do not have their own `this` because it does't rebind this keyword but work according to it's parents.

- **Immediately Invoked Function Expressions (IIFE):**
  IT is a function that is defined and executed immediately after it is created. IIFEs are commonly used to create a new scope , to avoide polluting the global scope, and to encapsulate code.
  ```javascript
   (function(){
    console.log(`this is an IIFE`);
    })();
  ```
  Variables defined inside an IIFE are not accessible from the outside, effectively making them private.

##

- **Function are Objects**
  The typeof operator in javascript returns "function" for functions. but, javascript functions can best be described as objects. They are first-class objects. Javascript functions have both properties and method , can be passed as arguments, can be returned from other functions, can be assigned to variables, and they are instances of the `function` consturctor.

  ```javascript
  // javscript have `length` and `name` property.
  function exampleFunction(a, b) {}
  console.log(exampleFunction.length); // Outputs: 2
  console.log(exampleFunction.name);
  // Outputs:  "exampleFunction"
  ```

  ```javascript
  // function have methods like `call` ,`apply`and `bind`.
  function greet() {
  console.log(`Hello, ${this.name}`);
  }

  const person = { name: 'Alice' };
  greet.call(person); // Outputs: "Hello, Alice"

  const boundGreet = greet.bind(person);
  boundGreet(); // Outputs: "Hello, Alice"

  ```

##

- **Function Hoisting :**
  Hoisting is javascript's default behavior of moving declarations to the top of the current scope. Hoisting applies to variable declaration and to function declarations. Because of this, Javscript functions can be called before they are declared.
  ```javascript
  myFunction(5);
  //output : 25
  function myFunction(y) {
  return y * y;
  }
  ```
  :warning: _: functions defined using an expression are not hoisted. _
  ```javascript
  myFunction(5);
  /* output: ReferenceError: Cannot access
  'myFunction' before initialization */

  const myFunction= function(y){
  return y*y
  }
  ```

##

- **Function parameters and arguments**
  Function `parameters` are the names listed in the function defination and the real values passed to the function are `arguments`.
  ````javascript
  function fun1(a,b){
  return a\*b
  }
  // here a and b are parameters

      console.log(fun1(2,5)) // output : 10
      // here 2, 5 are values passed to the function called arguments.

  `````

   - **Parameters Rules**
       Javascript function definitions do not specify data types for parameters. It do not perform type checking on the passed arguments and do not check the number of arguments received.

   - **Default Parameters**
    If a function is called with missing arguments (less than declared) , the missing values are set to undefined. Sometimes this is acceptable , but sometimes it is better to assign a default value to the parameter. ES6 allows function parameters to have default values.
      ````javascript
     // If y is not passed or undefined, then y = 10.
     function myfun(x, y=3){
      return x+y
      }
      console.log(myfun(5); // output: 8
      ````
    - **Function Rest parameter**
          The rest parameter (...) allows a function to treat an indefiite number of arguments as an array .
         ````javascript
          function add(...rest){
          let sum = 0;
          rest.forEach((n)=>{
            sum+=n;
          })
         return sum;
         }
         console.log(add(1,2,3,4,5,6)) //output: 21
         ````

      :memo: *Note :*

      *When the function add is called with arguments 1, 2, 3, 4, 5, 6, the rest parameter ...rest collects all these arguments into an array called rest. so i apply the array ittiration method.*

   - **Passing Arguments as values**
     When we pass a primitive value to a function as an argument, the function receives a copy of that value. Changes made to the parameters inside the function do not affect the original value outside the function.
      ````javascript
       function modifyValue(value){
         value=100;
         console.log(value); //output: 100
         }
         let x=50;
         modifyvalue(x) // output : 100
         console.log(x) // output : 50
         // x remains same.
      ````
      In this example , the `x` variable remains unchanged outside the function because only a copy of `x` is passed to `modifyValue` . 'value' inside the function will not update the value of `x` (passed as an argument ) at outside of the function.

  - **Passing Arguments as Objects (Reference Types)**
   When we pass an object (including arrays and functions) to a function, the function receives a reference to that object. Changes made to the object's properties inside the function will affect the original object outside the function because both the original and the parameters refer to the same object in memory .
   ````javascript
   function modifyObject(obj){
    obj.value=100;
    console.log(obj)
    }
    let myobj={value:50};
    modifyObject(myobj) ; // output: {value: 100}
    console.log(myobj) ; // output: {value: 100}
  `````

  Have you notice that in this example , when we pass the `myobj` object as an argument, the `myObj` variable is modified by the `modifyObject` function because both the original variable and the parameter reference the same object.

##

- **Invoking a Javascript Function :**
  Invoking a function, also known as calling a function, is the process of executing the code inside the function body. When we invoke a function , we are telling javascript to run the instuction or statements contained within that function. Here's how function invocation works in JavaScript:

  - **Function invoked in the global context**
    when a function is invoked in the global context, the default value of this inside the function is the global object ( `window` in browsers or `global` in Node.js). However, in strict mode, `this` will be undefined.

  - **Method Invocation**
    When a function is called as a method of an object, `this` refers to the object that the method is a propery of.

    ```javascript
    const obj = {
    method: function() {
     console.log(this);
       }
    };
    obj.method(); // Outputs: obj
    ```

  - **Constuctor Invocation**
    When a function is used as a constructor with the `new` keyword , `this` referes to the newly created instance of that constuctor function.

    ```javascript
       function Person(name) {
       this.name = name;
     }

    const alice = new Person("Alice");
    console.log(alice.name); // Outputs: Alice
    ```

  - **Arrow function invocation**
    Arrow functions do not have their own `this` context; instead, they inherit `this` from the enclosing scope at the time they are defined.

    ```javascript
    const obj = {
    name: "Alice",
    regularFunc: function() {
     console.log("Regular Function - this.name:", this.name);
    },
    arrowFunc: () => {
     console.log("Arrow Function - this.name:", this.name);
      }
    };

    const outerFunc = obj.regularFunc;
    const outerArrowFunc = obj.arrowFunc;

    obj.regularFunc();
    // Outputs: Regular Function - this.name: Alice
    obj.arrowFunc();
    // Outputs: Arrow Function - this.name: undefined

    outerFunc();
    // Outputs: Regular Function - this.name: undefined
    outerArrowFunc();
    // Outputs: Arrow Function - this.name: undefined
    ```

    In the provided code, the `arrowFunc` is indeed defined within the lexical scope of the `obj` object. However, the key point regarding arrow functions and their lexical scope is not where they are defined, but rather where they are **enclosed** or where their surrounding lexical scope lies.

    Arrow functions do not have their own `this` context; instead, they inherit the value of `this` from the surrounding lexical scope at the time they are defined. In this case, since `arrowFunc` is defined within the global scope (or module scope in a module), `this` inside `arrowFunc` refers to the global object (or `undefined` in strict mode), rather than `obj`.

    Regular functions create their own `this` context based on how they are called. When `regularFunc` is called as a method of `obj`, `this` inside `regularFunc` refers to the `obj` object.

##

- **Javascript function call()**
  The call() method is a predefined javascrpt method. With the `call()` method, we can write a method that can be used on different objects.

  ```javascript
  const person= {
     fullName: function (city,country){
       return this.firstName + ' ' + this.lastname + ' '+ city+ ' '+ country;
       }
     }
  const person1 = {
   firstName:"John",
   lastName: "Doe"
   }
  const person2 = {
   firstName:"Mary",
   lastName: "Doe"
  }

  person.fullName.call(person1,"nepal","kathmandu");
  // This will return "John Doe kathmandu nepal ":
  person.fullName.call(person2,'nepal', 'kathmandu');
  // This will return 'mary doe nepal kathmandu'
  ```

- **Javascrpt apply() method :**
  apply() method is almost same as call() . only difference is, the call method takes arguments separately. But the apply() method takes arguments as an array.
  ```javascript
  const person = {
  fullName: function(city, country) {
  return  this.firstName + " " + this.lastName  + "," + city + "," + country;
   }
  }

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }

  person.fullName.apply(person1, ["Oslo", "Norway"]);
  // it will return "john Doe Oslo Norway"
  ```

##

- **Javascript function bind() :**
  With the bind() method, an object can borrow a method from other object.
  The example below creates 2 objects (person and member).

  The member object borrows the fullname method from the person object

  ```javascript
   const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
   return this.firstName + " " + this.lastName;
    }
  }

  const member = {
   firstName:"Hege",
   lastName: "Nilsen",
  }

  let fullName = person.fullName.bind(member);
  console.log(fullName())
  ```

  Sometimes the `bind()` method has to be used to revent losing `this`. when a function is used as a callback , `this` is lost. This example will try to display the person name after 3 seconds, but it will display **undefined** instead:

  ```javascript
  const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
  console.log(this.firstName + " " + this.lastName);

   }
  }

  setTimeout(person.display, 3000);
  // returns undefined
  ```

  The bind() method solves this problem .
  In the following example, the `bind()` method is used to bind person.display to person.

  This example will display the person name after 3 seconds

      ````javascript

  const person = {  
   firstName:"John",  
   lastName: "Doe",  
   display: function () {  
   console.log(this.firstName + " " + this.lastName);

       }

  }  
   let display= person.display.bind(person);
  setTimeout(person.display, 3000);
  // output: John Doe

  ```

  ```

##

- **Closure function**
  Closure is a technique in JavaScript where a function retains access to its outer variables, even after the outer function has finished executing. Closures are a powerful feature because they allow for function level scope encapsulation, preserving the local variables of the function within it's lexical scope even after the function has executed.  
  The concept can be used for various proposes, such as : - Data privacy : we can encapulate private variables and method. - Partial application: used to create paritally applied functions. - Maintaining state : Closures allow functions to retain state be''tween execution.

          Here's an example demonstrating data privacy and maintaining state using closures:

  ```javascript
    function counter(){
      let count= 0;
      return function(){
       count++;
       return count;
      };
    }

    const increment= counter()
    console.log(increment()) //output: 1
     console.log(increment()) //output: 2
  ```

          In this example, `counter` is a function that defines a variable `count` and returns an inner function that increments and returns the value of `count`.

      the inner function forms a closure that retains access to `count` even after `counter` has finished executing.

      Each time `increment` is called , it updates and logs the value of `count`.

  ##

- **Currying**
  Curring in javascript is a technique of transforming a funciton that takes multiple arguments into a sequence of functon that each take a single argument. This allows for partical application of a function's arguemts, enabling us to fix certain arguments and generate a new function that takes the remaining arguments.

  ```javascript
  function prism(l) {
   return function(w) {
    return function(h) {
    return l * w * h;
       }
     }
    }
    prism(2)(3)(5) // output: 30
    // alternatively with concise ES6 syntax
    let prism = l => w => h => l * w * h;
  ```

  another example:

  ```javascript
   const calculateFinalPrice = price => discount => taxRate => {
  const discountedPrice = price - (price * discount);
  const finalPrice = discountedPrice + (discountedPrice * taxRate);
  return finalPrice;
  };

  // Partially apply the price
  const price100 = calculateFinalPrice(100);

  // Partially apply the discount
  const price100With10PercentDiscount = price100(0.1);

  // Finally apply the tax rate
  const finalPrice = price100With10PercentDiscount(0.2);

  console.log(finalPrice); // Output: 108

  ```

##

- **Recursive function :**
  A recursive funciton is a function that calls itself during it's execution. This technique allows the function to repeat it's behavior and is particularly useful for solving problems that can be broken down into smaller similar subproblems.

  Example : Factorial function.

  The factorial of a non-negative integer nnn (denoted as n!n!n!) is the product of all positive integers less than or equal to nnn. It can be defined recursively as:

  - 0!=1 (base case)
  - n!=n×(n−1)! for n>0 (recursive case)

  ```javascript
  function factorial(n) {
   // Base case
   if (n === 0) {
       return 1;
   }
   // Recursive case
   return n * factorial(n - 1);
   }

  console.log(factorial(5)); // Output: 120

  ```

##

- **Higher order funciton :**

  Higher-order functions are functions that either take other functions as arguments, return a function as a result, or both. This concept is a key feature of functional programming and is widely used in JavaScript

  ```javascript
  function applyTwice(func, value) {
    return func(func(value));
   }

  const double = x => x * 2;
  console.log(applyTwice(double, 5)); // Output: 20
  ```

  `map()`,`reduce()`,`forEach()` etc are the higher order array methods .

  **end.** :)
