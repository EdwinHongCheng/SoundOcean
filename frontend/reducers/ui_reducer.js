import { combineReducers } from 'redux';

import modal from './modal_reducer';

import currentTrack from './current_track_reducer';

const uiReducer = combineReducers({
    modal,
    currentTrack
});

export default uiReducer
