# Dom ( Document Object model )

Dom stands for document object model. The DOM defines standards for accessing documents. It is standardized by W3C (world wide consortium). The DOM is a platform and programming language independent interface. It allows programs to dynamically Access, update, and style the content and structure the document. Now we are discussing about HTML DOM ( standard model for HTML documents. )

The DOM represents the document as a tree of objects. Which allows javascrpt to interact with and manipulate the HTML or XML documents.

### Here are the key points about the DOM.

1.  **Tree structure** : The DOM is structure as a tree of object. Each element, attribute, and piece of text in an HTML document is represent as a node in the tree. This hierarchical representation makes it easier to navigate and manipulate the document.


    ![Tree structure of dom](https://miro.medium.com/v2/resize:fit:1200/1*CcxghvAHaaaI-tOPkqP-og.png)

2. **Nodes :** The DOM defines several types of nodes, including:
   - Element nodes : Represent HTML elements (like h1, p, img etc)
   - Text nodes : Represent the text within HTML elements
   - Attributes nodes: Represent the attributes of HTML elements. ( id, class, events etc )
   - Comment nodes : Represent comments in the HTML.
3. **Interfaces**: The DOM provides a set of interfaces to access and manipulate the content, structure, and style of a document. These interfaces include methods to retrive elements , add or remove nodes, and modify element attributes. Here are some of the key interfaces in the DOM.

- `Node` interface :
  ( It is base interface from which many other interfaces inherit.)

  - properties:\*
    - `nodeName` : The name of the node
    - `nodeType`: the type of the node (eg. element, text , comment)
    - `nodeValue`: The value of the node (for text nodes).
  - Methods:
    - `appendChild()`: Adds a new child node.
    - `removeChild()`: Removes a child node.
    - `cloneNode()`: Clones the node.
    - `contains()`: Checks if a node is a descendant of another node.

- `Element` interface:
  ( It represent an element in the document and it is inherits from `node`)

  - Properties:
    - `tagName`: The tag name of the element.
    - `innerHTML`:The HTML content within the element.
    - `outerHTML` : The HTML content including the element itself.
    - `className`: The value of the class attribute.
  - Methods:
    - `getAttribute()`: Gets the value of an attribute.
    - `setAttribute()`: Sets teh value of an attribute.
    - `removeAttribute()`: Removes an attribute.
    - `querySelector()`: Returns the first mathching element.
    - `querySelectorAll()`: Returns all matching elements.

- `Document` Interface:
  ( Represents the entire HTML document, inherits from `Node`)

  - Properties
    - `documentElement`: The root element of the document.
    - `body`: The <body> element.
    - `head`: The <head> element.
  - Methods:
    - `getElementById()`: Returns an element by it's ID.
    - `getElementsByClassName()`: Returns a collection of elements with a specific class.
    - `getElementByTagName()`: Returns a collection of elements with a specific tag name.
    - `createElement()`: Creates a new element.

- `Event` Interface:

  - Represents an event that takes place in the DOM.
  - Properties:
    - `type`: The type of event (e.g., 'click', 'load').
    - `target`: The target of the event.
    - `currentTarget`: The current target in the event propagation.
  - Methods:
    - `preventDefault()`: Prevents the default action associated with the event.
    - `stopPropagation()`: Stops the event from propagating further.

- `HTMLElement` Interface:

- Represents all HTML elements and provides properties and methods common to all HTML elements.
- Inherits from `Element`.
- Properties:
  - `title`: The value of the title attribute.
  - `lang`: The value of the language attribute.
  - `dir`: The direction of the text.
  - `hidden`: Indicates whether the element is hidden.
- Methods:
  - `focus()`: Sets focus on the element.
  - `blur()`: Removes focus from the element.
  - `click()`: Simulates a mouse click on the element.

4. **Dynamic:** One of the powerful features of the DOM is that it allows for dynamic updates to the document. This means you can add, remove, or change elements and content on a web page without having to reload the entire page.

5. **Event Handling:** The DOM supports event handling, allowing scripts to respond to user interactions like clicks, keyboard inputs, and other events.

##

### **What is HTMLCollection ?**

HTML collection is a collection of ( array-like object/ not exacty array) of HTML elements . It is a list of DOM elements that match certain criteria. For example, they may have the same tag name or class. Or they may be related in a specific context, like children of a particular element. example.

   <img  alt="Screenshot 2024-06-18 020205" src="https://github.com/arjunpangeni/javascript-notes/assets/126581290/c328d86a-4a70-498d-ae6a-1a0769d345de">
   <br>
   <br>
   <img  alt="Screenshot 2024-06-18 020245" src="https://github.com/arjunpangeni/javascript-notes/assets/126581290/91ee16d2-8b75-4eaf-ad7c-c9d36605a615">

In this example , we have three button elements .Each has a class of btn . Now, let's seletct the buttons using the `getElementsByClassName` method. It returns an HTML collection. `getElementsByTagName` method also returns the HTMLCollection.

### What is a `NodeList`?

Like the name suggests, a NodeList is a list of nodes. A node is any individual elements in the DOM tree. This could be elements, attributes, texts, comments etc. example ,
<br>

<img  alt="Screenshot 2024-06-18 023044" src="https://github.com/arjunpangeni/javascript-notes/assets/126581290/c6b477e6-6f28-4f19-bfa4-43e801a83f25">

let's select the buttons with `querySelectorAll`,the `console.log` statement prints a `NodeList`.

<img  alt="Screenshot 2024-06-18 023009" src="https://github.com/arjunpangeni/javascript-notes/assets/126581290/9a257a15-322f-46d3-bd4a-e19c94f8664f">
<br>
<br>

### Similarities between `HTMLCollection` and `NodeList`?

They both aren't arrays even though they look like one. But they have features that make them have some behaviours of arrays.

We can access the content of both using indexing like an array. And we can also use length propery to find the length of both.

### Differences between `HTMLCollection` and `NodeList`?

HTMLCollection only contain HTML Element nodes like `<p>` `<div>`, `<img>` and others. But there are other types of nodes too, for example, text nodes and attribute nodes. A `NodeList` includes all type of nodes.

For example :

<img  alt="Screenshot 2024-06-18 024817" src="https://github.com/arjunpangeni/javascript-notes/assets/126581290/5c2943e8-77be-46e0-b338-082d94530f40">
<br>
<br>

Here is a div with a text node and two element nodes('btn'). Each button has a text node. Assuming you wanted to get only the element nodes in the `div`, you can use the `children` property on the `div`. And it will return an `HTMLCollection` containing only the element nodes.

But if you wanted all the nodes and not just the element nodes, then you can use the `childNodes` property to get all the nodes.

<br>
<br>

<img  alt="Screenshot 2024-06-18 024841" src="https://github.com/arjunpangeni/javascript-notes/assets/126581290/51f2eb7e-7787-4284-9f5a-780edf37bebd">
<br>
<br>

The `HTMLCollection` has two items: the paragraph element nodes. Whilst the `NodeList` includes the first text and the two paragraphs and their text contents too.

### How to Access Items in the Collection ?

HTMLCollection can be access using any of the following.

- The index of element.
- Their `id` attribute with the nameItem property.
- Their `name` attribute with the `namedItem` property.

But with a `NodeList`, we can only access the nodes in the list only by their index. There are certain looping method like `forEach` is aviable for iteration over each item.  
 <br>
:memo: **Note**:
_we can convert both type of collection to the array and use all array methods to manipulate and access over converted array._

##

### Dom Selector ?

DOM (Document Object Model) selectors are used in web development to select and manipulate elements within an HTML document. There are several ways to select DOM elements in JavaScript, each suitable for different scenarios.

- **`getElementById`**: Selects a single element by its `id`.

- **`getElementsByClassName`**: Selects all elements with a specific class. It returns a live HTMLCollection.
- **`getElementsByTagName`**: Selects all elements with a specific tag. It returns a live HTMLCollection.
- **`getElementsByName`**: Selects all elements with a specific name attribute, Returns a live NodeList.

- **`querySelector`**: Selects the first element that matches a CSS selector.

  The `querySelector` method is versatile and powerful, allowing selection of elements using various CSS selectors, such as IDs, classes, tags, attributes, descendants, combinations, and pseudo-classes. This flexibility makes it a popular choice for selecting and manipulating DOM elements.

      For example :

  <br>

      ````html

     <!DOCTYPE  html>
     <html  lang="en">

     <head>
     <meta  charset="UTF-8">
     <meta  name="viewport"  content="width=device-width, 
      initial-scale=1.0">
      <title>Document</title>
     </head>

      <body>
        <div  id="myElement">first div</div>
        <div  class="myClass">class element</div>
        <input  type="text"  name="username"  value="arjun">
        <div  id="main"  class="container">
             <p  class="text">First paragraph</p>
             <p  class="texttwo">Second paragraph</p>
      </div>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>


     </body>
     </html>
       ````
        From the above example , we can use multiple ways to select the     different elemets using various `CSS` selectors. 
       - **Selecting by ID**
          ````javascript
          const element = document.querySelector('#myElement')
          console.log(element.innerText):
          //output: first element 
          ````
       -  **Selecting by className**
          ````javascript
          const element = document.querySelector('.myClass')
          console.log(element.innerText):
          //output: class element  
          ````
        - **Selecting by Tagname**
          ````javascript
          //selecting first div
           const element = document.querySelector('div')
          console.log(element.innerText):
          //output: firstelement  
          ````
        -   **Selecting by Attribute**
              ````javascript
            const element = document.querySelector('input[name='username']')
            console.log(element.value) 
            //output: 'árjun'
            ````
       - **Selecting by decendent**
         ````javascript
         const element= document.querySelector('.container .text')
         console.log(element.innerText);
         //output: First paragraph
         ````
        - **Selecting by combination**
            ````javascript
            const element= document.querySelector("#main .texttwo")
            console.log(element.innerText)
            //output : Second paragraph
            ````
         - **Selecting by Pseudo-Class**
           ````javascript
           const element= document.querySelector('li:first-child')
           console.log(element.innerText) 
           //outputs: First item
           ````

- **`querySelectorAll`**: Selects all elements that match a CSS selector, Returns a static NodeList.

  In the case of `querySelectorAll` , it is similar as selector uses in `querySelector`. Only different is `querySelector` returns the first matching element but `querySelectorAll` returns a static NodeList. we have use itterator to access or manipulate the elements in collection.
