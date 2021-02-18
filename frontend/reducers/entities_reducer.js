import { combineReducers } from "redux";

import usersReducer from './users_reducer';
import tracksReducer from './tracks_reducer';
// [TEST] want to make comments
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    tracks: tracksReducer
});

export default entitiesReducer
