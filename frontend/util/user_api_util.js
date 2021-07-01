export const fetchUser = userId => {
    return $.ajax({
        url: `/api/users/${userId}`,
        method: "GET"
    });
};


export const updateUser = user => {
    return $.ajax({
        url: `/api/users/${user.get['user[id]']}`,
        method: "PATCH",
        data: user,
        contentType: false,
        processData: false
    })
}
