import { connect } from "react-redux";
import FeaturedMovie from "./featured_movie";

const mstp = (state) => ({
    video: state.entities.videos[11]
})


export default connect(mstp)(FeaturedMovie)