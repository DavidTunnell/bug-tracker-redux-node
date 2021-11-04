// []
let lastId = 0;

//set default state as empty array because redux will look at the reducer on startup to get the initial state
//This reducer is a PURE FUNCTION, and it has to be one. A particular input will always result in the same output.
//No randomness or external factors effect the function. Free of side-effects.
function reducer(state = [], action) {
    switch (action.type) {
        case "bugAdded":
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false,
                },
            ];
        case "bugRemoved":
            return state.filter((bug) => bug.id !== action.payload.id);
        default:
            //always return state at the end so the whole app doesn't break if there is an issue
            return state;
    }
}