import {combineReducers} from "redux";
import antsReducer from "./antsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    usersReducer,
    antsReducer
});

export default rootReducer;