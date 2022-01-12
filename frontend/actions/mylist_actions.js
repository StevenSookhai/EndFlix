import * as MyListApiUtil from '../util/mylist_util'
import {receiveCurrentProfile} from './profile._actions'

export const RECEIVE_LISTS = "RECEIVE_LISTS"
export const RECEIVE_LIST = "RECEIVE_LIST"
export const REMOVE_LIST = "REMOVE_LIST "

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
const removeList = (listId) => {
    return {
        type: REMOVE_LIST,
        listId
    }
}

export const fetchlists = () => dispatch => MyListApiUtil.fetchlists()
    .then(lists => dispatch(receiveLists(lists)))

export const deleteMylist = (listId) => dispatch => MyListApiUtil.deleteMylist(listId)
    .then(listId => dispatch(removeList(listId)))

export const createListItem = (videoId, profileId) => dispatch =>
    MyListApiUtil.createListItem(videoId, profileId)
        .then(list => dispatch(receiveList(list)))