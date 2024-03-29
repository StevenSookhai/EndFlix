import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import usersReducer from "./users_reducer";
import profileReducer from "./profile_reducer";
import videoReducer from "./video_reducer";
import myListReducer from "./mylist_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    profiles: profileReducer,
    videos: videoReducer,
    myList: myListReducer
});

export default entitiesReducer