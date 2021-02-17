import {
    RECEIVE_CURRENT_TRACK
} from '../actions/ui_actions';

const defaultState = {
    id: null
}

const currentTrackReducer = (oldState = defaultState, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        // [TEST] gets current track (want to use for Play Bar below)
        case RECEIVE_CURRENT_TRACK:
            return { id: action.currentTrackId }
    
        default:
            return oldState;
    }
}

export default currentTrackReducer;
