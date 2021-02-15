import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from "../navbar/navbar_container"

class ShowTrack extends React.Component {

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
    }

    render() {
        let currentTrack = this.props.track // if no such track -> checkTrack = null

        // Return
        if (!currentTrack) {
            return (<><Redirect to="/discover" /></>)
        } else {
            return (
                <>  
                    <NavbarContainer />
                    <br />
                    <p>Track Title: {currentTrack.title}</p>
                    <br />
                    <div>
                        <Link to="/">Back to Main Page</Link>
                    </div>
                </>
            )
        }
    }
}

export default ShowTrack;
