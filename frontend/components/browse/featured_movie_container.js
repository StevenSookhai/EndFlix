import { connect } from "react-redux";
import FeaturedMovie from "./featured_movie";
import { withRouter } from "react-router-dom";

const mstp = (state) => {
    // debugger
    // const rndInt = Math.floor(Math.random() * Object.values(state.entities.videos).length - 1) + 0
    return{
        video: state.entities.videos[1]
    }
}


export default withRouter(connect(mstp)(FeaturedMovie))