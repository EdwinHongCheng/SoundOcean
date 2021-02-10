import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <>
            <nav className="login-signup">
                <button onClick={() => openModal('login')}>Sign in</button>
                <span> </span>
                <button onClick={() => openModal('signup')}>Create account</button>
            </nav>
            <br />
            <h2>~ where SoundWaves never end (◠‿◠✿) ~</h2>
        </>
    );

    const personalGreeting = () => (
        <>
            <hgroup className="header-group">
                <br />
                <h2 className="header-name">Hi, {currentUser.username}!</h2>
                <br />
                <button className="header-button" onClick={logout}>Sign out</button>
            </hgroup>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
