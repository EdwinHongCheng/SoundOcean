import { PLAY_TRACK, PAUSE_TRACK } from '../actions/ui_actions'

const defaultState = false

const playbarReducer = (oldState = defaultState, action) => {

    Object.freeze(oldState);

    switch (action.type) {
        case PLAY_TRACK:
            return true;
        case PAUSE_TRACK:
            return false;
        default:
            return oldState;
    }
}

export default playbarReducer;
