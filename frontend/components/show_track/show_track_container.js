import { connect } from 'react-redux';
import ShowTrack from "./show_track";
import { fetchTrack, fetchTracks, deleteTrack } from '../../actions/track_actions';
import { receiveCurrentTrack, playTrack, pauseTrack } from '../../actions/ui_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        // NOTE: track refers to the show page's specific track
        track: state.entities.tracks[ownProps.match.params.trackId],
        currentUser: state.entities.users[state.session.id],
        // NOTE: currentTrack refers to what's playing in Play Bar now
        currentTrack: state.entities.tracks[state.ui.currentTrack.id],
        // Updates isPlaying state (Play Pause)
        isPlaying: state.ui.isPlaying,
        history: ownProps.history
    }
}

const mDTP = dispatch => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        receiveCurrentTrack: trackId => dispatch(receiveCurrentTrack(trackId)),
        // Updates isPlaying state (Play Pause)
        playTrack: () => dispatch(playTrack()),
        pauseTrack: () => dispatch(pauseTrack()),
        fetchTracks: () => dispatch(fetchTracks()),
        deleteTrack: trackId => dispatch(deleteTrack(trackId)),
        // Open/Close Edit Track Form Modal (see session form container)
        openModal: () => { dispatch(openModal('editTrack')) },
        closeModal: () => { dispatch(closeModal()) },
    }
}

export default connect(mSTP, mDTP)(ShowTrack);
