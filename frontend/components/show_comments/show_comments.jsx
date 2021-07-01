import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

class ShowComments extends React.Component {

    componentWillUnmount() {
        this.props.clearComments()
    }

    render() {

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

        let allComments = this.props.trackComments.map((comment, idx) => {

            let dateCreated = creationDate(comment.created_at);

            return (
                <div key={comment.id} className="indiv-comment-box-all">
                    <div className="indiv-comment-box-all-margin">

                        <Link to={`/users/${comment.author_id}`}
                            className="commentProfilePic-link"
                        >
                            <img className="commentProfilePic" src={comment.profilePicURL} />
                        </Link>

                        <div className="commenter-name-and-comment">
                            <Link to={`/users/${comment.author_id}`}>
                                <p className="comment-author">{comment.author}</p>
                            </Link>
                            <p className="comment-body">{comment.body}</p>
                        </div>


                        <div className="comment-created-date-and-delete-button">
                            <p className="comment-created-date">{dateCreated}</p>


                            {/* Conditional Delete Button (comments can only be deleted by author OR admin AKA everfall) */}
                            {this.props.currentUserId === comment.author_id || this.props.currentUserId === 2 ?
                                (<div className="delete-comment-icon-parent"
                                    onClick={() => this.props.deleteComment(comment.id)}
                                 >
                                    <FontAwesomeIcon id="delete-comment-icon" icon={faTrash}/>
                                </div>)
                            : null}
                        </div>
                    </div>
                </div>
            )    
        })

        // Reversed Order - Newest Comment Appears 1st
        let allCommentsReversed = allComments.reverse();


        // Section: if No Comments
        if (allComments.length === 0) {
            return (
                <div className="no-comments-all">
                    <FontAwesomeIcon id="no-comment-icon" icon={faCommentAlt}/>
                    <p className="no-comment-top-text">Seems a little quiet over here</p>
                    <p className="no-comment-bottom-text">Be the first to comment on this track</p>
                </div>
            )
        } else {

            // Section: if Comment(s) Exist
            let totalCommentsString;
            if (allComments.length === 1) {
                totalCommentsString = "1 comment"
            } else {
                totalCommentsString = allComments.length.toString().concat(" comments")  
            }

            return (
                <div className="comments-section-all-stuff">
                    <div className="comments-section-top">
                        <FontAwesomeIcon id="tiny-comment-icon" icon={faCommentAlt}/>
                        <p className="total-comments-text">{totalCommentsString}</p>
                    </div>

                    <div className="comments-section-middle">
                        {allCommentsReversed}
                    </div>           
                </div>
            )
        }
        
    }
}

export default ShowComments;
