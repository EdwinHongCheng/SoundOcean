import React from "react";
import {
    Link,
    Switch,
} from 'react-router-dom';

import GreetingContainer from "../greeting/greeting_container";

// Old Stuff (based on BenchBnB)
// import SignupFormContainer from '../session_form/signup_form_container';
// import LoginFormContainer from '../session_form/login_form_container';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';

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
                    <h1 className="navbar-Left">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </h1>

                    <div className="navbar-Right">
                        <GreetingContainer />
                    </div>
                </header>

                <h2>~ where SoundWaves never end (◠‿◠✿) ~</h2>

                {/* <Switch>
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                </Switch> */}
            </div>
        )
    }
}

export default HomePage;
