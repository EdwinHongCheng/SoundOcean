import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container";

// [TEST] working now -> just need to make it an edit form type deal
// - refer to Practice Exam, etc (?) -> must test out update + delete
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
            if (this.props.currentUser.id === currentTrack.creator_id) {
                canEditTrack = (
                    <>
                        <p>I own this track. I can edit it (WIP)</p>
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
                    <br />
                    <p>⊂(・﹏・⊂)</p>
                    <br />
                    <p>Track Title: {currentTrack.title}</p>
                    <br />
                    {canEditTrack}
                    <div>
                        <Link to="/">Back to Main Page</Link>
                    </div>
                </>
            )
        }
    }
}

export default ShowTrack;