import { connect } from "react-redux";
import { fetchAllVideos } from "../../actions/video_actions";

import Genre from "./genre";

const MapStateToProps = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllVideos: videos => dispatch(fetchAllVideos(videos))
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(Genre)