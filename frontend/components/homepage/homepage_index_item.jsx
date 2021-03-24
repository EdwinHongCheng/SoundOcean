import React from 'react';
import { Link } from 'react-router-dom';

class HomepageIndexItem extends React.Component {
    render() {

        let currentTrack = this.props.track;

        let currentCover;
        if ((this.props.idx + 1) % 6 === 0) {
            currentCover = (<Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="homepageCoverArtLast" /></Link>)
        } else {
            currentCover = (<Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="homepageCoverArt" /></Link>)
        }
        
        return (
            <div className="homepageIndexItem">
                {currentCover}

                <Link to={`/tracks/${currentTrack.id}`}><p className="homepageTrackText">{currentTrack.title}</p></Link>

                <Link to={`/users/${currentTrack.creator_id}`}>
                    <div className="homepageCreatorNameText">{currentTrack.creator}</div>
                </Link>
            </div>
        )
    }   
}

export default HomepageIndexItem;