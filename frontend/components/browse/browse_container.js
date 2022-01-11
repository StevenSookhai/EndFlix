import { connect } from "react-redux";
import Browse from "./browse";
import { receiveCurrentProfile } from "../../actions/profile._actions";
import { logout } from "../../util/session_api_util";
import { fetchAllVideos } from "../../actions/video_actions";
import { createListItem, fetchlists } from '../../actions/mylist_actions'

const mapStateToProps = (state) => {
    return {
        currentProfile: state.session.currentProfile 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout()),
        fetchAllVideos: videos => dispatch(fetchAllVideos(videos)),
        fetchlists: lists => dispatch(fetchlists(lists))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)