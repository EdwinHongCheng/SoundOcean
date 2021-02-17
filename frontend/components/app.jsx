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
import CreateTrackFormContainer from "./create_track/create_track_form_container";
import ShowTrackContainer from "./show_track/show_track_container";
import NavbarContainer from "./navbar/navbar_container"
import PlayBarContainer from './playbar/playbar_container'
// import NotFound from "./error_messages/not_found"


class App extends React.Component {

    render() {
        return (
            <>
                <NavbarContainer />

                <Switch>
                    {/* protected route since: must be signed in for NavBar to appear */}
                    <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
                    <ProtectedRoute exact path="/upload" component={CreateTrackFormContainer} />
                    <ProtectedRoute exact path="/tracks/:trackId" component={ShowTrackContainer} />

                    <AuthRoute exact path="/" component={HomePage} />

                    {/* Redirect to HomePage "/" or "/discover"  (depends if logged in) */}
                    <Route render={() => <Redirect to="/" />} />

                    {/* Error Message Page (dont need)*/}
                    {/* <Route component={NotFound} /> */}

                    {/* <Redirect to="/" />  */}
                </Switch>

                <PlayBarContainer />
            </>
        )
    }
}

export default App;
