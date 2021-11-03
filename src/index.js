import { compose, pipe } from "lodash/fp";

let input = "   JavaScript   ";
const trim = (str) => str.trim();
//now this function is curried, when wrap("div") is called it will return another function which is used by pipe
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();
//pipe gives order of operations basted on entry order
//pipe only takes functions
const transform = pipe(trim, toLowerCase, wrap("span"));
//now nesting function calls isn't necessary
const result = transform(input);

console.log(result);

const person = {
    name: "John",
    address: { country: "USA", city: "San Francisco" },
};
//dont do this: person.name = ""; - dont mutate object
//use deep copies with nested object to not mutate the original
const updated = {
    ...person,
    address: { ...person.address, city: "New York" },
    name: "Bob",
}; //spread operator makes a copy, the 2nd property overwrites what was copied over
console.log(person);
console.log(updated);
