import React from "react";
import {
    Link,
    Switch,
} from 'react-router-dom';

import GreetingContainer from "../greeting/greeting_container";
import Modal from '../modal/modal';
import HomepageIndexItem from './homepage_index_item';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchTracks()
    }

    render() {
        const users = this.props.users
        const allTracks = this.props.tracks.map((track, idx) => {            
            return (
                <HomepageIndexItem
                    key={track.id}
                    track={track}
                    idx={idx}
                    openModal={this.props.openModal}
                />
            )
        })

        const firstTwelveTracks = allTracks.filter((track, idx) => idx < 12);

        return (
            <div>
                <Modal />
                <nav className="homepage-bar"> 
                    <GreetingContainer />

                    <div className="homepage-blurb-all">
                        <p className="homepage-blurb-big">What's next in music is first on SoundOcean</p>
                        <p className="homepage-blurb-small">
                            Upload your first track and begin your journey. SoundOcean gives you space to create, find your fans, and connect with other artists.
                        </p>

                        <div className="so-button-parent">
                            <p className="so-button1" onClick={() => this.props.openModal('login')}>Start uploading today</p>
                        </div>
                    </div>
                </nav>

                <div className="homepage-middle-all">
                    <div className="homepage-middle">
                        <div className="so-button-parent">
                            <p className="so-button" onClick={() => this.props.openModal('login')}>Upload your own</p>
                        </div>

                        <div className="hear-whats-trending-parent">
                            <p className="hear-whats-trending">Hear what’s trending for free in the SoundOcean community</p>
                        </div>
                    </div>

                    {/* HomePage Tracks Grid */}
                    <div className="homepageAllTracks">
                        {firstTwelveTracks}
                    </div>

                    <div className="homepage-middle">
                        <div className="so-button-parent2">
                            <p className="so-button2" onClick={() => this.props.openModal('login')}>Explore new sounds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
