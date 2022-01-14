import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS , CLEAR_ERRORS} from "../actions/session_actions";
const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign([], state, [])
        case RECEIVE_SESSION_ERRORS:
            return Object.assign([], state, action.errors)
        case CLEAR_ERRORS:
            return []
        default:
            return state
    }
}

export default sessionErrorsReducer;