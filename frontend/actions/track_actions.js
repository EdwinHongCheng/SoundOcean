import * as TrackApiUtil from '../util/track_api_util';

// Action Constants
export const RECEIVE_TRACK = "RECEIVE_TRACK";


// Action Creators
const receiveTrack = track => {
    return {
        type: RECEIVE_TRACK,
        track
    }
}


// Thunk Action Creators
export const fetchTrack = trackId => dispatch => {
    return TrackApiUtil.fetchTrack(trackId)
        .then(track => dispatch(receiveTrack(track)))
}


export const createTrack = track => dispatch => (
    TrackApiUtil.createTrack(track)
        .then(track => dispatch(receiveTrack(track)))
)

