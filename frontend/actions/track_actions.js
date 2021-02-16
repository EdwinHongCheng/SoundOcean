import * as TrackApiUtil from '../util/track_api_util';

// Action Constants
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

// Testing to Render Upload/Edit Errors
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


// Action Creators
const receiveTracks = payload => {
    return {
        type: RECEIVE_TRACKS,
        payload
    }
}

const receiveTrack = track => {
    return {
        type: RECEIVE_TRACK,
        track
    }
}

const removeTrack = trackId => {
    return {
        type: REMOVE_TRACK,
        trackId
    }
}



// Testing - Action Creators Rendering Upload/Edit Errors (from Michelle)
export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}




// Thunk Action Creators
export const fetchTracks = () => dispatch => {
    return TrackApiUtil.fetchTracks()
        .then(payload => dispatch(receiveTracks(payload)))
}

export const fetchTrack = trackId => dispatch => {
    return TrackApiUtil.fetchTrack(trackId)
        .then(track => dispatch(receiveTrack(track)))
}

// Creates Track + Render Errors
export const createTrack = track => dispatch => (
    TrackApiUtil.createTrack(track)
        .then(track => { dispatch(receiveTrack(track)); dispatch(clearErrors()) },
            err => dispatch(receiveErrors(err.responseJSON)))
)

// Edits Track + Render Errors
export const updateTrack = track => dispatch => {
    return TrackApiUtil.updateTrack(track)
        .then(track => { dispatch(receiveTrack(track)); dispatch(clearErrors()) },
            err => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteTrack = trackId => dispatch => {
    return TrackApiUtil.deleteTrack(trackId)
        .then(() => dispatch(removeTrack(trackId)))
}

