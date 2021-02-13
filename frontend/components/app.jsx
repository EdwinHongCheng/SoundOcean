import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
 
import HomePage from "./homepage/homepage"
import DiscoverContainer from "./discover/discover_container"

import NotFound from "./error_messages/not_found"

class App extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <ProtectedRoute exact path="/discover" component={DiscoverContainer} />


                    {/* HomePage Component */}
                    <AuthRoute exact path="/" component={HomePage} />
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
