import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import HomePage from './homepage';

import { openModal } from '../../actions/modal_actions';
import { fetchTracks } from '../../actions/track_actions';

const mSTP = ({ session, entities: { users }, entities }) => {
    return {
        currentUser: users[session.id],
        tracks: Object.values(entities.tracks),
        users: entities.users
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mSTP,mDTP)(HomePage);