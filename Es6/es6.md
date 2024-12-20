bES6 (ECMAScript 2015) introduced many new features to JavaScript, making the language more powerful and easier to work with. Here are some key features of ES6 along with examples:

### 1. **Let and Const**
   - `let` and `const` are block-scoped variables.
   - `let` can be reassigned, while `const` cannot be reassigned after its initial assignment.

   ```javascript
   let a = 10;
   a = 20; // This is fine

   const b = 30;
   // b = 40; // This will throw an error
   ```

### 2. **Arrow Functions**
   - Arrow functions provide a more concise syntax for writing functions and lexically bind the `this` value.

   ```javascript
   const add = (x, y) => x + y;

   console.log(add(2, 3)); // Output: 5
   ```

### 3. **Template Literals**
   - Template literals allow for easier string interpolation and multi-line strings.

   ```javascript
   const name = 'John';
   const message = `Hello, ${name}!`;
   console.log(message); // Output: Hello, John!

   const multiLine = `This is a
   multi-line string.`;
   console.log(multiLine);
   ```

### 4. **Default Parameters**
   - Default parameters allow you to set default values for function parameters.

   ```javascript
   function greet(name = 'Guest') {
     return `Hello, ${name}!`;
   }

   console.log(greet()); // Output: Hello, Guest!
   console.log(greet('Alice')); // Output: Hello, Alice!
   ```

### 5. **Destructuring Assignment**
   - Destructuring allows you to extract values from arrays or properties from objects into distinct variables.

   ```javascript
   // Array Destructuring
   const [x, y] = [1, 2];
   console.log(x, y); // Output: 1 2

   // Object Destructuring
   const person = { firstName: 'John', lastName: 'Doe' };
   const { firstName, lastName } = person;
   console.log(firstName, lastName); // Output: John Doe
   ```

### 6. **Spread and Rest Operators**
   - The spread operator (`...`) allows an iterable to expand in places where multiple arguments or elements are expected.
   - The rest operator (`...`) allows you to collect all remaining elements into an array.

   ```javascript
   // Spread Operator
   const arr1 = [1, 2];
   const arr2 = [...arr1, 3, 4];
   console.log(arr2); // Output: [1, 2, 3, 4]

   // Rest Operator
   function sum(...numbers) {
     return numbers.reduce((acc, curr) => acc + curr, 0);
   }

   console.log(sum(1, 2, 3, 4)); // Output: 10
   ```

### 7. **Classes**
   - ES6 introduces a more straightforward syntax for creating objects and handling inheritance using classes.

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }

     greet() {
       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
     }
   }

   const john = new Person('John', 30);
   console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.
   ```

### 8. **Modules**
   - ES6 modules allow you to export and import parts of your code.

   ```javascript
   // file: math.js
   export const add = (x, y) => x + y;
   export const subtract = (x, y) => x - y;

   // file: main.js
   import { add, subtract } from './math.js';

   console.log(add(5, 3)); // Output: 8
   console.log(subtract(5, 3)); // Output: 2
   ```

### 9. **Promises**
   - Promises provide a cleaner, more powerful way to handle asynchronous operations.

   ```javascript
   const fetchData = new Promise((resolve, reject) => {
     const success = true; // Simulating a successful async operation
     if (success) {
       resolve('Data fetched successfully');
     } else {
       reject('Error fetching data');
     }
   });

   fetchData
     .then((message) => console.log(message))
     .catch((error) => console.error(error));

   ```

These examples demonstrate some of the most important features introduced in ES6.