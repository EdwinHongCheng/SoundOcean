import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_TRACKS } from '../actions/track_actions'

// [TEST] for "fetchUser" thunk action creator in user_actions.js
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });

        case RECEIVE_TRACKS:
            let nextState = Object.assign({}, action.payload.users, oldState)
            return nextState;

        // [TEST] for "fetchUser" thunk action creator in user_actions.js
        case RECEIVE_USER:
            let newState = Object.assign({}, oldState)
            newState[action.user.id] = action.user;
            return newState;

        default:
            return oldState;
    }
};

export default usersReducer;
