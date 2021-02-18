import { connect } from 'react-redux';

import CreateTrackForm from './create_track_form';
import { createTrack, fetchTrack, clearErrors } from '../../actions/track_actions';


// mSTP = mapStateToProps, mDTP = mapDispatchToProps

const mSTP = state => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        tracks: state.entities.tracks,
        errors: state.errors.trackErrors
    }
}

const mDTP = dispatch => {
    return {
        createTrack: track => dispatch(createTrack(track)),
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(CreateTrackForm);
