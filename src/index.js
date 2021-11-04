import store from "./store";
import * as actions from "./actionTypes";

//the subscribe function tags a function that will be called every time the state of the store gets changed
//it returns a function for unsubscribing from the store, these should be used to prevent memory leaks
//so whenever the current component isn't visible, you should unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug #1" } });
store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug #2" } });
store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug #3" } });
store.dispatch({ type: actions.BUG_REMOVED, payload: { id: 2 } });
unsubscribe();
store.dispatch({ type: actions.BUG_ADDED, payload: { description: "Bug #4" } }); //not notified

// console.log(store.getState());
