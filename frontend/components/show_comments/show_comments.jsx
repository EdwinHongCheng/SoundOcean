import React from 'react';

class ShowComments extends React.Component {

    render() {

        let allComments = this.props.trackComments.map((comment, idx) => {
            return (
                <div key={comment.id}>
                    {/* Adding 1 so 1st comment = number 1, not 0 */}
                    <p>Comment #{idx + 1}</p> 
                    <p>{comment.body}</p>
                    <button onClick={() => this.props.deleteComment(comment.id)}>DELETE COMMENT</button>
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
