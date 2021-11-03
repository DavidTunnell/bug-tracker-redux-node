import { compose, pipe } from "lodash/fp";
import { produce } from "immer";

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
console.log("---------------");
const numbers = [1, 2, 3];
//adding
const index = numbers.indexOf(2); //add to specific position
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added);
//subtracting
const removed = numbers.filter((n) => n !== 2);
console.log(removed);
//Updating
const updated2 = numbers.map((n) => (n === 2 ? 20 : n)); //replace 2 with 20
console.log(updated2);
console.log("---------------");
//immer
let book = { title: "Harry Potter" };
//with this function, although it appears murated it is immutable.
function publish(book) {
    //pass the object and then the mutations as another function
    return produce(book, (draftBook) => {
        draftBook.isPublished = true;
    });
}
const updatedBook = publish(book);
console.log(book);
console.log(updatedBook);
