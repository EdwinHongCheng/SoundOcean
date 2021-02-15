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

        // this.handleFile = this.handleFile.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };


    // Testing - handle File (uploading Image)
    // handleFile(e) {
    //     e.preventDefault()
    //     this.setState({ cover_art: e.currentTarget.files[0] })
    // }

    afterUpload() {
        if (this.state.title.length > 0) {
            this.setState({ uploaded: true })
        }
    }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     const formData = new FormData();
    //     formData.append('track[title]', this.state.title);
    //     formData.append('track[creator_id]', this.state.creator_id)
    //     formData.append('track[cover_art]', this.state.cover_art);;
    //     $.ajax({
    //         url: `/api/tracks/`,
    //         method: "POST",
    //         data: formData,
    //         contentType: false,
    //         processData: false
    //     })

    //     this.afterUpload()
    // }

    
    // Old Way (works)
    handleSubmit(e) {
        e.preventDefault()
        this.props.createTrack(this.state)
        this.afterUpload()
    }



    // Test - rendering errors (such as Title must be at least 1 character long)
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
    // Testing - works! (LOL) - clears red errors if i go to another link
    componentWillUnmount() {
        this.props.clearErrors()
    }




    render() {
        let uploadForm = (
            <form onSubmit={this.handleSubmit}>

                {/* Test - rendering Errors when uploading track */}
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

                {/* Testing - File Upload ? */}
                {/* <input 
                    type="file"
                    onChange={this.handleFile}
                />
                <br />
                <br /> */}


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
