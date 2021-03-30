import React from 'react';
import DiscoverIndexItem from './discover_index_item'

class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {
        const users = this.props.users
        const allTracks = this.props.tracks.map((track, idx) => {            
            return (
                <DiscoverIndexItem
                    key={track.id}
                    track={track}
                    idx={idx}
                />
            )
        })

        return(
            <div>
                <div className="discoverBody">
                    <p className="discover-text-big">All Tracks</p>
                    <p className="discover-text-small">Explore the Ocean, Hear the SoundWaves</p>
                    <div className="discover-line-top"></div>
                    <div className="discoverAllTracks">
                        {allTracks}
                    </div>
                </div>
            </div>
        )
    }
};

export default Discover;
