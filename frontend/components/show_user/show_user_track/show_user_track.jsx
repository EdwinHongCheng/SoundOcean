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


            // [WIP Play/Pause Button -------------------------------------->
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
                                    <p>{track.creator}</p>
                                    <p>{track.created_at}</p>
                                </div>

                                <Link to={`/tracks/${track.id}`}>
                                    <p>{track.title}</p>
                                </Link>
                            </div>
    
                        </div>
    
                        {/* [NOTE] Comment Bar / Edit + Delete Buttons */}
                        <div className="indiv-track-right-bottom-section">
    
                        </div>
    
                    </div>    
                </div>
            )
        }
    }

}

export default ShowUserTrack;
