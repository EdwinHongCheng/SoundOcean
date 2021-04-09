import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

class ShowComments extends React.Component {

    // [TEST] want to clear global state of comments once exiting show page
    componentWillUnmount() {
        this.props.clearComments()
    }

    render() {

        let allComments = this.props.trackComments.map((comment, idx) => {

            return (
                <div key={comment.id}>

                    <Link to={`/users/${comment.author_id}`}>
                        <img className="commentProfilePic" src={comment.profilePicURL} />
                        <span> {comment.author}</span>
                    </Link>



                    <p>{comment.body}</p>

                    {/* [WORKS] Conditional Delete Button (comments can only be deleted by their author) */}
                    {/* ALSO: gave everfall admin powers (lol) */}
                    {this.props.currentUserId === comment.author_id || this.props.currentUserId === 2 ?

                        (<div>
                            <button onClick={() => this.props.deleteComment(comment.id)}>Delete Comment</button>
                        </div>)

                    : null}
                </div>
            )    
        })

        // No Comments Section ------------------------------------------------>
        if (allComments.length === 0) {
            return (
                <div className="no-comments-all">
                    <FontAwesomeIcon id="no-comment-icon" icon={faCommentAlt}/>
                    <p className="no-comment-top-text">Seems a little quiet over here</p>
                    <p className="no-comment-bottom-text">Be the first to comment on this track</p>
                </div>
            )
        } else {
            let totalCommentsString;
            if (allComments.length === 1) {
                totalCommentsString = "1 comment"
            } else {
                totalCommentsString = allComments.length.toString().concat(" comments")  
            }

            // Comments Section ----------------------------------------------->
            return (
                <div className="comments-section-all-stuff">
                    <div className="comments-section-top">
                        <FontAwesomeIcon id="tiny-comment-icon" icon={faCommentAlt}/>
                        <p className="total-comments-text">{totalCommentsString}</p>
                    </div>

                    {allComments}

                    <div className="comments-section-bottom"></div>           
                </div>
            )
        }
        
    }
}

export default ShowComments;
