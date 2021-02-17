import React from 'react';

class PlayBar extends React.Component {

    render() {
        let playbarAll;

        if (this.props.currentTrack) {

            let playbar = (
                // NOTE: can remove "controls" to make audio player not show up
                <audio id="audio" controls autoPlay loop key={this.props.currentTrack.id}>
                    <source src={this.props.currentTrack.audioURL} type="audio/mpeg" />
                    <source src={this.props.currentTrack.audioURL} type="audio/ogg" />
                    Your browser does not support the audio tag.
                </audio>
            )


            let playPauseButton;
            if (this.props.isPlaying) {
                playPauseButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').pause()
                            this.props.pauseTrack()
                        } 
                    }>[Global Pause Button]</button>
                )
            } else {
                playPauseButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').play()
                            this.props.playTrack()
                        }
                    }>[Global Play Button]</button>
                )
            }


            


            // [OLD VERSION] LOCAL - works
            // let playPauseButton;
            // if (this.state.isPlaying) {
            //     playPauseButton = (
            //         <button onClick={
            //             () => {
            //                 document.getElementById('audio').pause()
            //                 this.setState({ isPlaying: false })
            //             } 
            //         }>[Local Pause Button]</button>
            //     )
            // } else {
            //     playPauseButton = (
            //         <button onClick={
            //             () => {
            //                 document.getElementById('audio').play()
            //                 this.setState({ isPlaying: true })
            //             }
            //         }>[Local Play Button]</button>
            //     )
            // }



            playbarAll = (
                <div className="playbar">
                    {/* NOTE: need a unique "key" to tell React it updated !!! */}

                    <div className="playbar-left">
                        {playbar}
                    </div>

                    <p className="playbar-right">Now Playing: {this.props.currentTrack.title}</p>


                    {/* [TEST - WORKS] Play/Pause Buttons (delete later) */}
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
