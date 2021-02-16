import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

import { RECEIVE_TRACKS } from '../actions/track_actions'

const usersReducer = (state = {}, action) => {
    
    Object.freeze(state);

    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });


        case RECEIVE_TRACKS:
            let nextState = Object.assign({}, action.payload.users, state)
            return nextState;

        default:
            return state;
    }
};

export default usersReducer;
