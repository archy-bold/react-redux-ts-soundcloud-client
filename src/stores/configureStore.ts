import { createStore, applyMiddleware } from "redux";
import { browserHistory } from "react-router";
import { routerMiddleware } from "react-router-redux";
import * as createLogger from "redux-logger";
import * as reduxThunk from "redux-thunk";
import { rootReducer } from "../reducers/index";

const logger = createLogger();
const router = routerMiddleware(browserHistory);
const thunk = reduxThunk.default;

const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);

export function configureStore(initialState: any) {
    return createStoreWithMiddleware(rootReducer, initialState);
}
