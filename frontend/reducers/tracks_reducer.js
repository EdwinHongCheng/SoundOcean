import { RECEIVE_TRACK, RECEIVE_TRACKS, REMOVE_TRACK } from '../actions/track_actions'

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TRACK:
            nextState[action.track.track.id] = action.track.track
            return nextState;

        // NOTE: not sure why state shape turns out good (but it does lol)
        case RECEIVE_TRACKS:
            return action.tracks

        case REMOVE_TRACK:
            delete nextState[action.trackId]
            return nextState;
    
        default:
            return oldState;
    }
}

export default tracksReducer;
