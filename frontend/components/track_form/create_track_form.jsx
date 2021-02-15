import React from 'react'
import NavbarContainer from "../navbar/navbar_container"
import { Link } from 'react-router-dom';

class CreateTrackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            creator_id: this.props.currentUserId,
            uploaded: false // switch to True -> display "UPLOAD SUCCESS" after a good upload
        };

        this.handleSubmit = this.handleSubmit.bind(this)

        // 
        this.afterUpload = this.afterUpload.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault()
        this.props.createTrack(this.state)
        this.afterUpload()
    }

    afterUpload() {
        if (this.state.title.length > 0) {
            this.setState({ uploaded: true })
        }
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

    // Testing
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
                <label>Create Your Track
                        <input type="submit" />
                </label>
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
