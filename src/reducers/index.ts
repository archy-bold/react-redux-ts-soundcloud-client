import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { auth } from "./auth";
import { track } from "./track";

const rootReducer = combineReducers({
    auth,
    track,
	routing: routerReducer
});

export { rootReducer };
