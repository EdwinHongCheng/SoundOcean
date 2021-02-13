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
// NOTE: have to specify cuz initially I made the file wrong (did jsx for conatainter instead of js)
import UploadContainer from "./upload/upload_container.js"


import NotFound from "./error_messages/not_found"

class App extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <ProtectedRoute exact path="/discover" component={DiscoverContainer} />
                    <ProtectedRoute exact path="/upload" component={UploadContainer} />

                    
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
