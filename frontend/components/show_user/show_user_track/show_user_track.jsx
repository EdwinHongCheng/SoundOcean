import React from 'react';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

class ShowUserTrack extends React.Component {
    constructor(props) {
        super(props)

        // Comment box
        this.state = {
            body: '',
            track_id: this.props.track.id
        }

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this);
        // Submit Comment
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Create + Submit Commen
    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body.length > 0) {
            this.props.createComment(this.state)
                // Note: .then (fetch track again to update comment's new author name)
                .then(() => this.props.fetchTrack(this.props.track.id))
                .then(() => {
                    this.setState({
                        body: ''
                    })
                })
        }
    }

    // For "Play This Track" button
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


            // Comment Submit
            let submitComment = this.handleSubmit;
            // Event Listener: hit "Enter" while Comment box has text -> creates New Comment
            document.onkeydown = function(e) {
                console.log(e)
                if (e.keyCode === 13) {
                    submitComment(e);
                }
            };


            let bottomSection = (
                <div className="bottomSection-comment-box-all">
                    <img className="comment-box-prof-pic"
                        src={this.props.currentUser.profilePicURL}
                    />
                    
                    <input type="text" className="show-user-track-create-comment-input"
                        placeholder="Write a comment"
                        value={this.state.body}
                        onChange={this.update('body')} 
                    />
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
    
                        {/* Play/Pause Button, Title + Creation Date, etc. */}
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
    
                        {/* Bottom Section: Comment Bar / Edit + Delete Buttons */}
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
