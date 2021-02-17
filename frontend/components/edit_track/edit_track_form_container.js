import { connect } from 'react-redux';

import EditTrackForm from './edit_track_form';
import { fetchTrack, updateTrack, deleteTrack, receiveErrors, clearErrors } from '../../actions/track_actions'


const mSTP = (state, ownProps) => {
    return {
        track: ownProps.track,
        // [WORKS] Render Errors for edit
        errors: state.errors.trackErrors
    }
}

const mDTP = dispatch => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        updateTrack: track => dispatch(updateTrack(track)),
        deleteTrack: trackId => dispatch(deleteTrack(trackId)),
        // [WORKS] clear edit errors
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(EditTrackForm);