import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            {/* <Link to="/login">Sign in</Link>
            <span> or </span>
            <Link to="/signup">Create account</Link> */}


            <button onClick={() => openModal('login')}>Sign in</button>
            <button onClick={() => openModal('signup')}>Create account</button>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Sign out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
