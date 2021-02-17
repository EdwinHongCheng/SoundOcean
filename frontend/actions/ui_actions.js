export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK"

export const receiveCurrentTrack = currentTrackId => ({
    type: RECEIVE_CURRENT_TRACK,
    currentTrackId
})
