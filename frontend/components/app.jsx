import React from "react";
import {
    Route,
    // prob have to import others later, use BenchBnB as Solution
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
// prob have to import others later, use BenchBnB as Solution

const App = () => (
    <div>
        <header>
            <h1>SoundOcean (from app.jsx)</h1>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;
