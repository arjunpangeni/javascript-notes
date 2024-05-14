## Hoisting in javascript

In javascript, Hoisting is a mechanism where variable and function declaration are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are treated as they were declared at the top of the scope.

:memo: _Note_

> **"It is important to note that only the declarations are hoisted, not the initializations or assignments. When we declare variable in javascript they are moved to the top of the scope while the assignment stay where they are."**

When the javascript engine starts reading the code, first of all, it will find the variable or function declaration and stores them in a memory which will be used later on.

This memory is also called a variable object which is an important part of the creation phase (`creation phase is the phase before the execution of code`) , where one of the processes is storing variables in memory .

:memo: **note :**

> **" When it comes to hoisting, variable keywords defined with var, let or const behave differently and also with function declaration and function expression."**

Let me explain each with example .

>

### var

> When the variable with the keyword var is declared, it is saved in the variable object with a default value undefined.
>
> ```javascript
> console.log(x); // undefined
> var x = 5;
> ```
>
> In this example i tiried to console log variable first and declare it later. what will happen ? as you see, it ouputs undefined. why ? Because even though the console log is first according to the order, when it comes to the code preparation, the engine will skip this console log because it will make sure it saved the variable declaration first with it's default value `undefined`.

### Const and let

> Hoisting not work the same way for variable declared with keywords`let` & `const` as compare with `var`. the variables are hoisted to the top of their scope, but they are not initialized ,not given the value nor given any defalut value.However the process for the creation phase is same as keyword `var`. So, trying to access them before the actual declaration will result in a `ReferenceError`.
>
> ```javascript
> console.log(color);
> let color = "red" ;
> //output: ReferenceError: Cannot access 'one' before initialization
> ```

### Functions

> we also have functions that are saved in the variable object during the creation phase. functions are saved as a reference to the whole function. Reference is kind of a copy of the original. the funcitons saved during the vary phases of code parsing as <func>
>
> ```javascript
> sayHello("Ram");
> function sayHello(name){
> console.log(`hello ${name}!`);
> }
> // output: hello Ram !
> ```
>
> Functions are saved as a reference to the function and as you can see we can call the function and declare it later on. This behavior means that functions can be hoisted.
>
> :memo: _Note_
> **"It's important to note that function can be written in different ways. For example, you can also save a function inside a variable which means using a `function expression`"**.
>
> In the case of `function expression` , a function will not be hoisted because we saved it in a variable and it will behave like a variable, not like a function.
>
> ```javascript
> sayHello("Ram");
> let sayHello= function (name){
> console.log(`hello ${name}!`);
> }
> // output: ReferenceError: Cannot access 'one' before initialization
> ```
>
> Why did this code throw ReferenceError ? because we saved a function inside a variable keyword let . so it behaves like the `let` keyword .

#### conclusion:

> Hoisting is an essential concept to understand in JavaScript. It refers to the process of storing variable and function declarations in memory prior to execution. The behavior of variable declarations with var, let, and const keywords differ when it comes to hoisting, and functions are saved as a reference to the whole function.
>
> To avoid the error the easiest way is to always declare variables at the very top of the code as it will save you from a lot of trouble!
