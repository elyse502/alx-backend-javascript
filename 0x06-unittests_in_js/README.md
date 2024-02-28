# 0x06. Unittests in JS

![90f79a666e174e6c4ffc](https://github.com/elyse502/alx-backend-javascript/assets/125453474/b345cf61-c189-4dd1-b370-806c7105ea47)

# Resources🏗️
<b>Read or watch:</b>
* [Mocha documentation](https://mochajs.org/)
* [Chai](https://www.chaijs.com/api/)
* [Sinon](https://sinonjs.org/)
* [Express](https://expressjs.com/en/guide/routing.html)
* [Request](https://www.npmjs.com/package/request)
* [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

# Learning Objectives 📖
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

* How to use Mocha to write a test suite
* How to use different assertion libraries (Node or Chai)
* How to present long test suites
* When and how to use spies
* When and how to use stubs
* What are hooks and when to use them
* Unit testing with Async functions
* How to write integration tests with a small node server

# Requirements 🏛️
* All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
* Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

# Tasks 📃
## 0. Basic test with Mocha and Node assertion library: [package.json](package.json), [0-calcul.js](0-calcul.js), [0-calcul.test.js](0-calcul.test.js)
**Install Mocha using npm:**

* Set up a scripts in your `package.json` to quickly run Mocha using `npm test`
* You have to use `assert`

**Create a new file named `0-calcul.js`:**

* Create a function named `calculateNumber`. It should accepts two arguments (number) `a` and `b`
* The function should round `a` and `b` and return the sum of it

**Test cases**

* Create a file `0-calcul.test.js` that contains test cases of this function
* You can assume `a` and `b` are always number
* Tests should be around the “rounded” part

**Tips:**

* For the sake of the example, this test suite is slightly extreme and probably not needed
* However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

**Requirements:**

* You have to use `assert`
* You should be able to run the test suite using `npm test 0-calcul.test.js`
* Every test should pass without any warning

**Expected output**
```groovy
> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 
```

**Run test**
```groovy
bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$
```






























































