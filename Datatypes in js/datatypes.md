# Datatypes in javascript

**"JavaScript has several built-in data types, which can be broadly categorized into two main categories: primitive data types and reference data types."**

> :memo: **Javascript types are dynamic**
> JavaScript is a dynamic language with dynamic data types because variable types are not defined in advance but defined the moment they are assigned the value, variables can also dynamically change the data type depending on which value it is assigned and also, it’s so-called weakly typed language because it can implicitly change type when we do math operation with mismatched types, e.g. string plus number.

### Basically javascript has 8 datatypes .

- String
- Number
- Bigint
- Boolean
- Null
- Symbol
- Undefined
- Object

**The object itself also contains the following data types**

- An Array
- An object
- A Date

#### Javascript string

> String is a series of characters like "hello world!"
> Strings are written with quotes. We can use single or double quotes.
>
> ```javascript
> let name="nepal" //using double quotes
> let name=`nepal`  //using single quotes
> ```
>
> We can use quotes inside a string, as long as they don't match the quotes surrounding the string.
>
> ```javascript
> // Single quotes inside double quotes:
> let ans1 = "He is called 'Johnny'";
> //Double quotes inside single quotes:
> let ans2 = 'He is called "Johnny"';
> ```

#### Javascript Numbers

> The number is a number data type, any number as long as it's not inside the quotes. If the number is in quotes it is already a string . Javascript does't define what type of number it is , eg interger . Finally number are stored in 64 bits and it has some limits with large numbers . We can do any math operation with numbersin js as long as both data types are numbers .

> ```javascript
> let x = 3.14; // A number with decimals
> let y = 3; // A number without decimals
> ```
>
> Extra large or extra small numbers can be written with scientific (exponent) notation
>
> ```javascript
> let x = 123e5; // 12300000
> let y = 123e-5; // 0.00123
> ```
>
> :bulb: **Note**
> Integer Precision: Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

#### Javascript Bigint

> Javascript Bigint is a new datatype introduced in es2020 that can be used to store interger values that are too big to be represented by a normal js Number.
> All js number are stored in a 64-bit floating point format.
>
> ```javascript
> let x = BigInt("123456789012345678901234567890");
> ```
>
> :warning: **Note** :
>
> - Arithemetic between a Bigint and a Number is not allowed (type conversion lose information ) .
> - Also a Bigint can not have decimals .

#### Boolean

> In JavaScript, `boolean` is a primitive data type that represents logical values. There are only two possible boolean values: `true` and `false`. Booleans are commonly used in conditional statements and expressions to control the flow of the program. For example:
>
> ```javascript
> let x = 5;
> let y = 5;
> let z = 6;
> (x == y) // Returns true
> (x == z) // Returns false
> ```

> :bulb: There are certain condition with returns True or False :
> We can use the `Boolean()` funciton to find out if an expression is true or not .
>
> - Everything with a "value" is `True` .
> - Everything without a "value" is `False` . (the boolean value of 0 and -0 is false )
> - The Boolean value of "" (empty string) is `False`.
> - The Boolean value of `Undefined` is `False`.
> - The Boolean value of `null` is `False`.
> - The Boolean value of `False` itself is `False`.
> - The Boolean value of `NaN` is `False` .

#### Javascript Null

> In javascript , `null` is a special value that represents the intentional absence of any object value . it is often used to indicate that a variable or object reference does not currently point to any valid object or value .

> :bulb: Propose of Null :
> `null` is commonly used to initialize variables that are meant to later hold an object value . it can also be used to explicitly remove the reference to an object by assigning it to a variable .

> :memo: key point about null
>
> - `null` is a primitive data type.
> - The value of `null` is the `null` literal , which is case sensitive
> - when you compare something to `null` using the equality operator , it will only be equal to `null` itself .
> - The `typeOf`operator returns `object`

#### Javascript Symbol

> In javascript , `Symbol` is a primitive datatype introduced in Es6 . It is unique and immutable datatype, and each `Symbol` value returned from `symbol()` is guarantedd to be unique .
> :memo: Key point about `Symbol`
>
> - Unique identity : Each `Symbol` value is unique and immutable . this uniqueness ensures that `symbol` values can be used as property keys in objects without the risk of name collisions.
> - Creating symbols : We can create a `Symbol` using the `Symbol()` function.
> - Description : we can also provide an optional description when creating a `Symbol` for debugging purposes .
>   `javascript  const mySymbol = Symbol('description'); `
> - Unique property keys : Because `symbol` values are unique , they are often used as property keys in object to define non-enumerable properties.
> - Usase : `Symbol` is commonly used to define unique keys in objects, especially when creating APIs or libraries where you want to ensure that your property keys don't conflict with keys from other parts of the codebase.

#### Javascript Undefined

> `undefined` represents the absence of a meaningful value. it is used to indicate that a variable has been declared but has not been assigned a value . At first `null` and `Undefined` might sound a bit confusing and so similar .
>
> ```javascript
> let x;
> console.log(x); // undefined
> x="hello"
> console.log(x); // 'hello'
> ```

#### Object

> object in javacript is almost the same as real-life objects . For example , an objectc can you our computer . It has different properties like color or screen size or many methods like browsing the internet . computer can vary though , for example , they can have a different os , like macos or windows . just like other data types , object can contain various values . The values are written in key:value pairs saved inside the curly braces . These key:value pairs are called properties of objects . Funcitons which are also properties are called methods . The object is one of the most important topics in javascript .
>
> ```javascript
> const mylaptop ={os:"macos" ,release :'2024'}
> ```

#### Arrays

> The array is a type of object which have a little different structure . In arrays you can create a list of things however it does't have the key value pairs like in objects . An array can hold a lot of values in one box. Let's say you want to organize your closet and you place clothes in boxes that have color names . So you have a box called white , then oragnge and black . you place clothes in each box according to the color .Arrays are the easier way to create a list of things and later you can do many different things with them . you can add , remove and move around things .
>
> ```javascript
> let box=["apple" , "mango", ''banana"]
> ```

#### Date

> The date is also another type of object which hold a date value , The date is created day using a constructor `new Date ()` and has to be saved in a variable for later use . We can actually create a date in many ways depending on what values you add . examples
>
> ```javascript
> new Date(Year,month,day,hours,minutes,seconds);
> new Date(Year,month,day,hours,minutes);
> new Date(Year,month,day,hours);
> new Date(Year,month,day);
> new Date(Year,month);
> ```

---

#### Conclusion

> In conclusion , understanding data types are crucial in js , we have 8 main date types - string , number , boolean , null , undefined , bigint , symbol , object . Each of these date types has it's own characteristics and uses . understanding their differences can help us to make better use of them in the future .It's also important to note that js is a dyanmi language , which means that the data types of a variable can change dyanmically , and it's a weakly typed language as it can implicitly change type during math opeation with mismatched types . To check the data type of a variable , we can use the `TypeOf()` operator , however , it has some limitaltion , such as returning "object" for both arrays and null values .
