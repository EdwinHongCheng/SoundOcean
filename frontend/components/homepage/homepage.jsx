import React from "react";
import {
    Link,
    Switch,
} from 'react-router-dom';

import GreetingContainer from "../greeting/greeting_container";

// Modal Stuff
import Modal from '../modal/modal';

// Image (Ryan says not to have it yet)
import logo from "../../../app/assets/images/logo.png"

class HomePage extends React.Component {
    render() {
        return (
            <div>

                <Modal />

                <header>
                    <nav>
                        <div className="navbar-Left">
                            <h1>
                                <Link to="/">
                                    <img className="logo" src={logo} alt="Logo" />
                                </Link>
                            </h1>
                        </div>

                        <div className="navbar-Right">
                            <GreetingContainer />
                        </div>
                    </nav>
                </header>

                <br />

                <h2>~ Hear the SoundWaves (◠‿◠✿) ~</h2>
            </div>
        )
    }
}

export default HomePage;
