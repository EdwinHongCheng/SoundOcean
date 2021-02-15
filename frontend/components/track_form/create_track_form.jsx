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
            cover_art: null // for Cover Art File Upload
        };

        this.handleSubmit = this.handleSubmit.bind(this)

        this.afterUpload = this.afterUpload.bind(this)

        // [TEST] - not working
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


    // [TEST] - not working
    handleFile(e) {
        this.setState({ cover_art: e.currentTarget.files[0] })
    }

    // [TEST] - not working
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


    // Old Way (works)
    // handleSubmit(e) {
    //     e.preventDefault()
    //     this.props.createTrack(this.state)
    //         .then(this.afterUpload)
    // }

    
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

                {/* [TEST] - not working */}
                <input 
                    type="file"
                    onChange={this.handleFile}
                />
               
                <input type="submit" value="Create Track" />
            </form>
        )

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
