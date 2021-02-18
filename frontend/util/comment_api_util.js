// NOTE: why do we nest data?
export const createComment = comment => {
    return $.ajax({
        url: '/api/comments',
        method: "POST",
        data: { comment }

    })
}

export const deleteCommnet = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: "DELETE"
    })
}
