import { connect } from 'react-redux';

import { createTrack, fetchTrack } from '../../actions/track_actions';
import CreateTrackForm from './create_track_form';

// mSTP = mapStateToProps, mDTP = mapDispatchToProps

const mSTP = state => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        tracks: state.entities.tracks,
        formType: 'Create Track',
    }
}

const mDTP = dispatch => {
    return {
        createTrack: track => dispatch(createTrack(track)),
        fetchTrack: trackId => dispatch(fetchTrack(trackId))
    }
}

export default connect(mSTP, mDTP)(CreateTrackForm);
