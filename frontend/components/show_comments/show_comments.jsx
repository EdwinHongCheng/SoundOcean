import React from 'react';

class ShowComments extends React.Component {

    // [TEST] want to clear global state of comments once exiting show page
    componentWillUnmount() {
        this.props.clearComments()
    }

    render() {

        let allComments = this.props.trackComments.map((comment, idx) => {

            return (
                <div key={comment.id}>

                    <p>_____________________________________________</p>
                    <br />

                    {/* [DONT NEED] Adding 1 so 1st comment = number 1, not 0 */}
                    {/* <p>Comment #{idx + 1}</p> */}


                    {/* [!!! JANK WORKS] NOTE: see create_comment_form.jsx */}
                    <img className="commentProfilePic" src={comment.profilePicURL} />
                    <span> {comment.author}</span>
                    <br />
                    <br />


                    <p>{comment.body}</p>

                    {/* [WORKS] Conditional Delete Button (comments can only be deleted by their author) */}
                    {/* ALSO: gave everfall admin powers (lol) */}
                    {this.props.currentUserId === comment.author_id || this.props.currentUserId === 2 ?

                        (<div>
                            <br />
                            <button onClick={() => this.props.deleteComment(comment.id)}>Delete Comment</button>
                        </div>)

                    : null}

                    <p>_____________________________________________</p>
                </div>
            )    
        })
        
    
        return (
            <div>
                {allComments}               
            </div>
        )
    }
}

export default ShowComments;
