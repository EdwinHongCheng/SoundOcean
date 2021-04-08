import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class CreateTrackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            creator_id: this.props.currentUserId,
            uploaded: false, // switch to True -> display "UPLOAD SUCCESS" after a good upload
            cover_art: null, // for Cover Art File Upload
            coverArtPreviewURL: null,
            audio_file: null, // Audio File Upload
            uploadingInProgress: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.afterUpload = this.afterUpload.bind(this)
        this.handleFile = this.handleFile.bind(this)

        // Upload Audio File
        this.handleAudioFile = this.handleAudioFile.bind(this);
        this.handleAudioFile2 = this.handleAudioFile2.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    afterUpload() {
        if (this.state.title.length > 0) {
            this.setState({ 
                uploaded: true,
                uploadingInProgress: false 
            })
        }
    }

    handleFile(e) {
        // Cover Art Preview
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ cover_art: file, coverArtPreviewURL: fileReader.result })
        }

        if (file) {
            fileReader.readAsDataURL(file);
        } 
    }

    // Upload Audio File
    handleAudioFile(e) {
        this.setState( { 
            audio_file: e.currentTarget.files[0], 
            title: e.currentTarget.files[0].name   
        } );
    }

    // Upload Audio File (Post-Upload)
    handleAudioFile2(e) {
        this.setState( { 
            uploaded: false,
            cover_art: null,
            coverArtPreviewURL: null,
            audio_file: e.currentTarget.files[0], 
            title: e.currentTarget.files[0].name   
        } );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState( { uploadingInProgress: true })
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[creator_id]', this.state.creator_id)

        if (this.state.cover_art) {
            formData.append('track[cover_art]', this.state.cover_art);;
        }

        if (this.state.audio_file) {
            formData.append('track[audio_file]', this.state.audio_file);;
        }

        this.props.createTrack(formData)
            .fail(() => this.setState({ uploadingInProgress: false }))
            .then(this.afterUpload)
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({ 
            title: '',
            cover_art: null,
            coverArtPreviewURL: null,
            audio_file: null,
            uploadingInProgress: false 
        })
        this.props.clearErrors();
    }
     
    renderErrors() {
        return (
            <ul className="upload-renderedErrors-parent">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="upload-renderedErrors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    render() {
        {/* Image Preview */ }
        let imagePreview = null;
        if (this.state.coverArtPreviewURL) {
            imagePreview = (
                <img src={this.state.coverArtPreviewURL} className="upload-preview-art"/>
            )
        } else {
            imagePreview = (
                <img src="https://soundocean-seed.s3-us-west-1.amazonaws.com/default_cover_art.jpg" 
                className="upload-preview-art"/>
            )   
        }

        // Upload/Uploading in Progress
        let uploadStart;
        if (!this.state.uploadingInProgress) {
            uploadStart = (
                <>
                    <p className="upload-track-submit-cancel-button"
                        onClick={this.handleCancel}
                    >Cancel</p>
                    <p className="upload-track-submit-upload-button"
                        onClick={this.handleSubmit}
                    >Upload</p>
                </>
            )
        } else {
            uploadStart = <p className="uploading-in-progress-text">Uploading...</p>
        }


        {/* Image Preview Post-Upload */ }
        let postUploadImagePreview = null;
        if (this.state.coverArtPreviewURL) {
            postUploadImagePreview = (
                <img src={this.state.coverArtPreviewURL} className="upload-success-cover-art"/>
            )
        } else {
            postUploadImagePreview = (
                <img src="https://soundocean-seed.s3-us-west-1.amazonaws.com/default_cover_art.jpg" 
                className="upload-success-cover-art"/>
            )   
        }

        let uploadSuccessLink = (
            <Link to={`/tracks/${this.props.newestTrackId}`} className="upload-success-link">
                Go to your track
            </Link>
        )

        let uploadForm;
        // Phase 1: Upload a Track
        if (this.state.audio_file === null) {
            uploadForm = (
                <div className="upload-phase-1-parent">
                    <p className="upload-p1-top-text">Click the button to upload an audio file</p>
                    <label className="upload-track-input-parent">
                        Upload a Track
                        <input type="file"
                            className="upload-track-input"
                            onChange={this.handleAudioFile}
                        />            
                    </label>
                </div>
            )
        } else if (!this.state.uploaded) {
            // Phase 2: Edit Track Info + Submit Form
            uploadForm = (
                <div>
                    {/* Audio Upload (Update) */}
                    <div className="replace-track-parent">
                        <p className="replace-track-left">Replace the current audio track</p>
                        <label className="replace-track-right">Replace File
                            <input className="replace-track-input"
                                type="file"
                                onChange={this.handleAudioFile}
                            /> 
                        </label>
                    </div>

                    <div className="form-info-parent-parent">
                        <div className="form-info-parent">

                            <div className="form-info-tab-parent">
                                <p className="form-info-tab">Basic info</p>
                            </div>

                            <div className="form-info">
                                {/* Cover Art Preview */}
                                <div className="image-preview-and-input">
                                    <div className="image-preview-parent">
                                        {imagePreview}
                                    </div>
                                    {/* Upload Cover Art */}
                                    <label className="upload-art-and-input-label">
                                        <FontAwesomeIcon id="camera-icon" icon={faCamera}/>
                                        Upload image
                                        <input type="file" className="upload-art-input"
                                            onChange={this.handleFile}
                                        />       
                                    </label>
                                </div>

                                <div className="track-title-input-all">
                                    <div className="track-title-and-star">
                                        <p className="track-title-text">Title</p>
                                        <p className="track-title-star">*</p>
                                    </div>

                                    <input type="text"
                                        className="track-title-input"
                                        value={this.state.title}
                                        onChange={this.update('title')}
                                        placeholder="Name your track"
                                    />

                                    {this.renderErrors()}
                                </div>
                            </div>
                        </div>

                         <div className="upload-track-submit-section-parent">
                            <div className="upload-track-submit-section">
                                <div className="upload-track-submit-left">
                                    <p className="upload-track-submit-star">*</p>
                                    <p className="upload-track-submit-text">Required fields</p>
                                </div>
                                {/* [Note] Clicking "Upload" -> "Uploading..." */}
                                <div className="upload-track-submit-right">
                                    {uploadStart}
                                </div>
                            </div>
                         </div>

                    </div>
                </div>

            )
        } else {
            // Phase 3: Successful Upload (waits after good upload)
            uploadForm = (
                <div className="upload-phase-3-parent">
                    <div className="upload-phase-3">
                        <div className="phase-3-upload-file">
                            <div className="phase-3-upload-file-margin">
                                <p className="phase-3-upload-file-left">Click the button to upload an audio file</p>
                                <label className="upload-track-input-parent2">
                                    Upload a Track
                                    <input type="file"
                                        className="upload-track-input"
                                        onChange={this.handleAudioFile2}
                                    />            
                                </label>
                            </div>
                        </div>

                        {/* [WIP] Phase 3 */}
                        <div className="upload-success-box">
                            <div className="upload-success-box-margin">
                                <div className="upload-success-cover-art-parent">
                                    {postUploadImagePreview}    
                                </div>

                                <div className="upload-success-box-right">
                                    <div className="upload-success-box-right-top">
                                        <p className="uploaded-track-creator">{this.props.currentUser.username}</p>
                                        <p className="uploaded-track-title">{this.state.title}</p>
                                    </div>

                                    <div className="upload-success-box-right-bottom">
                                        <p className="upload-complete-text">Upload complete.</p>
                                        <p className="upload-complete-text">{uploadSuccessLink}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
        return (
            <div className="createTrackFormBody">
                <div className="upload-tab-parent">
                    <p className="upload-tab">Upload</p>
                </div>

                <div className="upload-form-parent-parent">
                    {uploadForm}
                </div>

                <div className="upload-footer-parent">
                    <div className="upload-footer">
                        <ul className="upload-footer-links">
                            <a className="upload-footer-socials" target="_blank" href="https://www.linkedin.com/in/edwin-cheng-a603819b/">LinkedIn</a>
                            <li> - </li>
                            <a className="upload-footer-socials" target="_blank" href="https://github.com/EdwinHongCheng/SoundOcean">GitHub</a>
                            <li> - </li>
                            <a className="upload-footer-socials" target="_blank" href="https://angel.co/u/edwin-cheng-5">AngelList</a>
                        </ul>
                        <p className="upload-language-text">Language: English (US)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTrackForm;
