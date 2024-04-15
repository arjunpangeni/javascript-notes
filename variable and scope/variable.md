# Variable and scope

## Variable

> Variable is a "named storage" for data. It can hold various type of data. we can use 3 types of keywords var, let , and const to declear variables

### Declearation and Assignment

To declear a variable means to create a reference to this variable to later use . When we assign a value to this variable is called assignment , it is also called initialization .

```javascript
//declare a variable;
let fruit;
//initialize variable
fruit="mango"
//declare and initialize variable
const fruit="mango"
```

### Naming convention for variable in js .

- Variable names can start with a letter ,underscore or a dollor sign, but can't start with number.
- It is case sensitive.
- spaces are not accepted.
- can't use reserved words (like let, const , for , class)
- It is good practice for to start the variable name for boolean value with is or has. (hasBalance , isClicked)
- Can't use special characters except $ and \_ (underscore)

### When to use var, let or const ?

- Use const if the value should not be changed.
- Use const if the type should not be changed (object and arrays)
- Only use let if you can't use const .
- Only use var if you must support old browsers .

### javascript let

- Variable declear with let have block scope.
- it must be decleared before use .
- Can be reassigned the value .
- Can't redecleared in the same scope .
- It is not hoisted (i willl explain about hoisting in next topic )
- redeclaring a variable with 'let' in another block is allowed .

### javascript const

- Variable defined with const have block scope .
- Const variable must be assigned a value when they are declared .
- Can't be reassigned variable but can manipulate the data within it .
- Can't be redeclared in the same scope .

## Scope

> In JavaScript, "scope" refers to the context in which variables, functions, and objects are accessible. Understanding scope is crucial for writing clean and maintainable code.

### global scope

Variables declared outside of any function, including variables declared using `let` outside of any block, have global scope. These variables can be accessed from anywhere in the script, including inside functions.

```javascript
let num=1;
function fun1(){
console.log(num)
  }
console.log(num)
// accessable inside or outside of function (everywhere)
```

### Local scope

Variables declared within a function have local scope. They are only accessible within that function (including any nested functions).

```javascript
function bar() {
    let local = 20;
    console.log(local); // Accessible
}

console.log(local); // not accessible ,thows reference error .
```

### Block scope

Block scope refers to the visibility and accessibility of variables within a specific block of code, typically denoted by curly braces `{}`. In JavaScript, block scope was not present prior to ES6 (ECMAScript 2015). Before ES6, JavaScript had only function scope and global scope.

However, with the introduction of `let` and `const` keywords in ES6, JavaScript gained block scope for variables declared using these keywords. This means that variables declared with `let` or `const` are only accessible within the block in which they are defined.

```javascript
function example() {
    if (true) {
        let blockScopedVar = 'hello';
        const anotherBlockScopedVar = 'world';
        console.log(blockScopedVar); // 'hello'
        console.log(anotherBlockScopedVar); // 'world'
    }
    console.log(blockScopedVar); // Error: blockScopedVar is not defined
    console.log(anotherBlockScopedVar); // Error: anotherBlockScopedVar is not defined
}
```
