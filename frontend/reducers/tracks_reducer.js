import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions'

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
    
        default:
            return oldState;
    }
}

export default tracksReducer;
