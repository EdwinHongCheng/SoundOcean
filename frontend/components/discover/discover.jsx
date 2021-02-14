import React from 'react';
import NavbarContainer from "../navbar/navbar_container"
import DiscoverIndexItem from './discover_index_item'

class Discover extends React.Component {
    constructor(props) {
        super(props)
    }

    // [!!!] NOTE: the below componentDidMount breaks everything - why?
    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {

        // Test - goal: display index of ALL tracks uploaded
        const allTracks = this.props.tracks.map(track => {
            return (
                <DiscoverIndexItem
                    key={track.id}
                    track={track}
                />
            )
        })

        return(
            <>
                <NavbarContainer />
    
                {/* Delete Filler below Later (???) */ }
                <br />
                <h2 className="filler-flower-text">~ Hear the SoundWaves (◠‿◠✿) ~</h2>
                <br />
                {allTracks}
            </>
        )
    }
};

export default Discover;
