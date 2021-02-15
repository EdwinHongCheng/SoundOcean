import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItem extends React.Component {
    render() {

        return (
            <>
                <p>{this.props.track.id}. Track Title: {this.props.track.title}</p>
                <p>- Created by: User {this.props.track.creator_id}</p>
                <Link to={`/tracks/${this.props.track.id}`}>- Link to This Track</Link>
                <br />
                <br />
            </>
        )
    }   
}

export default DiscoverIndexItem;
