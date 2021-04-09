import { connect } from 'react-redux';

import EditTrackForm from './edit_track_form';
import { fetchTrack, updateTrack, receiveErrors, clearErrors } from '../../actions/track_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        track: state.entities.tracks[ownProps.trackToEditId],
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        // [WORKS] Render Errors for edit
        errors: state.errors.trackErrors,
    }
}

const mDTP = dispatch => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        updateTrack: track => dispatch(updateTrack(track)),
        // [WORKS] clear edit errors (old ver)
        clearErrors: () => dispatch(clearErrors()),
        // [TEST] recieve + clear modal errors 
        receiveErrors: () => dispatch(receiveErrors()),
        closeModal: () => { 
            dispatch(closeModal());
            dispatch(clearErrors());
        }
    }
}

export default connect(mSTP, mDTP)(EditTrackForm);