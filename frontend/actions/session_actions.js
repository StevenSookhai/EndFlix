import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE';

export const receiveCurrentUser = currentUser => {
    
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

export const receiveCurrentProfile = (currentProfile) => ({
    type: RECEIVE_CURRENT_PROFILE,
    currentProfile
});


export const login = user => dispatch => SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const logout = () => dispatch => SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const signup = user => dispatch => SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const findProfile = profile => dispatch => SessionApiUtil.findProfile(profile)
    .then(profile => dispatch(receiveCurrentProfile(profile)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));