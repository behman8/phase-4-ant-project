const usersReducer = (state={user: {}, loggedIn: false, errors: []}, action) => {
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
        default:
            return state
    }
}

export default usersReducer;