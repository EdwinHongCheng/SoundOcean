import * as UserApiUtil from '../util/user_api_util';

// Action Constant
export const RECEIVE_USER = 'RECEIVE_USER';

// Action Creator
const receiveUser = user => {
    return ({
        type: RECEIVE_USER,
        user
    })
}

// Thunk Action Creators
export const fetchUser = userId => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

export const updateUser = user => dispatch => {
    return UserApiUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
}
