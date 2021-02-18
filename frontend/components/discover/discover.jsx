import React from 'react';
import DiscoverIndexItem from './discover_index_item'

class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {

        // [WORKS] janky way from Ryan
        if (Object.keys(this.props.users).length < 2) {
            return null;
        }

        const users = this.props.users
        const allTracks = this.props.tracks.map(track => {            
            return (
                <DiscoverIndexItem
                    key={track.id}
                    track={track}
                    // user={users[track.creator_id]}
                />
            )
        })

        return(
            <div>
                <div className="discoverBody">
                    {/* Delete Filler below Later (???) */ }
                    <br />
                    <h2 className="filler-flower-text">~ Hear the SoundWaves (◠‿◠✿) ~</h2>
                    <br />

                    <div className="discoverAllTracks">
                        {allTracks}
                    </div>
                </div>
    
            </div>
        )
    }
};

export default Discover;
