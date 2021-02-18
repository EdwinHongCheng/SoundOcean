import { connect } from 'react-redux';

import CreateCommentForm from './create_comment_form';
import { createComment } from '../../actions/comment_actions';


// [TEST] pass down Track Show page's track id to create comment
const mSTP = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments,
        // [TEST] pass down Track Show page's track id to create comment
        trackId: ownProps.trackId
    }
}

const mDTP = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    }
}

export default connect(mSTP, mDTP)(CreateCommentForm);
