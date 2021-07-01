import { connect } from 'react-redux';

import EditTrackForm from './edit_track_form';
import { fetchTrack, updateTrack, receiveErrors, clearErrors } from '../../actions/track_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return {
        track: state.entities.tracks[ownProps.trackToEditId],
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.trackErrors,
    }
}

const mDTP = dispatch => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        updateTrack: track => dispatch(updateTrack(track)),
        clearErrors: () => dispatch(clearErrors()),
        receiveErrors: () => dispatch(receiveErrors()),
        closeModal: () => { 
            dispatch(closeModal());
            dispatch(clearErrors());
        }
    }
}

export default connect(mSTP, mDTP)(EditTrackForm);