import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItem extends React.Component {
    render() {

        let currentTrack = this.props.track;
        // let user = this.props.user;
        
        return (
            <div className="discoverIndexItem">
                <Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="coverArt" /></Link>

                {/* Display Username (new + old ways) */}
                {/* [New Way - Works] */}

                <Link to={`/users/${currentTrack.creator_id}`}>
                    <div className="creatorNameText">{currentTrack.creator}</div>
                </Link>

                
                
                {/* Old Way (using new way now, probs better) */}
                {/* <p className="creatorNameText">{user.username}</p> */}


                <Link to={`/tracks/${currentTrack.id}`}><p>{currentTrack.title}</p></Link>
            </div>
        )
    }   
}

export default DiscoverIndexItem;
