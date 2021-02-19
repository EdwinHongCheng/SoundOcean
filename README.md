# SoundOcean

Check out the Live Demo [HERE](https://soundocean.herokuapp.com/#/)!

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

- ### Track Upload

    Users can upload a new track by logging in and clicking the `Upload` button on the navigation bar at the top. To do so, enter a     title, choose an audio file to upload, select a cover art for the track (optional), and press the `Create Track` button.

    Afterwards, users can listen to their uploaded track, and track creators can make changes to their own tracks through the track     edit form on their tracks' individual show pages.

- ### Continuous Play Bar

    The continuous play bar pops up when a user plays a track from the track's show page, by pressing the `Play This Track` button.     Then, the play bar will display the title of the track being currently played, and the track will keep playing even if the user     navigates away from the track's show page and does other things (such as uploading or editing a track, writing comments, or         updating their user profile).
    
    The play bar also allows users to pause and resume track playback. Visiting a new track's show page and pressing their `Play         This Track` button replaces the current track with the selected track.
