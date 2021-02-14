import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItem extends React.Component {
    render() {

        return (
            <>
                <p>Track Number: {this.props.track.id}</p>
                <p>Track Title: {this.props.track.title}</p>
                <p>Created by: User {this.props.track.author_id}</p>
            </>
        )
    }   
}

export default DiscoverIndexItem;
