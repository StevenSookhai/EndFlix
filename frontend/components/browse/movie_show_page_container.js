import { connect } from "react-redux";
import MovieShowPage from "./movie_show_page";

const mstp = (state) => ({
    video: state.entities.videos[11]
})


export default connect(mstp)(MovieShowPage)