# promisify-if-no-callback


The `promisify-if-no-callback` package is a utility that converts Node.js-style callback functions into Promise-based functions when no callback is provided, allowing you to work with asynchronous operations using either traditional callbacks or modern Promise-based syntax.

## Installation

You can install the `promisify-if-no-callback` package via NPM:

```bash
npm install promisify-if-no-callback
```

## Usage

To use the `promisify-if-no-callback` function, require it in your Node.js application:

```javascript
const promisifyIfNoCallback = require('promisify-if-no-callback');
```

### Syntax

```javascript
const promisifiedFunction = promisifyIfNoCallback(originalFunction);
```

### Parameters

- `originalFunction` (Function): The function you want to promisify. It should follow the Node.js-style callback pattern where the last argument is a callback function (`function (err, result) {}`).

### Return Value

The `promisify-if-no-callback` function returns a new function that can be used with Promises. When you call this new function, it either behaves like the original function with a callback or returns a Promise, depending on how you invoke it.

If you pass a callback as the last argument, the function will behave as the original function, allowing you to use callbacks for handling results.

If you don't pass a callback, the `promisify-if-no-callback` function returns a Promise that resolves with the result when the asynchronous operation completes successfully or rejects with an error if the operation encounters an error.

### Examples

#### 1. Promisify an Asynchronous Function with a Callback

```javascript
const fs = require('fs');
const promisifyIfNoCallback = require('promisify-if-no-callback');

// Promisify the fs.readFile function
const readFilePromise = promisifyIfNoCallback(fs.readFile);

// Use the Promise-based function
readFilePromise('file.txt', 'utf8')
  .then(data => {
    console.log('File contents:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
```

#### 2. Use the Original Callback-Style Invocation

```javascript
// Assume you have an asynchronous function with a callback
function asyncFunctionWithCallback(param1, param2, callback) {
  // Some asynchronous operation
  setTimeout(() => {
    const result = param1 + param2;
    callback(null, result); // Pass null as the first argument if there's no error
  }, 1000);
}

// Use promisifyIfNoCallback to convert the function to a Promise-based function
const asyncFunctionPromise = promisifyIfNoCallback(asyncFunctionWithCallback);

// Using the original callback-style invocation
asyncFunctionWithCallback(2, 3, (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Result (callback):', result);
  }
});
```

## License

This project is licensed under the ISC License.

## Issues

If you encounter any problems or have questions about the library, please feel free to open an issue on the [GitHub repository](https://github.com/dhakerShiv/promisify-if-no-callback/issues).
