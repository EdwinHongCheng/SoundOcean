import React from 'react';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

class ShowUserTrack extends React.Component {
    constructor(props) {
        super(props)

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
    }


    // [TEST] for my Play This Track button
    updateCurrentTrack(e) {
        e.preventDefault();
        this.props.receiveCurrentTrack(this.props.track.id);
        this.props.playTrack();
    }

    render() {

        let track = this.props.track;
        if (!track) {
            return null;
        } else {

            // Play/Pause Button -------------------------------------->
            let playPauseButton;
            if (this.props.track !== this.props.currentTrack) {
                playPauseButton = (
                    <div className="showUser-track-button"
                        onClick={this.updateCurrentTrack}>
                        <FontAwesomeIcon id="showUser-track-play-icon" icon={faPlay}/>
                    </div>
                )
            } else if (this.props.isPlaying) {
                playPauseButton = (
                    <div className="showUser-track-button"
                        onClick={
                        () => {
                            document.getElementById('audio').pause();
                            this.props.pauseTrack();
                        }}>
                        <FontAwesomeIcon id="showUser-track-pause-icon" icon={faPause}/>
                    </div>
                )
            } else {
                playPauseButton = (
                    <div className="showUser-track-button"
                        onClick={
                        () => {
                            document.getElementById('audio').play();
                            this.props.playTrack();
                        }}>
                        <FontAwesomeIcon id="showUser-track-play-icon" icon={faPlay}/>
                    </div>
                )
            }
            // -------------------------->

            // enter the track's created_at string -> converts to a date string
            let creationDate = (trackDate) => {
                let year = trackDate.slice(0, 4);
                let month = trackDate.slice(5, 7);
                if (month[0] === "0") month = month.slice(1);
                let day = trackDate.slice(8, 10);
                if (day[0] === "0") day = day.slice(1);
                let newString = month.concat("/").concat(day).concat("/").concat(year);

                return newString;
            }

            let dateCreated = creationDate(track.created_at);


            // [WIP] Comment Box OR Edit/Delete Buttons
            let bottomSection;
            if (this.props.currentUser.id === track.creator_id || 2 ) {
                // Current User owns Track OR is Admin everfall -> show Edit/Delete Buttons

            } else {

            }


            // Current User doesn't own Track -> show Comment Box
            bottomSection = (
                <div className="bottomSection-comment-box-all">
                    <img className="comment-box-prof-pic"
                        src={this.props.currentUser.profilePicURL}
                    />
                    <div></div>
                </div>
            )
            


            return (
                <div className="showUser-indiv-track-all">
    
                    <div className="showUser-indiv-track-left">
                        <Link to={`/tracks/${track.id}`}>
                            <img className="showUser-indiv-track-art" src={track.imageURL}/>
                        </Link>
                    </div>
    
    
                    <div className="showUser-indiv-track-right">
    
                        {/* [NOTE] Play/Pause Button, Title + Creation Date, etc. */}
                        <div className="indiv-track-right-top-section">
                            {playPauseButton}

                            <div className="indiv-track-right-top-rightside">
                                <div className="track-righttop-rightside-top">
                                    <p className="track-rightside-top-creator-name">{track.creator}</p>
                                    <p className="track-rightside-top-date">{dateCreated}</p>
                                </div>

                                <Link to={`/tracks/${track.id}`}>
                                    <p className="track-rightside-track-title">
                                        {track.title}
                                    </p>
                                </Link>
                            </div>
    
                        </div>
    
                        {/* [WIP] Bottom Section: Comment Bar / Edit + Delete Buttons */}
                        <div className="indiv-track-right-bottom-section">
                            {bottomSection}
                        </div>
    
                    </div>    
                </div>
            )
        }
    }

}

export default ShowUserTrack;
