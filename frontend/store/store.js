import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// [After Finalizing] remove "logger" from applyMiddleware

const configureStore = (preloadedState = {}) =>
    createStore(
        rootReducer, 
        preloadedState, 
        applyMiddleware(thunk, logger)
    );

export default configureStore;
