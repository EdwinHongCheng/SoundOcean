import { connect } from 'react-redux';

import ShowComments from './show_comments';
import { deleteComment } from '../../actions/comment_actions'

const mSTP = state => {
    return {
        // [TEST] want to return an array of comments
        trackComments: Object.values(state.entities.comments),
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        deleteComment: comment => dispatch(deleteComment(comment))
    }
}

export default connect(mSTP, mDTP)(ShowComments);
