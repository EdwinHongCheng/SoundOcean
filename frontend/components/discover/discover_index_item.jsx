import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
    }

    // [WORKS] for my Play This Track button
    updateCurrentTrack(e) {
        e.preventDefault()
        this.props.receiveCurrentTrack(this.props.track.id)
        this.props.playTrack()
    }

    render() {

        let currentTrack = this.props.track;
        // let user = this.props.user;

        return (
            <div className="discoverIndexItem">

                {/* [TESTING] Need to have it pause/resume too now */}
                <img onClick={this.updateCurrentTrack} src={currentTrack.imageURL} className="discover-coverArt" />


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
