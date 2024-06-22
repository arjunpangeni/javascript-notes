# Events

In javascript, An event is an action or occurrence that can be detected and handled by js code. Event are a core part of interactive web application and are triggered by various user interactions or browser actions. Some common type of events include clicks, key presses, mouse movements, form submission, and page load completions.

### How events works ?

When an event occurs, the browser creates an event object that contains details about the event and passes it to an event handler function. This event handler can then perform actions in response to the event. example.

```javascript
<body>
<button  class="btn">click</button>

<script>
let  btn = document.querySelector('.btn');
btn.addEventListener('click', e  => {
console.log(e)
})
</script>

</body>
```

<img alt="S" src="https://github.com/arjunpangeni/javascript-notes/assets/126581290/e6b41ada-3b93-43ec-8bb6-3cf00dde1b12">

In this example , when we apply the `click` event on button element. It returns the event object shown in figure. event object contains useful information about the event like it's type, targeted element , cordinates of mouse pointer etc.

### Common event types

1. **Mouse events**
   - `click`: triggered when a mouse button is clicked on an element.
   - `bdlclick`: when mouse button is double-clicked on an element.
   - `mouseover`: when mouse pointer moves over an element.
   - `mouseout`: when mouse pointer moves out of an element.
   - `mousemove`: when mouse pointer moves within an element.
2. **Keyboard events**
   - `keydown`: triggered when a key is pressed down .
   - `keyup`: triggered when a key is realesed.
   - `keypress`: triggered when a key is pressed and released.
3. **Form events**
   - `submit`: triggered when a form is submitted.
   - `change`: when the value of an input element is changed.
   - `focus`: triggered when an element gains focus .
   - `blur`: when an element loses focus.
4. **Window events**
   - `load`: triggered when the entire page has loaded.
   - `resize`: triggerd when the window is resized.
   - `scroll`: triggerd when the window is scrolled.

For explore more event types. we can visit [Here](https://developer.mozilla.org/en-US/docs/Web/Events)

## What is event handler (event listeners) ?

It is a function or method that is executed in response to an event. When an event occurs, the event handler handles the event by executing the spicified code.

```javascript
const hello=(event)=>console.log(event)
let  btn = document.querySelector('.btn');
btn.addEventListener('click',event)
```

In above code , hello is event handler . when event is occurs, it is handles by executing the handler funciton.

:memo: NOTE:
_we shouldn't call the handler function with in Eventlistener. if we immediately calls the function, it passes it's returns value. not it's reference._

## Using addEvenetListener()

`addEventListener()` is a method in javascript that allows you to set up a function to be called whenever a specified event is deliverd to the target. The target can be an `element`, `document`, `window` .

**syantax:**

```javascript
  target.addEventListener(type,listener,options);
```

Here parameters are

1. `type` : A string representing the event type to listen for ( eg. 'click' , 'keydown')
2. `listener` : Handler function ( event handler).
3. `option` : It is an optional parameter that specifies characteristcs about the event listener. this can be .

- **`A boolean( useCapture)`**

  - `ture` : The event handler is set to the capture phase.
  - `false`(default) : the event handler is set to the bubble phase (bubbling) .

  :memo: Note
  `Capture phase`:
  the event starts from the root and propagates donw to the target element.
  `Bubble phase`:
  the event start from the target element and bubbles up to the root .

- **an object (`options`)**
  The object can have `capture`, `once`, `passive`, `single` properties.
  ```javascript
  function handleClick(event) {
   console.log('Button clicked!', event); }

  btn.addEventListener('click', handleClick,
  { capture: false, // default is false
    once: true, // the handler will be invoked at most once
    passive: true // the handler will not call preventDefault()
     });
  ```
      - **`capture`** : explained above.
      - **`once`** : a boolena indicating that the listener should be invoked at most once after being added. If `true` , the listener is automatically removed when invoked.

      - **`passive`**: A boolean indiacting that the listener will never call `preventDeafult()`. If a passive listener does call `preventDefault()`, the browser will ignore the call and generate a console warning.  Improves performance for events like `touchstart` and `touchmove` by letting the browser know that it doesn’t need to wait for `preventDefault()`.

      - **`signal`**: -   Allows you to associate an `AbortSignal` with the event listener.
  The listener can be removed by calling `abort()` on the corresponding `AbortController`.
  #### Benifits of using `addEventListener()`.
  - **Multiple Handlers**: You can attach multiple event handlers to the same event on the same element.
  - **Event Bubbling and Capturing**: You can control the phase in which the event is handled (bubbling or capturing).
  - **Flexible Options**: You can specify options such as `once`, `capture`, and `passive` for fine-tuned control over the event handling behavior.

## Removing Listeners.

If you have added an event handler using `addEventListener()`. you can remove it again using the `removeEventListener()` method.

Event handlers can also be removed by passing an `abort()` on the controller owning the AbortSignal.

## Adding multiple listeners for a single event.

By making more than one call to addEventListener(), providing different handlers. you can have multiple handlers for a single event.

```javascript
myElement.addEventListener("click", functionA);
myElement.addEventListener("click", functionB);
```

Both funcitons would now run when the element is clicked.

## Event objects.

In above example given , inside an event handler function, you'll see a parameter specified with a name such as `event` or `e`. This is called the event object. And it is automatically passed to event handlers to provide extra features and information. For example, random color for background .

```javascript
const btn = document. querySlector("button")

function random(number){
    return Math.floor(Math.random()* (number+1))
    }
// handler function defination
function bgChange(e){
    const rndCol= `rgb(${random(255)}
     ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor= randCol;
}
btn.addEventListener("click",bgChange);
```

Here we can see, we are including an evenet object `e` . in the function and in the function setting a background color style on `e.target` . which is the button itself . The target property of the event object is always a reference to the element the event occurred upon.

#### Properties of the Event Object

1.  **type**: The type of the event (e.g., 'click', 'keydown').
2.  **timeStamp**: The time at which the event was created.
3.  **defaultPrevented**: A boolean value indicating whether `preventDefault()` was called on the event.
4.  **target**: The element that triggered the event.
5.  **currentTarget**: The element to which the event handler is attached.
6.  **clientX** and **clientY**: The X and Y coordinates of the mouse pointer relative to the viewport.
7.  **screenX** and **screenY**: The X and Y coordinates of the mouse pointer relative to the screen.
8.  **altKey**: A boolean indicating whether the 'Alt' key was pressed when the event occurred.
9.  **keyCode**: The code of the key that was pressed (for keyboard events).
10. **shiftKey**, **ctrlKey**, **metaKey**: Booleans indicating whether the respective keys were pressed.
11. **preventDefault()**: A method to cancel the event’s default action.

## Preventing Default behavior

Preventing the default behavior of an event in js means stoping the browser's default action that normally occurs in response to that event.

The most common example is that of a web form , for example, a custom resigtration form. When we fill the details and click the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a `success message` page .

The trouble comes when the user has not submitted the data correctly, as a developer, we want to prevent the submission to the server and give an error message . example :

```javascript
  <form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text" />
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text" />
  </div>
  <div>
    <input id="submit" type="submit" />
  </div>
</form>
<p></p>

<script>
const form =document.querySelector('form')
const fname= document.getElementById('fname')
const lname= document.getElementById('lname')
const paragraph= document.querySlector('p')

form.addEventListener('submit',(e)=>{
   if (fname.value=== "" || lname.value=== ""){
   e.preventDefault();
   para.textcontent= "you need to fill in both names !"
   }
})
</script>
```

Obviously, this is pretty weak form validation — it wouldn't stop the user from validating the form with spaces or numbers entered into the fields, for example — but it is OK for example purposes. if we enter the submit button without filling the one of that or both . the error message will be shown . and default behaviour will be prevent.

## Event Bubbling

Event bubbling is a type of event propragation in the DOM where an event starts from the target element and bubbles up to the root of the document. In the simpler terms, when a event occurs on an element, it first runs the handlers on that element, then on it's parent, then on it's parent's parent, and so on until it reach the `document` object. example.

```javascript
<div class="outer" id="outer">
 <p>Outer div (Click me)</p>

  <div class="inner" id="inner">
  <p>Inner div (Click me too)</p>
  </div>

</div>
<script>

const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');
// Add event listeners to both divs
outerDiv.addEventListener('click', function() {
 console.log('Outer div clicked'); });

innerDiv.addEventListener('click', function() {
console.log('Inner div clicked'); });

 </script>
```

In this example:

- There are two nested `<div>` elements: an outer div with class `outer` and an inner div with class `inner`.
- Both divs have their own click event listeners attached to them.
- When you click on the inner `<div>`, the event also triggers the click event for its parent (the outer `<div>`).
- This propagation of events from the innermost element (inner `<div>`) up to its parent elements (outer `<div>`) is what we refer to as event bubbling.

So, if you click on "Inner div (Click me too)", you'll see both "Inner div clicked" and "Outer div clicked" logged in the console, demonstrating that the click event bubbles up from the inner `<div>` to the outer `<div>`.

**Benefits of Event Bubbling**

1.  **Event Delegation**: You can attach a single event handler to a parent element instead of multiple event handlers to its child elements. This is particularly useful for dynamically added elements.
2.  **Simplified Code**: Reduces the amount of code and enhances maintainability by handling events at a higher level in the DOM hierarchy.
3.  **Performance**: Improves performance by reducing the number of event listeners attached to individual elements.

**Problems with Event Bubbling**

4.  **Unintended Behavior**: Handlers on parent elements might unintentionally respond to events that should be handled exclusively by child elements.
5.  **Event Handling Complexity**: In complex interfaces, it can be challenging to manage and predict event behavior due to bubbling.

#### Stopping Event Bubbling with `stopPropagation()`

The `stopPropagation()` method can be used to stop the event from propagating up the DOM tree. This ensures that the event is only handled by the target element and does not trigger any parent event handlers.

## Event Capture

Event caputre is like event bubbling but the order is reversed. So, instead of the event firing first on the innermost elemet targeted, and then on successively less nested elements, the event fires first on the lease nested element, and then on successively more nested elements.

Event capture is disabled by default. To enable it you have to pass the `capture` option in `addEventListener()`.

## event delegation

Event delegation is a technique in JavaScript where instead of attaching an event handler to each individual child element, you attach it to a parent element. This parent element then listens for events that bubble up from the child elements. example,

Consider you have an unordered list (`<ul>`) with several list items (`<li>`). Instead of attaching a click event handler to each `<li>` element, you can attach it to the `<ul>` element and use event delegation to handle clicks on the list items:

```javascript
<ul id="parentList"> <li>Item 1</li> <li>Item 2</li> <li>Item 3</li> <li>Item 4</li> </ul>

<script>
const parentlist= document.getElementbyId('parentList')
parentlist.addEventListener('click',(e)=>{
  if (e.target.tagName==='li'){
  console.log('clicked on': e.target.textContent);
  }
})
</script>
```

In this example:

- The event listener is attached to the `<ul>` element with id `parentList`.
- When a click event happens on any `<li>` element inside the `<ul>`, the event bubbles up to the `<ul>` element.
- Inside the event handler (`click` event listener), we check if `event.target` (the element that triggered the event) is an `<li>` element (`event.target.tagName === 'LI'`).
- If it is, we log the text content of the clicked `<li>` element to the console.

Event delegation is particularly useful in scenarios where you have a list or a set of elements that can change dynamically, and you want to handle events efficiently without adding overhead to manage individual event handlers for each element.
