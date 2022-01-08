const usersReducer = (state={user: {}, loggedIn: false, errors: ""}, action) => {
    switch (action.type) {
        case "LOGGING_IN":
            return {
                ...state,
                user: action.user,
                loggedIn: true
            }
        case "LOGOUT":
            return {
                ...state,
                user: {},
                loggedIn: false
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
            return state
    }
}

export default usersReducer;