import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            muted: false,
            // [TEST]
            trackPlayed: 0,
            trackLength: 0,
            currentTrackId: null,
        }

        this.toggleMute = this.toggleMute.bind(this);
        // [TEST]
        this.getTrackLength = this.getTrackLength.bind(this);
        this.handleTrackPlay = this.handleTrackPlay.bind(this);
        this.handleScrubbing = this.handleScrubbing.bind(this);
    }

    componentDidUpdate(prevProps){

    }

    toggleMute(e) {
        e.preventDefault();
        this.setState({ muted: !this.state.muted });
    }

    handleTrackPlay(){
        const progressBar = document.getElementById('audio');
        const scrubber = document.getElementById('scrubber');

        if (this.state.currentTrackId === null) {
            this.playTrack = setInterval(()=>{
                scrubber.value = progressBar.currentTime;
                this.setState({ trackPlayed: progressBar.currentTime })
            }, 50);

            this.setState({currentTrackId: this.props.currentTrack});

        } else if (this.state.currentTrackId !== this.props.currentTrack) {
            clearInterval(this.playTrack);
            this.setState({currentTrackId: this.props.currentTrack});

            this.setState({ trackLength: progressBar.duration })

            progressBar.currentTime = 0;
            scrubber.value = progressBar.currentTime;

            this.playTrack = setInterval(()=>{
                scrubber.value = progressBar.currentTime;
                this.setState({ trackPlayed: progressBar.currentTime })
            }, 50);
        }
    }

    getTrackLength() {
        const progressBar = document.getElementById('audio');
        this.setState({ trackLength: progressBar.duration })
    }

    handleScrubbing(e){
        e.preventDefault();
        let progressBar = document.getElementById('audio');
        progressBar.currentTime = e.target.value;
        this.setState({ trackPlayed: e.target.value });
    }

    render() {
        let playbarAll;

        if (this.props.currentTrack) {

            let audio = (
                // NOTE: audio tag: add "controls" -> audio player shows up
                <audio id="audio" autoPlay loop key={this.props.currentTrack.id}
                    onLoadedMetadata={this.getTrackLength}
                    onPlaying={this.handleTrackPlay}
                    src={this.props.currentTrack.audioURL}
                />
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

            // ---------------------------------------------------------------->
            // [TEST] PROGRESS BAR

            let formatTrackTime = (time) => {
                let sec = Math.floor(parseFloat(time));
                let min = Math.floor(sec / 60);
                sec -= min * 60;
                sec < 10 ? sec = `0${sec}`: sec = `${sec}`;                        
                return `${min}:${sec}`;
            }     
            
            let progressBar = (
                <div className="progressBar-scrub">
                    <p className="progress-time-start">{formatTrackTime(this.state.trackPlayed)}</p>
                    <input type="range" id="scrubber" min='0' max={this.state.trackLength}
                        onInput={this.handleScrubbing} className="slider"/>
                    <p className="progress-time-end">{formatTrackTime(this.state.trackLength)}</p>
                </div>
            )


            // ---------------------------------------------------------------->

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
                                {progressBar}
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

                                <a className="playbar-right-blurb" href="https://www.linkedin.com/in/edwin-cheng-a603819b/" target="_blank">
                                    Site created by Edwin Cheng
                                </a>
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
