// Reference Link: https://ultimatecourses.com/blog/react-router-not-found-component

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1>404 - Not Found</h1>
        <Link to="/">
            Go to Homepage
        </Link>
    </div>
);

export default NotFound;
