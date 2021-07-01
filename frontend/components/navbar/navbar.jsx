import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../app/assets/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisH, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';


class Navbar extends React.Component {

    render() {
        let currentUser = this.props.currentUser;
        let logout = this.props.logout;
    
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

                <div className="loggedin-navbar-parent">
                    <nav className="navigation-bar">
    
                        <div className="navbar-left">
                            {/* SoundOcean Logo (NavBar Ver) */}
                            <Link to="/discover" className="logo-parent">
                                <img className="navbar-logo" src={logo} alt="Logo" />
                            </Link>
                            <Link to="/discover" className="home-button">Home</Link>
                            <Link to="/stream" className="nav-button" >Stream</ Link>
                            {/* <Link to="/library" className="nav-button" >Library</ Link> */}
                        </div>
    
                        {/* <input className="searchBar" type="input" placeholder="Search" /> */}
    
                        <div className="navbar-right">
                            <Link to="/upload" className="upload-button">Upload</Link>
    
                            <Link to={`/users/${currentUser.id}`} className="prof-pic-parent">
                                <img className="mini-prof-pic" src={currentUser.profilePicURL} />
                            </Link>
                            
                            
                            {/* DropDown Button 2 (for User) */}
    
                            <div className="dropdown2">
                                <p onClick={dropdownFunc2} className="dropbtn2">{currentUser.username}</p>
                                <div id="myDropdown2" className="dropdown-content2">
                                    {/* <FontAwesomeIcon id="navbar-user-icon" icon={faUser}/> */}
                                    <Link className="dropdown-content2-child" to={`/users/${currentUser.id}`}>
                                        <FontAwesomeIcon id="navbar-user-profile-icon" icon={faUser}/>
                                        <p>Profile</p>
                                    </Link>
                                </div>
                            </div>
    
    
                            <a className="navbar-gh-icon-parent" href="https://github.com/EdwinHongCheng/SoundOcean" target="_blank">
                                <FontAwesomeIcon id="navbar-gh-icon" icon={faGithub}/>
                            </a>
    
                            <a className="navbar-gh-icon-parent" href="https://www.linkedin.com/in/edwin-cheng-a603819b/" target="_blank">
                                <FontAwesomeIcon id="navbar-gh-icon" icon={faLinkedin}/>
                            </a>
    
                            <a className="navbar-gh-icon-parent" href="https://angel.co/u/edwin-cheng-5" target="_blank">
                                <FontAwesomeIcon id="navbar-gh-icon" icon={faAngellist}/>
                            </a>
    
                            {/* <a className="nav-button" href="https://www.linkedin.com/in/edwin-cheng-a603819b/" target="_blank">LinkedIn</a> */}
    
                            {/* DropDown Button for "..." (w3schools): How TO - Clickable Dropdown  */}
                            <div className="dropdown">
                                <p onClick={dropdownFunc} className="dropbtn nav-button">...</p>
                                <div id="myDropdown" className="dropdown-content">
                                    <a href="https://github.com/EdwinHongCheng/SoundOcean" target="_blank">GitHub</a>
                                    <a href="https://www.linkedin.com/in/edwin-cheng-a603819b/" target="_blank">LinkedIn</a>
                                    <a href="https://angel.co/u/edwin-cheng-5" target="_blank">AngelList</a>
                                    <div onClick={logout}>Sign out</div>
                                </div>
                            </div>
                        </div>
    
                    </nav>
                </div>
            );
        }
        
        return (
            <div>
                {navigationBar}
            </div>
        )
    }
};

export default Navbar;
