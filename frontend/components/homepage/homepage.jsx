import React from "react";
import {
    Link,
    Switch,
} from 'react-router-dom';

import GreetingContainer from "../greeting/greeting_container";

// Modal Stuff
import Modal from '../modal/modal';

class HomePage extends React.Component {
    render() {
        return (
            <div>

                <Modal />

                <header>
                    <nav>
                        <div>
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
