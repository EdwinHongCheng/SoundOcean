import React from 'react';

class PlayBar extends React.Component {

    render() {
        let playbar;


        if (this.props.currentTrack) {

            playbar = (
                // NOTE: need a unique "key" to tell React it updated !!!
                <audio controls autoPlay loop key={this.props.currentTrack.id}>
                    <source src={this.props.currentTrack.audioURL} type="audio/mpeg" />
                    <source src={this.props.currentTrack.audioURL} type="audio/ogg" />
                        Your browser does not support the audio tag.
                </audio>
            )
        }

        return (
            <div className="playbar">
                {playbar}
            </div>
        )
    }
}

export default PlayBar;
