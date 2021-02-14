// Note: ref (soundcrowd - song_api_util.js)
// - doing one feature at a time, starting w create (and show too?)

export const fetchTrack = trackId => {
    return $.ajax({
        method: `GET`,
        url: `/api/tracks/${trackId}`,
    });
};


export const createTrack = track => {
    return $.ajax({
        url: `/api/tracks/`,
        method: "POST",
        data: { track }
    })
}
