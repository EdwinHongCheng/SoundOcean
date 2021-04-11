import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
// [WORKING] for Update Profile Pic Modal
import Modal from '../modal/modal';

class ShowUser extends React.Component {

    componentDidMount() {
        // [WORKS] Lina's way - redirect if user URL = not valid
        this.props.fetchUser(this.props.match.params.userId)
            .fail(() => this.props.history.push("/discover"))

        // [TEST] want to fetch all tracks -> only display those owned by user
        this.props.fetchTracks();
    }

    // [WORKS] based on show_track.jsx way (Lina)
    // - if my URL wildcard changes -> this triggers
    // -> Redirect: should be a redirect
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId)
                .fail(() => this.props.history.push("/discover"))
        }
    }


    render () {
        let showUser = this.props.showUser;

        if (!showUser) {
            return null;

        // *** [if showUser = now exists + passed down from global state] ----->
        } else {

            let showUserTracks = this.props.tracks
            .filter(track => track.creator_id === this.props.showUser.id)
            .map(track => 
                (<div key={track.id}>
                    <Link to={`/tracks/${track.id}`}>
                        <span>{track.title}</span>
                    </Link>
                    
                    <Link to={`/tracks/${track.id}`}>
                        <img className="showUserTrackArt" src={track.imageURL}/>
                    </Link>
                </div>
                )
            )

            // [AFTER FINISHING] Turn "Don't Let guest update Profile Pic" back on
            let updateProfilePicButton;
            if ((this.props.currentUser.id === showUser.id 
                    && this.props.currentUser.id !== 1
                ) || this.props.currentUser.id === 2) {
                updateProfilePicButton = (
                    <label className="update-profile-pic-all"
                        onClick={this.props.openModal}
                    >
                        <FontAwesomeIcon id="update-profile-pic-camera-icon" icon={faCamera}/>
                        Update image    
                    </label>
                )
            }

            // enter the users's created_at string -> converts to a date string
            let creationDate = (joinDate) => {
                let year = joinDate.slice(0, 4);
                let month = joinDate.slice(5, 7);
                if (month[0] === "0") month = month.slice(1);
                let day = joinDate.slice(8, 10);
                if (day[0] === "0") day = day.slice(1);
                let newString = month.concat("/").concat(day).concat("/").concat(year);

                return newString;
            }

            let dateJoined = creationDate(this.props.showUser.created_at);

            return (
                <div>
                    {/* Update/Show User Profile Pic Modal */}
                    <Modal showUserId={this.props.showUser.id} />

                    <div className="showUserBody">
                        <div className="showUser-padding-top"></div>

                        <div className="showUser-banner">
                            <div className="show-user-banner-margin">
                                <div className="prof-pic-and-replace-button">
                                    <img className="showUserProfilePic" src={this.props.showUser.profilePicURL}/>
                                    {updateProfilePicButton}
                                </div>

                                <div className="showUser-banner-right">
                                    <div>
                                        <p className="showUser-username">{this.props.showUser.username}</p>
                                    </div>
                                    <div>
                                        <p className="showUser-join-date">Member since {dateJoined}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* [WIP] Below Show User Banner (All) */}

                        <div className="below-show-user-banner-all">
                            <div className="below-show-user-banner-all-margin">
                                <div className="show-user-all-tracks-tab-parent">
                                    <div className="show-user-all-tracks-tab">
                                        All Tracks
                                    </div>
                                </div>
                            </div>


                            {/* Below "All Tracks" Tab (All: Left + Right) */}
                            <div className="below-all-tracks-tab-all">

                                <div className="below-all-tracks-tab-left">
                                    {/* All Tracks */}
                                    {showUserTracks}
                                </div>





                                {/* [WIP] Show Track Right Side (Below Banner) */}
                                <div className="below-showAllTrack-tab-right">


                                    <div className="show-user-info-all">
                                        <div className="show-user-info-total-tracks-parent">
                                            <p className="show-user-info-total-tracks-text">Tracks</p>
                                            <p className="show-user-info-total-tracks-number">{showUserTracks.length}</p>
                                        </div>

                                    </div>


                                    <div className="below-showAllTrack-tab-footer">
                                        <ul className="below-showAllTrack-tab-footer-links">
                                            <a className="below-showAllTrack-tab-footer-socials" target="_blank" href="https://www.linkedin.com/in/edwin-cheng-a603819b/">LinkedIn</a>
                                            <li> - </li>
                                            <a className="below-showAllTrack-tab-footer-socials" target="_blank" href="https://github.com/EdwinHongCheng/SoundOcean">GitHub</a>
                                            <li> - </li>
                                            <a className="below-showAllTrack-tab-footer-socials" target="_blank" href="https://angel.co/u/edwin-cheng-5">AngelList</a>
                                        </ul>
                                        <p className="below-showAllTrack-tab-language-text">Language: English (US)</p>
                                    </div>

                                </div>


                            </div>



                        </div>







                        
                    </div>
                </div>
                
            )
        }


    }
}

export default ShowUser;
