import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import EditTrackFormContainer from '../edit_track/edit_track_form_container';
// import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faPencilAlt, faTrash, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

// [WORKS] to create comment form
import CreateCommentFormContainer from '../create_comment/create_comment_form_container';

// [WORKS] show all comments + their delete buttons (if author of comment)
import ShowCommentContainer from '../show_comments/show_comments_container';

// [TEST]
import Modal from '../modal/modal';


class ShowTrack extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
        }

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
        this.toggleEditTrackModal = this.toggleEditTrackModal.bind(this)
    }

    componentDidMount() {
        // [WORKS] Lina's way - redirect if track URL = not valid
        this.props.fetchTrack(this.props.match.params.trackId)
            .fail(() => this.props.history.push("/discover"))
    }

    // [WORKS perfectly w the above added code] 
    // - Lina: if my URL wildcard changes -> this triggers
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.trackId !== this.props.match.params.trackId) {
            this.props.fetchTrack(this.props.match.params.trackId)
                .fail(() => this.props.history.push("/discover"))
        }
    }

    // [WORKS] for my Play This Track button
    updateCurrentTrack(e) {
        e.preventDefault()
        this.props.receiveCurrentTrack(this.props.track.id)
        this.props.playTrack()
    }

    toggleEditTrackModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    render() {
        let currentTrack = this.props.track; // if no such track -> currentTrack = null
        if (!currentTrack) {
            return null;
        // *** [if currentTrack exists]---------------------------------------->    
        } else {

            // enter the track's created_at string -> converts to a date string
            let creationDate = (trackDate) => {
                let year = trackDate.slice(0, 4);
                let month = trackDate.slice(5, 7);
                if (month[0] === "0") month = month.slice(1);
                let day = trackDate.slice(8, 10);
                if (day[0] === "0") day = day.slice(1);
                let newString = month.concat("/").concat(day).concat("/").concat(year);

                return newString;
            }

            let dateCreated = creationDate(currentTrack.created_at);


            let canEditTrack;
            if (this.props.currentUser.id === currentTrack.creator_id
                // everfall id = 2 -> has Admin Powers lol
                || this.props.currentUser.id === 2) {
                canEditTrack = (
                    <EditTrackFormContainer 
                        track={currentTrack}
                        history={this.props.history}
                    />
                )
            }

            // [WORKS] ------------------------------------------------->
            let currentTrackButton;
            if (this.props.track !== this.props.currentTrack) {
                currentTrackButton = (
                    <div className="track-show-button"
                        onClick={this.updateCurrentTrack}>
                        <FontAwesomeIcon id="show-track-play-icon" icon={faPlay}/>
                    </div>
                )
            } else if (this.props.isPlaying) {
                currentTrackButton = (
                    <div className="track-show-button"
                        onClick={
                        () => {
                            document.getElementById('audio').pause();
                            this.props.pauseTrack();
                        }}>
                        <FontAwesomeIcon id="show-track-pause-icon" icon={faPause}/>
                    </div>
                )
            } else {
                currentTrackButton = (
                    <div className="track-show-button"
                        onClick={
                        () => {
                            document.getElementById('audio').play();
                            this.props.playTrack();
                        }}>
                        <FontAwesomeIcon id="show-track-play-icon" icon={faPlay}/>
                    </div>
                )
            }
            // -------------------------->

            // [WIP] Edit + Delete Buttons (if Current User = Track Creator)
            let allButtons;
            if (this.props.currentUser.id === currentTrack.creator_id
                // everfall id = 2 -> has Admin Powers lol
                || this.props.currentUser.id === 2) 
            {
                allButtons = (
                    <div className="all-track-mod-icons">
                        {/* [WIP] need to make modal for Edit Track Button */}
                        <div className="track-modify-icon-parent"
                            onClick={this.props.openModal}
                        >
                            <FontAwesomeIcon id="track-edit-button" icon={faPencilAlt}/>
                        </div>

                        {/* [After Finishing Modal] turn back on Delete */}
                        <div className="track-modify-icon-parent"
                            // onClick={() => this.props.deleteTrack(this.props.track.id)
                            //     .then(() => this.props.history.push("/"))}
                        >
                            <FontAwesomeIcon id="track-delete-button" icon={faTrash}/>
                        </div>
                    </div>
                )
            }

            return (
                <div>
                    {/* [WIP] Edit Track Form Modal */}
                    <Modal trackToEditId={this.props.track.id} />

                    <div className="showTrackBody">
                        <div className="showTrack-padding-top"></div>

                        <div className="show-track-banner">
                            <div className="show-track-banner-margin">
                                <div className="show-track-banner-left">
                                    <div className="show-track-banner-left-top"> 
                                        {currentTrackButton}

                                        <div className="show-track-creator-and-title">
                                            <div className="show-track-creator-and-date">
                                                <Link to={`/users/${currentTrack.creator_id}`}
                                                    className="show-track-creator-parent">
                                                    <p className="show-track-creator">{currentTrack.creator}</p>
                                                </Link>
                                                <p className="show-track-creation-date">{dateCreated}</p>
                                            </div>
                                            <p className="show-track-title">{currentTrack.title}</p>           
                                        </div>
                                    </div>

                                </div>
                                {/* Cover Art */}
                                <img src={currentTrack.imageURL} className="track-show-coverArt"/>
                            </div>
                        </div>

                        {/* [WIP] Create Comment Box, etc */}

                        <div className="below-show-track-banner-all">

                            <div className="below-show-track-banner-left">
                                <div className="comment-prof-pic-and-input">
                                    <img className="show-track-comment-mini-prof-pic" src={this.props.currentUser.profilePicURL} />
                                    <CreateCommentFormContainer
                                        trackId={this.props.track.id}
                                    />
                                </div>
                                {allButtons}

                                <div className="below-edit-delete-buttons-all">
                                    <div className="creator-pic-and-name">
                                        <img src={this.props.track.profilePicURL}
                                            className="showTrack-creator-pic"
                                        />
                                        <p className="showTrack-creator-name">
                                            {this.props.track.creator}
                                        </p>
                                    </div>

                                    <div className="show-track-comments-section">
                                        {/* [WORKS] Show All of a Track's Comments */}
                                        <ShowCommentContainer />
                                    </div>

                                </div>
                            </div>






                            {/* [WIP] For Social Links + Language: English Footer */}
                            <div className="below-show-track-banner-right">

                            </div>
                        </div>






                    
                    </div>
                </div>
            )
        }  
    }
}

// export default withRouter(ShowTrack);
export default ShowTrack;
