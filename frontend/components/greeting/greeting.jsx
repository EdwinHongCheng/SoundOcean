import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="navbar-except-logo">
            <p className="soundOcean-greeting-text">SoundOcean</p>
            
            {/* NavBar Right - Unordered List of Buttons/Links */}
            <ul className="navbar-login-signup">
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
    const myFunction = () => {
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Stream</a></li>
                    <li><a href="#">Library</a></li>
                    <li><input type="input" placeholder="Search for artists, bands, tracks, podcases" /></li>
                    <li><a href="#">Upload</a></li>

                    {/* [TEST] DropDown Button - from w3schools: How TO - Clickable Dropdown  */}
                    <div className="dropdown">
                        <button onClick={myFunction} className="dropbtn">Hello, {currentUser.username}</button>
                        <div id="myDropdown" className="dropdown-content">
                            <button className="header-button" onClick={logout}>Sign out</button>
                        </div>
                    </div>

                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    <li><a href="#" className="unicode-3-dots">&#8230;</a></li>
                </ul>



            </hgroup>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
