import React from 'react';

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
                        <br/>
                        <p>Track Title: {track.title}</p>
                        <img className="showUserTrackArt" src={track.imageURL}/>
                        <br />
                    </div>

                    // return null if the show page user isn't the track's creator
                    : null 
                )
            )

            return (
                <div className="showUserBody">

                    <br />
                    <p>{this.props.showUser.username}'s Show Page</p>
                    <br />
                    <img className="showUserProfilePic" src={this.props.showUser.profilePicURL}/>

                    <br />
                    {showUserTracks}
                </div>
            )
        }
        // *** [if showUser = now exists + passed down from global state] ----->
    }
}

export default ShowUser;
