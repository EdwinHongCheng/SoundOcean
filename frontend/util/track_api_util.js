export const fetchTracks = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/tracks`
    });
};

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
        data: track,
        contentType: false,
        processData: false
    })
}

export const updateTrack = track => {
    return $.ajax({
        url: `/api/tracks/${track.get['track[id]']}`,
        method: "PATCH",
        data: track,
        contentType: false,
        processData: false
    })
}

export const deleteTrack = trackId => {
    return $.ajax({
        url: `/api/tracks/${trackId}`,
        method: "DELETE"
    })
}
