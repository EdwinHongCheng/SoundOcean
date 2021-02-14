import React from 'react';
import NavbarContainer from "../navbar/navbar_container"

class Discover extends React.Component {
    constructor(props) {
        super(props)
    }

    // [!!!] NOTE: the below componentDidMount breaks everything - why?
    // componentDidMount() {
    //     this.props.fetchTracks()
    // }

    render() {

        // Test - goal: display index of ALL tracks uploaded
        const { tracks } = this.props

        let allTracks = tracks.map(track => {
            return (
                <div key={track.id}>
                    <p>Title: {track.title}</p>
                    <p>Created by User #{track.creator_id}</p>
                </div>
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
