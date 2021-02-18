import { RECEIVE_COMMENT, REMOVE_COMMENT, CLEAR_COMMENTS } from '../actions/comment_actions'

import { RECEIVE_TRACK } from '../actions/track_actions'

const CommentsReducer = (oldState = {}, action) => {
    
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            nextState[action.comment.comment.id] = action.comment.comment;
            return nextState;

        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;

        case RECEIVE_TRACK:
            return Object.assign({}, action.track.comments);

        // [TEST] clear comments from global state
        case CLEAR_COMMENTS:
            return {};

        default:
            return oldState;
    }
}

export default CommentsReducer;
