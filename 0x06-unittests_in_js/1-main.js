#!/usr/bin/node


const calculateNumber = require("./1-calcul.js");

console.log(calculateNumber('SUM', 1.4, 4.5))
console.log("")
console.log(calculateNumber('SUBTRACT', 1.4, 4.5))
console.log("")
console.log(calculateNumber('DIVIDE', 1.4, 4.5))
console.log("")
console.log(calculateNumber('DIVIDE', 1.4, 0))

