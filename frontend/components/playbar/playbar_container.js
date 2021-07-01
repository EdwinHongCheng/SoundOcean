import { connect } from 'react-redux';

import { receiveCurrentTrack, playTrack, pauseTrack } from '../../actions/ui_actions'
import PlayBar from './playbar';


const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentTrack: state.entities.tracks[state.ui.currentTrack.id],
        isPlaying: state.ui.isPlaying
    };
};

const mDTP = dispatch => ({
    receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
    // Updates "isPlaying" state (Play / Pause)
    playTrack: () => dispatch(playTrack()),
    pauseTrack: () => dispatch(pauseTrack())
});

export default connect(mSTP, mDTP)(PlayBar);
