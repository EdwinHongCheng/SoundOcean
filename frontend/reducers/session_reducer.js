import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER ,
    RECEIVE_CURRENT_TRACK
} from '../actions/session_actions';

const _nullUser = {
    id: null,
    // [TEST] for continuous Play Bar
    currentTrack: null
};

const sessionReducer = (oldState = _nullUser, action) => {
    Object.freeze(oldState);

    switch (action.type) {

        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id, currentTrack: null }

        case LOGOUT_CURRENT_USER:
            return _nullUser

        // [TEST] gets current track (want to use for Play Bar below)
        case RECEIVE_CURRENT_TRACK:
            const currentTrack = action.track
            return Object.assign( {}, oldState, { currentTrack } )

        default:
            return oldState
    }
};

export default sessionReducer;
