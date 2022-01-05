import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_CURRENT_PROFILE } from "../actions/session_actions"

const _nullSession = {
    id: null,
    currentProfile: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_CURRENT_PROFILE:
            nextState["currentProfile"] = action.currentProfile;
            return nextState
        default:
            return state;
    }
};

export default sessionReducer;