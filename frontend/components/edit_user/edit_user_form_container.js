import { connect } from 'react-redux';

import EditUserForm from './edit_user_form';
import { updateUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        // [NOTE] ownProps has "showUser": passed down as ownProps in show_user.jsx
        showPageUser: ownProps.showUser
    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mSTP, mDTP)(EditUserForm);
