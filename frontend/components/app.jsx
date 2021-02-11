import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

// 
import HomePage from "./homepage/homepage"


import NotFound from "./error_messages/not_found"

class App extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    {/* HomePage Component */}
                    <Route exact path="/" component={HomePage} />
                    {/* Redirect to HomePage */}
                    <Route render={() => <Redirect to="/" />} />
                    {/* Error Message Page */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </>
        )
    }
}

export default App;
