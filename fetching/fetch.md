# fetching in js

In javascript, fetching refers to the process of making asynchronous http request to fetch data from a server.This is done using the `fetch()` method, which returns a promise that resolves to a response object.The response object contains information about the response, such as the status code, headers, and body.

`fetch()` function is built into modern web browsers and is also aviable in node.js .

## basic use of fetch()

```javascript
fetch('https://api.example.com/data')
.then(response  => {
// Check if response is successful (status code 200-299)
if (!response.ok) {
throw  new  Error('Network response was not ok');
}

// Parse the JSON response

return  response.json();
})
.then(data  => {
// Work with the JSON data
console.log(data);
})
.catch(error  => {

console.error('There was a
 problem with fetch operation:', error);
});
```

**Explanation**

1. **Making a Request:**

   - fetch('https://api.example.com/data') initiates a GET request to the specified URL.

2. **Handling the Response:**

- .then(response => { ... }): Once the request completes successfully, a Response object is passed to the first .then() handler.

3. **Checking Response Status:**

- Inside the first .then() handler, response.ok checks if the response status is within the successful range (200-299). If not, an error is thrown.

4. **Parsing the Response:**

- response.json() parses the JSON content of the response asynchronously. Other methods like .text(), .blob(), and .formData() can be used depending on the content type.

5. **Processing Data:**

- .then(data => { ... }): Handles the parsed data once it's available. Here, data represents the JavaScript object parsed from the JSON response.

6. **Error Handling:**

- .catch(error => { ... }): Catches any errors that occur during the fetch operation, including network errors or JSON parsing errors.

### using async await

```javascript
async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data)

    } catch (error) {
        console.log(error)
    }
}
getUser()
```
*Data from fetch method is in json format , which will be tranfrom into the object for the further actions*
