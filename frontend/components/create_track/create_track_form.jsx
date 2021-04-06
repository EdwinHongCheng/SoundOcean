import React from 'react'
import NavbarContainer from "../navbar/navbar_container"
import { Link } from 'react-router-dom';

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
                <img src={this.state.coverArtPreviewURL} className="previewArt"/>
            )
        }

        let uploadForm;
        // Phase 1: Upload a Track
        if (this.state.audio_file === null) {
            uploadForm = (
                <div className="upload-phase-1-parent">
                    <p>Upload Audio File Here</p>
                    <label className="upload-track-input-parent">
                        Upload a Track
                        <input type="file"
                            className="upload-track-input"
                            onChange={this.handleAudioFile}
                        />            
                    </label>
                </div>
            )
        // Phase 2: Edit Track Info + Submit Form
        } else if (!this.state.uploaded) {
            uploadForm = (
                <div className="upload-form-parent">
                    <form onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <h1>Create a New Track</h1>
                        <label>Title
                                <input
                                type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label>
                        {/* Cover Art Preview */}
                        {imagePreview}
                        <p>[Optional] Upload Cover Art</p>
                        <input 
                            type="file"
                            onChange={this.handleFile}
                        />
                        {/* Audio Upload (Update) */}
                        <p>Update Track</p>
                        <input
                            type="file"
                            onChange={this.handleAudioFile}
                        />            
                        <input type="submit" value="Create Track" />
                    </form>
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
                <div className="create-track-padding"></div>
                {uploadForm}
            </div>
        );
    }
}

export default CreateTrackForm;
