# [0x00. ES6 Basics](https://intranet.alxswe.com/projects/1224#task-11563)
# Concepts
_For this project, we expect you to look at these concepts:_

* [Modern Javascript](https://intranet.alxswe.com/concepts/541)
* [Software Linter](https://intranet.alxswe.com/concepts/542)

# 2. Software Linter
## Definition
A software linter also known as a “linter” is a tool used to identify and report potential issues (syntax errors, undeclared variables, etc.) in a program. It can even report convention or style inconsistencies. It does so by highlighting them so that the programmer is aware, so changes can be made. There are a wide variety of linters as well as lint rules for specific programming languages and even for software frameworks.

There are typically two ways to lint code:
* Actively
* Passively

## Active
Active checking is typically achieved by running a monitor tool that is constantly checking the file that your working on in order to spot inconsistencies and possible errors (e.g., having a specific linter along with some lint rules installed as a plug-in in your Code Editor).

## Passive
Passive checking is done by taking a piece of code, and manually running it through a tool to identify potential issues. For example, copying and pasting your code into a specific linter tool, or running the linter against a specific file using the command line. This tool can be installed locally or be available as a service (e.g., website on the Internet).

### Examples
Screenshot of an active linter `pycodestyle` (Python) integrated into [Visual Studio Code](https://code.visualstudio.com/)

<img width="1136" alt="b2e79e0ac88cd12591148993013bd49df7c72ad0" src="https://github.com/elyse502/alx-backend-javascript/assets/125453474/dad83dfc-5bc0-4f85-b193-0c25dde17184">

Screenshot of an active linter `ESLint` (JavaScript) integrated into [Visual Studio Code](https://code.visualstudio.com/)

<img width="1136" alt="e1df9b4b04c0f78ec98cb6ca581f513d15205f9e" src="https://github.com/elyse502/alx-backend-javascript/assets/125453474/5ba0c99e-5d36-4b0a-acd5-52d220f068bc">

Screenshot of a passive online linter service `JSON Formatter` to validate a JSON data structure

<img width="1552" alt="e7ed9c91bb9712ca009602636a4996f733ea4a1c" src="https://github.com/elyse502/alx-backend-javascript/assets/125453474/4ede1785-0cb3-4f16-8201-cb1a2f521c6e">

**Fun fact**: The term “lint” was derived from the name of the tiny bits of fiber and fluff shed by clothing.

### References
* [lint (software) - Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
* [ESLint - Pluggable JavaScript linter](https://eslint.org/)
* [pycodestyle - documentation](https://pycodestyle.pycqa.org/en/latest/)

![08806026ef621f900121](https://github.com/elyse502/alx-backend-javascript/assets/125453474/9addde3f-8461-4a69-8f35-deb69c78fe62)

# Resources🏗️
### Read or watch:
* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4)

# Learning Objectives 📖
At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

* What ES6 is
* New features introduced in ES6
* The difference between a constant and a variable
* Block-scoped variables
* Arrow functions and function parameters default to them
* Rest and spread function parameters
* String templating in ES6
* Object creation and their properties in ES6
* Iterators and for-of loops

# Requirements 🏛️
## General🧵
* All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
* Allowed editors: vi, vim, emacs, Visual Studio Code
* All your files should end with a new line
* A README.md file, at the root of the folder of the project, is mandatory
* Your code should use the js extension
* Your code will be tested using the Jest Testing Framework
* Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
* All of your functions must be exported

# Setup 🖥️
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
Finally…

Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.



































