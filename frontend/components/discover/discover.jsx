import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../app/assets/images/logo.png"

const Discover = ({ currentUser, logout }) => {

    const soLogo = (
        <Link to="/discover">
            <img className="logo" src={logo} alt="Logo" />
        </Link>
    )

    //------------------------------------------------------------------------->

    // DropDown (w3schools)
    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    const dropdownFunc = (e) => {
        document.getElementById("myDropdown").classList.toggle("show1");
        e.currentTarget.classList.toggle("focusedBlue");
    }

    //------------------------------------------------------------------------->
    // DropDown Number 2 (for User)

    const dropdownFunc2 = (e) => {
        document.getElementById("myDropdown2").classList.toggle("show2");
        e.currentTarget.classList.toggle("focusedBlue");
    }

    //------------------------------------------------------------------------->
    // Close BOTH dropdown menus if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show1')) {
                    openDropdown.classList.remove('show1');
                    document.querySelector(".dropbtn").classList.toggle("focusedBlue");
                }
            }
        }

        if (!event.target.matches('.dropbtn2')) {
            var dropdowns = document.getElementsByClassName("dropdown-content2");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show2')) {
                    openDropdown.classList.remove('show2');
                    document.querySelector(".dropbtn2").classList.toggle("focusedBlue");
                }
            }
        }
    }



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

            {/* DropDown Button 2  */}
            {/* Note - changed "text" tag to "p" -> issues w dropdown alignment now */}
            <li>
                <div className="dropdown2">
                    <p onClick={dropdownFunc2} className="dropbtn2">{currentUser.username}</p>
                    <div id="myDropdown2" className="dropdown-content2">
                        <div>My Tracks</div>
                    </div>
                </div>
            </li>

            <li><a className="nav-button" href="#">GitHub</a></li>
            <li><a className="nav-button" href="#">LinkedIn</a></li>

            {/* DropDown Button (w3schools): How TO - Clickable Dropdown  */}
            {/* Note - changed "text" tag to "p" -> issues w dropdown alignment now */}
            <div className="dropdown">
                <p onClick={dropdownFunc} className="dropbtn nav-button">...</p>
                <div id="myDropdown" className="dropdown-content">
                    <div onClick={logout}>Sign out</div>
                </div>
            </div>

        </ul>

    );

    return(
        <div>
            <header>
                <nav className="navigation-bar">
                    {personalGreeting()}
                </nav>
            </header>

            {/* Delete Filler below Later */ }
            <br />
            <h2 className="filler-flower-text">~ Hear the SoundWaves (◠‿◠✿) ~</h2>
        </div>
    )
};

export default Discover;
