# Stack and Heap memory

> In javascript , memory management is an essential concept . The language uses two main types of memory for storing data : `Stack memory` & `Heap memory`

- ## Stack Memory :
  > The stack is a rigion of memory that stores data in a `LIFO` (Last in First out) order .It is a fast and efficient memory area for storing data with a known , fixed size . In javascript, the stack holds `Primitive data types` , `Function call information` & `execution context information`
  >
  > #### primitive data types :
  >
  > > These include numbers , string, booleans, null, and undefined. When you declear a variable with a primitive type, It's value is stored directly in the stack .
  >
  > ```javascript
  > let a=5; // a is a primitive number stored in the stack
  > let b=a; // b is a copy of a , b will get the copy of a not it's reference .
  > a=6; // changing 'a' does't affect 'b'
  > console.log(a); // output: 6
  > console.log(b); // output: 5
  > ```
  >
  > #### Function call information :
  >
  > > When we call a function , the arguments , local variable and return address are pushed onto the stack . when we call a function , a new execution context is pushed onto the callstack .
  >
  > ```javascript
  > function add(a, b) {
  > let sum = a + b; // 'a', 'b', and 'sum' are stored in
  >  the stack
  > return sum;
  > }
  > let x = 10; // 'x' is stored in the stack
  > let y = 20; // 'y' is stored in the stack
  > let result = add(x, y); // The function call information
  > and local variables are stored in the stack.
  > ```

> #### What is stack overflow ?
>
> > The stack has a fixed size . if we exceed the stack size ( eg: by using excessive recursion ) , we may encounter a stack overflow error , which results in a programme crash.
>
> #### How memory is deallocated automatically ?
>
> > When a function returns , it's execution context is popped off the stack , this includes the parameters , local variable , and funciton's return address . the memory is automatically deallocated .

- ## Heap Memory :
  > The heap is a rigion of memory where dynamic , variable-sized data is stored . unlike the stack , data in the heap can be allocated and deallocated dynamically. javascript uses the heap to store `Objects` & `Complex structures`. for example ,
  >
  > ```javascript
  >  let person ={ name: 'arjun', age:20 }
  >   // the peroson object is stored in the heap.
  >
  >  function greet(){
  >  console.log("hello");
  >  } // the greet function is stored in the heap
  > ```
  >
  > In the heap memory , it provide the reference of variable not it's copy. changing the value of object also change the value of copied object. for example ,
  >
  > ```javascript
  >  let obj1 = { name: 'Alice' }; // 'obj1' is an object stored in the heap
  >  let obj2 = obj1; // 'obj2' is a reference to the same
  >  object in the heap
  >  obj1.name = 'Bob'; // Changing 'obj1' affects 'obj2' because they reference the same object
  >  console.log(obj2.name); // Output: Bob
  > ```

> #### Memory alloaction and deallocation in Heap memory ?
>
> Data in the heap can be dynamically allocated and deallocated automatically thanks to the language's grabage collection machanism . Javascript manages memory automatically , which includes the allocation and deallocation of memory as needed , here's how it works .
>
> - ### Allocation
>
> 1.  #### creating objects :
>     When we create an object, array, funciton, or any other complex data structure in javascript, memory is allocated in the heap to store that data . for example:
>
> ```javascript
> let obj = { name: 'Alice' };
> let arr = [1, 2, 3, 4, 5];
> // obj and arr is stored in the heap memory.
> ```
>
> 2.  #### Dynamic size : Heap-allocated data can change in size dynamically . For instance , we can add or remove elements from an array or modify and object's properties

> - ### Deallocation
>   Javascript uses a process called garbage collection to automatically deallocate memory from the heap that is no longer in use . this process includes :
>
> 1.  #### Reference counting :
>
>     Javascript tracks how many references exist to each object in the heap . When an object's reference count drop to zero ( meaning no variable or function is pointing to it ), the object is becomes eligible for garbage collection .
>
> 2.  #### Mark-and-Sweep :
>     Mark-and-sweep is the algorithm for garbage collection used in javascript, The garbage collector starts with root references ( global objects , stack variable ,etc ) marks objects that are reachable and sweep away objects that are not reachable (no references pointing to them )
>     Let's look at an example demonstrating allocation and deallocation:
>
> ```javascript
> function createPerson(){
> let person ={
> name:'arjun',
> age: 16
>      }; // person is allocated in the heap
> return person ; // the function returns a reference to the person object .
>  }
> let personRef = createPerson();  // personRef
> now references the person object.
> // After using the 'person' object, if we no longer need it
>
>  personRef = null; // 'personRef' no longer references
>  the 'person
>
>  // now the person object is eligible for
>  garbage collection
> ```

> JavaScript's automatic garbage collection is designed to simplify memory management for developers. However, understanding how memory allocation and deallocation work can help you write more efficient code and avoid memory leaks .

:memo: Memo

> understanding the working principle , uses of heap and stack memory is beneficial for writing efficient and optimized code . By knowing how these memory types works , we can avoid certain pitfalls and make better decisions in our programming .

:warning: Things to avoid

> 1. ##### Stack overflow :
>
>    > Avoid excessive recursion or deep call stack , recursive function should hava a base case to prevent infinite recursion ,
>
> 2. ##### Memory Leaks :
>
>    > In the heap , avoid retaining references to objects that are no longer needed . this can cause memory leaks , as the garbage collector won't be able to free the memory .
>
> 3. ##### Unnecessary memory allocation :
>
> 4. ##### Holding onto large object :
>
>    > when you hold onto large objects in the heap , they consume more memory and can affect performance .
>
> 5. ##### Global variable :
>    > JavaScript's automatic garbage collection is designed to simplify memory management for developers. However, understanding how memory allocation and deallocation work can help you write more efficient code and avoid memory leaks
