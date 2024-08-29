# Modules

As our application grows bigger, we want to split it into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.

For a long time, JavaScript existed without a language-level module syntax. That wasn’t a problem, because initially scripts were small and simple, so there was no need.

But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.

### ES6 Module Syntax

**Exporting**

You can export variables, functions, classes, etc., from a module using the `export` keyword. There are two types of exports: named exports and default exports.

**Named Exports:**

````javascript
// math.js
export const pi = 3.14159;

export function add(a, b) {
  return a + b;
}
````

**Default Exports:**

````javascript
// utils.js
export default function log(message) {
  console.log(message);
} 
````

**Importing**

You can import exported values using the `import` keyword.

**Named Imports:**

````javascript
// main.js
import { pi, add } from './math.js';

console.log(pi); // 3.14159
console.log(add(2, 3)); // 5
````

**Default Imports:**

```javascript
// main.js
import log from './utils.js';

log('Hello, world!'); // Hello, world!
````

**Combining Named and Default Imports:**

````javascript
// main.js
import log, { pi, add } from './utils.js';

log(`Pi is ${pi}`); // Pi is 3.14159
console.log(add(2, 3)); // 5
````

### CommonJS Module Syntax

This syntax is commonly used in Node.js environments.

**Exporting:**

You can export variables, functions, or objects using `module.exports` or `exports`.

**Single Export:**

````javascript
// math.js
module.exports = {
  pi: 3.14159,
  add: function (a, b) {
    return a + b;
  }
};
`````

**Multiple Exports:**

````javascript
// utils.js
exports.log = function (message) {
  console.log(message);
};

exports.warn = function (message) {
  console.warn(message);
};
````

**Importing:**

You can import modules using the `require` function.

**Single Import:**

````javascript
// main.js
const math = require('./math.js');

console.log(math.pi); // 3.14159
console.log(math.add(2, 3)); // 5
````

**Multiple Imports:**

````javascript
// main.js
const { log, warn } = require('./utils.js');

log('Hello, world!'); // Hello, world!
warn('This is a warning!'); // This is a warning!
````

### Choosing Between ES6 and CommonJS

- **ES6 Modules** are the standard for JavaScript and are supported by most modern environments (including the browser and Node.js with the `.mjs` extension or `"type": "module"` in `package.json`).
- **CommonJS** is traditionally used in Node.js environments.

In new projects, it's generally recommended to use ES6 modules for their cleaner syntax and better integration with modern JavaScript features and tooling.

few examples 

emproting the modules 
