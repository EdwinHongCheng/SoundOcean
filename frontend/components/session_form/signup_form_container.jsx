import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { receiveErrors } from '../../actions/session_actions';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Sign in</Link>,
    };
};

const mDTP = dispatch => {

    let switchForm1 = () => {
        dispatch(receiveErrors([]))
        dispatch(openModal('login'))
    }

    return {
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <span className="here-button" onClick={switchForm1}>
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
