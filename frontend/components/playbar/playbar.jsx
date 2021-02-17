import React from 'react';

class PlayBar extends React.Component {
    constructor(props) {
        super(props)
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

            // [TEST] Play/Pause Button

            playbarAll = (
                <div className="playbar">
                    {/* NOTE: need a unique "key" to tell React it updated !!! */}

                    <div className="playbar-left">
                        {playbar}
                    </div>

                    <p className="playbar-right">Now Playing: {this.props.currentTrack.title}</p>


                    {/* [TEST] Play/Pause Buttons (delete later) */}
                    <button onClick={() => document.getElementById('audio').play()}>Play Button</button>
                    <button onClick={() => document.getElementById('audio').pause()}>Pause Button</button>
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
