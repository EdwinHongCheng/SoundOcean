import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <>
            <nav className="navbar-login-signup">
                <button className="signin-button-navbar" onClick={() => openModal('login')}>Sign in</button>
                <button onClick={() => openModal('signup')}>Create account</button>
            </nav>
        </>
    );

    const personalGreeting = () => (
        <>
            <hgroup className="header-group">
                
                {/* [TEST] DropDown Button - from w3schools: How TO - Clickable Dropdown  */}
                <div class="dropdown">
                    <button class="dropbtn">Hi, {currentUser.username}!</button>
                    <div id="myDropdown" class="dropdown-content">

                        <button className="header-button" onClick={logout}>Sign out</button>

                    </div>
                </div>

            </hgroup>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
