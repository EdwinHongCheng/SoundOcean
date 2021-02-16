import React from 'react';

class PlayBar extends React.Component {

    render() {
        let playbar = null;
        if (this.props.currentTrack) {
            playbar = (
                <audio controls loop>
                    <source src={this.props.currentTrack.audioURL} type="audio/mpeg" />
                    <source src={this.props.currentTrack.audioURL} type="audio/ogg" />
                        Your browser does not support the audio tag.
                </audio>
            )
        }

        return (
            <div className="playbar">
                <br />
                <p>[TEST] Play Bar</p>

                {playbar}
            </div>
        )
    }
}

export default PlayBar;
