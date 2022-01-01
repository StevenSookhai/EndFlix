import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const receiveCurrentUser = currentUser => {
    // debugger
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const login = user => dispatch => SessionApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)), () => console.log("Not getting user"));

export const logout = () => dispatch => SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch => SessionApiUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)));