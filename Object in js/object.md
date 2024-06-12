# Objects in javascript

In javascript, an object is a collection of properties, where each property has `Key` and `value` pair. These values can be of any data type, including other objects, which allows for the creation of complex data structures.

**Example**

```javascript
 let person = {
 firstName: "John", // `firstName`- string property with the //value 'john'
 lastName: "Doe",
 age: 30,
 isEmployed: true,
 hobbies: ["reading", "traveling", "swimming"], //an array property
 address: {
     street: "123 Main St",
     city: "New York",
     state: "NY"
 }, // an array property containing nested properties
 fullName: function() {
     return this.firstName + " " + this.lastName;
 }  // method that returns the full name
};

```

Here are some keywords to know before diving into the explanation about objects:

- Objects are containers for properties and methods.
- Properties are named values.
- Methods are function stored as properties.
- In javascript , almost evertything is an object. Objects, Maths, Function , Dates, Arrays ,Maps and Sets are objects. except primitives values.
- Properties can be primitive values, functions or even other objects.
  > **value**: The value to assign to the property.
  > **writable**: Whether the value of the property can be changed or not.
  > **enumerable**: Whether the property will be enumerated in `for in` loops or not
  > **configurable**:Whether it will be possible to redefine the property descriptor or not.
  > **get** : A function to be called that will return the value of the property.
  > **set**: A function to be called when the property is assigned a value.

##

### How to create object?

There are several ways to create objects. Here are some common methods.

1.  **Object Literal.**
    We can create an object using the object literal syantax:
    ```javascript
      let obj = {
      property1: "value1",
      property2: "value2",
      method1: function() {
      console.log("Hello, World!");
         }
       };
    ```
2.  **Using the `Object` Constructor.**
    We can also create an object using the `Object` constructor:
    ````javascript
    let obj= new Object();
    obj.user="Nepal";
    obj.address="kathmandu";
    obj.method1=function(){
    console.log("hello");
    }
    ```

    ```
3.  **Using a constructor function.**
    We can define a constructor function and create objects using the `new` keyword.
    `` javascript
    function person(name,age){
         this.name=name;
         this.age=age;
         this.greet= function(){
              console.log(`hello, my name is ${this.name}`)
         }
      }   
     ``
4.  **Using the `Object.create` Method** (ES5)
    We can create a new object with a specified prototype using `object.create`:
    ````javascript
     // define a prototype object.
     const perosonPrototype= {
          greet: function(){
          console.log(`hello,i am ${this.name}`);
    }
    };
    // create a new object using object.create
    const person=object.create(personprototype);
    person.name='Hari';
    person.age=20;

         person.greet(); //output: hello, i am Hari.
         ````
         In this example, the `person` object is created with `personPrototype` as it's prototype. This means `person` inherits the `greet`method from `personPrototype`. We can aslo create an object with properties specified.
        ````javascript
        // Define a prototype object
        const personPrototype = {
            greet: function() {
             console.log(`Hello, my name is ${this.name}`);
              }
             };
             //create a new object with specified properties
             const person= object.create(personPrototype, {
               name:'hari';
               age:25
               }
             );
             person.greet(); //output : Heloo, my name is hari
             console.log(person.age) //output: 25

        ````
         By using `object.create`, we can create objects that have a clean and direct inheritance from other objects, making it a powerful method for object-oriented programming in js .

5.  **Using ES6 Classes**
    We can create objects using ES6 classes, which are a more modern and cleaner syntax for creating constructor function:
    ````javascript
    class Person {
    constructor(name,age){
    this.name=name; // this refers to the person object
    this.age=age;
    }

             greet(){
                console.log('hello, i am'+ this.name);
                }
             }
          let person1= new Person('ali',25)
          let person2= new Person('hari',30)
          ````

6.  **Using factory functions**

    ```javascript
    function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
          console.log(`Hello, my name is ${this.name}`);
         }
       };
    }

    let person1 = createPerson("hari", 25);
    let person2 = createPerson("ram", 30);
    ```

    factory functions offer a functional approach and are useful for creating objects with private data. This is achieved by leveraging closures, which allow private variables to be encapsulated within the factory function. Here's an example illustrating this concept.

    ```javascript
    function createCounter() {
    // Private variable
    let count = 0;

    // Public methods
    return {
     increment: function() {
         count++;
     },
     decrement: function() {
         count--;
     },
     getCount: function() {
         return count;
       }
     };
    }

    let counter = createCounter();
    counter.increment();
    console.log(counter.getCount()); // Output: 1
    counter.decrement();
    console.log(counter.getCount()); // Output: 0

    // Private variable is not accessible directly
    console.log(counter.count); // Output: undefined
    ```

    ES6 classes can also ensure encapsulation by using private class field and methods .

##

### How to Access properties of an object?

In javascript , we can access properties of an object using multiple ways ,Each method has it's specific use cases.

```javascript
const person={
 firstname:"john",
 age:20
 }
```

1. **Using Dot notation**
   Best for accessing properties with Known identifires ,strating with a letter , no spaces or special charaters expect`$` and `_`.

   ```javascript
    console.log(person.firstname); // output: john
    console.log(person.age); //output :20
   ```

2. **Using Bracket Notaion**
   Necessary for properties with special characters or spaces in their names. It is useful when the property name is dynamic or stored in a variable.
   ````javascript
   console.log(person["firstname"]); //output : john
   `````
   :warning: **Note:**
   In the case of  `symbol` as property keys in an object. There is no way to access it except using bracket notation. Similar case with properties with special characters, hyphens and spaces.
    ````javascript
    let id = Symbol("id");
    const user={
      [id]:123, // using symbol as property key
      name:'john',
      "full-name":"john doe",
      "full address":"kathmandu"
      }
    console.log(user.id); // output: undefined
    console.log(user[id]; //output: john
    console.log(user.full name) //error
    console.log(user.["full name"] //oupput : john doe
    ````
   `````

##

### How to Modify object properties ?

Modifying an existing object in javascript can be done in serveral ways.
we can modify the existing property by overwrite it or add more properties.

- **Using dot notation**
  Dot notation is the most straightforward an commonly used method.
  ```javascript
  let person= {
  name:"ram",
  age:25
  };
  //modify existing property
  person.age=26;
  //add new property
  person.gender="female"
  console.log(person);
  // output : {name : "ram", age:26, gender:'female'
  ```
- **Using bracket notation**
  Bracket notation is more flexible and can be used with any property name.

  ```javascript
   let person= {
  name:"ram",
  age:25
  };

  // modifying eisting property
  person['age']=26;

  // add new property
  person['gender']='female'
  console.log(person);
  // output : {name : "ram", age:26, gender:'female'
  ```

- **Using `Object.assign`**
  `Object.assign` is used to copy properties from one or more source object to a target object. It can be also used for modify the existing object.
  ```javascript
  let person= {
  name:"ram",
  age:25
  };
  // modify properties and add gender property
  Object.assign(person, {age:26,gender:'female'});
  // here person is targeted object.
  console.log(person)
  // output: {name : "ram", age:26, gender:'female'}
  ```
  :warning: It performs a shallow copy , so nested object are still referenced , not copied . i will explain about shallow copy and deep copy later with in this section.
- **Using `Object.definePropety`**
  It allows defining or modifying a property with more control over it's descriptors.
  ```javascript
   let person = { name: 'Alice', age: 25 };
   // modify existing property
   Object.definePropety(person, 'age',{
       value:26,
       writable:true
       enumerable: true
       configurable: true
       });

      // add new property
      object.defineProperty(person,'gender',{
         value: 'female',
         writable: true,
         enumerable: true,
         configurable:true
         })
  console.log(person); // { name: 'Alice', age: 26, gender: 'female' }
  ```
  :memo:**note**
  Here , Writable, enumerable , configurable are the data descripter of property , which are already explained at the top. Typically used for defining non-enumerable, read-only, or non-configurable properties.
- **Using `Object.defineProperties`**
  Similar to `Object.defineProperty`, but allows defining multiple properties at once.

  ```javascript
  let peroson={
    name:'ram',
    age:25
    }
  // modify properties
  Object.defineProperties(person,
  { age: {
  value: 26,
  writable: true,
  enumerable: true,
  configurable: true },
  gender: {
  value: 'female',
  writable: true,
  enumerable: true,
  configurable: true }
  });

  ```

- **Using the spread Operator(ES6)**
  The spread operator can be used to create a new object with updated properties .
  ```javascript
  let person = {
     name: 'Alice',
     age: 25
     };
  person = { ...person, age: 26, gender: 'female' };
  console.log(person);
  // { name: 'Alice', age: 26, gender: 'female' }
  ```
  :memo: Creates a new object rather than modifying the existing one, which might be inefficient for large objects or in performance-critical code. The spread operator creates a shallow copy of an object with updated properties, and you can then reassign this back to the original object reference.

##

### How to iterate over object properties ?

- **Using `for...in`Loop**
  -It iterates over all enumerable properties of an object, including inherited enumerable properties .
  ```javascript
  const obj = {
   name: 'Alice',
   age: 25,
   city: 'Wonderland'
   };

  for (const key in obj){
     console.log(`${key}:${obj[key]}`)
     }
    // Output:
    // name: Alice
    // age: 25
    // city: Wonderland
  ```
- **Using `Object.keys()`**
  `Object.keys()` returns an array of the object's own enumerable property names. You can then use `forEach`, `for...of`, or any other array method to iterate over the keys.

  ```javascript
  const obj = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
    };

  Object.keys(obj).forEach(key => {
     console.log(`${key}: ${obj[key]}`);
    });
   // Output:
  // name: Alice
  // age: 25
  // city: Wonderland
  ```

- **Using Object.values()**
  `Object.values()` returns an array of the object's own enumerable property values.

  ```javascript
  const obj = {
   name: 'Alice',
   age: 25,
   city: 'Wonderland'
    };

  Object.values(obj).forEach(value => {
  console.log(value);
  });
  // Output:
  // Alice
  // 25
  // Wonderland
  ```

- **Using `Object.entries` Method**
  The `Object.entries` method returns an array of the object's own enumerable property `[key,value]` pairs , which makes it easy to destructure directly .

  ```javascript
  let person = {
   name: 'Alice',
   age: 25,
   city: 'New York'
  };

    // extract entries to convert the object into an array ok key value    pairs.
  let entries=object.entries(person)
  console.log(entries)
  // output : [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'city', 'new york' ] ]

  // modify the entries by itirate over the array .
  entries= entries.map(([key,value])=>{
   if (key=='age'){
    value=26;}
    if (key=='city'){
     value='kathmandu'
     }
     })

  // rebuilt the object from the modified array .
  person= object.fromEntries(entries)
  console.log(person);
   // output: { name:'alice', age:26, city:'kathmandu}'
  ```

- **Using `Object.getOwnPropertyNames`**
  The `Object.getOwnPropertyNames` method returns an array of all properties (enumerable or not) found directly upon a given object.

  ```javascript
  let person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
  };

  // Define a non-enumerable property
  Object.defineProperty(person, 'country', {
   value: 'USA',
   enumerable: false,
   writable: true,
   configurable: true
  });

  // Get all property names
  let propertyNames = Object.getOwnPropertyNames(person);

  console.log(propertyNames); // ["name", "age", "city", "country"]
  ```

- \***\*Reflect.ownKeys Method\*\***
  The `Reflect.ownKeys` method returns an array of the target object's own property keys, including non-enumerable and symbol properties.

  ```javascript
  const obj = {
   name: 'Alice',
   age: 30,
   city: 'Wonderland',
   [Symbol('id')]: 123
  };

  for (const key of Reflect.ownKeys(obj)) {
  console.log(`${key.toString()}: ${obj[key]}`);
  }

  ```

##

### Shallow cloning of object

shallow cloning an object means creating a new object with the same properties as the original object, but only the top-level properties are copied. If any of these properties are objects or arrays, their references (not the actual objects or arrays) are copied. This means that changes to nested objects or arrays in the cloned object will reflect in the original object, and vice versa.

- **Shallow cloning with `Object.assign()`**

  ```javascript
  let original={
  name:'arjun',
  age:30,
  address:{
      city:'kathmandu',
      zip:"12345"
      },
      hobbies:['swimming','coding']
   };

   // Shallow cloning using Object.assign()
   let clone = Object.assign({}, original);
   console.log(clone)
   //Output: { name: 'arjun', age: 30, address: { city: 'kathmandu', zip: '12345' },
  //hobbies: [ 'swimming', 'coding' ] }

   // modifying the clone
   clone.name='hari';
   clone.address.city='syangja';
   clone.hobbies.push('singing');
   console.log(clone);
   // Output: { name: 'hari', age: 30, address: { city: 'syangja', zip: '12345' },
  hobbies: [ 'swimming', 'coding','singing' ] }
  console.log(original)
   // output:Output: { name: 'arjun', age: 30, address: { city: 'syangja', zip: '12345' },
   // hobbies: [ 'swimming', 'coding','singing' ] }

  ```

  In this example, `Object.assign()` is used to create a shallow clone of the `original` object. Changes to the `name` property in the clone do not affect the original object. However, changes to the `address` object and `hobbies` array in the clone also affect the original object because only their references were copied.

- **Shallow Cloning with Spread Operator**
  Object spreading is just syntactic sugar for Object.assign({}, obj1, ..., objn);
  it is done with the `...` operator.

  ```javascript
  let original = {
  name: "Alice",
  age: 30,
  address: {
      city: "Wonderland",
      zip: "12345"
  },
  hobbies: ["reading", "gaming"]
  };

  // Shallow cloning using spread operator
  let clone = { ...original };

  console.log(clone);
  // Output: { name: 'Alice', age: 30, address: { city:     'Wonderland', zip: '12345' },
  // hobbies: [ 'reading', 'gaming' ] }

  // Modifying the clone
  clone.name = "Bob";
  clone.address.city = "New City";
  clone.hobbies.push("coding");

  console.log(clone);
  // Output: { name: 'Bob', age: 30, address: { city:     'New City', zip: '12345' },
  // hobbies: [ 'reading', 'gaming', 'coding' ] }
  console.log(original);
  // Output: { name: 'Alice', age: 30, address: { city: 'New City', zip: '12345' },
  // hobbies: [ 'reading', 'gaming', 'coding' ] }

  ```

:memo: _Note_
When we clone the object using `Object.assign()` and `spread operator`. we are facing the problem when the object property itself is a object or array , modification of those will also occours on original object because it share the same reference of object property. To modify a cloned object without affecting the original object, especially when the object has nested objects or arrays, we need to perform a **deep clone**.

##

### Deep cloning of object.

A deep clone creates a completely new copy of the original object and all of its nested objects and arrays, rather than just copying their references.
There are several ways to achieve deep cloning in JavaScript:

1. **Using `JSON.parse` and `JSON.stringify`**
   This method is simple and effective but has limitations (e.g., it doesn't handle functions, `undefined`, `NaN`, or `Infinity` values correctly).

   ```javascript
    let original = {
   name: "Alice",
   age: 30,
   address: {
      city: "Wonderland",
      zip: "12345"
   },
   hobbies: ["reading", "gaming"]
   };

   // Deep cloning using JSON methods
   let clone = JSON.parse(JSON.stringify(original));

   // Modifying the clone
   clone.name = "Bob";
   clone.address.city = "New City";
   clone.hobbies.push("coding");

   console.log(clone); // Output: { name: 'Bob', age: 30,
   //address: { city: 'New City', zip: '12345' }, hobbies: [ 'reading', 'gaming', 'coding' ] }
   console.log(original); // Output: { name: 'Alice', age: 30,
   //address: { city: 'Wonderland', zip: '12345' }, hobbies: [ 'reading', 'gaming' ] }

   ```

2. **Using Lodash's `cloneDeep` Method**
   we can use like this library for deep cloning , which handles many edge cases and complex structures .

##

### How to control the mutability of objects.?

In javascript , controlling the mutability of object can be achived through various techinque. Here are detailed explanation and examples for each method.

- **Using `Object.freeze()`**
  It makes an object immutable , meaning we can't add , delete, or modify properties of the object.
  ```javascript
   const person={
      name:'arjun',
      age:25
      };
   Object.freeze(person)

  person.age=30; // this will not change the age property
  person.address='kathmandu' // this will not add a new propery
  delete person.name; // this will not delete the name propery
  console.log(person) // output: {name:'arjun',age:25}
  ```
- **Using `Object.seal()`**
  It prevents adding or deleting properties of an object but allows modification of existing properties.

  ```javascript
  const car = {
  make: 'Toyota',
  model: 'Camry'
  };

  Object.seal(car);

  car.model = 'Corolla';  // This will change the model property
  car.year = 2020;  // This will not add a new property
  delete car.make;  // This will not delete the make property

  console.log(car);  // Output: { make: 'Toyota', model: 'Corolla' }

  ```

- **Using Property Descriptors**
  We can define properties with specific descriptors that control their mutability. for example , we can make a property non writable or non-configurable.
  ```javascript
  // make it non writable
  const book={};
  object.defineProperty(book, 'title',{
    value:'js',
    writable:false  // it make non writable
    });
    book.title='python'; // this will not change the title propery
    console.log(book); // output: {title:'js'}
  ```
  ```javascript
   // make it non configurable
  const book={};
  object.defineProperty(book, 'title',{
    value:'js',
    configurable:false  // it make non writable
    });
  deltete book.title // this will not delete the title propery
  console.log(book); // output: {title:'js'}
  ```
  :memo: **Note**
  `writable` :
  indicates if the value of property can be changed. A boolean value `true` means the propery is writable, and `false` means it is not.
  `configurable`:
  indicates if the property descriptor can be changed and if the propery can be deleletd from the object.
  `enumerable` :
  Indicates if the propery will be listed during enumeration of the properties .
- **viewing a property descriptor**
  `Object.getOwnPropertyDescriptor(object, propertyName)` to view the descriptor of a property.

  ```javascript
  const car = {
  make: 'Toyota',
  model: 'Camry'
  };

  const descriptor = Object.getOwnPropertyDescriptor(car, 'make');
  console.log(descriptor);
  // Output:
  // {
  //   value: 'Toyota',
  //   writable: true,
  //   enumerable: true,
  //   configurable: true
   // }

  ```

- **mofifying a property descriptor**
  Use `Object.defineProperty(object, propertyName, descriptor)` to modify the descriptor.

  ```javascript
  Object.defineProperty(car, 'make', {
  writable: false,
  configurable: false
   });

  const updatedDescriptor = Object.getOwnPropertyDescriptor(car,    'make');
  console.log(updatedDescriptor);
  // Output:
  // {
  //   value: 'Toyota',
  //   writable: false,
  //   enumerable: true,
  //   configurable: false
  // }

  // Attempting to change the value will now fail
  car.make = 'Honda';
  console.log(car.make);  // Output: 'Toyota'

  // Attempting to delete the property will now fail
   delete car.make;
   console.log(car.make);  // Output: 'Toyota'
  ```

  :memo: _Note_:
  IN javascript we can inspect and modify propery descriptors using `Object.getOwnpropertyDescriptor` and `Object.defineProperty` . How ever certain properties, like `Math.PI`, are explicitly designed to be immutable. this means their descriptor are set to be non configurable, making them resistant to changes. Math object, global constant (infinity , nan, undefined) , build-in object prototypes , symbol properties are the some example of explicitly designed to immutable in javascript .

##

### What is object desturcturing ?

Destructuring is a convencient way of extracting values from object and arrays into distinct variable, It can be particularly useful for working with complext data structure in a clean and readable way .

- **basic object destructuring**
  We can extract properties from an object and assign them to variables with the same name:

  ```javascript
  const person= {
  name:'arjun',
  age:25,
  city:'kathmandu'
  };

  const { name, age, city}= person; // order can be different
  console.log(name);  // Output: 'arjun'
  console.log(age);   // Output: 25
  console.log(city);  // Output: 'kathmandu'`
  ```

- **destructuring with different variable names**
  We can assign properties to variables with different names
  ```javascript
    const person= {
  name:'arjun',
  age:25,
  city:'kathmandu'
  };
  const { name: personName, age: personAge, city: personCity } = person;
    console.log(personName);  // Output: 'arjun'
  console.log(pesronAge);   // Output: 25
  console.log(personCity);  // Output: 'kathmandu'`
  ```
- **destructuring with Default values**
  We can assign default values to variabes in ase the propery does not exist in the object.
  ```javascript
  const person= {
  name:'arjun',
  age:25,
  };

  const { name, age, city="unknown"}= person; // order can be different
  console.log(name);  // Output: 'arjun'
  console.log(age);   // Output: 25
  console.log(city);  // Output: 'unknown '`
  ```
- **Nested object desturcturing**
  We can destrucure nested objects to extract properties at multiple levels.
  ```javascript
   const person={
     name:'arjun',
     age:'25',
     address:{
         city:"kathmandu",
         zip: `4400
         }
    };
   const {name, address:{city,zip}}=person;
   console.log(name); // Output: 'arjun'
   console.log(city); // Output: 'kathmandu'
   console.log(zip); // Output: 4400
  ```
- **Destructuring function parameters**
  We can use destructuring directly in function parameters to extract values from an object passed as an argument.

  ```javascript
  const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
  };

  function greet({ name, age, city }) {
  console.log(`Hello, my name is ${name}, I'm ${age} years old    and I live in ${city}.`);
  }

  greet(person);
  // Output: Hello, my name is Alice, I'm 25 years old and I live in New York.

  ```

- **Rest in destructuring**
  we can use the rest syantax( `...`) to collect the remaining properties into a new object.

  ```javascript
  const person= {
  name:'arjun',
  age:25,
  city:'kathmandu',
  country: 'nepal'
  };

  const { name, age, ...rest}= person; // order can be different
  console.log(name);  // Output: 'arjun'
  console.log(age);   // Output: 25
  console.log(rest);  // Output: {city:'kathmandu', country:'nepal'}
  ```

- **Combining with spread syntax**
  We can use destructuring together with the spread syntax to create a new object that includes additional properties .
  ```javascript
  const person= {
  name:'arjun',
  age:25,
  city:'kathmandu',
  };
  const newPerson= {...person,  country: 'nepal'};
  console.log(newPerson);
  // output: {name: 'arjun',age: 25, city:"kathmandu" , country:'nepal'}
  ```

OK , i will exaplain about object in another part .
_thank you_ !!
