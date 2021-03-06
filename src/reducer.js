import * as actions from "./actionTypes";
// []
let lastId = 0;

//set default state as empty array because redux will look at the reducer on startup to get the initial state
//This reducer is a PURE FUNCTION, and it has to be one. A particular input will always result in the same output.
//No randomness or external factors effect the function. Free of side-effects.
function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,
                },
            ];
        case actions.BUG_REMOVED:
            return state.filter((bug) => bug.id !== action.payload.id);
        case actions.BUG_RESOLVED:
            //remember that you must be careful not to effect the existing object
            return state.map((bug) =>
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
            );
        //this is wrong because it updated the existing object
        // return state.map((bug) => {
        //     if (bug.id === action.payload.id) {
        //         bug.resolved = true;
        //     } else {
        //         bug.resolved = false;
        //     }
        //     return bug;
        // });
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}

export default reducer;
