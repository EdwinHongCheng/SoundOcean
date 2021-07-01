import React from 'react';

class EditUserForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.showPageUser.id,
            profile_pic: null,
            profilePicPreviewURL: null,
            updatingInProgress: false
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
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

        this.setState({ updatingInProgress: true })

        const formData = new FormData();
        formData.append('user[id]', this.state.id);

        if (this.state.profile_pic) {
            formData.append('user[profile_pic]', this.state.profile_pic);
        }

        this.props.updateUser(formData)
            .then(() => {
                this.setState({ updatingInProgress: false });
                if (this.state.profile_pic) {
                    this.props.closeModal();
                }
            })
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({ 
            profile_pic: null,
            profilePicPreviewURL: null
        })

        this.props.closeModal();
    }


    render() {
        {/* Update Image Preview */ }
        let imageSource;
        if (this.state.profilePicPreviewURL) {
            imageSource = this.state.profilePicPreviewURL;
        } else {
            imageSource = this.props.showPageUser.profilePicURL;
        }

        let imagePreview = (
            <div className="edit-user-prof-pic-parent">
                <img className="edit-user-prof-pic" 
                    src={imageSource} 
                />
                <img className="edit-user-prof-pic-opaque" 
                    src={imageSource} 
                />
            </div>
        )

        // Updating Pic in Progress
        let updateStart;
        if (!this.state.updatingInProgress) {
            updateStart = (
                <>
                    <p className="edit-prof-pic-cancel-button"
                        onClick={this.handleCancel}
                    >Cancel</p>
                    <p className="edit-prof-pic-save-button"
                        onClick={this.handleSubmit}
                    >Save</p>
                </>
            )
        } else {
            updateStart = <p className="updating-image-in-progress-text">Updating image...</p>
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
                            Select image
                            <input type="file" 
                                accept=".png, .jgp, .jpeg"
                                className="select-new-prof-pic-button-input"
                                onChange={this.handleFile}
                            />
                        </label>

                        <div className="edit-form-bottom-section-right">
                            {updateStart}
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default EditUserForm;
