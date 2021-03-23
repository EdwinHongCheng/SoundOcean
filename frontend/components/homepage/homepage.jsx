import React from "react";
import {
    Link,
    Switch,
} from 'react-router-dom';

import GreetingContainer from "../greeting/greeting_container";
import Modal from '../modal/modal';

class HomePage extends React.Component {
    render() {
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
                    </div>
                </nav>

                <div className="so-button-parent">
                    <p className="so-button" onClick={() => this.props.openModal('login')}>Upload Your Own</p>
                </div>
            </div>
        )
    }
}

export default HomePage;
