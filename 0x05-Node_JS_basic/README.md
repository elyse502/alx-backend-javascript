# 0x05. NodeJS Basics

![82692897e15d9f03256f](https://github.com/elyse502/alx-backend-javascript/assets/125453474/a311ab23-d921-48c4-8d41-35a0b2729854)

# Resources🏗️
### Read or watch:
* [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
* [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
* [Child process](https://nodejs.org/api/child_process.html)
* [Express getting started](https://expressjs.com/en/starter/installing.html)
* [Mocha documentation](https://mochajs.org/)
* [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

# Learning Objectives 📖
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

* run javascript using NodeJS
* use NodeJS modules
* use specific Node JS module to read files
* use `process` to access command line arguments and the environment
* create a small HTTP server using Node JS
* create a small HTTP server using Express JS
* create advanced routes with Express JS
* use ES6 with Node JS with Babel-node
* use Nodemon to develop faster

# Requirements 🏛️
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* Your code will be tested using `Jest` and the command `npm run test`
* Your code will be verified against lint using ESLint
* Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
* All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

# Provided files 🗃️
**`database.csv`**
```groovy
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

**`package.json`**
<details>
  <summary>Click to show/hide file contents</summary>
  
```groovy

{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}

```
</details>

**`babel.config.js`**
<details>
  <summary>Click to show/hide file contents</summary>
  
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
</details>

**`.eslintrc.js`**
<details>
  <summary>Click to show/hide file contents</summary>
  
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
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
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
</details>

**and…**

Don’t forget to run `$ npm install` when you have the `package.json`

# Tasks 📃
## 0. Executing basic javascript with Node JS: [0-console.js](0-console.js)
In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.
```groovy
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

## 1. Using Process stdin: [1-stdin.js](1-stdin.js)
Create a program named `1-stdin.js` that will be executed through command line:

* It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
* The user should be able to input their name on a new line
* The program should display `Your name is: INPUT`
* When the user ends the program, it should display `This important software is now closing` (followed by a new line)

### Requirements:
* Your code will be tested through a child process, make sure you have everything you need for that
```groovy
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$
```

## 2. Reading a file synchronously with Node JS: [2-read_file.js](2-read_file.js)
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `2-read_file.js`

* Create a function named `countStudents`. It should accept a path in argument
* The script should attempt to read the database file synchronously
* If the database is not available, it should throw an error with the text `Cannot load the database`
* If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
* It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
* CSV file can contain empty lines (at the end) - and they are not a valid student!
```groovy
bob@dylan:~$ cat 2-main_0.js
const countStudents = require('./2-read_file');

countStudents("nope.csv");

bob@dylan:~$ node 2-main_0.js
2-read_file.js:9
    throw new Error('Cannot load the database');
    ^

Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 2-main_1.js
const countStudents = require('./2-read_file');

countStudents("database.csv");

bob@dylan:~$ node 2-main_1.js
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
```

## 3. Reading a file asynchronously with Node JS: [3-read_file_async.js](3-read_file_async.js)
Using the database `database.csv` (provided in project description), create a function `countStudents` in the file `3-read_file_async.js`

* Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
* The script should attempt to read the database file asynchronously
* The function should return a Promise
* If the database is not available, it should throw an error with the text `Cannot load the database`
* If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
* It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
* CSV file can contain empty lines (at the end) - and they are not a valid student!
```groovy
bob@dylan:~$ cat 3-main_0.js
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });

bob@dylan:~$ node 3-main_0.js
Error: Cannot load the database
...
bob@dylan:~$
bob@dylan:~$ cat 3-main_1.js
const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

bob@dylan:~$ node 3-main_1.js
After!
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
Done!
bob@dylan:~$
```
### Tips:
* Using asynchronous callbacks is the preferred way to write code in Node to avoid blocking threads

## 4. Create a small HTTP server using Node's HTTP module: [4-http.js](4-http.js)
In a file named `4-http.js`, create a small HTTP server using the `http` module:

* It should be assigned to the variable `app` and this one must be exported
* HTTP server should listen on port 1245
* Displays `Hello Holberton School!` in the page body for any endpoint as plain text

**In terminal 1:**
```groovy
bob@dylan:~$ node 4-http.js
...
```

**In terminal 2:**
```groovy
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
Hello Holberton School!
bob@dylan:~$ 
```

## 5. Create a more complex HTTP server using Node's HTTP module: [5-http.js](5-http.js)
In a file named `5-http.js`, create a small HTTP server using the `http` module:

* It should be assigned to the variable app and this one must be exported
* HTTP server should listen on port 1245
* It should return plain text
* When the URL path is `/`, it should display `Hello Holberton School!` in the page body
* When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file `3-read_file_async.js` (with and without the database) - the name of the database must be passed as argument of the file
* CSV file can contain empty lines (at the end) - and they are not a valid student!

**Terminal 1:**
```groovy
bob@dylan:~$ node 5-http.js database.csv
...
```

**In terminal 2:**
```groovy
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$
```

## 6. Create a small HTTP server using Express: [6-http_express.js](6-http_express.js)
Install Express and in a file named `6-http_express.js`, create a small HTTP server using Express module:

* It should be assigned to the variable `app` and this one must be exported
* HTTP server should listen on port 1245
* Displays `Hello Holberton School!` in the page body for the endpoint `/`

**In terminal 1:**
```groovy
bob@dylan:~$ node 6-http_express.js
...
```

**In terminal 2:**
```groovy
bob@dylan:~$ curl localhost:1245 && echo ""
Hello Holberton School!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html> 
bob@dylan:~$
```


































