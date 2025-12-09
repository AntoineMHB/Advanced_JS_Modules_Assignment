const addition = require("./add");
const sum = addition.add(3, 5);

const difference = require("./substract");
const diff = difference.substract(7, 4);

const multiplication = require("./multiply");
const product = multiplication.multiply(10, 4);

const division = require("./divide");
const quotient = division.divide(48, 5);

const powering = require("./power");
const pow = powering.power(10, 5);

const results = { sum, diff, product, quotient, pow };
for (let result in results) {
  console.log(`${results[result]}`);
}
