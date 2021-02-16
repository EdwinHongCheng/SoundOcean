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
            coverArtPreviewURL: null
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.afterUpload = this.afterUpload.bind(this)
        this.handleFile = this.handleFile.bind(this)
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

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[creator_id]', this.state.creator_id)

        if (this.state.cover_art) {
            formData.append('track[cover_art]', this.state.cover_art);;
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
                        <br />
                    </>
                ))}
            </ul>
        );
    }  
    componentWillUnmount() {
        this.props.clearErrors()
    }

    render() {


        {/* Testing Preview */ }
        let imagePreview = null;
        if (this.state.coverArtPreviewURL) {
            imagePreview = (
                <>
                    <p>Cover Art Preview</p>
                    <img src={this.state.coverArtPreviewURL} className="previewArt"/>
                    <br />
                    <br />
                </>
            )
        }


        let uploadForm = (
            <form onSubmit={this.handleSubmit}>
                {this.renderErrors()}

                <h1>Create a New Track</h1>
                <br />
                <label>Title
                        <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                    />
                </label>
                <br />
                <br />

                {/* Cover Art Preview */}
                {imagePreview}
                <p>[Optional] Upload Cover Art</p>
                <input 
                    type="file"
                    onChange={this.handleFile}
                />
                <br />
                <br />
               
                <input type="submit" value="Create Track" />
            </form>
        )

        // Successful Upload Message (replaces the Upload Form after good upload)
        if (this.state.uploaded) {
            uploadForm = (
                <>
                    <h1>UPLOAD SUCCESS !!!</h1>
                    <Link to="/discover">Check out our tracks!</Link>
                </>
            )
        }

        return (
            <>
                <NavbarContainer />
                <br />
                {uploadForm}
            </>
        );
    }
}

export default CreateTrackForm;
