import { connect } from "react-redux";
import MovieShowPage from "./movie_show_page";
import { fetchAllVideos } from "../../actions/video_actions";

const mstp = (state, ownProps) => ({
    video: ownProps.video
})

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
}


export default connect(mstp, mapDispatchToProps)(MovieShowPage)