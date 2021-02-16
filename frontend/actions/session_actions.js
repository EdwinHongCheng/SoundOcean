import * as APIUtil from '../util/session_api_util'

// Action Constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

// ---------------------------------------------------------------------------->
// [TEST] current track (based on WaveSky)
// NOTE: will organize action constant + action creator later (if it works)
export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK"

export const receiveCurrentTrack = track => ({
    type: RECEIVE_CURRENT_TRACK,
    track
})
// ---------------------------------------------------------------------------->



// Action Creators
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});


export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


// Thunk Action Creators
export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    APIUtil.logout()
    .then(user => (dispatch(logoutCurrentUser())
    ))
);
