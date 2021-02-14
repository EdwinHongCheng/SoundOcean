import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions'

const tracksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TRACK:
            nextState[action.track.id] = action.track       
            return nextState;

        case RECEIVE_TRACKS:
            return action.tracks
    
        default:
            return oldState;
    }
}

export default tracksReducer;
