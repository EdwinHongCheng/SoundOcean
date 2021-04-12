import React from 'react';
import StreamIndexItem from './stream_index_item'

class Stream extends React.Component {

    componentDidMount() {
        this.props.fetchTracks();
    }

    render() {        
        const users = this.props.users
        const allTracks = this.props.tracks.map((track, idx) => {            
            return (
                <StreamIndexItem
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

        // [NOTE] change "idx" filter determine how many Recent tracks to show
        let mostRecent12Tracks = allTracks.reverse().filter((item, idx) => idx < 12);

        return(
            <div>
                <div className="discoverBody">
                    <p className="discover-text-big">Recent Tracks</p>
                    <p className="discover-text-small">Hear the latest posts from the SoundOcean community</p>
                    <div className="discover-line-top"></div>
                    <div className="discoverAllTracks">
                        {mostRecent12Tracks}
                    </div>

                    <div className="discover-footer-parent">
                        <div className="discover-footer">
                            <ul className="discover-footer-links">
                                <a className="discover-footer-socials" target="_blank" href="https://www.linkedin.com/in/edwin-cheng-a603819b/">LinkedIn</a>
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

export default Stream;
