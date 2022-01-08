const antsReducer = (state={ants: {}}, action) => {
    switch (action.type) {
        case "ADDING_ANTS":
            return {
                ...state,
                ants: action.ants
            }
        case "ERRORS":
            return {
                ...state,
                errors: action.errors
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                errors: ""
            }
        default:
            return state;
    }
};

export default antsReducer;