import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Modal Stuff
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />

        <header>
            <h1 className="navbar-Left">
                <Link to="/">SoundOcean</Link>
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
);

export default App;
