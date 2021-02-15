import React from 'react';
import { Link, Redirect } from 'react-router-dom';


// Note: issue with rendering the fetched track's info after componentDidMount

class ShowTrack extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
    }

    render() {
        let track = this.props.track // if no such track -> checkTrack = null

        if (!track) {
            return (<><Redirect to="/discover" /></>)
        } else {
            return (
                <>
                    <p>Track Title: {track.title}</p>
                    
                    <div>
                        <Link to="/discover">Back to Tracks Index (Discover)</Link>
                    </div>
                </>
            )
        }

    }
}

export default ShowTrack;
