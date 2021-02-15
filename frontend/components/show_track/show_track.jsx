import React from 'react';
import { Link } from 'react-router-dom';


// Note: issue with rendering the fetched track's info after componentDidMount

class ShowTrack extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.track
    }


    componentDidMount() {
        this.props.fetchTrack(this.props.match.params.trackId)
            // .then(track => this.setState( { track } ))
    }

    render() {
        
        let trackInfo;
        if (this.state != null) {
            trackInfo = (
                <>
                    <h1>{this.state.track.creator_id}</h1>
                    <h1>{this.state.track.title}</h1>
                </>
            )
        }

        return (
            <div>
                {trackInfo}

                <Link to="/discover">Back to Tracks Index (Discover)</Link>
            </div>
        )
    }
}

export default ShowTrack;
