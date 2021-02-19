export const fetchUser = userId => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "GET"
    });
};

// [TEST] update user (based on track_api_util.js)
export const updateUser = user => {
    return $.ajax({
        url: `/api/users/${user.get['user[id]']}`,
        method: "PATCH",
        data: user,
        contentType: false,
        processData: false
    })
}
