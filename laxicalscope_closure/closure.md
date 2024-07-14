# Closure

A closure in js is a function that retains access to it's lexical scope, even when the function is executed outside that scope. This means that a function can remember and access variable from the environment in which it was created, even after that environment has finished executing.
**Example**

```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable:', outerVariable);
        console.log('Inner Variable:', innerVariable);
    };
}
const newFunction = outerFunction('outside');
newFunction('inside'); // Outputs: "Outer Variable: outside", "Inner Variable: inside"

```

### Why Closures are Used in JavaScript

Closures are used in JavaScript for various reasons, including:

1.  **Data Privacy/Encapsulation**

- Closures allow you to create private variables that are not accessible from the outside scope. This is useful for creating data privacy and encapsulating state.

```javascript
   function createCounter() {
     let count = 0; // Private variable
     return function() {
         count++;
         console.log(count);
     };
 }

 const counter = createCounter();
 counter(); // Outputs: 1
 counter(); // Outputs: 2
 counter(); // Outputs: 3`

```

2.  **Factory Functions**

- Closures are used in factory functions to create multiple instances of functions with their own private state.

```javascript
function createGreeter(greeting) {
     return function(name) {
         console.log(greeting + ', ' + name);
     };
 }

 const greeterHello = createGreeter('Hello');
 greeterHello('Alice'); // Outputs: "Hello, Alice"

 const greeterHi = createGreeter('Hi');
 greeterHi('Bob'); // Outputs: "Hi, Bob"`
```

3.  **Callback Functions**

- Closures are often used with callback functions to remember the context or variables from the surrounding scope.

  ```javascript
  function fetchData(url, callback) {
     // Simulating data fetching
     setTimeout(function() {
         const data = 'Some data from ' + url;
         callback(data);
     }, 1000);
  }

  fetchData('https://api.example.com', function(data) {
     console.log(data);
  // Outputs: "Some data from https://api.example.com"
   });
  ```

4.  **Event Handlers**

- Closures are useful in event handlers to capture and retain context.

  ```javascript

   function setupButton() {
    let count = 0;
    document.getElementById('myButton')
    .addEventListener('click', function() {
       count++;
       console.log('Button clicked', count, 'times');
   });
  }

  setupButton();`
  ```

5.  **Currying**

- Closures enable currying, a functional programming technique where a function returns a new function with some arguments fixed.

  ```javascript

  function multiply(a) {
   return function(b) {
       return a * b;
   };
  }

  const double = multiply(2);
  console.log(double(5)); // Outputs: 10
  console.log(double(10)); // Outputs: 20`
  ```

### Key Points

- **Closures** allow functions to retain access to variables from their lexical scope even after the outer function has finished executing.
- They provide a way to create private variables, encapsulate state, manage callbacks, handle events, and perform functional programming techniques like currying.
- Closures are a powerful feature in JavaScript that enable more modular, maintainable, and flexible code.
