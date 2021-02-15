import { connect } from 'react-redux';
import { fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions';
import EditTrackForm from './edit_track_form'

const mSTP = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        updateTrack: track => dispatch(updateTrack(track)),
        deleteTrack: trackId => dispatch(deleteTrack(trackId))
    }
}

export default connect(mSTP, mDTP)(EditTrackForm);
