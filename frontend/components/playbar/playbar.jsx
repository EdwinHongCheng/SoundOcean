import React from 'react';

class PlayBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTrack: this.props.currentTrack // default: null
        }
    }


    // [CURRENT PROGRESS] - want to have an event listener (?)
    // -> clicking a track's Cover Art -> fire off "receive current track"
    // -> setState: this local state's currentTrack = set to whatever album i clicked
    // -> start playing the current track here (?)
    // Idea - for Show Track -> on click ("play" button) ->
    // -> changes currentTrack in Global State to that track ->
    // - somehow rerender Playbar -> set it's local state's current Track to the 
    //   -> global state's current track

    render() {
        return (
            <div>
                <audio controls loop>
                    <source src={currentTrack.audioURL} type="audio/mpeg" />
                    <source src={currentTrack.audioURL} type="audio/ogg" />
                    Your browser does not support the audio tag.
                </audio>
            </div>
        )
    }
}

export default PlayBar;
