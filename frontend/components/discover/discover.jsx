import React from 'react';
import DiscoverIndexItem from './discover_index_item'

class Discover extends React.Component {

    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {

        const allTracks = this.props.tracks.map((track, idx) => {            
            return (
                <DiscoverIndexItem
                    key={track.id}
                    track={track}
                    idx={idx}
                    
                    receiveCurrentTrack={this.props.receiveCurrentTrack}
                    playTrack={this.props.playTrack}
                    pauseTrack={this.props.pauseTrack}
                    currentTrack={this.props.currentTrack}
                    isPlaying={this.props.isPlaying}
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

                    <div className="discover-footer-parent">
                        <div className="discover-footer">
                            <ul className="discover-footer-links">
                                <a className="discover-footer-socials" target="_blank" href="https://www.linkedin.com/in/edwin-hong-cheng/">LinkedIn</a>
                                <li> - </li>
                                <a className="discover-footer-socials" target="_blank" href="https://github.com/EdwinHongCheng/SoundOcean">GitHub</a>
                                <li> - </li>
                                <a className="discover-footer-socials" target="_blank" href="https://angel.co/u/edwin-cheng-5">AngelList</a>
                            </ul>
                            <p className="discover-language-text">Language: English (US)</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
};

export default Discover;
