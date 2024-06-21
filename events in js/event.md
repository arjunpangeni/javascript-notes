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
