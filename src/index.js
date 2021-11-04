import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

//the subscribe function tags a function that will be called every time the state of the store gets changed
//it returns a function for unsubscribing from the store, these should be used to prevent memory leaks
//so whenever the current component isn't visible, you should unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug #1"));
store.dispatch(bugAdded("Bug #2"));
store.dispatch(bugAdded("Bug #3"));
store.dispatch(bugRemoved(2));
console.log("----------");
store.dispatch(bugResolved(3));
unsubscribe();
store.dispatch(bugAdded("Bug #4")); //not notified

// console.log(store.getState());
