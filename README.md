# SoundOcean

[Check out the Live Demo!](https://soundocean.herokuapp.com/#/)

## Introduction

[SoundOcean](https://soundocean.herokuapp.com/#/) is a clone of [SoundCloud](https://soundcloud.com), an audio/music sharing website. Users can browse, listen, upload, and comment on tracks, as well as update their uploaded tracks' information.

## Technologies Used

- Ruby / Rails
- React.js
- AJAX
- JBuilder
- Redux
- JavaScript
- Webpack
- Node.js
- HTML5 / CSS3
- Amazon Web Service (S3)

## Main Features

### Discover Page

After logging in, users can see the Discover page, which displays all tracks currently in the database. The cover art of each track is a clickable link which leads to each track's show page. Hovering over the cover art shows that track's play/pause button, which can be clicked to play the track and display a playbar below to manipulate the current track.

The constant ```allTracks``` is an array which contains all the tracks from the database, mapped as individual unique React components. Slices of the global state are passed down to each mapped track component in order to dynamically update their status as a track is selected and played/paused.

```js
// discover.jsx

const allTracks = this.props.tracks.map((track, idx) => {            
    return (
        <DiscoverIndexItem
            key={track.id}
            track={track}
            idx={idx}

            receiveCurrentTrack={this.props.receiveCurrentTrack}
            playTrack={this.props.playTrack}
            pauseTrack={this.props.pauseTrack}
            currentTrack={this.props.currentTrack}
            isPlaying={this.props.isPlaying}
        />
    )
})
```

![discover](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/Discover/01.png)

### Track Upload

Users can upload a new track by logging in and clicking the `Upload` button on the navigation bar at the top. To do so, enter a title, choose an audio file to upload, select a cover art for the track (optional), and press the `Upload` button. After the track is fully uploaded, the upload page displays an `Upload complete.` message.

The function `handleSubmit` is used to upload the new track, and toggles on the `uploadingInProgress` local state. When `uploadingInProgress` is true, the Upload Track/Cancel buttons are temporarily replaced with a `Uploading...` message, signifying to the user that the track is currently being uploaded. Once that process is either complete, or if something went wrong and the track failed to upload (hence the use of `.fail()`), `uploadingInProgress` is toggled back to false, and the Upload Track/Cancel buttons are swapped back in.

Side-Note: Uploading tracks is currently disabled to preserve the limited free storage space offered by AWS.

```js
// create_track_form.jsx

handleSubmit(e) {
    e.preventDefault();
    this.setState( { uploadingInProgress: true })
    const formData = new FormData();
    formData.append('track[title]', this.state.title);
    formData.append('track[creator_id]', this.state.creator_id)

    if (this.state.cover_art) {
        formData.append('track[cover_art]', this.state.cover_art);;
    }

    if (this.state.audio_file) {
        formData.append('track[audio_file]', this.state.audio_file);;
    }

    this.props.createTrack(formData)
        .fail(() => this.setState({ uploadingInProgress: false }))
        .then(this.afterUpload)
}
```

Afterwards, users can listen to their uploaded track, and track creators can make changes to their own tracks through the track edit form on their tracks' individual show pages.

![upload](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/Upload/02.png)

### Continuous Play Bar

The continuous play bar pops up when a user plays a track from the track's show page, by pressing the play button. Then, the play bar will display the title of the track being currently played, and the track will keep playing even if the user navigates away from the track's show page and does other things (such as uploading or editing a track, writing comments, or updating their user profile).
    
The play bar also allows users to pause and resume track playback. Visiting a new track's show page and pressing their play button replaces the current track with the selected track. Also, users can adjust and mute the track's volume, toggle on/off looping for the track, and rewind back to the beginning.

The HTML `audio` element is used to render and play the selected track. Once the track has been successfully loaded from the cloud, the function `this.getTrackLength` updates the playbar's Track Length to display the current track's total track runtime. As the track finishes playing, the function `this.handleEnd` is used to either reset the track's progress back to the beginning (aka 0:00), or, if the user has chosen to loop the track (represented by a pink-highlighted Loop button right next to the Play/Pause button), the track replays.

```js
// playbar.jsx

let audio = (
    <audio id="audio" autoPlay key={this.props.currentTrack.id}
        onLoadedMetadata={this.getTrackLength}
        onPlaying={this.handleTrackPlay}
        onEnded={this.handleEnd}
        src={this.props.currentTrack.audioURL}
    />
)
```
    
![playbar](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/PlayBar/01.png)
    
### Comments
    
Users can comment on specific tracks on the track's show page. Users can also delete their own comments.

A simple `if` statement is used to check whether the submitted comment string is not empty, and if so, the function `     this.props.createComment(this.state)` is used to create a new comment for the current track. Afterwards, the local state's comment body is reset to an empty string, for the user to create additional comments.

```js
// create_comment_form.jsx

handleSubmit(e) {
    e.preventDefault();
    if (this.state.body.length > 0) {
        this.props.createComment(this.state)
            .then(() => this.props.fetchTrack(this.props.trackId))
            .then(() => {
                this.setState({
                    body: '',
                    track_id: this.props.trackId
                })
            })
    }
}
```

![playbar](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/Comments/01.png)
   
### User Show Page

Users have their own unique show pages, which displays all the tracks they have uploaded.

The function `creationDate` is used to convert the user's join date string (aka `this.props.showUser.created_at`) into a more readable format. For example, by using this function, `created_at: "2021-02-15T09:32:03.950Z"` will be displayed as `2/15/2021`. The same function is used to display the creation dates of every uploaded track.

```js
// show_user.jsx

let creationDate = (joinDate) => {
    let year = joinDate.slice(0, 4);
    let month = joinDate.slice(5, 7);
    if (month[0] === "0") month = month.slice(1);
    let day = joinDate.slice(8, 10);
    if (day[0] === "0") day = day.slice(1);
    let newString = month.concat("/").concat(day).concat("/").concat(year);

    return newString;
}

let dateJoined = creationDate(this.props.showUser.created_at);
```

![userShowPage3](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/UserShowPage/03.png)

Also, users (aside from the Demo user) can upload their own custom profile picture.

To display the current profile picture in a similar way as SoundCloud, two profile images are placed on top of one another, and one of these images (`className="edit-user-prof-pic"`) has its `border-radius` set to 50% to created the circular look, while the other (`className="edit-user-prof-pic-opaque"`) has its `opacity` set to 0.25.

```js
// edit_user_form.jsx

let imagePreview = null;
if (this.state.profilePicPreviewURL) {
    imagePreview = (
        <div className="edit-user-prof-pic-parent">
            <img className="edit-user-prof-pic" 
                src={this.state.profilePicPreviewURL} 
            />
            <img className="edit-user-prof-pic-opaque" 
                src={this.state.profilePicPreviewURL} 
            />
        </div>
    )
} else {
    imagePreview = (
        <div className="edit-user-prof-pic-parent">
            <img className="edit-user-prof-pic"
                src={this.props.showPageUser.profilePicURL}
            />
            <img className="edit-user-prof-pic-opaque"
            src={this.props.showPageUser.profilePicURL} />
        </div>
    )
}
```

![userShowPage2](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/UserShowPage/02.png)
    
## Planned Features

Here is a list of planned features to be implemented later:

- Likes: Users can like tracks, and their liked tracks will all be displayed on their Show page
- Search Bar: Allows users to search for tracks and users in the database
