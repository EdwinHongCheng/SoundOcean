import { connect } from 'react-redux';
import EditTrackForm from './edit_track_form';
import { fetchTrack, updateTrack, deleteTrack } from '../../actions/track_actions'


const mSTP = (state, ownProps) => {
    return {
        track: ownProps.track
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