# 0x01. ES6 Promises

![75862d67ca51a042003c](https://github.com/elyse502/alx-backend-javascript/assets/125453474/a818fa44-0940-4503-93b0-09e23bfa52a8)

# Resources🏗️
### Read or watch:
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise: An introduction](https://web.dev/articles/promises)
* [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

# Learning Objectives 📖
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

* Promises (how, why, and what)
* How to use the `then`, `resolve`, `catch` methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an `async` function

# Requirements 🏛️
* All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* Your code will be tested using Jest and the command npm run test
* Your code will be verified against lint using ESLint
* All of your functions must be exported

# Setup 💻
## Install NodeJS 12.11.x
(in your home directory):
```groovy
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```groovy
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
## Install Jest, Babel, and ESLint
in your project directory, install Jest, Babel and ESList by using the supplied `package.json` and run `npm install`.

## Configuration files
Add the files below to your project directory

**`package.json`**

File contents:
```groovy

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

```
**`babel.config.js`**

File contents:
```groovy

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```

**`utils.js`**

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

File contents:
```groovy

export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

```

**`.eslintrc.js`**

File contents:
```groovy

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```
**and…**

Don’t forget to run `$ npm install` when you have the `package.json`

# Response Data Format
`uploadPhoto` returns a response with the format
```groovy
{
  status: 200,
  body: 'photo-profile-1',
}
```
`createUser` returns a response with the format
```groovy
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

# Tasks 📃
## 0. Keep every promise you make and only make promises you can keep: [0-promise.js](0-promise.js)
Return a Promise using this prototype `function getResponseFromAPI()`
```groovy
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

## 1. Don't make a promise...if you know you can't keep it: [1-promise.js](1-promise.js)
Using the prototype below, return a `promise`. The parameter is a `boolean`.
```groovy
getFullResponseFromAPI(success)
```
When the argument is:
* `true`
  * resolve the promise by passing an object with 2 attributes:
    * `status`: `200`
    * `body`: `'Success'`
* `false`
  * reject the promise with an error object with the message `The fake API is not working currently`

Try testing it out for yourself
```groovy
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```

## 2. Catch me if you can!: [2-then.js](2-then.js)
Using the function prototype below
```groovy
function handleResponseFromAPI(promise)
```
Append three handlers to the function:
* When the Promise resolves, return an object with the following attributes
  * `status`: `200`
  * `body`: `success`
* When the Promise rejects, return an empty `Error` object
* For every resolution, log `Got a response from the API` to the console
```groovy
bob@dylan:~$ cat 2-main.js
import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
Got a response from the API
bob@dylan:~$
```

## 3. Handle multiple successful promises: [3-all.js](3-all.js)
In this file, `import uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.
```groovy
function handleProfileSignup()
```
In the event of an error, log `Signup system offline` to the console
```groovy
bob@dylan:~$ cat 3-main.js
import handleProfileSignup from "./3-all";

handleProfileSignup();

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
photo-profile-1 Guillaume Salva
bob@dylan:~$
```
## 4. Simple promise: [4-user-promise.js](4-user-promise.js)
Using the following prototype
```groovy
function signUpUser(firstName, lastName) {
}
```
That returns a resolved promise with this object:
```groovy
{
  firstName: value,
  lastName: value,
}
```
```groovy
bob@dylan:~$ cat 4-main.js
import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Promise { { firstName: 'Bob', lastName: 'Dylan' } }
bob@dylan:~$
```

## 5. Reject the promises: [5-photo-reject.js](5-photo-reject.js)
Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`
```groovy
export default function uploadPhoto(filename) {

}
```
```groovy
bob@dylan:~$ cat 5-main.js
import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Promise {
  <rejected> Error: guillaume.jpg cannot be processed
  ..
    ..
bob@dylan:~$
```


































