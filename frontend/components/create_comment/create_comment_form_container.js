import { connect } from 'react-redux';

import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_actions';


// [WORKS but janky?] fetch track (and new comment + comment author info) w it
import { fetchTrack } from '../../actions/track_actions';

// [TEST] clear comment errors
import { clearErrors } from '../../actions/comment_actions'


const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments,
        // [WORKS] pass down Track Show page's track id to create comment
        trackId: ownProps.trackId,

        // [TEST] render errors [NOTE - must change actions]
        errors: state.errors.trackErrors
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment)),
        fetchTrack: trackId => dispatch(fetchTrack(trackId)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(CreateCommentForm);
