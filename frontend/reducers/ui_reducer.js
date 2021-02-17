import { combineReducers } from 'redux';

import modal from './modal_reducer';
import currentTrack from './current_track_reducer';
import isPlaying from './playbar_reducer'

const uiReducer = combineReducers({
    modal,
    currentTrack,
    isPlaying
});

export default uiReducer
