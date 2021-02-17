import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import EditTrackFormContainer from '../edit_track/edit_track_form_container';


class ShowTrack extends React.Component {
    constructor(props) {
        super(props)

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
    }


    // [WORKS] updates Current Track to whatever is here
    updateCurrentTrack(e) {
        e.preventDefault()
        this.props.receiveCurrentTrack(this.props.track.id)
        this.props.playTrack()
    }

    render() {
        let currentTrack = this.props.track // if no such track -> currentTrack = null

        // Return (result: redirects if currentTrack === null)
        if (!currentTrack) {
            return null;
        } else {

            let canEditTrack;
            // [Demo user - cannot edit/delete]
            if (this.props.currentUser.id === 1) {
                // Nothing Happens (no access to edit form)
            } else if (this.props.currentUser.id === currentTrack.creator_id
                // everfall id = 2 -> has Admin Powers lol
                || this.props.currentUser.id === 2) {
                canEditTrack = (
                    <>
                        <EditTrackFormContainer 
                            track={currentTrack}
                        />
                        <br />
                    </>
                )
            }

            // [WORKS] ------------------------------------------------->
            let currentTrackButton;
            if (this.props.track !== this.props.currentTrack) {
                currentTrackButton = (
                    <button onClick={this.updateCurrentTrack}>
                        &#9654; Play This Track
                    </button>
                )
            } else if (this.props.isPlaying) {
                currentTrackButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').pause()
                            this.props.pauseTrack()
                        }
                    }>[ PAUSE ]</button>
                )
            } else {
                currentTrackButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').play()
                            this.props.playTrack()
                        }
                    }>[  PLAY  ]</button>
                )
            }
            // -------------------------->


            return (
                <>  
                    <div className="showTrackBody">
                        <br />
                        <p>⊂(・﹏・⊂)</p>
                        <br />

                        {/* Cover Art */}
                        <img src={currentTrack.imageURL} className="coverArt"/>
                        <br />
                        <br />

                        {/* [TEST] [WORKS] */}
                        {currentTrackButton}
                        <br />
                        <br />

   
                        <p>Track Title: {currentTrack.title}</p>
                        <br />
                        {/* Edit Track Form */}
                        {canEditTrack}

                        <div>
                            <Link to="/">Back to Main Page</Link>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default ShowTrack;
