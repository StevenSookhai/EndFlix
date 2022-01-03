import { RECEIVE_PROFILES, RECEIVE_PROFILE, REMOVE_PROFILE} from "../actions/profile._actions";

const ProfileReducer = (state = {}, action) => {
    
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_PROFILES:
            return action.profiles 
        case RECEIVE_PROFILE: 
            nextState[action.profile.id] = action.profile
            return nextState
        case REMOVE_PROFILE:
            delete nextState[action.profile.id] 
            return nextState
        default:
            return state;
    }
}

export default ProfileReducer; 