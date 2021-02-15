import React from 'react'

class EditTrackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.currentTrack
    }

    render() {
        const currentTrack = this.state;

        if (!currentTrack) {
            return null;
        } else {
            return (
                <>
                    <p>Edit {this.currentTrack.title}</p>
                </>
            )
        }
    }
}

export default EditTrackForm;
