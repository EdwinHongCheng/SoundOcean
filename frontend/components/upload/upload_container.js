import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
// NOTE: have to specify cuz initially I made the file wrong (did js instead of jsx)
import Upload from './upload.jsx';


const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Upload);
