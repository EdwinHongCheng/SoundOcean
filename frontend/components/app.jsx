import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

// testing HomePage Component
import HomePage from "./homepage/homepage"

// Error Message
import NotFound from "./error_messages/not_found"

class App extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={NotFound} />
                </Switch>
            </>
        )
    }
}

export default App;
