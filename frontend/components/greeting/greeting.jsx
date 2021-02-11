import React from 'react';
import { Link } from 'react-router-dom';
// Image (Ryan says not to have it yet)
import logo from "../../../app/assets/images/logo.png"

const Greeting = ({ currentUser, logout, openModal }) => {

    const soLogo = (
        <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
        </Link>
    )

    const sessionLinks = () => (
        <div className="signin-navbar">

            <div className="navbar-login-logo-text">
                {soLogo}
                <p className="soundOcean-greeting-text">SoundOcean</p>
            </div>
            

            {/* NavBar Right - Unordered List of Buttons/Links */}
            <ul className="navbar-login-signup-section">
                <li>
                    <button className="signin-button-navbar" onClick={() => openModal('login')}>Sign in</button>
                </li>
                <li>
                    <button onClick={() => openModal('signup')}>Create account</button>
                </li>
            </ul>
        </div>
    );

    // DropDown Test
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    const dropdownFunc = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    const personalGreeting = () => (
        <>
            <hgroup className="header-group">

                <ul className="navbar-UList">
                    {soLogo}
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Stream</a></li>
                    <li><a href="#">Library</a></li>
                    <li><input type="input" placeholder="Search for artists, bands, tracks, podcases" /></li>
                    <li><a href="#">Upload</a></li>

                    {/* [TEST] DropDown Button - from w3schools: How TO - Clickable Dropdown  */}
                    <li><a href="#">{currentUser.username}</a></li>

                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">LinkedIn</a></li>

                    <div className="dropdown">
                        <button onClick={dropdownFunc} className="dropbtn">&#8230;</button>
                        <div id="myDropdown" className="dropdown-content">
                            <button className="header-button" onClick={logout}>Sign out</button>
                        </div>
                    </div>
                </ul>



            </hgroup>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
