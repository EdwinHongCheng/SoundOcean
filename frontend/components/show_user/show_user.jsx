import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMusic } from '@fortawesome/free-solid-svg-icons';
//  for Update Profile Pic Modal
import Modal from '../modal/modal';
// Show User Track (Indiv Tracks)
import ShowUserTrackContainer from './show_user_track/show_user_track_container';

class ShowUser extends React.Component {

    componentDidMount() {
        // redirect if user URL = not valid
        this.props.fetchUser(this.props.match.params.userId)
            .fail(() => this.props.history.push("/discover"));
        // fetch all tracks -> only display those owned by user
        this.props.fetchTracks();
    }

    // - if my URL wildcard changes -> this triggers a Redirect
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
        } else {
            let showUserTracks = this.props.tracks
            .filter(track => track.creator_id === this.props.showUser.id)
            .map(track => (<ShowUserTrackContainer track={track} key={track.id} />))

            // Below "All Tracks" Tab Left Side (All)
            let belowTabLeftSide;
            // - Version 1: 1+ Tracks version (display all tracks, etc)
            if (showUserTracks.length != 0) {

                // Shows Only If Current User = Show Page User AND if has 1+ tracks already uploaded
                let uploadMoreSection;
                if (this.props.currentUser.id === this.props.showUser.id) {
                    uploadMoreSection = (
                        <div className="below-left-v1-bottom-section">
                            <p className="below-left-v1-bottom-section-top-text">More uploads means more listeners.</p>
                            <Link to={`/upload`}>
                                <p className="below-left-v1-upload-more-button">Upload more</p>
                            </Link>
                        </div>
                    )
                }

                belowTabLeftSide = (
                    <div className="below-all-tracks-tab-left-parent-v1">
                        <div className="below-all-tracks-tab-left-v1">
                            <p className="below-left-v1-recent-text">Recent</p>

                            {/* All Tracks */}
                            {showUserTracks.reverse()}
                        </div>

                        {uploadMoreSection}
                    </div>
                );

            } else if (this.props.currentUser.id === this.props.showUser.id) {
                // - Version 2: No Tracks + Show User Page belongs to Current User
                //   - >have Upload button below, etc.
                belowTabLeftSide = (

                    <div className="below-all-tracks-tab-left-parent-v2">
                        <div className="below-all-tracks-tab-left-v2">
                            <FontAwesomeIcon id="below-all-tracks-tab-left-music-icon" icon={faMusic}/>

                            <p className="below-left-v2-top-text">Seems a little quiet over here</p>
                            <Link to={`/upload`}>
                                <p className="below-left-v2-bottom-text">Upload a track to share it with the SoundOcean community.</p>
                            </Link>

                            <Link to={`/upload`}>
                                <p className="below-left-v2-upload-now-button">Upload now</p>
                            </Link>
                        </div>
                    </div>
                )
            } else {
                // - Version 3: No Tracks + Show User Page IS NOT Current User
                belowTabLeftSide = (
                    <div className="below-all-tracks-tab-left-parent-v3">
                        <div className="below-all-tracks-tab-left-v3">
                            <FontAwesomeIcon id="below-all-tracks-tab-left-music-icon" icon={faMusic}/>
                            <p className="below-left-v3-top-text">Nothing to hear here</p>
                            <Link to={`/discover`}>
                                <p className="below-left-v3-bottom-text">Check out what other members have uploaded.</p>
                            </Link>
                        </div>
                    </div>
                )
            }

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

                        {/* Below Show User Banner (All) */}
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

                                {/* 1. Below "All Tracks" Tab Left Side (All) */}
                                {belowTabLeftSide}

                                {/* 2. Below "All Tracks" Tab Right Side (All) */}
                                <div className="below-showAllTrack-tab-right">
                                    <div className="show-user-info-all">
                                        <div className="show-user-info-total-tracks-parent">
                                            <p className="show-user-info-total-tracks-text">Tracks</p>
                                            <p className="show-user-info-total-tracks-number">{showUserTracks.length}</p>
                                        </div>

                                    </div>
                                    <div className="below-showAllTrack-tab-footer">
                                        <ul className="below-showAllTrack-tab-footer-links">
                                            <a className="below-showAllTrack-tab-footer-socials" target="_blank" href="https://www.linkedin.com/in/edwin-hong-cheng/">LinkedIn</a>
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
