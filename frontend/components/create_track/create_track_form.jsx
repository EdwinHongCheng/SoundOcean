import React from 'react'
import NavbarContainer from "../navbar/navbar_container"
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
            audio_file: null // Audio File Upload
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.afterUpload = this.afterUpload.bind(this)
        this.handleFile = this.handleFile.bind(this)

        // Upload Audio File
        this.handleAudioFile = this.handleAudioFile.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    afterUpload() {
        if (this.state.title.length > 0) {
            this.setState({ uploaded: true })
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
        this.setState( { audio_file: e.currentTarget.files[0] } )
    }

    handleSubmit(e) {
        e.preventDefault();
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
            .then(this.afterUpload)
    }
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <>
                        <li key={`error-${i}`} className="renderedErrors">
                            {error}
                        </li>
                    </>
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
                <div className="image-preview-parent">
                    <img src={this.state.coverArtPreviewURL} className="upload-preview-art"/>
                </div>
            )
        }

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

                                <form onSubmit={this.handleSubmit}>
                                    {this.renderErrors()}
                                    <label>Title
                                            <input
                                            type="text"
                                            value={this.state.title}
                                            onChange={this.update('title')}
                                        />
                                    </label>
                                    <input type="submit" value="Create Track" />
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            )
        // Phase 3: Successful Upload (waits after good upload  I think ???)
        } else {
            uploadForm = (
                <>
                    <h1>!!! UPLOAD SUCCESS !!!</h1>
                    <Link to="/discover">Check out our tracks!</Link>
                </>
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
