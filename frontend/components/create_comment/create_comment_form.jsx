import React from 'react';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            track_id: this.props.trackId
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.body.length > 0) {
            this.props.createComment(this.state)
                // [NOTE] .then (fetch track again to update new comment's author name)
                .then(() => this.props.fetchTrack(this.props.trackId))
                .then(() => {
                    this.setState({
                        body: '',
                        track_id: this.props.trackId
                    })
                })
        }
    }

    render() {

        let submitComment = this.handleSubmit;
        document.onkeydown = function(e) {
            if (e.keyCode === 13) {
                submitComment(e);
            }
        };

        return (
            <div className="create-comment-input-parent">
                <input type="text" className="create-comment-input"
                    placeholder="Write a comment"
                    value={this.state.body}
                    onChange={this.update('body')} 
                />
            </div>
        )
    }
}

export default CreateCommentForm;
