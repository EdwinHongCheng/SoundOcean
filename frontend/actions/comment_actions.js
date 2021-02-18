import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


//----------------------------------------------------------------------------->
// [TEST] - want to clear global State's comments every time i leave a show page
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const clearComments = () => {
    return {
        type: CLEAR_COMMENTS
    }
}
//----------------------------------------------------------------------------->


// Action Creators
const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
}

// Thunk Action Creators
export const createComment = comment => dispatch => {
    return CommentApiUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
}

export const deleteComment = commentId => dispatch => {
    return CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
}
