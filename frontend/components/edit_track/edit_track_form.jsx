import React from 'react';

class EditTrackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            cover_art: null, // for Cover Art File Upload
            coverArtPreviewURL: null,
        };
    }

    render() {
        return (
            <div className="edit-track-form-modal-content" 
                onClick={this.props.closeModal}
            >
                <p>Current Show Track's Id: {this.props.trackToEditId}</p>
                <p>Current User's Id: {this.props.currentUserId}</p>
            </div>
        )
    }
}

export default EditTrackForm;
