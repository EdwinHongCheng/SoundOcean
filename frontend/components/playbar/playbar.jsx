import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp, faUndo, faStepBackward } from '@fortawesome/free-solid-svg-icons';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            muted: false,
            trackPlayed: 0,
            trackLength: 0,
            currentTrackId: null,
            looping: false,
            volume: 0.5,
        }

        this.toggleMute = this.toggleMute.bind(this);
        this.getTrackLength = this.getTrackLength.bind(this);
        this.handleTrackPlay = this.handleTrackPlay.bind(this);
        this.handleScrubbing = this.handleScrubbing.bind(this);
        this.toggleTrackLooping = this.toggleTrackLooping.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
        this.goBackToStart = this.goBackToStart.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
    }

    toggleMute(e) {
        e.preventDefault();
        this.setState({ muted: !this.state.muted });
    }

    handleTrackPlay(){
        const progressBar = document.getElementById('audio');
        const scrubber = document.getElementById('scrubber');

        if (this.state.currentTrackId === null) {
            progressBar.volume = 0.5;
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
            progressBar.loop = this.state.looping;

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

    toggleTrackLooping() {
        let loopState = this.state.looping;
        this.setState({ looping: !loopState });
        document.getElementById('audio').loop = !loopState;
    }

    handleEnd() {
        if (!this.state.looping) {
            const progressBar = document.getElementById('audio');
            const scrubber = document.getElementById('scrubber');

            progressBar.currentTime = 0;
            scrubber.value = progressBar.currentTime;
            this.setState({ trackPlayed: 0 })

            progressBar.pause();
            this.props.pauseTrack();
        }
    }

    goBackToStart() {
        const progressBar = document.getElementById('audio');
        const scrubber = document.getElementById('scrubber');

        progressBar.currentTime = 0;
        scrubber.value = progressBar.currentTime;
        this.setState({ trackPlayed: 0 })
    }

    handleVolume(e){
        const progressBar = document.getElementById('audio');
        progressBar.volume = e.target.value / 1000.0;
        this.setState({ volume: e.target.value / 1000.0 })
        // console.log(e.target.value);
    }

    render() {
        let playbarAll;

        if (this.props.currentTrack) {

            let audio = (
                <audio id="audio" autoPlay key={this.props.currentTrack.id}
                    onLoadedMetadata={this.getTrackLength}
                    onPlaying={this.handleTrackPlay}
                    onEnded={this.handleEnd}
                    src={this.props.currentTrack.audioURL}
                />
            )

            let backToStartButton = (
                <div className="back-button-parent" title="Back to Start"
                    onClick={
                        () => {
                            this.goBackToStart();
                        } 
                    }
                >
                    <FontAwesomeIcon id="back-button-icon" icon={faStepBackward}/>
                </div>
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

            let replayButton = (
                <div className="replay-button-parent" title="Loop Track"
                    onClick={
                        () => {
                            this.toggleTrackLooping();
                        } 
                    }
                >
                    <FontAwesomeIcon id={`replay-button-icon-${this.state.looping}`} icon={faUndo}/>
                </div>
            )

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
                volumeButton = (
                    <div className="volume-button-parent">
                        <FontAwesomeIcon id="volume-button-icon" icon={faVolumeUp}
                            onClick={
                                (e) => {
                                    document.getElementById('audio').muted = true;
                                    this.toggleMute(e);
                                } 
                            }
                        />

                        <div className="volume-slider-parent">
                            <input type="range"
                                className="volume-slider"
                                min="0.0" 
                                defaultValue={this.state.volume * 1000}
                                max = "1000.0"
                                onChange={this.handleVolume} 
                            />
                        </div>
                    </div>
                )
            }

            // PROGRESS BAR --------------------------------------------------->
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

            // PlayBar (All) -------------------------------------------------->
            playbarAll = (
                <div className="playbar-parent-parent">
                    <div className="playbar-parent">
                        <div className="playbar">

                            <div className="playbar-left">
                                <div className="audio">
                                    {audio}
                                </div>
                                {backToStartButton}
                                {playPauseButton}
                                {replayButton}
                            </div>

                            <div className="playbar-right">
                                {progressBar}
                                {volumeButton}
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
