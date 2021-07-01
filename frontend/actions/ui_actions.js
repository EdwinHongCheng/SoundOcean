export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK"

export const receiveCurrentTrack = currentTrackId => ({
    type: RECEIVE_CURRENT_TRACK,
    currentTrackId
})

// ---------------------------------------------------------------------------->

// [Code Below] Makes "isPlaying" slice of state

export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";

export const playTrack = () => {
    return {
        type: PLAY_TRACK
    };
};

export const pauseTrack = () => {
    return {
        type: PAUSE_TRACK
    };
};
