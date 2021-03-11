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
                </nav>
            </div>
        )
    }
}

export default HomePage;
