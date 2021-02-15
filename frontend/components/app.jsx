import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
 
import HomePage from "./homepage/homepage";
import DiscoverContainer from "./discover/discover_container";
import CreateTrackFormContainer from "./track_form/create_track_form_container";
// Test - Show Track
import ShowTrackContainer from "./show_track/show_track_container";


import NotFound from "./error_messages/not_found"


class App extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
                    <ProtectedRoute exact path="/upload" component={CreateTrackFormContainer} />

                    {/* [Test] Single Track Show Page */}
                    <Route exact path="/tracks/:trackId" component={ShowTrackContainer} />

                    <AuthRoute exact path="/" component={HomePage} />


                    {/* Redirect to HomePage (OR /discover ???) */}
                    <Route render={() => <Redirect to="/" />} />
                    {/* Error Message Page */}
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </>
        )
    }
}

export default App;
