//curring is a technique that has N arguments to one that has a single argument

function add(a, b) {
    return a + b;
}
//turned into a function that takes a single argument
function addCurrying(a) {
    return function (b) {
        return a + b;
    };
}
//so when we call this function it will return a function
const add1 = addCurrying(1);
//so the above function sets a to 1 and can be used to add one to things
add(5); //returns 6
//alternatively it can be chained
add(1)(5); //returns 6
//so with currying arguments are separated using parenthesis
//but the main thing is that takes a single parameter
//alternatively it can be done by chaining arrow functions
const addCurrying2 = (a) => (b) => a + b;
