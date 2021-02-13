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
            <>
                <Modal />
                <header>
                    <nav className="navigation-bar"> 
                        <GreetingContainer />
                    </nav>
                </header>

                {/* Delete Filler below Later */}
                <br />
                <h2 className="filler-flower-text">~ Hear the SoundWaves (◠‿◠✿) ~</h2>
            </>
        )
    }
}

export default HomePage;
