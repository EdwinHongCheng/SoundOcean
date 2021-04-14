import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class EditTrackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: this.props.track.title,
            id: this.props.track.id,
            creator_id: this.props.track.creator_id,
            cover_art: null, // for Cover Art File Upload
            coverArtPreviewURL: null,
            updateSuccess: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        // Testing Preview
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ cover_art: file, coverArtPreviewURL: fileReader.result })
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[creator_id]', this.state.creator_id)
        formData.append('track[id]', this.state.id)

        if (this.state.cover_art) {
            formData.append('track[cover_art]', this.state.cover_art);
        }

        this.props.updateTrack(formData)
            .then(() => {
                if (this.state.title) {
                    this.props.closeModal();
                }
            })
    }

    //------------------------------------------------------------------------->
    // render errors when editing (such as title = blank)
    renderErrors() {
        return (
            <ul className="edit-renderedErrors-parent">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="edit-renderedErrors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    // clears rendered errors if i click on another link, etc
    componentWillUnmount() {
        this.props.clearErrors();
    }
    //------------------------------------------------------------------------->

    render() {
        {/* [WORKS] Update Image Preview */ }
        let imagePreview;
        if (this.state.coverArtPreviewURL) {
            imagePreview = (
                <img src={this.state.coverArtPreviewURL} className="edit-modal-preview-art" />
            )
        } else {
            imagePreview = (
                <img src={this.props.track.imageURL} className="edit-modal-preview-art" />
            )
        }

        return (
            <div className="edit-track-form-modal-content">
                
                <div className="edit-track-form-margin">
                    <div className="edit-form-info-tab-parent">
                        <p className="edit-form-info-tab">Basic info</p>
                    </div>

                    <div className="edit-form-info">
                        <div className="edit-image-preview-and-input">
                            <div className="edit-image-preview-parent">
                                {imagePreview}
                            </div>
                            {/* Edit Upload Cover Art */}
                            <label className="edit-upload-art-and-input-label">
                                <FontAwesomeIcon id="edit-camera-icon" icon={faCamera}/>
                                Replace image
                                <input type="file" 
                                    accept=".png, .jpg, .jpeg"
                                    className="edit-upload-art-input"
                                    onChange={this.handleFile}
                                />       
                            </label>
                        </div>

                        {/* Change Title Input */}
                        <div className="edit-track-title-input-all">
                            <div className="edit-track-title-and-star">
                                <p className="edit-track-title-text">Title</p>
                                <p className="edit-track-title-star">*</p>
                            </div>
                            
                            <input type="text"
                                className="edit-track-title-input"
                                value={this.state.title}
                                onChange={this.update('title')}
                                placeholder="Name your track"
                            />
                            {this.renderErrors()}
                        </div>
                    </div>
                    
                    <div className="edit-track-submit-section-parent">
                        <div className="edit-track-submit-section">
                            <div className="edit-track-submit-left">
                                <p className="edit-track-submit-star">*</p>
                                <p className="edit-track-submit-text">Required fields</p>
                            </div>

                            <div className="edit-track-submit-right">
                                <p className="edit-track-submit-cancel-button"
                                    onClick={this.props.closeModal}
                                >Cancel</p>
                                <p className="edit-track-submit-button" onClick={this.handleSubmit}>Update Track</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditTrackForm;
