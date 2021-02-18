import React from 'react';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            // [TEST] pass it down from show page to Container
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

        // debugger

        e.preventDefault();
        
        this.props.createComment(this.state);

        this.setState({
            body: '',
            track_id: this.props.trackId
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <textarea
                        placeholder="Write a comment"
                        value={this.state.body}
                        onChange={this.update('body')} 
                    />

                    <input type="submit" value="Create Comment" />

                </form>
            </div>
        )
    }
}

export default CreateCommentForm;
