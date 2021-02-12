import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { receiveErrors } from '../../actions/session_actions'

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Create account</Link>,
    };
};

const mDTP = dispatch => {

    let switchForm2 = () => {
        dispatch(receiveErrors([]))
        dispatch(openModal('signup'))
    }

    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <span className="here-button" onClick={switchForm2}>
                here
            </span>
        ),
        closeModal: () => {
            dispatch(closeModal())
            dispatch(receiveErrors([])) // clears Session Errors when modal = closed
        }
    };
};

export default connect(mSTP, mDTP)(SessionForm);
