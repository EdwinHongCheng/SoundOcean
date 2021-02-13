import { connect } from 'react-redux';
// NOTE: have to specify cuz initially I made the file wrong (did js instead of jsx)
import Upload from './upload.jsx';

// import { logout } from '../../actions/session_actions';

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    // logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Upload);
