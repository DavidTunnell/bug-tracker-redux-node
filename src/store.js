import { createStore } from "redux";
import reducer from "./reducer";

//create store is a higher order function that creates an initial store
const store = createStore(reducer);

export default store;
