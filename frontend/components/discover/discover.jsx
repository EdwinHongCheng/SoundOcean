import React from 'react';
import DiscoverIndexItem from './discover_index_item'

class Discover extends React.Component {
    constructor(props) {
        super(props)

        // [WORKS] - now, going to Track Show page -> refreshing ->
        // -> auto-redirect to "Discover" -> now, tracks are fetched 
        // to global state before everything else is rendered
        // [NOTE] can't do in render or else I continuously render (???)
        this.props.fetchTracks()
    }

    // [BAD][OLD WAY] - doesn't work after going to Show Page -> refresh ->
    // auto-redirect to "Discover" page
    // componentDidMount() {
    //     this.props.fetchTracks()
    // }

    render() {
        const users = this.props.users

        const allTracks = this.props.tracks.map(track => {            
            return (
                <DiscoverIndexItem
                    key={track.id}
                    track={track}

                    // [TEST][WORKS] super-janky way
                    // RESULT: object of all users 
                    // -> can key into specific user w track.creator_id
                    user={users[track.creator_id]}
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
