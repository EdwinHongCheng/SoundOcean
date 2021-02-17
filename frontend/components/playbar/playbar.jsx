import React from 'react';

class PlayBar extends React.Component {

    render() {
        let playbar;

        if (this.props.currentTrack) {

            playbar = (
                <div className="playbar">
                    {/* NOTE: need a unique "key" to tell React it updated !!! */}

                    <div className="playbar-left">
                        <audio controls autoPlay loop key={this.props.currentTrack.id}>
                            <source src={this.props.currentTrack.audioURL} type="audio/mpeg" />
                            <source src={this.props.currentTrack.audioURL} type="audio/ogg" />
                                Your browser does not support the audio tag.
                        </audio>
                    </div>

                    <p className="playbar-right">Now Playing: {this.props.currentTrack.title}</p>
                </div>
            )
        }

        return (
            <div>
                {playbar}
            </div>
        )
    }
}

export default PlayBar;
