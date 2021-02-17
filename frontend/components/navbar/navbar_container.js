import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

// [TEST] [WORKS] log out -> set Current Track to null
import { receiveCurrentTrack } from '../../actions/ui_actions';


const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => { 
        dispatch(logout());
        // [TEST] [WORKS] log out -> set Current Track to null
        dispatch(receiveCurrentTrack(null))
    }
});

export default connect(mSTP, mDTP)(Navbar);