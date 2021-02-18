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
                    {/* Adding 1 so 1st comment = number 1, not 0 */}
                    <p>Comment #{idx + 1}</p> 
                    <p>{comment.body}</p>

                    {/* [TEST] Conditional Delete Button (comments can only be deleted by their author) */}
                    {/* ALSO: gave everfall admin powers (lol) */}
                    {this.props.currentUserId === comment.author_id || this.props.currentUserId === 2 ?
                        <button onClick={() => this.props.deleteComment(comment.id)}>DELETE COMMENT</button> 
                    : null}

                    <br />
                    <br /> 
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
