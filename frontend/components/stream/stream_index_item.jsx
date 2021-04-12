import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

class StreamIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
    }

    // [WORKS] for my Play This Track button
    updateCurrentTrack(e) {
        e.preventDefault()

        if (this.props.currentTrack === this.props.track) {
            if (this.props.isPlaying) {
                document.getElementById('audio').pause();
                this.props.pauseTrack();
            } else {
                document.getElementById('audio').play();
                this.props.playTrack();
            }
        } else {
            this.props.receiveCurrentTrack(this.props.track.id)
            this.props.playTrack();
        }
    }

    render() {
        let currentTrack = this.props.track;

        let playPauseButton;
        if (this.props.currentTrack === this.props.track && this.props.isPlaying) {
            playPauseButton = (
                <div className="discover-idx-button"
                    onClick={this.updateCurrentTrack}>
                    <FontAwesomeIcon id="discover-idx-pause-icon" icon={faPause}/>
                </div>
            )
        } else {
            playPauseButton = (
                <div className="discover-idx-button"
                    onClick={this.updateCurrentTrack}>
                    <FontAwesomeIcon id="discover-idx-play-icon" icon={faPlay}/>
                </div>
            )
        }

        return (
            <div className="discoverIndexItem">
                <div className="coverArt-and-button">
                    <Link to={`/tracks/${currentTrack.id}`}>
                        <img src={currentTrack.imageURL} className="discover-coverArt" />
                    </Link>
                    {playPauseButton}
                </div>

                <Link to={`/tracks/${currentTrack.id}`}>
                    <div className="discover-track-title">{currentTrack.title}</div>
                </Link>

                <Link to={`/users/${currentTrack.creator_id}`}>
                    <div className="discover-track-creator-name">{currentTrack.creator}</div>
                </Link>
            </div>
        )
    }   
}

export default StreamIndexItem;
