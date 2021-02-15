import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// Test - set preloaded state to all current existing tracks
// -> this way, on the 1st try, might be able to see 

const configureStore = (preloadedState = {}) =>
    createStore(
        rootReducer, 
        preloadedState, 
        applyMiddleware(thunk, logger)
    );

export default configureStore;
