import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from "../../../app/assets/images/logo.png"

const Navbar = ({ currentUser, logout }) => {

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

    let navigationBar;

    if (currentUser) {
        navigationBar = (
    
            <nav className="navigation-bar">
                <ul className="navbar-post-signin">
    
                    {soLogo}
    
                    <li><Link to="/discover" className="home-button">Home</Link></li>
                    <li><Link to="/stream"className="nav-button" >Stream</ Link></li>
                    <li><Link to="/library" className="nav-button" >Library</ Link></li>
                    <input className="searchBar" type="input" placeholder="Search" />
                    <li><Link to="/upload" className="upload-button">Upload</Link></li>

                    <img className="mini-prof-pic" src={currentUser.profilePicURL} />
    
                    {/* DropDown Button 2 (for User) */}
                    <li>
                        <div className="dropdown2">
                            <p onClick={dropdownFunc2} className="dropbtn2">{currentUser.username}</p>
                            <div id="myDropdown2" className="dropdown-content2">
                                <Link to={`/users/${currentUser.id}`}>
                                    <div>Profile</div>
                                </Link>
                            </div>
                        </div>
                    </li>
    
                    <li><a className="nav-button" href="https://github.com/EdwinHongCheng/SoundOcean/wiki">GitHub</a></li>
                    <li><a className="nav-button" href="https://en.wikipedia.org/wiki/LinkedIn">LinkedIn</a></li>
    
                    {/* DropDown Button for "..." (w3schools): How TO - Clickable Dropdown  */}
                    <div className="dropdown">
                        <p onClick={dropdownFunc} className="dropbtn nav-button">...</p>
                        <div id="myDropdown" className="dropdown-content">
                            <div onClick={logout}>Sign out</div>
                        </div>
                    </div>
    
                </ul>
            </nav>
        );
    }
    
    return (
        <div>
            {navigationBar}
        </div>
    )
};

export default Navbar;
