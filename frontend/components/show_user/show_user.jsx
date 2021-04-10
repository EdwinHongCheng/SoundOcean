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

            let showUserTracks = this.props.tracks.map(track => 
                (this.props.showUser.id === track.creator_id ?

                    <div key={track.id}>
                        <Link to={`/tracks/${track.id}`}>
                            <span>{track.title}</span>
                        </Link>
                        
                        <Link to={`/tracks/${track.id}`}>
                            <img className="showUserTrackArt" src={track.imageURL}/>
                        </Link>
                    </div>

                    // return null if the show page user isn't the track's creator
                    : null 
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




                        {/* All Tracks */}
                        {showUserTracks}
                        
                    </div>
                </div>
                
            )
        }


    }
}

export default ShowUser;
