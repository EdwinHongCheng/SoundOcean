import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { receiveCurrentTrack, pauseTrack } from '../../actions/ui_actions';


const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => { 
        dispatch(logout());
        // logging out -> set Current Track to null
        dispatch(receiveCurrentTrack(null)),
        // logging out -> set isPlaying to false
        dispatch(pauseTrack())
    }
});

export default connect(mSTP, mDTP)(Navbar);