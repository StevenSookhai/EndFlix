import { RECEIVE_PROFILE  } from "../actions/profile._actions";
import { RECEIVE_LISTS, RECEIVE_LIST} from '../actions/mylist_actions'
const myListReducer = (state = {}, action) => {

    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_LISTS:
            return action.lists
        case RECEIVE_LIST:
            nextState[action.list.id] = action.list
            return nextState
        default:
            return state;
    }
}

export default myListReducer; 