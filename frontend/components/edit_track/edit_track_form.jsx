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
        e.preventDefault
        this.props.updateTrack(this.state)
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Track Form</h1>

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
                </form>
            </>
        )
    }
}

export default EditTrackForm;
