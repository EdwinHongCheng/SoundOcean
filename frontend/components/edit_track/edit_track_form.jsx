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
            coverArtPreviewURL: null
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

        this.props.updateTrack(formData);
    }


    //------------------------------------------------------------------------->
    // render errors when editing (such as title = blank)
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="renderedErrors">
                        {error}
                    </li>
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

                    <div className="edit-image-preview-and-input">
                        <div className="edit-image-preview-parent">
                            {imagePreview}
                        </div>
                        {/* Edit Upload Cover Art */}
                        <label className="edit-upload-art-and-input-label">
                            <FontAwesomeIcon id="edit-camera-icon" icon={faCamera}/>
                            Replace image
                            <input type="file" className="edit-upload-art-input"
                                onChange={this.handleFile}
                            />       
                        </label>
                    </div>




                    
                    <label>Title
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Name your track"
                        />
                    </label>


                    {/* [WORKS] rendering Errors when uploading track */}
                    {this.renderErrors()}



                    <br />
                    <br />
                    <p onClick={this.handleSubmit}>Update Track</p>
                </div>

            </div>
        )
    }
}

export default EditTrackForm;
