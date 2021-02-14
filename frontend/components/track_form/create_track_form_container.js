import { connect } from 'react-redux';

import { createTrack, fetchTrack } from '../../actions/track_actions';
import CreateTrackForm from './create_track_form';

// Test - rendering Upload errors (dont think i need here tho tbh)
import { receiveErrors } from '../../actions/session_actions'

// mSTP = mapStateToProps, mDTP = mapDispatchToProps

const mSTP = state => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        tracks: state.entities.tracks,
        formType: 'Create Track',
        // Test - upload errors?
        errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return {
        createTrack: track => dispatch(createTrack(track)),
        fetchTrack: trackId => dispatch(fetchTrack(trackId))
    }
}

export default connect(mSTP, mDTP)(CreateTrackForm);
