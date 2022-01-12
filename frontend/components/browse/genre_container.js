import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/video_actions";
import { createListItem, fetchlists, deleteMylist } from '../../actions/mylist_actions'


import Genre from "./genre";

const MapStateToProps = (state, ownProps) => {
    return {
        video: ownProps.video,
        videos: Object.values(state.entities.videos),
        lists: state.entities.myList,
        currentProfile: state.session.currentProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllVideos: videos => dispatch(fetchAllVideos(videos)),
        createListItem: (movieId, profileId) => dispatch(createListItem(movieId, profileId)),
        fetchlists: lists => dispatch(fetchlists(lists)),
        deleteMylist: listId => dispatch(deleteMylist(listId))
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(Genre)