import React from 'react';

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

    // Old Way
    // handleSubmit(e) {
    //     e.preventDefault()
    //     // e.stopPropagation()
    //     this.props.updateTrack(this.state)
    // }

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

        {/* Testing Preview */ }
        let imagePreview = null;
        if (this.state.coverArtPreviewURL) {
            imagePreview = (
                <>
                    <br />
                    <br />
                    <p>Cover Art Preview</p>
                    <img src={this.state.coverArtPreviewURL} className="previewArt" />
                    <br />
                    <br />
                </>
            )
        }

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Track Form</h1>
                    <br />

                    {/* Test - rendering Errors when uploading track */}
                    {this.renderErrors()}
                    
                    <label>Title
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />
                    </label>


                    {/* Cover Art Preview */}
                    {imagePreview}
                    <input
                        type="file"
                        onChange={this.handleFile}
                    />

                    <br />
                    <br />
                    <input type="submit" value="Update Track"/>
                    <span> </span>
                    <button type="button" onClick={() => this.props.deleteTrack(this.state.id)}>Delete Track</button>
                </form>
            </>
        )
    }
}

export default EditTrackForm;
