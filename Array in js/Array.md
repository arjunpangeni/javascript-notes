### Array

An array is a special type of object that allows you to store multiple values in a single variable, Array in javascript are dynamic and can hold elements of any type, including numbers, strings, objects, or even other arrays. Example,

```javascript
let arr=[1,2,"mango",[1,5],true]
// here we can store multiple type of datatypes.
```

**Key characteristics of arrays include:**

1. **Ordered collection** : Elements in an array are ordered and each element has a specific index, starting from 0. This allows for easy access to elements based on their position within the array.

2. **dynamic size** : Unlike some other languages where array hava a fixed size, Javascript array can dynamically grow or shrink as needed. We can add or remove elements without specifying the size beforehand.

3. **Heterogeneous Elements**: Javascript arrays can hold elements of different data types within the same array. This means you can have a mixed of numbers, strings, objects, or even other arrays as elemets.
   ( :memo: : Opposite of heterogenous is homogeneous elements, which means array can hold elements of same datatypes.)

4. **Flexible Length**: Arrays don't have a fixed length. We can access elemets beyond the current length of the array, and the length property will automatically update to reflect any changes.

5. **Built-in Methods**: Arrays come with a variety of built-in methods for manupulation and traversal, such as `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, `forEach()`, `map()`, `filter()`, and more. These methods make it easy to perform common operations on arrays.

6. **Iterative operations**: Javascript provides various ways to iterate over arrays, including traditional `for` loops, `forEach()` method, `map()`, `filter()`, `reduce()`, and others. These methods make it convenient to perform actions on each element of the array.

7. **Sparse Arrays**: Javascript allows for sparse arrays, meaning arrays where not all elements have been assigned a value. This can result in arrays with "holes" or undefined elements between assigned values. Example.

   ```javascript
   // Creating a sparse array
   let sparseArray = [];
   sparseArray[0] = 'apple';
                  sparseArray[2] = 'banana';
   sparseArray[4] = 'orange';

   console.log(sparseArray);
   // output : [ 'apple', , 'banana', , 'orange' ]
   ```

   Here, the elements at indices 1 and 3 are shown as empty slots (represented by the comma), indicating that they are undefined or have not been explicitly assigned a value.

##

### How to create an Array ?

In javascript, there are multiple ways to create arrays, each with it's own characteristics and use cases. Here are some common ways:

1. **Array Literal Notation**
   This is the most common and straightforward way to create an array. We define the array elements within square brackets `[]`.
   ```javascript
   let  myArray = [element1, element2, element3];
   ```
   It is concise, easy to read, and widely used. It's preferred for most scenarios, especially when we know the array elements at the time of creation.
2. **Array constructor**
   We can use `new` keyword with the `Array` constructor to create an array.
   ```javascript
   let myArray = new Array(element1, element2, element3 )
   // we can pass multiple arguments to the `Array constructor to create an array with those elements.`

   // to create an array with specific lenght.
   let arr = new Array(5);
   console.log(arr); // Output: [ <5 empty items> ]
   console.log(arr.length); // Output: 5

   ```
3. **Array.from()**
   Array-like objects (such as `arguments` in a function or a NodeList from a DOM query) can be converted to a true array using the `Array` constructor with the `Array.from` method:

   ```javascript
   function example() {
   let argsArray = Array.from(arguments);
   console.log(argsArray); // Output: [ 'a', 'b', 'c' ]
   }

   example('a', 'b', 'c');
   // Here, `arguments` is an array-like object, and
   `Array.from(arguments)` converts it into a true array.
   ```

   It is useful when we need to create arrays with predefined length or when we want to create an array from no
   \n array object (like converting an array like object into a true array ).

4. **Using Spread Syantax(Es6+)**
   It is introduced in Es6, the spread syntax allow you to creae a new array by spreading the elements of another array.

   ```javascript
   // swallow copy of eisting array.
   let myArray = [...existingArray];

   // combine multiple array into a new array.
   let combinedArray = [...existingArray1,...existingArray2]

   ```

   It is convenient when we want to clone an existing array or combile multiple arrays into a new array.

5. **Using Array.of()(ES6+)**
   This method creates a new array with the given elements.
   ```javascript
   let myArray = Array.of(element1, element2, element3);

   ```
   It is useful when we want to create an array with a fixed number of element and avoid the special case behavior of the `Array` constructor.
   when usig the `Array` constructor with a single numeric argument, it creates an array with a length equal to that number, but all elements are undefined. this can sometime leads to confusion ,
   ```javascript
   let arr = new Array(3);
   console.log(arr); // Output: [ <3 empty items> ]
   console.log(arr.length); // Output: 3
   ```
   in this case, `new Array(3)` creates an array of lenght 3, but the elements are not exlicitly set ( they are `empty`
   in constrast, `Array.of()` creates an array with the provided elements as its content, even if the element is a single number.
   ```javascript
    let arr = Array.of(3);
   console.log(arr); // Output: [3]
   console.log(arr.length); // Output: 1
   ```
   Here, it creats an array with a single element `3`.
   It can also use to create an Array with mixed types
   ```javascript
     let mixedArray = Array.of(1, 'two', { three: 3 }, [4, 5]);
     console.log(mixedArray);
    //Output: [1, 'two', { three: 3 }, [4, 5]]
   ```

##

### How to Add Elements to an Array?

There are several methods to add elemets to an array . These method can be categorized into mutating (which change the original array) and non-mutating (which do not change the original array but retrurn a new array).

#### Mutating Methods.

1. `Push()` : Adds one or more elements to the end of an array and returns the new length of the array .
   ```javascript
   let arr = [0,1, 2, 3];
   console.log(arr.push(4)); // output:5 ,which is length
   console.log(arr)// arr is now [0,1, 2, 3, 4]
   ```
2. `unshift()`: Adds one or more elements to the beginning of an array and retruns the new length of the array .
   ```javascript
   let farr = [0,1, 2, 3];
   console.log(arr.unshift(4)); // output:5 ,which is length
   console.log(arr)// arr is now [4,0,1, 2, 3]
   ```
3. `splice()`: This method is a powerful array method used to add, remove , or replace elements within an array. It directly modifies the original array and returns an array containing the removed elements if any , Here's a detailed explanation of how it works.

   **Syantax:**

   ```javascript
   array.splice(start, deleteCount, item1, item2, ..., itemN)
   ```

   - `start` : the index at which to start changing the array. if negative , it indicates an offset from the end of the array.
   - `deleteCount` : An integer indicating the number of elements to remove from the array. if `0` no elements are removed. if ommited (leave) , all elements from start index to the end of the array will be removed.
   - `item1,item2....` : Elements to add to the array . if ommited , `splice()` only removes elements.

   ```javascript
    // removing elements
   let arr = ['a', 'b', 'c', 'd', 'e'];
   arr.splice(2, 2); //Starting at index 2, remove 2 elements
   //(here we just need to provide the `start` and the deletecount)
   console.log(arr); // Output: ['a', 'b', 'e']

   // adding elements
   arr.splice(2,0,'c','d'); // starting at index 2, remove 0 elements
   // and add 'c' and 'd'
   console.log(arr); // Output: ['a', 'b', 'c', 'd', 'e']

   // replacing elements
   arr.splice(2,2,'x','y'); // start at index 2, remove 2 elements,
   // and add 'x' and 'y'.

   console.log(arr); // Output: ['a', 'b', 'x', 'y', 'e'
   ```

   :memo:**_Note_**:

   > The `splice()` method returns an array of the removed elements:
   >
   > ```javascript
   > let arr=[1,2,3,4]
   > let removedArr=arr.splice(1,1)
   > console.log(removedArr) // output: [2]
   >
   > ```

#### Non-Mutating Mehods.

1.  concat(): Returns a new array that is the combination of the original array and the additional elements.

    ```javascript
    let arr = [1, 2, 3];
    let newArr = arr.concat(4); // newArr is [1, 2, 3, 4], arr is unchanged

    ```

2.  `Spread syntax` : We can use the spread syntax to add elements to the beginning , middle or end of an array . It doesnot modify the origin array.

    ```javascript
    let array = [1, 2, 3];
    let newArray = [0, ...array, 4, 5];

    console.log(newArray); // Output: [0, 1, 2, 3, 4, 5]
    ```

##

### How to remove elements from an array. ?

In javascript , there are several methods to delete elements from an array. Some methods mutate the original array, while others create a new array. Here are various ways to delete elemets along with example.

#### Mutating Methods :

1. `splice()`: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements , which is already explained in above topic.

2. `pop()` : This method removes the last elements from an array and returns that element.
   ```javascript
     let arr = [1, 2, 3, 4, 5];
    arr.pop(); // Removes the last element
    console.log(arr); // Output: [1, 2, 3, 4]
   ```
3. `shift()`: This method removes the first elements from an array and returns that element.

   ```javascript
     let arr = [1, 2, 3, 4, 5];
     arr.shift(); // Removes the first element
     console.log(arr); // Output: [2, 3, 4, 5]
   ```

4. `delete operator`: This operator removes an element from an array, but does not change the length of the array; instead , it leaves `undefined` at the deleted position.
   ```javascript
   let arr = [1, 2, 3, 4, 5];
   delete arr[2]; // Deletes the element at index 2
   console.log(arr); // Output: [1, 2, undefined, 4, 5]
   ```

#### Non-Mutating Methods

1. `filter()`: This method creates a new array with all elements that pass the test for certain condition by the provide function.

   ```javascript
   let arr = [1, 2, 3, 4, 5];
   let newArr = arr.filter(value => value !== 3); // Removes all occurrences of 3
   console.log(newArr); // Output: [1, 2, 4, 5]
   ```

2. `slice()`: This method returns a shallow copy of a portion of an array into a new array object seleted from `start` to `end` . it doestn't modify the original array.

   ```javascript
     let arr = [1, 2, 3, 4, 5];
    let newArr = arr.slice(0, 2).concat(arr.slice(3)); // Removes the element at     index 2
    console.log(newArr); // Output: [1, 2, 4, 5]
   ```

3. `Array Destructuring`: This method uses the spread syntax to create a new array without certain elements.
   ```javascript
   let arr = [1, 2, 3, 4, 5];
   let [first, second, , fourth, fifth] = arr;
   let newArr = [first, second, fourth, fifth]; // Removes the third element
   console.log(newArr); // Output: [1, 2, 4, 5]
   ```

##

### How to access elements in an array ?

1. `Accessing Elements by Index`: Each element in an array has an index, starting from `0` for the first element, `1` for the second element, and so on.

   ```javascript
       let arr = ['a', 'b', 'c', 'd', 'e'];

      // Accessing elements
      console.log(arr[0]); // Output: 'a'
      console.log(arr[2]); // Output: 'c'
      console.log(arr[4]); // Output: 'e'
   ```

2. `Using a Loop` :

- **_For loop_**: we can use a for loop to interate over the array and access each element by it's index.

  ```javascript
    let arr = ['a', 'b', 'c', 'd', 'e'];

  for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  }
  // Output:
  // 'a'
  // 'b'
  // 'c'
  // 'd'
  // 'e'
  ```

- **for... of loop**
  The `for...of` loop is more concise and is used to iterate over the elements of the array directly.

  ```javascript
  let arr = ['a', 'b', 'c', 'd', 'e'];

  for (let element of arr) {
   console.log(element);
  }
  // Output:
  // 'a'
  // 'b'
  // 'c'
  // 'd'
  // 'e'
  ```

3. `Using Array methods` : we can also itirate the array elements using the higher order methods like `forEach()`, `map()` etc, which i will be explain in next part of array.

##

**_In the next topic i will explain about higher order array methods. thanks!!_**
