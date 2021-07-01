import React from 'react';
import logo from "../../../app/assets/images/logo.png"

const Greeting = ({ openModal }) => {

    const sessionLinks = () => (
        <div className="signin-navbar">
            <div className="navbar-login-left-sect">
                <img className="homepage-logo" src={logo} alt="Logo" />
                <p className="soundOcean-greeting-text">SoundOcean</p>
            </div>
            
            <ul className="navbar-login-right-sect">
                <li>
                    <div className="signin-button-navbar" onClick={() => openModal('login')}>Sign in</div>
                </li>
                <li>
                    <div className="createAccount-button-navbar" onClick={() => openModal('signup')}>Create account</div>
                </li>
            </ul>
        </div>
    );

    return sessionLinks();
};

export default Greeting;
