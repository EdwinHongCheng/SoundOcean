import React from 'react';

class PlayBar extends React.Component {
    constructor(props) {
        super(props)

        // [TEST] [DELETE LATER] local state to toggle between Play/Pause button
        this.state = {
            isPlaying: true
        }
    }


    render() {
        let playbarAll;

        if (this.props.currentTrack) {

            let playbar = (
                <audio id="audio" controls autoPlay loop key={this.props.currentTrack.id}>
                    <source src={this.props.currentTrack.audioURL} type="audio/mpeg" />
                    <source src={this.props.currentTrack.audioURL} type="audio/ogg" />
                    Your browser does not support the audio tag.
                </audio>
            )

            // [TEST] [WORKS LOCALLY] Play/Pause Button 
            let playPauseButton;
            if (this.state.isPlaying) {
                playPauseButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').pause()
                            this.setState({ isPlaying: false })
                        } 
                    }>[Local Pause Button]</button>
                )
            } else {
                playPauseButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').play()
                            this.setState({ isPlaying: true })
                        }
                    }>[Local Play Button]</button>
                )
            }

            playbarAll = (
                <div className="playbar">
                    {/* NOTE: need a unique "key" to tell React it updated !!! */}

                    <div className="playbar-left">
                        {playbar}
                    </div>

                    <p className="playbar-right">Now Playing: {this.props.currentTrack.title}</p>


                    {/* [TEST] Play/Pause Buttons (delete later) */}
                    {playPauseButton}
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
