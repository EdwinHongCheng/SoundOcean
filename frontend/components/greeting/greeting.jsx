import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <>
            <h2>~ where SoundWaves never end (◠‿◠✿) ~</h2>
            <nav className="login-signup">
                <button onClick={() => openModal('login')}>Sign in</button>
                <button onClick={() => openModal('signup')}>Create account</button>
            </nav>
        </>
    );

    const personalGreeting = () => (
        <>
            <hgroup className="header-group">
                <h2 className="header-name">Hi, {currentUser.username}!</h2>
                <button className="header-button" onClick={logout}>Sign out</button>
            </hgroup>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
