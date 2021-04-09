import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import EditTrackFormContainer from '../edit_track/edit_track_form_container';
// [TEST] Show/Update Profile Pic Modal
import EditUserFormContainer from '../edit_user/edit_user_form_container'

function Modal({ modal, closeModal, trackToEditId, showUserId }) {

    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        // [TEST] Edit Track Form Modal
        case 'editTrack':
            component = (<EditTrackFormContainer 
                trackToEditId={trackToEditId}
            />);
            break;
        case 'editProfilePic':
            component = (<EditUserFormContainer 
                showUserId={showUserId}
            />);
            break;
        default:
            return null;
    }

    // Event Listener - pressing escape closes the modal
    document.onkeydown = function(e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <div onClick={closeModal} className="close-x">&#x2715;</div>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        modal: state.ui.modal,
        // [WORKS] trackToEdit ONLY USED in show_track.jsx (using the 'editTrack' modal)
        trackToEditId: ownProps.trackToEditId,
        // [TEST] only used for editUserInfo version of modal
        showUserId: ownProps.showUserId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => { 
            dispatch(closeModal())
            dispatch(receiveErrors([])) // clears Session Errors when modal = closed
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
