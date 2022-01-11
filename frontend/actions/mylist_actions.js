import * as MyListApiUtil from '../util/mylist_util'
import {receiveCurrentProfile} from './profile._actions'

export const RECEIVE_LISTS = "RECEIVE_LISTS"
export const RECEIVE_LIST = "RECEIVE_LIST"

const receiveLists = (lists) => {
    return{
        type: RECEIVE_LISTS,
        lists
    }
}
const receiveList = (list) => {
    return {
        type: RECEIVE_LIST,
        list
    }
}

export const fetchlists = () => dispatch => MyListApiUtil.fetchlists()
    .then(lists => dispatch(receiveLists(lists)))

export const createListItem = (videoId, profileId) => dispatch =>
    MyListApiUtil.createListItem(videoId, profileId)
        .then(list => dispatch(receiveList(list)))