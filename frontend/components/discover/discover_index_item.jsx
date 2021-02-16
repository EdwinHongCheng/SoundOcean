import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItem extends React.Component {
    render() {

        let currentTrack = this.props.track;

        return (
            <div className="discoverIndexItem">
                <Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="coverArt" /></Link>
                <br />

                {/* [WRONG] shows track's creator's username (edited _track.kson.jbuilder) */}
                {/* <p className="creatorNameText">{user.username}</p> */}

                <Link to={`/tracks/${currentTrack.id}`}><p>{currentTrack.title}</p></Link>
                <br />
            </div>
        )
    }   
}

export default DiscoverIndexItem;
