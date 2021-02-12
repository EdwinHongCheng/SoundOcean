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
                    <div className="signin-button-navbar" onClick={() => openModal('login')}>Sign in</div>
                </li>
                <li>
                    <div className="createAccount-button-navbar" onClick={() => openModal('signup')}>Create account</div>
                </li>
            </ul>
        </div>
    );

    // DropDown (w3schools)
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    const dropdownFunc = () => {
        document.getElementById("myDropdown").classList.toggle("show1");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show1')) {
                    openDropdown.classList.remove('show1');
                }
            }
        }
    }



    //------------------------------------------------------------------------->
    // DropDown Number 2 (for User)

    // const dropdownFunc2 = () => {
    //     document.getElementById("myDropdown2").classList.toggle("show2");
    // }

    // // Close the dropdown menu if the user clicks outside of it
    // window.onclick = function (event) {
    //     if (!event.target.matches('.dropbtn2')) {
    //         var dropdowns = document.getElementsByClassName("dropdown-content2");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show2')) {
    //                 openDropdown.classList.remove('show2');
    //             }
    //         }
    //     }
    // }




    //------------------------------------------------------------------------->
    // Post-Sign Up Page Nav Bar, etc.

    const personalGreeting = () => (
        <ul className="navbar-post-signin">

            {soLogo}

            <li><a className="home-button" href="#">Home</a></li>
            <li><a className="nav-button" href="#">Stream</a></li>
            <li><a className="nav-button" href="#">Library</a></li>
            <input className="searchBar" type="input" placeholder="Search" />
            <li><a className="upload-button" href="#">Upload</a></li>
            <li>
                <a className="nav-button" href="#">
                    {currentUser.username}
                </a>
            </li>

            <li><a className="nav-button" href="#">GitHub</a></li>
            <li><a className="nav-button" href="#">LinkedIn</a></li>

            {/* DropDown Button (w3schools): How TO - Clickable Dropdown  */}
            <div className="dropdown">
                <text onClick={dropdownFunc} className="dropbtn">&#8230;</text>
                <div id="myDropdown" className="dropdown-content">
                    <div onClick={logout}>Sign out</div>
                </div>
            </div>

        </ul>

    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
