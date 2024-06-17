# Dom ( Document Object model )

Dom stands for document object model. The DOM defines standards for accessing documents. It is standardized by W3C (world wide consortium). The DOM is a platform and programming language independent interface. It allows programs to dynamically Access, update, and style the content and structure the document. Now we are discussing about HTML DOM ( standard model for HTML documents. )

The DOM represents the document as a tree of objects. Which allows javascrpt to interact with and manipulate the HTML or XML documents.

### Here are the key points about the DOM.

1.  **Tree structure** : The DOM is structure as a tree of object. Each element, attribute, and piece of text in an HTML document is represent as a node in the tree. This hierarchical representation makes it easier to navigate and manipulate the document.

    ![Tree structure of dom](https://miro.medium.com/v2/resize:fit:1200/1*CcxghvAHaaaI-tOPkqP-og.png)

2.  **Nodes :** The DOM defines several types of nodes, including:
    - Element nodes : Represent HTML elements (like h1, p, img etc)
    - Text nodes : Represent the text within HTML elements
    - Attributes nodes: Represent the attributes of HTML elements. ( id, class, events etc )
    - Comment nodes : Represent comments in the HTML.
3.  **Interfaces**: The DOM provides a set of interfaces to access and manipulate the content, structure, and style of a document. These interfaces include methods to retrive elements , add or remove nodes, and modify element attributes. Here are some of the key interfaces in the DOM.

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

## **All DOM selectors**

hl
