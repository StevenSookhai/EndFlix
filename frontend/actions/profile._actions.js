import * as ProfileUtil from '../util/profile_util'

export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS'
export const REMOVE_PROFILE = 'REMOVE_PROFILE'
export const RECEIVE_CURRENT_PROFILE = "RECEIVE_CURRENT_PROFILE"

const receiveProfiles = (profiles) => {
    return {
        type: RECEIVE_PROFILES,
        profiles
    }
}
const receiveProfile = (profile) => {
    return {
        type: RECEIVE_PROFILE,
        profile
    }
}

const removeProfile = (profile) => {
    return {
        type: REMOVE_PROFILE,
        profile
    }
}
export const receiveProfileErrors = errors => ({
    type: RECEIVE_PROFILE_ERRORS,
    errors
});

export const receiveCurrentProfile = profileId => {
    return{
        type: RECEIVE_CURRENT_PROFILE,
        profileId
    }
}

export const createProfile = (profile) => dispatch => ProfileUtil.createProfile(profile)
    .then(profile => dispatch(receiveProfile(profile)))

export const updateProfile = (profile) => dispatch => ProfileUtil.updateProfile(profile)
    .then(profile => dispatch(receiveProfile(profile)))

export const deleteProfile = (profile) => dispatch => ProfileUtil.deleteProfile(profile)
    .then(profile => dispatch(removeProfile(profile)))

export const fetchProfiles = () => dispatch => ProfileUtil.fetchProfiles()
    .then(profiles => dispatch(receiveProfiles(profiles)))