# Execution context and call stack

> When the javasrcipt runs in the browser it needs to be converted to the machine code as it can't directly understand it . when the javascript engine encounters javascript , it creates a special environment for it where it handles the "translation " and execution of the javascript code we wrote . This environment is called exection context . In javascript , there are three types of execution contexts : global , functional , and eval ( use in mangoose ).

> #### What is different between `Global` and `functional` execution context ?
>
> When the javascript engine encounters the code for the first time it creates a default exectuion context which is global , anything that is not inside a function .
> when the engine encounters functions , then it creates another exection context called functional execution context, where it executes the code located inside the function . Every function has it's own execution context .
>
> :memo: Note : Global exectution context is default and when we encounter the function , own execution context will be created for each function.

> #### How is exectuion context created ?
>
> execution context has two phases :
>
> 1.  ##### Creation phase
> 2.  ##### exectuion phase

##

## Creation phase

> The creation phase has 3 stages. During this stage, the execution context is associated with the execution context object which is defined as the properties of this object . The stages are :
>
> > - **Creation of the variable object.**
> > - **Setting up the scope chain.**
> > - **Setting the `this` value.**
>
> lets explain each stages with this example .

> ```javascript
> var globalVar = "I'm global";
> function outer() {
> var outerVar = "I'm outer";
>
> function inner() {
> var innerVar = "I'm inner";
> console.log(globalVar + ", " + outerVar + ", " + innerVar);
> console.log(this);
> }
>
> inner();
> }
> outer();
> ```

> - ### Creation of the variable object
>   The variable object is an object like container that stores variable, function declaration and function parameter within the current execution context . Every time we create a varibale with the keyword `Var`, it is added to the variable object as a property that point to the variable but it does't have value yet, only the declaration. ( the value assigned to the variable is undefined )
>
> > Let's see how it's done.
> >
> > - **Global execution context**
> >   Variable object:
> >   > - `globalVar`: undefined (will be assigned value during execution)
> >   > - `outer`: function (reference to the `outer` function)
> >   > - This represent the global scope , and `globalvar` and `Outer` are added to the global object.
> > - **`outer()` Function Execution Context:**
> >   Variable Object:
> >   > - `outerVar`: undefined (will be assigned value during execution)
> >   > - `inner`: function (reference to the `inner` function)
> >   > - This represents the scope of the `outer` function.
>
> > - **`inner()` Function Execution Context:**
> >   > Variable Object:
> >   >
> >   > - `innerVar`: undefined (will be assigned value during execution)
> >   > - This represents the scope of the `inner` function.

:memo: **Reminder**

> When we create variables with the keyword let and const , the process is almost the same but technically a little different. Instead of a variable object , we have a lexical object environment. The variable object is technically also a lexical envrionment for specially the var keyword only.
> example :
>
> ```javascript
> let user="arjun";
> let number= 1;
> ```
>
> For this code , the lexical object environment is created as,
> | Name | value |
> | -------- | ------- |
> | user | `uninitialized` |
> | number | `uninitialized` |

> - ### Creation of scope chain
>
>   The Scope Chain is established by linking the Variable Objects of all parent (outer) functions, along with the global object, in a lexical manner. This chain determines variable lookup during execution.
>
> - **Global Execution Context:**
>   > - Scope Chain: `[Global Object]`
> - **`outer()` Function Execution Context:**

> > - Scope Chain: `[Variable Object of outer(), Global Object]`
>
> - **`inner()` Function Execution Context:**

> > - Scope Chain: `[Variable Object of inner(), Variable Object of outer(), Global Object]`

> - ### Seting the this value
>   In non-arrow functions, the `this` value is determined during the execution phase, not the creation phase. In this example, `this` inside `inner()` will refer to the global object because `inner()` is a nested function called directly without any explicit context.

##

### Execution phase :

> > The execution phase in JavaScript follows the creation phase and involves the actual interpretation and execution of the code. During this phase, the JavaScript engine executes the code line by line, performing assignments, function invocations, and other operations as needed.
> > Let's explain the execution phase with an example:
>
> ```javascript
> var a = 10;
> function foo(x) {
> var b = 20;
> return x + a + b;
> }
>
> var result = foo(5);
> console.log(result);
> ```

> Here's how the execution phase proceeds
>
> 1.  **_Global execution context_**
>
>     > - The JavaScript engine starts by creating the global execution context
>     > - It sets up the Variable Object (VO) and Scope Chain for the global context during the creation phase.
>     > - In the example, `var a = 10;` is encountered, so `a` is assigned the value `10`.
>
> 2.  **_Function Invocation (Call Stack)_**
>
>     > - When `foo(5)` is called, a new execution context for the `foo` function is created and pushed onto the call stack.
>     > - The engine sets up the Variable Object (VO) and Scope Chain for the `foo` function during its creation phase.
>     > - Inside `foo`, `x` is assigned the value `5`, and `var b = 20;` is encountered, so `b` is assigned the value `20`.
>
> 3.  **Execution of Statements:**
>     > - Inside `foo`, the statement `return x + a + b;` is executed.
>     > - JavaScript looks up the values of `x`, `a`, and `b`:
>     >   ( `x` is `5`, `a` is `10` (from the global scope), and `b` is `20`.)
>     > - The expression `x + a + b` evaluates to `5 + 10 + 20`, resulting in `35`.
>
> **Function return**
>
> > - The value `35` is returned from the `foo` function, and the execution context for `foo` is popped off the call stack.
> > - The returned value is assigned to the variable `result`.

> \*\*\* Finally `Console.log(result)` is executed in the global context logging `35` to the console.
>
> his example illustrates the sequential execution of JavaScript code, where each statement is executed in order, and function calls create new execution contexts that are pushed onto the call stack. As functions complete execution, their contexts are popped off the call stack, returning control to the previous context.
