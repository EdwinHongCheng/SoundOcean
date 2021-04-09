import React from 'react';
import { Link } from 'react-router-dom';

// [TEST] update profile pic form
import EditUserFormContainer from '../edit_user/edit_user_form_container';

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


                        {/* <span>Track Title: </span> */}
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

            // [TEST] if current user = same as showpage's user -> let them update profile pic
            let editProfilePic;
            // [ALSO] giving user 2 (everfall) admin powers (lol)
            // [AlSO] not letting demo guest upload a new profile pic (note the parentheses)
            if (
                (this.props.currentUser.id === showUser.id || this.props.currentUser.id === 2)
                && this.props.currentUser.id !== 1) 
                {
                editProfilePic = (
                    <EditUserFormContainer
                        // [NOTE] must pass down currentUser as ownProps
                        showUser={showUser}
                    />
                )
            }

            return (
                <div className="showUserBody">

                    <div className="showUser-padding-top"></div>


                    <div className="showUser-banner">
                        <div className="show-user-banner-margin">
                            <img className="showUserProfilePic" src={this.props.showUser.profilePicURL}/>
                            <div className="showUser-banner-right">
                                <p className="showUser-username">{this.props.showUser.username}</p>
                            </div>
                        </div>
                    </div>



                    

                    


                    {editProfilePic}
                    


                    {/* All Tracks */}
                    {showUserTracks}
                    
                </div>
            )
        }


    }
}

export default ShowUser;
