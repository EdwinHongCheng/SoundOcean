import React from 'react';
import DiscoverIndexItem from './discover_index_item'

class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {
        const users = this.props.users
        const allTracks = this.props.tracks.map(track => {            
            return (
                <DiscoverIndexItem
                    key={track.id}
                    track={track}
                />
            )
        })

        return(
            <div>
                <div className="discoverBody">
                    <div className="discoverAllTracks">
                        {allTracks}
                    </div>
                </div>
    
            </div>
        )
    }
};

export default Discover;
