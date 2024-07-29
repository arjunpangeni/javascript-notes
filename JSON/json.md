# Json

JSON( Javascript object notaion) is a lightweight data interChange format that's easy for humans to read and write, and easy for machines to parse and generate. Json is often used to transmit data between a server and a web application or between different parts of a software system.

In other word JSON is a text format for storing and transporting data . It's format is syntactically similar to the code for creating javascript objects. Because of this, a js program can easily convert JSON data into js objects.

**Example of JSON Data**

```javascript
  {
 "name": "John Doe",
 "age": 30,
 "email": "johndoe@example.com",
 "isEmployed": true,
 "skills": ["JavaScript", "Python", "SQL"],
 "address": {
   "street": "123 Main St",
   "city": "Anytown",
   "state": "CA",
   "zip": "12345"
 }
}

```

JSON syntax is derived from JavaScript object notation syntax:

- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

### Parsing JSON

Parsing JSON means converting a JSON string into a JavaScript object. This is done using the `JSON.parse()` method.

**Example:**

```javascript
let jsonString = '{"name": "John",
"age": 30, "isStudent": false,
 "courses": ["Math", "Science"],
  "address": {"city": "New York", "zip": "10001"}}';

let jsObject = JSON.parse(jsonString);

console.log(jsObject.name); // Outputs: John
console.log(jsObject.age); // Outputs: 30`
```

### Stringifying/Serializing JSON

Stringifying JSON means converting a JavaScript object into a JSON string. This is done using the `JSON.stringify()` method.

**Example:**

```javascript

let jsObject = {
name: "John",
age: 30,
isStudent: false,
courses: ["Math", "Science"],
address: {
 city: "New York",
 zip: "10001"
}
};

let jsonString = JSON.stringify(jsObject);

console.log(jsonString);
// Outputs: {"name":"John","age":30,"isStudent":false,
"courses":["Math","Science"],
"address":{"city":"New York","zip":"10001"}}`
```

### Accessing Data

Once you have a JavaScript object from JSON, you can access its data using standard dot notation or bracket notation.

**Example:**

```javascript

 jsObject = JSON.parse('{"name": "John", "age": 30,
  "isStudent": false, "courses": ["Math", "Science"],
  "address": {"city": "New York", "zip": "10001"}}');

console.log(jsObject.name); // Outputs: John
console.log(jsObject["age"]); // Outputs: 30`
```

### Modifying Data

You can modify the data in a JavaScript object just like you would with any other object.

**Example:**

```javascript

let jsObject = JSON.parse('{"name": "John", "age": 30,
"isStudent": false, "courses": ["Math", "Science"],
"address": {"city": "New York", "zip": "10001"}}');

jsObject.age = 31;
jsObject.courses.push("English");

console.log(jsObject.age); // Outputs: 31
console.log(jsObject.courses);
// Outputs: ["Math", "Science", "English"]`
```

### Validating JSON

To ensure that a string is a valid JSON, you typically use a try-catch block around `JSON.parse()`.

**Example:**

```javascript
let jsonString = '{"name": "John", "age": 30}';

try {
  let jsObject = JSON.parse(jsonString);
  console.log("Valid JSON");
} catch (e) {
  console.log("Invalid JSON");
}
```

### JSON Schema Validation

For more advanced validation, you can use JSON Schema and libraries like `ajv`.

**Example using ajv:** First, include the library in your project.

`npm install ajv`

Then, use it in your JavaScript code:

```javascript

const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' },
    isStudent: { type: 'boolean' },
    courses: {
      type: 'array',
      items: { type: 'string' }
    },
    address: {
      type: 'object',
      properties: {
        city: { type: 'string' },
        zip: { type: 'string' }
      },
      required: ['city', 'zip']
    }
  },
  required: ['name', 'age']
};

const validate = ajv.compile(schema);

const data = {
  name: 'John',
  age: 30,
  isStudent: false,
  courses: ['Math', 'Science'],
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const valid = validate(data);

if (valid) {
  console.log('Valid JSON data');
} else {
  console.log('Invalid JSON data', validate.errors);
}
```

By understanding these methods and actions, you can effectively work with JSON in JavaScript for various applications, including web development and API interactions.
