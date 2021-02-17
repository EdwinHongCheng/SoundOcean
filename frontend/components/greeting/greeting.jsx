import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../app/assets/images/logo.png"

const Greeting = ({ currentUser, logout, openModal }) => {

    const soundOceanLogo = (
        <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
        </Link>
    )

    const sessionLinks = () => (
        <div className="signin-navbar">
            <div className="navbar-login-left-sect">
                {soundOceanLogo}
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
