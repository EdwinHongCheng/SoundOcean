import { connect } from 'react-redux';

import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_actions';

// [NOTE] fetch track (and new comment + comment author info) w it
import { fetchTrack } from '../../actions/track_actions';
import { clearErrors } from '../../actions/comment_actions'


const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments,
        // pass down Track Show page's track id to create comment
        trackId: ownProps.trackId,
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
