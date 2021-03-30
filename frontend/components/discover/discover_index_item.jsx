import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItem extends React.Component {
    render() {

        let currentTrack = this.props.track;
        // let user = this.props.user;

        return (
            <div className="discoverIndexItem">
                <Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="discover-coverArt" /></Link>

                <Link to={`/tracks/${currentTrack.id}`}>
                    <div className="discover-track-title">{currentTrack.title}</div>
                </Link>

                <Link to={`/users/${currentTrack.creator_id}`}>
                    <div className="discover-track-creator-name">{currentTrack.creator}</div>
                </Link>
            </div>
        )
    }   
}

export default DiscoverIndexItem;
