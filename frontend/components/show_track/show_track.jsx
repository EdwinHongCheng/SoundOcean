import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";
import EditTrackFormContainer from '../edit_track/edit_track_form_container'

class ShowTrack extends React.Component {

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
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
                        <p>I own this track. I can edit or delete it!</p>
                        <br />
                        <EditTrackFormContainer 
                            track={currentTrack}
                        />
                        <br />
                    </>
                )
            }

            return (
                <>  
                    <NavbarContainer />


                    <div className="showTrackBody">
                        <br />
                        <p>⊂(・﹏・⊂)</p>
                        <br />

                        {/* Cover Art */}
                        <img src={currentTrack.imageURL} className="coverArt"/>
                        <br />
                        <br />


                        {/* [TEST] Audio File (w3schools) - works! */}
                        {/* NOTE: No Auto-Loop: revert back to <audio controls> */}
                        <audio controls loop>
                            <source src={currentTrack.audioURL} type="audio/mpeg"/>
                            <source src={currentTrack.audioURL} type="audio/ogg" />
                            Your browser does not support the audio tag.
                        </audio>    
                        <br />
                        <br /> 


                        <p>Track Title: {currentTrack.title}</p>
                        <br />
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
