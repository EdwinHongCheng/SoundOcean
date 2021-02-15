import React from 'react';

class EditTrackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.track // { id, title, author_id }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        // e.stopPropagation()
        this.props.updateTrack(this.state)
    }

    //------------------------------------------------------------------------->
    // render errors when editing (such as title = blank)
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <>
                        <li key={`error-${i}`} className="renderedErrors">
                            {error}
                        </li>
                        <br />
                    </>
                ))}
            </ul>
        );
    }
    // clears rendered errors if i click on another link, etc
    componentWillUnmount() {
        this.props.clearErrors()
    }
    //------------------------------------------------------------------------->

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Track Form</h1>

                    {/* Test - rendering Errors when uploading track */}
                    {this.renderErrors()}

                    <label>Title
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>

                    <label>Update Track
                        <input type="submit" />
                    </label>

                    <button type="button" onClick={() => this.props.deleteTrack(this.state.id)}>Delete Track</button>
                </form>
            </>
        )
    }
}

export default EditTrackForm;
