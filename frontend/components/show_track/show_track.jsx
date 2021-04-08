import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import EditTrackFormContainer from '../edit_track/edit_track_form_container';
// import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

// [WORKS] to create comment form
import CreateCommentFormContainer from '../create_comment/create_comment_form_container';

// [WORKS] show all comments + their delete buttons (if author of comment)
import ShowCommentContainer from '../show_comments/show_comments_container';


class ShowTrack extends React.Component {
    constructor(props) {
        super(props)

        this.updateCurrentTrack = this.updateCurrentTrack.bind(this)
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

            return (
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


            

                    {/* [WORKS] Create Comment */}
                    <CreateCommentFormContainer
                        trackId={this.props.track.id}
                    />

                    {/* [WORKS] Show All of a Track's Comments */}
                    <ShowCommentContainer />


                    {/* Edit Track Form */}
                    {canEditTrack}

                    <div>
                        <Link to="/">Back to Main Page</Link>
                    </div>                    
                </div>
            )
        }  
    }
}

// export default withRouter(ShowTrack);
export default ShowTrack;
