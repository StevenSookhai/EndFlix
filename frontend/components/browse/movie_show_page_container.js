import { connect } from "react-redux";
import MovieShowPage from "./movie_show_page";
import { fetchAllVideos } from "../../actions/video_actions";
import { createListItem, fetchlists, deleteMylist} from '../../actions/mylist_actions'

const mstp = (state, ownProps) => ({
    video: ownProps.video,
    currentProfile: state.session.currentProfile,
    lists: state.entities.myList
})

const mapDispatchToProps = (dispatch) => {
    return{
        createListItem: (movieId, profileId) => dispatch(createListItem(movieId, profileId)),
        fetchlists: lists => dispatch(fetchlists(lists)),
        deleteMylist: listId => dispatch(deleteMylist(listId))

    }
}


export default connect(mstp, mapDispatchToProps)(MovieShowPage)