import { compose, pipe } from "lodash/fp";

let numbers = [1, 2, 3];
//example of higher order function
numbers.map((numbers) => number * 2);

let input = "   JavaScript   ";
const trim = (str) => str.trim();
const wrapInDiv = (str) => "<div>" + str + "</div>";
const toLowerCase = (str) => str.toLowerCase();
//pipe gives order of operations basted on entry order
const transform = pipe(trim, toLowerCase, trim);
//now nesting function calls isn't necessary
const result = transform(input);

console.log(result);

module.exports = result;
