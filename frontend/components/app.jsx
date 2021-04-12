import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
 
import HomePageContainer from "./homepage/homepage_container";
import DiscoverContainer from "./discover/discover_container";
// [TEST] Stream (modified version of Discover)
import StreamContainer from "./stream/stream_container";
import CreateTrackFormContainer from "./create_track/create_track_form_container";
import ShowTrackContainer from "./show_track/show_track_container";
import NavbarContainer from "./navbar/navbar_container"
import PlayBarContainer from './playbar/playbar_container'
// import NotFound from "./error_messages/not_found"

// [WORKS] user show pages path
import ShowUserContainer from './show_user/show_user_container';


class App extends React.Component {

    render() {
        return (
            <>
                <NavbarContainer />

                <Switch>
                    {/* protected route since: must be signed in for NavBar to appear */}
                    <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
                    <ProtectedRoute exact path="/stream" component={StreamContainer} />
                    <ProtectedRoute exact path="/upload" component={CreateTrackFormContainer} />
                    <ProtectedRoute exact path="/tracks/:trackId" component={ShowTrackContainer} />


                    {/* [TEST] user show pages path (Refer to track show page?) */}
                    <ProtectedRoute exact path="/users/:userId" component={ShowUserContainer} />


                    <AuthRoute exact path="/" component={HomePageContainer} />

                    {/* Redirect to HomePage "/" or "/discover"  (depends if logged in) */}
                    <Route render={() => <Redirect to="/" />} />

                    {/* Error Message Page (dont need)*/}
                    {/* <Route component={NotFound} /> */}
                </Switch>

                <PlayBarContainer />
            </>
        )
    }
}

export default App;
