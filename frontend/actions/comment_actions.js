import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


//----------------------------------------------------------------------------->
// [WORKS] - want to clear global State's comments every time i leave a show page
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

// [OLD + GOOD] Thunk Action Creators (old way, doesn't render errors tho)
// - can use over [NEW] way

// export const createComment = comment => dispatch => {
//     return CommentApiUtil.createComment(comment)
//         .then(comment => dispatch(receiveComment(comment)))
// }


//----------------------------------------------------------------------------->
// [NEW] [WORKS] render "track" errors when writing comments
// - Creates Comment + Render Errors

// [NOTE] NOT DRY CODE - also in track_actions
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const createComment = comment => dispatch => {
    return CommentApiUtil.createComment(comment)
        .then(comment => { dispatch(receiveComment(comment)); dispatch(clearErrors()) },
            err => dispatch(receiveErrors(err.responseJSON)))
}
//----------------------------------------------------------------------------->



// [OLD + GOOD]
export const deleteComment = commentId => dispatch => {
    return CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
}
