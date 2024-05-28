# **Javascript methods**

There are different methods that can be applied to arrays in JavaScript. These methods can be distinguished between mutating and non-mutating. Some methods do not mutate the existing array that the method was called on, but instead return a new array. Others mutate the original array. Here, I will explain important methods based on their mutability, alternative methods, and their availability in the JavaScript engine.

## Mutating methods

Actually mutating methods are those, modify the original array that the method was called on. These methods alter the element of the array directly, rather than returning a new modified version.

1. ### `push()`:

- Adds one or more elements to the end of an array.
- It will returns the new length of array.
  ```javascript
  let arr = [1, 2, 3];
  console.log(arr.push(0)); // output:4 (which is length)
  // arr is now [1, 2, 3, 0]
  ```
  **alternative** : [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) & [concate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) (non- mutating)

2. ### `pop()`:

- Removes the last element from an array.
- This method returns the removed element.
  ```javascript
    let arr = [1, 2, 3];
    console.log(arr.pop());//output: 3
    // arr is now [1, 2]
  ```
  **alternative**: [slice(0,1)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (non-mutating)

3. ### `shift()`:

- Removes the first element from an array.
- It returns the removed element.
  ```javascript
   const fruits = ["Banana", "Orange", "Apple", "Mango"];
   console.log(fruits.shift()); //output: "Banana"
  ```
  **alternative**: [slice(1)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (non-mutating)

4.  ### `unshift()`:

- Add one or more elements to the beginning of an array.
- It returns the new lenght of array.
  ```javascript
    let arr = [1, 2, 3];
  console.log(arr.unshift(0)); //output: 4
   // arr is now [0, 1, 2, 3]
  ```
  **alternative** : [toSpliced(0, 0, value)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced) (non-mutating)

5. ### `splice()`:

   - Removes, Add and replacing existing elements from an array.
   - It returns the removed element, if any.

     **Syantax:**

   ```javascript
   array.splice(start, deleteCount, item1, item2, ..., itemN)
   ```

   - `start` : the index at which to start changing the array. if negative , it indicates an offset from the end of the array.

   - `deleteCount` : An integer indicating the number of elements to remove from the array. if `0` no elements are removed. if ommited (leave) , all elements from start index to the end of the array will be removed.

   - `item1,item2....` : Elements to add to the array . if ommited , `splice()` only removes elements.

   ```javascript

   // removing elements

   let  arr = ['a', 'b', 'c', 'd', 'e'];
   arr.splice(2, 2); //Starting at index 2, remove 2 elements
   //(here we just need to provide the `start` and the deletecount)
   console.log(arr); // Output: ['a', 'b', 'e']

    // adding elements

   arr.splice(2,0,'c','d'); // starting at index 2, remove 0 elements
    //and add 'c' and 'd'
   console.log(arr); // Output: ['a', 'b', 'c', 'd', 'e']

   // replacing elements

    arr.splice(2,2,'x','y'); // start at index 2, remove 2 elements,
   // and add 'x' and 'y'.
   console.log(arr); // Output: ['a', 'b', 'x', 'y', 'e'
   ```

   **alternative**: [ tospliced()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced) (non-mutating)

6. ### `sort()`:

- Sorts the elements of an array.
- It returns the sorted array.
- By default, this method converts elements to string and sorts them in ascending order occording to the unicode code points of the characters.
  ```javascript
  let arr = [3, 1, 4, 1, 5, 9];
  arr.sort();
  console.log(arr); // Output: [1, 1, 3, 4, 5, 9]
  ```
- The default sorting behavior can lead to unexpected results, especially when sorting numbers. this happens because it treats elements as strings by default.
  ```javascript
  let numArr = [10, 5, 20, 15];
  numArr.sort();
  console.log(numArr); // Output: [10, 15, 20, 5] (incorrect order)
  ```
  To sort numbers correctly, we need to proved a compare function.
  ```javascript
  let numArr = [10, 5, 20, 15];
  numArr.sort((a, b) => a - b);
  console.log(numArr); // Output: [5, 10, 15, 20]
  ```
- If the array contains `undefined` elements, the sorting can be inconsistent across different javascript engines.
  ```javascript
     let arr = [3, undefined, 1, 4, undefined];
    arr.sort();
   console.log(arr); // Output: [1, 3, 4, undefined, undefined] (but order of `undefined` is not guaranteed)
  ```
- When sorting strings , ``sort()` sorts them based on their UTF-16 code units, which might not always be the desired behavior (sorting strings in a case-insensitive manner)
  ```javascript
     let strArr = ['apple', 'Banana', 'cherry'];
     strArr.sort();
   console.log(strArr); // Output: ["Banana", "apple", "cherry"] (case-sensitive sort)
  ```
- To solve the issue in sort string in case-insensitive manner, we can provide a compare function that converts both string to the same case before comparing them.
  ```javascript
    let strArr = ['apple', 'Banana', 'cherry'];
   strArr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  console.log(strArr); // Output: ["apple", "Banana", "cherry"]
  ```
  **Alternative** : [toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

6. ### `reverse()`:

- Reverses the elements of an array.
  ```javascript
  let arr = [1, 2, 3, 4, 5];
   arr.reverse();
   console.log(arr); // Output: [5, 4, 3, 2, 1]
  ```
  **Alternative** : [toReversed()](https://www.geeksforgeeks.org/how-toreversed-method-is-different-from-reverse-method-in-javascript/) (non-mutating)

7.  ### `fill()`:

- It changes all elements in an array to a static value from a start index to an end index.
- It modifies the original array and returns it.
  **syantax**

  ```javascript
  array.fill(value, start, end)
  ```

  - `value`: The value to fill the array with.
  - `start` (optional): The index to start filling (default is 0).
  - `end` (optional): The index to stop filling (default is array.length).

  ```javascript
  let arr = [1, 2, 3, 4, 5];
  arr.fill(0, 2, 4);
  console.log(arr); // Output: [1, 2, 0, 0, 5]
  ```

8.  ### `copyWithin()`:

- It copies a sequence of array elements within the array to a new position within the same array.
- it doesn't remove or add any elements.
  **syntax**
  ```javascript
  array.copyWithin(target, start, end)
  ```
  - `target`: The index at which to copy the sequence to.
  - `start` (optional): The index at which to start copying elements from (default is 0).
  - `end` (optional): The index at which to end copying elements from (default is array.length).
  ```javascript
   let arr = [1, 2, 3, 4, 5];
  arr.copyWithin(0, 3, 5);
  console.log(arr); // Output: [4, 5, 3, 4, 5]
  ```

:memo: **[Note] :** _To avoid mutating the original array, we can create a copy of the array using spread operator or array.from(), and then apply the methods . We can also apply the alternative non-mutating methods which are mentions above._

## Non-mutating Array methods.

Non-mutating array methods that do not alter the original array they are called on. instead they return a new modified version of the array, leaving the original one unchanged. These methods are beneficial for maintaining immutability.

### `concat()`:

- Merges two or more arrays.
  ```javascript
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  let newArr = arr1.concat(arr2); //newArr is [1, 2, 3, 4]
  ```
  **Alternative**: spread operator

### `slice()`:

- Returns a shallow copy of a portion of an array.
- Alternative to a spared operator.
  ```javascript
    let arr = [1, 2, 3, 4];
   let newArr = arr.slice(1, 3); // newArr is [2, 3]
  ```

### `join()`:

- Joins all elements of an array into a string
  ```javascript
       let arr = [1, 2, 3, 4];
  let str = arr.join('-'); // str is "1-2-3-4"
  ```

### `indexOf()`:

- Returns the first index at which a given element can be found in the array.
  ```javascript
     let arr = [1, 2, 3, 4];
  let index = arr.indexOf(3); // index is 2
  ```

### `findIndex()`:

- Returns the index of the first element in the array that satisfies the proved testing funciton.

  ```javascript
  let arr = [1, 2, 3, 4];
  let index = arr.findIndex(x => x > 2); // index is 2
  ```

### `find()`:

- Returns the first element in the array that satisfies the provided testing funciton.
  ```javascript
  let arr=[1,2,3,4];
  let found=arr.find(x=> x>2); // found is 3
  ```
  :memo: \*\*we can use `findLast()` for opposite of `find()` (New)

### `includes()`:

- Determines whether an array includes a cetrain value.
  ```javascript
    let arr = [1, 2, 3, 4];
   let result = arr.includes(3); // result is true
  ```

### `every()`:

- Test whether all elements in the array pass the provided funciton.
  ```javascript
  let arr = [1, 2, 3, 4];
  let result = arr.every(x => x > 0); // result is true
  ```

### `some()`:

- Test whether at least one element in the array passes the provided function.
  ```javascript
   let arr = [1, 2, 3, 4];
  let result = arr.some(x => x > 3); // result is true
  ```

### `map()`:

- `map()` method creates a new array by applying a function to each element of the original array. The new array conatain the results of applying the function to each element .
  ```javascript
   let number= [1,2,3,4];
   let doubled=number.map((num)=>num*2);
   console.log(doubled) //output: [1,4,6,8]
  ```
  **Alternative**: we can use `for` loop with push method.
  **Demerit** : calling the function for every element can impact performance with large arrays.  
  **Usecase** : Transformation of Data, Generating HTML markup, Data Formating, calculations

### `filter()`:

- `filter()` creates a new array with elements that pass a certain condition specified by a function.

```javascript
 let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

**Alternative**: A `for` loop combined with conditional statements.
**Demerit** : calling the function for every element can impact performance with large arrays.
**UseCase**: filtering data , searching with particular condition , Removing elements

### `reduce()`:

- `reduce()` method is a powerful tool for reducing an array to a single value by executing a reducer function on each element of the array . This function takes an accumulator and the current element as arguments and returns a new accumulator value.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 10
```

- The callback function `(accumulator, currentValue) => accumulator + currentValue` adds the current element to the accumulator.
- The `initialValue` is `0`, so the accumulation starts from `0`.

**UseCase**: summing values, Finding max or min , counting instances, flattening arrays, creating look-up tables

### `forEach()`:

- This method in js executes a provided function once for each array element.
- It is often used for performing opearions that do not modify th array. such as logging or updating external states.
- It does not return a new array. it simply applies the function to each array element.

```javascript
 const numbers = [1, 2, 3, 4];
let sum = 0;

numbers.forEach((number) => {
sum += number;
console.log(number);
});

console.log('Sum:', sum); // Output: Sum: 10

```

### `flat()`:

- It is used to create a new array with all sub array elements concatenated into it recursively up to the specified depth.
- Particularly useful for flattening nested arrays.

  ```javascript
  let arr = [1, 2, [3, 4, [5, 6]]];
  let flattened = arr.flat();
  console.log(flattened); // Output: [1, 2, 3, 4, [5, 6]]
  ```

  (**_specifying depth_**)

  ```javascript
  let arr = [1, 2, [3, 4, [5, 6]]];
  let flattened = arr.flat(2);
  console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
  ```

- we can also use `Infinity` argument as depth.

  **UseCase** : when we only need to flatten a nested array.

### `flatMap()`:

- It is a combination of the `map()` and `flat()` method. at first we maps each element using a mapping function, then flattens the result into a new array.
  ```javascript
  let arr = [1, 2, 3, 4];
  let result = arr.flatMap(x => [x, x * 2]);
  console.log(result); // Output: [1, 2, 2, 4, 3, 6, 4, 8]
  ```
- In this example, each element `x` is mapped to a two-element array `[x, x * 2]`, and then the resulting arrays are flattened into a single array.

### `entries()`:

- It returns a new Array iterator object that contain key-value pairs for each index in the array. It is useful when we need both index and the value of each element .

  ```javascript
  const arr = ['a', 'b', 'c'];
   const iterator = arr.entries();

  for (let [index, element] of iterator) {
  console.log(index, element);
   }
  // Output:
  // 0 'a'
   // 1 'b'
   // 2 'c'
  ```

### `Keys()`:

- Useful when you only need the indices of the elements, such as when you need to iterate over an array to perform operations based on index.

  `````javascript
   const arr = ['a', 'b', 'c'];
   const iterator = arr.keys();

   for (let key of iterator) {
   console.log(key);
  }
  // Output:
  // 0
  // 1
  // 2
     ````
  `````

### `values()`

- `values()` method in JavaScript is used to create a new array iterator object that contains the values for each index in the array. This method is particularly useful when you need to iterate over the values of an array directly.

  ```javascript
  let array = ['a', 'b', 'c', 'd', 'e'];
  let iterator = array.values();

  for (let value of iterator) {
  console.log(value); // output: a,b,c,d,e,f (in each line)
  }
  ```

There are more mordern method can be applied to an array . for example , `at()` ,`with` ,`findLastIndex()`, `reducedRight()` etc.
