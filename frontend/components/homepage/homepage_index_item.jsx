import React from 'react';
import { Link } from 'react-router-dom';

class HomepageIndexItem extends React.Component {
    render() {
        let currentTrack = this.props.track;

        let currentCover;
        if ((this.props.idx + 1) % 6 === 0) {
            // currentCover = (<Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="homepageCoverArtLast" /></Link>)
            currentCover = (<div onClick={() => this.props.openModal('login')}><img src={currentTrack.imageURL} className="homepageCoverArtLast" /></div>)
        } else {
            // currentCover = (<Link to={`/tracks/${currentTrack.id}`}><img src={currentTrack.imageURL} className="homepageCoverArt" /></Link>)
            currentCover = (<div onClick={() => this.props.openModal('login')}><img src={currentTrack.imageURL} className="homepageCoverArt" /></div>)
        }
        
        return (
            <div className="homepageIndexItem">
                {currentCover}

                {/* <Link to={`/tracks/${currentTrack.id}`}><p className="homepageTrackText">{currentTrack.title}</p></Link> */}
                <div onClick={() => this.props.openModal('login')}><p className="homepageTrackText">{currentTrack.title}</p></div>

                {/* <Link to={`/users/${currentTrack.creator_id}`}>
                    <div className="homepageCreatorNameText">{currentTrack.creator}</div>
                </Link> */}
                <div onClick={() => this.props.openModal('login')}>
                    <div className="homepageCreatorNameText">{currentTrack.creator}</div>
                </div>
            </div>
        )
    }   
}

export default HomepageIndexItem;