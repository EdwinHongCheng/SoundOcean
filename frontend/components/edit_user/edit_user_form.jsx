import React from 'react';

class EditUserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.showPageUser.id,
            profile_pic: null,
            profilePicPreviewURL: null
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
            this.setState({ profile_pic: file, profilePicPreviewURL: fileReader.result })
        }

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id);

        if (this.state.profile_pic) {
            formData.append('user[profile_pic]', this.state.profile_pic);
        }

        this.props.updateUser(formData);
    }


    render() {

        {/* [WORKS] Update Image Preview */ }
        let imagePreview = null;
        if (this.state.profilePicPreviewURL) {
            imagePreview = (
                <div className="edit-user-prof-pic-parent">
                    <img className="edit-user-prof-pic" 
                        src={this.state.profilePicPreviewURL} 
                    />
                    <img className="edit-user-prof-pic-opaque" 
                        src={this.state.profilePicPreviewURL} 
                    />
                </div>
            )
        } else {
            imagePreview = (
                <div className="edit-user-prof-pic-parent">
                    <img className="edit-user-prof-pic"
                        src={this.props.showPageUser.profilePicURL}
                    />
                    <img className="edit-user-prof-pic-opaque"
                    src={this.props.showPageUser.profilePicURL} />
                </div>
            )
        }

        return (
            <div className="edit-form-body">
                <div className="edit-form-body-margin">
                    <p className="edit-form-username">
                        {this.props.showPageUser.username}
                    </p>
                    <p className="edit-form-top-text">
                        For best results, upload images of at least 1000x1000 pixels.
                    </p>
                    {imagePreview}

                    <div className="edit-form-bottom-section">
                        
                        <label className="select-new-prof-pic-button">
                            Select an image
                            <input type="file" className="select-new-prof-pic-button-input"
                            onChange={this.handleFile}
                            />
                        </label>


                        <div className="edit-form-bottom-section-right">

                        </div>

                    </div>




                </div>


            
            </div>
        );
    }
}

export default EditUserForm;
