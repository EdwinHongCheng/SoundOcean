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
            <div className="navbar-login-left-sect">
                {soLogo}
                <p className="soundOcean-greeting-text">SoundOcean</p>
            </div>
            
            <ul className="navbar-login-right-sect">
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
        <ul className="navbar-post-signin">
            {soLogo}
            <li><a className="home-button" href="#">Home</a></li>
            <li><a className="nav-button" href="#">Stream</a></li>
            <li><a className="nav-button" href="#">Library</a></li>
            <input className="searchBar" type="input" placeholder="Search" />
            <li><a className="upload-button" href="#">Upload</a></li>
            <li><a className="nav-button" href="#">{currentUser.username}</a></li>
            <li><a className="nav-button" href="#">GitHub</a></li>
            <li><a className="nav-button" href="#">LinkedIn</a></li>

            {/* [TEST] DropDown Button - from w3schools: How TO - Clickable Dropdown  */}
            <div className="dropdown">
                <button onClick={dropdownFunc} className="dropbtn">&#8230;</button>
                <div id="myDropdown" className="dropdown-content">
                    <div onClick={logout}>Sign out</div>
                </div>
            </div>
        </ul>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
