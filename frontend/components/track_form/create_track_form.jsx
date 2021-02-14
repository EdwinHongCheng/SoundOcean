import React from 'react'
import NavbarContainer from "../navbar/navbar_container"

class CreateTrackForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            creator_id: this.props.currentUserId,
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault
        this.props.createTrack(this.state)
    }

    // Test - rendering errors (such as Title must be at least 1 character long)

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <>
    //                     <li key={`error-${i}`} className="renderedErrors">
    //                         {error}
    //                     </li>
    //                     <br />
    //                 </>
    //             ))}
    //         </ul>
    //     );
    // }  


    render() {
        return (
            <>
                <NavbarContainer />
                <br />
                <form onSubmit={this.handleSubmit}>

                    {/* Test - rendering Errors when uploading track */}
                    {/* {this.renderErrors()} */}

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
            </>
        );
    }
}

export default CreateTrackForm;
