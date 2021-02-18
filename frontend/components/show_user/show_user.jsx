import React from 'react';

class ShowUser extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId);
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

        // [if showUser = now exists + passed down from global state] --------->
        } else {
            return (
                <div className="showUserBody">
                    <br />
                    <p>{this.props.showUser.username}'s Show Page</p>
                    <br />
                    <img className="showUserProfilePic" src={this.props.showUser.profilePicURL}/>
                </div>
            )
        }
        // [if showUser = now exists + passed down from global state] --------->
    }
}

export default ShowUser;
