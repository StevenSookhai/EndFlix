import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchPage from './search_page'

const mapStateToProps = (state, ownProps) => {
    return {
        videos: Object.values(state.entities.videos),
        searchInput: ownProps.match.params.q
        // video: state.entities.videos[ownProps.match.params.videoId]

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SearchPage))