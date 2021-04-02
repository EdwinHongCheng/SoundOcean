import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            muted: false,
        }

        this.toggleMute = this.toggleMute.bind(this);
    }

    toggleMute(e) {
        e.preventDefault();
        this.setState({ muted: !this.state.muted });
    }

    render() {
        let playbarAll;

        if (this.props.currentTrack) {

            let audio = (
                // NOTE: audio tag: add "controls" -> audio player shows up
                <audio id="audio" autoPlay loop key={this.props.currentTrack.id}>
                    <source src={this.props.currentTrack.audioURL} type="audio/mpeg" />
                    <source src={this.props.currentTrack.audioURL} type="audio/ogg" />
                    Your browser does not support the audio tag.
                </audio>
            )

            let playPauseButton;
            if (this.props.isPlaying) {
                playPauseButton = (
                    <div className="playpause-button-parent" title="Pause Current Track"
                        onClick={
                            () => {
                                document.getElementById('audio').pause();
                                this.props.pauseTrack();
                            } 
                        }
                    >
                        <FontAwesomeIcon id="playpause-button-icon" icon={faPause}/>
                    </div>
                )
            } else {
                playPauseButton = (
                    <div className="playpause-button-parent" title="Play Current Track"
                        onClick={
                            () => {
                                document.getElementById('audio').play();
                                this.props.playTrack();
                            } 
                        }
                    >
                        <FontAwesomeIcon id="playpause-button-icon" icon={faPlay}/>
                    </div>
                )
            }

            let volumeButton;
            if (this.state.muted) {
                volumeButton = (<div className="volume-button-parent"
                    onClick={
                        (e) => {
                            document.getElementById('audio').muted = false;
                            this.toggleMute(e);
                        } 
                    }
                > 
                    <FontAwesomeIcon id="volume-button-icon" icon={faVolumeMute}/>
                </div>)
            } else {
                volumeButton = (<div className="volume-button-parent"
                    onClick={
                        (e) => {
                            document.getElementById('audio').muted = true;
                            this.toggleMute(e);
                        } 
                    }
                >
                    <FontAwesomeIcon id="volume-button-icon" icon={faVolumeUp}/>
                </div>)
            }

            playbarAll = (
                <div className="playbar-parent-parent">
                    <div className="playbar-parent">
                        {/* NOTE: need a unique "key" to tell React it updated !!! */}
                        <div className="playbar">
                            <div className="playbar-left">
                                <div className="audio">
                                    {audio}
                                </div>
                                {playPauseButton}
                                {volumeButton}
                            </div>

                            <div className="playbar-right">
                                <div className="playbar-coverArt-parent" >
                                    <Link to={`/tracks/${this.props.currentTrack.id}`}>
                                        <img src={this.props.currentTrack.imageURL} className="playbar-coverArt" />
                                    </Link>
                                </div>

                                <div className="playbar-track-text-parent">
                                    <Link to={`/users/${this.props.currentTrack.creator_id}`}>
                                        <p className="playbar-text-track-creator">{this.props.currentTrack.creator}</p>
                                    </Link>

                                    <Link to={`/tracks/${this.props.currentTrack.id}`}>
                                        <p className="playbar-text-track-title">{this.props.currentTrack.title}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )
        }

        return (
            <div>
                {playbarAll}
            </div>
        )
    }
}

export default PlayBar;
