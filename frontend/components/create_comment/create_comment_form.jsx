import React from 'react';

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            // [WORKS] pass it down from show page to Container
            // Question: this = dependent on outside to drop trackId prop
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

        this.props.createComment(this.state)
            // [!!! WORKS (JANKY) ] .then (fetch track again to update comment's new author name)
            .then(() => this.props.fetchTrack(this.props.trackId))

            .then(() => {
                this.setState({
                    body: '',
                    track_id: this.props.trackId
                })
            })
    }


    // [WORKS] rendering comment errors (if blank)
    // [BUGGY - but WORKS] rendering Errors when uploading track
    //------------------------------------------------------------------------->
    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <>
    //                     <li key={`error-${i}`} className="renderedErrors">
    //                         {error}
    //                     </li>
    //                     <br />
    //                 </>
    //             ))}
    //         </ul>
    //     );
    // }
    // componentWillUnmount() {
    //     this.props.clearErrors()
    // }
    //------------------------------------------------------------------------->

    render() {
        return (
            <div>

                <p>_____________________________________________</p>
                <br />
                
                {/* [BUGGY - but WORKS] rendering Errors when uploading track */}
                {/* [BUG] the Edit Form track also renders the same errors */}
                {/* {this.renderErrors()} */}

                <form onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Write a comment"
                        value={this.state.body}
                        onChange={this.update('body')} 
                    />
                    <br />
                    <input type="submit" value="Create Comment" />
                </form>
            </div>
        )
    }
}

export default CreateCommentForm;
