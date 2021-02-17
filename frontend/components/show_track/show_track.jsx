import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import EditTrackFormContainer from '../edit_track/edit_track_form_container';


class ShowTrack extends React.Component {
    constructor(props) {
        super(props)

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)

        this.playCurrentTrack = this.playCurrentTrack.bind(this)
        this.pauseCurrentTrack = this.pauseCurrentTrack.bind(this)
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


    // [TEST] changing global state of isPlaying (boolean)
    playCurrentTrack(e) {
        e.preventDefault()
        this.props.playTrack()
    }
    pauseCurrentTrack(e) {
        e.preventDefault()
        this.props.pauseTrack()
    }



    render() {
        let currentTrack = this.props.track // if no such track -> currentTrack = null

        // Return (redirects if currentTrack === null)
        if (!currentTrack) {
            return (<><Redirect to="/discover" /></>)
        } else {

            let canEditTrack;
            if (this.props.currentUser.id === currentTrack.creator_id 
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

            // [TEST] [WORKS] ------------------------------------------------->
            let currentTrackButton;
            if (this.props.track !== this.props.currentTrack) {
                currentTrackButton = (
                    <button onClick={this.updateCurrentTrack}>
                        &#9654; Play Current Track
                    </button>
                )
            } else if (this.props.isPlaying) {
                currentTrackButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').pause()
                            this.props.pauseTrack()
                        }
                    }>[Global Pause Button]</button>
                )
            } else {
                currentTrackButton = (
                    <button onClick={
                        () => {
                            document.getElementById('audio').play()
                            this.props.playTrack()
                        }
                    }>[Global Play Button]</button>
                )
            }
            // [TEST] -------------------------->


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
