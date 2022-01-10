import { connect } from "react-redux";
import VideoWatchPage from './video_watch_page'
import { fetchAllVideos } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        video: state.entities.videos[ownProps.match.params.videoId],
        // handlePlay: ownProps.handlePlay
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllVideos: videos => dispatch(fetchAllVideos(videos)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoWatchPage)