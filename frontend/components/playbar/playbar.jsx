import React from 'react';

class PlayBar extends React.Component {

    render() {
        let playbarAll;

        if (this.props.currentTrack) {

            let playbar = (
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
                    <button id="playBarButton" onClick={
                        () => {
                            document.getElementById('audio').pause()
                            this.props.pauseTrack()
                        } 
                    }>[ PAUSE ]</button>
                )
            } else {
                playPauseButton = (
                    <button id="playBarButton" onClick={
                        () => {
                            document.getElementById('audio').play()
                            this.props.playTrack()
                        }
                    }>[  PLAY  ]</button>
                )
            }

            playbarAll = (
                <div className="playbar">
                    {/* NOTE: need a unique "key" to tell React it updated !!! */}
                    <div className="playbar-controls">
                        {playbar}
                    </div>

                    {/* [WORKS] Play/Pause Buttons (maybe delete later (?)) */}
                    {playPauseButton}

                    <p className="playbar-text">Now Playing: {this.props.currentTrack.title}</p>


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
