import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItem extends React.Component {
    render() {

        let currentTrack = this.props.track;

        return (
            <div className="discoverIndexItem">
                <Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="coverArt" /></Link>
                <br />
                <p>{currentTrack.id}. Title: {currentTrack.title}</p>
                <p>- Created by: User {currentTrack.creator_id}</p>
                <Link to={`/tracks/${currentTrack.id}`}>- Link to This Track</Link>
                <br />
                <br />
                <br />
            </div>
        )
    }   
}

export default DiscoverIndexItem;
