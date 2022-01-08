const antsReducer = (state={ants: []}, action) => {
    switch (action.type) {
        case "ADDING_ANTS":
            return {
                ...state,
                ants: action.ants
            }
        default:
            return state;
    }
};

export default antsReducer;