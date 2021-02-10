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

                {/* [TEST] DropDown Button - from w3schools: How TO - Clickable Dropdown  */}
                <div className="dropdown">
                    <button onClick={myFunction} className="dropbtn">Hi, {currentUser.username}!</button>
                    <div id="myDropdown" className="dropdown-content">

                        <button className="header-button" onClick={logout}>Sign out</button>

                    </div>
                </div>

            </hgroup>
        </>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
