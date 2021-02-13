import { connect } from 'react-redux';
import Discover from './discover';
// import { logout } from '../../actions/session_actions';
// import { openModal } from '../../actions/modal_actions'

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    // logout: () => dispatch(logout()),
    // openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Discover);
