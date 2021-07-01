import React from "react";

import GreetingContainer from "../greeting/greeting_container";
import Modal from '../modal/modal';
import HomepageIndexItem from './homepage_index_item';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.fetchTracks();

        window.scrollTo(0, 0);
    }
    
    render() {
        const users = this.props.users;
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

                <div className="homepage-bottom">
                    <div className="homepage-image-3">
                        <div className="homepage-image-3-all">
                            <p className="homepage-image-3-text-big">Calling all creators</p>
                            <p className="homepage-image-3-text-small">Get on SoundOcean to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
                            <div className="homepage-image-3-button" onClick={() => this.props.openModal('login')}>Find out more</div>
                        </div>
                    </div>
                </div>

                <div className="homepage-end">

                    <div className="homepage-end-top">
                        <p className="homepage-end-text-big">Thanks for listening. Now join in.</p>
                        <p className="homepage-end-text-small">Upload tracks, discover artists and leave comments. All for free.</p>

                        <div className="homepage-end-createAccount-button" onClick={() => this.props.openModal('signup')}>Create account</div>

                        <div className="homepage-end-last-pair">
                            <p className="homepage-end-last-pair-text">Already have an account?</p>
                            <div className="homepage-end-signIn-button" onClick={() => this.props.openModal('login')}>Sign in</div>
                        </div>

                        </div>

                    <div className="homepage-footer-parent">
                        <div className="homepage-footer">
                            <ul className="homepage-footer-links">
                                <a className="homepage-footer-socials" target="_blank" href="https://www.linkedin.com/in/edwin-cheng-a603819b/">LinkedIn</a>
                                <li> - </li>
                                <a className="homepage-footer-socials" target="_blank" href="https://github.com/EdwinHongCheng/SoundOcean">GitHub</a>
                                <li> - </li>
                                <a className="homepage-footer-socials" target="_blank" href="https://angel.co/u/edwin-cheng-5">AngelList</a>
                            </ul>
                            <p className="homepage-language-text">Language: English (US)</p>
                        </div>
                    </div> 
                </div>

            </div>
        )
    }
}

export default HomePage;
