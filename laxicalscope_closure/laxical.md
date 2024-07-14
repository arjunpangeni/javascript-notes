# Laxical scoping

Laxical scoping , also know as static scoping , refers to the socpe of a variable being determine by it's location within the source code . In js , this means that a variable's scope is defined by it's position within the nested functions and blocks of code during the lexical(compile time) phase , not at runtime. This allows the js engine to resolve variable references based on the structure of the code. making it predictable and understandable.
**Example**

```javascript
function outerFunction() {
    const outerVariable = 'I am from the outer function';
    function innerFunction() {
       const innerVariable = 'I am from the inner function';
       console.log(outerVariable);
     // Accessing variable from the outer function
       console.log(innerVariable);
     // Accessing variable from the inner function
    }

    innerFunction();
     console.log(innerVariable);
  // This would throw a ReferenceError
}

outerFunction();

```

In this example:

- `outerVariable` is defined in `outerFunction` and is accessible within `innerFunction` because of lexical scoping.
- `innerVariable` is defined in `innerFunction` and is only accessible within `innerFunction`.

### Scope Chain

The scope chain is a list of objects representing the current execution context's variable environments. When a variable is referenced, the JavaScript engine starts looking for it in the current scope. If it doesn't find it, it moves up the scope chain to the next outer scope, and so on, until it reaches the global scope or encounters a `ReferenceError`.

Lexical scoping is fundamental to understanding how variables and functions interact in JavaScript, providing a clear and logical structure for managing scope.
