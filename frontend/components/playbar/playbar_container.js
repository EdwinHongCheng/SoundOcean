import { connect } from 'react-redux';

import { receiveCurrentTrack } from '../../actions/ui_actions';
import PlayBar from './playbar';


const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentTrack: state.entities.tracks[state.ui.currentTrack.id]
    };
};

const mDTP = dispatch => ({
    receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId))
});

export default connect(mSTP, mDTP)(PlayBar);
