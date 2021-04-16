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

![discover](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/Discover/01.png)

### Track Upload

Users can upload a new track by logging in and clicking the `Upload` button on the navigation bar at the top. To do so, enter a title, choose an audio file to upload, select a cover art for the track (optional), and press the `Upload` button. After the track is fully uploaded, the upload page displays an `UPLOAD SUCCESS` message.

Afterwards, users can listen to their uploaded track, and track creators can make changes to their own tracks through the track edit form on their tracks' individual show pages.

![upload](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/Upload/02.png)

### Continuous Play Bar

The continuous play bar pops up when a user plays a track from the track's show page, by pressing the play button. Then, the play bar will display the title of the track being currently played, and the track will keep playing even if the user navigates away from the track's show page and does other things (such as uploading or editing a track, writing comments, or updating their user profile).
    
The play bar also allows users to pause and resume track playback. Visiting a new track's show page and pressing their play button replaces the current track with the selected track. Also, users can adjust and mute the track's volume, toggle on/off looping for the track, and rewind back to the beginning.
    
![playbar](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/PlayBar/01.png)
    
### Comments
    
Users can comment on specific tracks on the track's show page. Users can also delete their own comments.

![playbar](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/Comments/01.png)
   
### User Show Page

Users have their own unique show pages, which displays all the tracks they have uploaded.   

![userShowPage3](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/UserShowPage/03.png)

Also, users (aside from the Demo user) can upload their own custom profile picture.    

![userShowPage2](https://github.com/EdwinHongCheng/SoundOcean/blob/main/app/assets/images/readme_screenshots/UserShowPage/02.png)
    
## Planned Features

Here is a list of planned features to be implemented later:

- Likes: Users can like tracks, and their liked tracks will all be displayed on their Show page
- Search Bar: Allows users to search for tracks and users in the database
