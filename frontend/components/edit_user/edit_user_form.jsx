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
                <>
                    <p>New Profile Pic Preview</p>
                    <img src={this.state.profilePicPreviewURL} className="previewArt" />
                    <br />
                    <br />
                </>
            )
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Upload a New Profile Pic</h1>
                    <br />

                    {/* Profile Pic Preview */}
                    {imagePreview}
                    <input
                        type="file"
                        onChange={this.handleFile}
                    />

                    <br />
                    <br />

                    <input type="submit" value="Update Profile Pic" />
                </form>
            </div>
        );
    }
}

export default EditUserForm;
