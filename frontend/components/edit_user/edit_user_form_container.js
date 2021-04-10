import { connect } from 'react-redux';

import EditUserForm from './edit_user_form';
import { updateUser } from '../../actions/user_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        // [NOTE] ownProps has "showUser": passed down as ownProps from modal.jsx
        showPageUser: state.entities.users[ownProps.showUserId]
    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mSTP, mDTP)(EditUserForm);
