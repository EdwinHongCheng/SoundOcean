import React from 'react';
import DiscoverIndexItem from './discover_index_item'

class Discover extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {        
        const users = this.props.users

        const allTracks = this.props.tracks.map(track => {

            debugger
            
            return (
                <DiscoverIndexItem
                    key={track.id}
                    track={track}

                    // [TEST] super-janky way
                    user={users[track.creator_id]}
                />
            )
        })

        return(
            <>
                <div className="discoverBody">
                    {/* Delete Filler below Later (???) */ }
                    <br />
                    <h2 className="filler-flower-text">~ Hear the SoundWaves (◠‿◠✿) ~</h2>
                    <br />

                    <div className="discoverAllTracks">
                        {allTracks}
                    </div>
                </div>
    
            </>
        )
    }
};

export default Discover;
